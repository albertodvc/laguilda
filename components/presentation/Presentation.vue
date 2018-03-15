<template>
	<section class="presentation">
		<p>{{ presentation }}</p>
	</section>
</template>

<style lang="scss" scoped>

	$presentation--fluid-margin: 5%;

	.presentation {
		background: white;
		padding: 50px $presentation--fluid-margin;

		p {
			font-size: 20px;
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
