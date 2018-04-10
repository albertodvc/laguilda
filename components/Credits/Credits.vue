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

	.credits {
		list-style: none;
		width: 100%;
		padding: 100px 0;
	}

	.credit {
		color: black;
		text-shadow: 1px 1px 1px white;
		@extend %heading;
		width: 100%;
		margin-bottom: 15px;

		.key,
		.value {
			display: inline-block;
			vertical-align: top;
		}

		.key {
			width: 50%;
			text-align: right;
			padding: 0 20px;
		}
		.value {
			width: 50%;
			padding: 0 20px;
		}
	}

</style>

