<template>
	<div
		class="wrapper"
		bg-color="#ccc"
	>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
				>
					Action long text that wraps with very long text that wraps
					with very long text that wraps with very long text that wraps
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
				>
					Action with text that wraps
					<template #information>
						Label with long text that wraps
					</template>
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					align="space-between"
				>
					Action with text that wraps
					<template #information>
						Label with long text that wraps
					</template>
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
					align="stack"
				>
					Action with text that stacks
					<template #information>
						Label with long text that stacks
					</template>
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="confirm"
					full-width
				>
					Action with text that wraps Action with text that wraps
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="confirm"
					full-width
				>
					Confirm
					<template #information>
						Label with longer text
					</template>
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="confirm"
					full-width
					align="space-between"
				>
					Confirm
					<template #information>
						Label
					</template>
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="action"
					color="#f6f6f6"
					full-width
				>
					Action
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
				>
					Confirm
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="action"
					color="#f6f6f6"
					full-width
				>
					Action text that will wrap
				</m-action-bar-button>
				<m-action-bar-button
					key="confirm"
					full-width
				>
					Confirm button that wraps
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					color="#f6f6f6"
				>
					<x-icon class="icon" />
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
		<div>
			<m-inline-action-bar>
				<m-action-bar-button
					key="close"
					full-width
					color="#f6f6f6"
				>
					<m-loading />
				</m-action-bar-button>
			</m-inline-action-bar>
		</div>
	</div>
</template>

<script>
import { MInlineActionBar, MActionBarButton } from '@square/maker/components/ActionBar';
import XIcon from '@square/maker-icons/X';
import { MLoading } from '@square/maker/components/Loading';

export default {
	components: {
		MInlineActionBar,
		MActionBarButton,
		XIcon,
		MLoading,
	},

	data() {
		return {
		};
	},
};
</script>

<style scoped>
.wrapper {
	max-width: 400px;
	margin: 0 auto;
	font-family: "Square Market", system-ui;
	background: #ccc;

	& > div {
		position: relative;
		height: 96px;
	}
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
