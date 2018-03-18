<template>
	<section>
		<h2>Rider Técnico</h2>
		<rider/>
	</section>
</template>

<style lang="scss" scoped>

	@import "variables";
	@import "helpers";

	section {
		padding: 0 $fluid-margin;
	}

</style>


<script>

	import Rider from '~/components/Rider/Rider.vue'

	export default {
		components: {
			Rider
		}
	}
</script>
