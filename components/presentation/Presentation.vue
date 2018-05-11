<template>
	<section class="presentation">
		<p>{{ presentation }}</p>
	</section>
</template>

<style lang="scss" scoped>

	@import "variables";

	$presentation--fluid-margin: $fluid-margin;
	$presentation--top-padding: 50px;
	$presentation--font-size: 20px;

	.presentation {
		background: $white;
		padding: $presentation--top-padding $presentation--fluid-margin;

		p {
			font-size: $presentation--font-size;
		}
	}

</style>

<script>

import data from '~/db/off-limits'

export default {
	data: function () {
		return {
			presentation: data.presentation
		}
	}
}
</script>
