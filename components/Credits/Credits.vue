<script>

	import Credits from '~/db/credits'

	export default {
		data: function () {
			return {
				credits: Credits
			}
		}
	}
</script>

<template>
	<ul class="credits">
		<li class="credit" v-for="credit in credits" :key="credit.key">
			<span class="key">{{ credit.key }}</span>
			<span class="value">{{ credit.value }}</span>
		</li>
	</ul>
</template>

<style lang="scss" scoped>

	@import "variables";

	$credit-font-color: $white;
	$credit-font-size-s: $body-text--font-size;
	$credit-font-size-m: $heading--font-size;
	$role-font-color: $orange;

	.credits {
		list-style: none;
		width: 100%;
		padding: 100px 0;
		background: rgba($black, 0.7);
		margin: 0;
	}

	.credit {
		color: $credit-font-color;
		@extend %heading;
		font-size: $credit-font-size-s;
		width: 100%;
		margin-bottom: 15px;

		@media (min-width: 652px) {
			font-size: $credit-font-size-m;
		}

		.key,
		.value {
			display: inline-block;
			vertical-align: top;
			padding: 0 $global-spacing;

			@media (min-width: 652px) {
				padding: 0 $global-spacing * 2;

			}
		}

		.key {
			width: 50%;
			text-align: right;
			color: $role-font-color;
		}
		.value {
			width: 50%;
		}
	}

</style>

