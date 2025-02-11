<script>
const DEFAULT_SIZE = 0;
const MIN_SIZE = -1;
const MAX_SIZE = 1;

/**
 * @inheritAttrs span
 * @inheritListeners span
 */
export default {
	inheritAttrs: false,

	props: {
		/**
		 * which HTML element to wrap the text with
		 */
		element: {
			type: String,
			default: 'p',
			validator: (element) => ['p', 'span', 'li'].includes(element),
		},
		/**
		 * size of text
		 */
		size: {
			type: Number,
			default: DEFAULT_SIZE,
			validator: (size) => size >= MIN_SIZE && size <= MAX_SIZE,
		},
	},

	computed: {
		stringSize() {
			const minNonNegativeSize = 0;
			if (this.size >= minNonNegativeSize) {
				return this.size.toString();
			}
			return `minus-${Math.abs(this.size)}`;
		},
	},

	render(createElement) {
		const { $s, stringSize, element } = this;
		/**
		 * @slot text content
		 */
		const defaultSlot = this.$slots.default;
		return createElement(element, {
			class: [$s.Paragraph, $s[`size_${stringSize}`]],
			attrs: this.$attrs,
			on: this.$listeners,
		}, defaultSlot);
	},
};
</script>

<style module="$s">
:root {
	--font-size-scale: 1.17;
	--font-size: 16px;
	--line-height: 1.5em;
	--line-height-scale: 0.95;
}

@media (--for-tablet-portrait-up) {
	:root {
		--font-size-scale: 1.28;
		--font-size: 16px;
	}
}

/* stylelint-disable-next-line no-duplicate-selectors */
:root {
	--font-step-minus-1-size: 14px;
	--font-step-minus-1-line-height: var(--line-height);
	--font-step-0-size: var(--font-size);
	--font-step-0-line-height: var(--line-height);
	--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));
	--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));
	--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */
}

.Paragraph {
	font-family: inherit;
}

.Paragraph.size_minus-1 {
	font-size: var(--font-step-minus-1-size);
	line-height: var(--font-step-minus-1-line-height);
}

.Paragraph.size_0 {
	font-size: var(--font-step-0-size);
	line-height: var(--font-step-0-line-height);
}

.Paragraph.size_1 {
	font-size: var(--font-step-1-size);
	line-height: var(--font-step-1-line-height);
}
</style>
