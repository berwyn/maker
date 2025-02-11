<template>
	<div
		:class="[
			$s.ProgressBarContainer,
			$s[`size_${size}`],
			$s[`shape_${shape}`],
		]"
	>
		<div
			:class="$s.ProgressBar"
			:style="barStyles"
		/>
	</div>
</template>

<script>
import chroma from 'chroma-js';

const MIN_PROGRESS = 0;
const MAX_PROGRESS = 100;

export default {
	name: 'ProgressBar',

	props: {
		/**
		 * Size (height) of the progress bar
		 */
		size: {
			type: String,
			default: 'medium',
			validator: (size) => ['xsmall', 'small', 'medium', 'large'].includes(size),
		},
		/**
		 * Shape of the progress bar
		 */
		shape: {
			type: String,
			default: 'rounded',
			validator: (shape) => ['squared', 'rounded', 'pill'].includes(shape),
		},
		/**
		 * Color of the progress bar (not background)
		 */
		color: {
			type: String,
			default: '#000',
			validator: (color) => chroma.valid(color),
		},
		/**
		 * Progress/width of the bar (0-100)
		 */
		progress: {
			type: Number,
			default: 0,
			validator: (progress) => progress >= MIN_PROGRESS && progress <= MAX_PROGRESS,
		},
	},

	computed: {
		barStyles() {
			return {
				'--bar-color': this.color,
				'--fill-percent': `${this.progress}%`,
			};
		},
	},
};
</script>

<style module="$s">
.ProgressBarContainer {
	width: 100%;
	overflow: hidden;
	background-color: #f5f4f4;
}

.ProgressBar {
	width: var(--fill-percent, 0);
	height: 100%;
	background-color: var(--bar-color);
	transition: width 100ms linear;
}

.ProgressBarContainer.size_xsmall {
	height: 4px;
}

.ProgressBarContainer.size_small {
	height: 8px;
}

.ProgressBarContainer.size_medium {
	height: 12px;
}

.ProgressBarContainer.size_large {
	height: 16px;
}

.ProgressBarContainer.shape_squared,
.ProgressBarContainer.shape_squared .ProgressBar {
	border-radius: 0;
}

.ProgressBarContainer.shape_rounded,
.ProgressBarContainer.shape_rounded .ProgressBar,
.ProgressBarContainer.shape_pill,
.ProgressBarContainer.shape_pill .ProgressBar {
	border-radius: 16px;
}
</style>
