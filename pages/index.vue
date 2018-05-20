<template>
	<div>
		<front-page/>
		<presentation/>
		<quotes/>
		<credits/>
	</div>
</template>

<script>

	import Vue from 'vue'
	import VueYoutube from 'vue-youtube'

	Vue.use(VueYoutube)

	import FrontPage from '~/components/FrontPage/FrontPage.vue'
	import Presentation from '~/components/Presentation/Presentation.vue'
	import Quotes from '~/components/Quotes/Quotes.vue'
	import Credits from '~/components/Credits/Credits'

	export default {
		components: {
			FrontPage,
			Presentation,
			Quotes,
			Credits
		}
	}
</script>
