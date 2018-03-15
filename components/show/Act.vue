<template>
	<div class="act">
		<div class="info">
			<h2 class="title">{{ act.title }}</h2>
			<p class="subtitle">{{ act.subtitle }}</p>
			<div class="description">{{ act.shortDesc }}</div>
		</div>
		<div class="video-container">
			<button class="play">play</button>
			<div class="video">
				<youtube
					:video-id="act.videoId"
					:player-vars="playerVars"
					width="100%"
					height="100%"/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

	@import 'helpers';

	$act__description--font-size: 14px;
	$act__info--base-padding: 10px;
	$act__info--fluid-margin: 5%;

	.info {
		padding: $act__info--base-padding $act__info--fluid-margin;
	}

	.description {
		font-weight: 300;
		font-size: $act__description--font-size;
	}

	.video-container {
		position: relative;
		@include aspect-ratio(16, 9);

		.video {
			@extend %cover-parent;
		}
	}



</style>

<script>
	import Vue from 'vue'
    import VueYoutube from 'vue-youtube'

    Vue.use(VueYoutube)

	export default {
		props: ['act'],
		data: function () {
			return {
				playerVars: {
					modestbranding: 1,
					showinfo: 0,
				}
			}
		}
	}

</script>
