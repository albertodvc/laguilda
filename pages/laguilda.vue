<template>
	<section>
		<h2>laGuilda</h2>
		<p class="presentation">{{ presentation }}</p>
		<profiles/>
	</section>
</template>

<style lang="scss" scoped>

	@import "variables";

	.presentation {
		color: $white;
		padding: 3.5%;
		white-space: pre-wrap;
		line-height: $body-line-height;
	}

</style>

<script>

	import Profiles from '~/components/Profiles/Profiles.vue'
	import LaGuilda from '~/db/laguilda'

	export default {
		components: {
			Profiles
		},
		data: function() {
			return {
				presentation: LaGuilda.presentation
			}
		}
	}
</script>
