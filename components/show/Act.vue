<template>
	<div class="act">
		<div class="info">
			<h2 class="title">{{ act.title }}</h2>
			<div class="description">{{ act.shortDesc }}</div>
		</div>
		<div class="video">
			<youtube
				:video-id="act.videoId"
				:player-vars="playerVars"/>
		</div>
		peste del culo
	</div>
</template>

<style lang="scss" scoped>

	.act {
		display: grid;
	}

</style>

<script>
	import Vue from 'vue'
    import VueYoutube from 'vue-youtube'

    Vue.use(VueYoutube)

	import data from '~/db/off-limits'

	export default {
		props: ['act'],
		data: function () {
			return {
				playerVars: {
					modestbranding: 1,
					showinfo: 0,
				},
				videos: data.acts
			}
		}
	}

</script>
