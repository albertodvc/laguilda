<template>
	<div class="act" :class="{odd: idx%2}">
		<div class="info">
			<header>
				<h2 class="title">{{ act.title }}</h2>
				<p class="subtitle">{{ act.subtitle }}</p>
			</header>
			<div class="description">{{ act.shortDesc }}</div>
		</div>
		<div class="video-container">
			<div class="video-placeholder"
				:class="{ playing: playing }"
				:style="{'background-image': `url('img/${idx+1}.jpg')`}">
				<play-button
					class="video-play-button"
					:class="{ playing: playing }"
					v-show="ready"
					@click.native="playVideo">
				</play-button>
			</div>

			<div class="video"
				:class="{ playing: playing }">
				<youtube
					:video-id="act.videoId"
					:player-vars="playerVars"
					ref="youtube"
					width="100%"
					height="100%"
					@ready="ready = true"
					@ended="playing = false"/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

	@import 'variables';
	@import 'helpers';

	$act__description--font-size: 14px;
	$act__info--base-padding: $global-spacing;
	$act__info--fluid-margin: $fluid-margin;
	$act__play-transition-duration: $short-transition-duration;
	$act__border-color: $main-color-alt;

	.act {

		.subtitle {
			@extend %subheading;
		}

		.info {
			padding: $act__info--base-padding $act__info--fluid-margin;
		}

		// .description {
		// 	font-weight: 300;
		// 	font-size: $act__description--font-size;
		// }

		.video-container {
			position: relative;
			@include aspect-ratio(16, 9);

			.video-placeholder {
				opacity: 1;
				@extend %cover-parent;
				background-size: cover;
				background-repeat: no-repeat;
				z-index: 1;
				display: flex;
				justify-content: center;
				align-items: center;





				&.playing {
					transition: opacity $act__play-transition-duration ease-in-out;
					opacity: 0;
				}
			}

			.video-play-button {

				transform: scale(1);

				&.playing {
					transition: transform $act__play-transition-duration ease-in-out;
					transform: scale(10);
				}
			}

			.video {
				@extend %cover-parent;
				z-index: -1;

				&.playing {
					z-index: 2
				}
			}
		}

		@include breakpoint(768px) {

			border-bottom: 20px solid $act__border-color;
			position: relative;
			overflow: hidden;

			.info {
				position: absolute;
				z-index: 2;
				color: white;
				width:50%;
			}

			// .video-container {
			// 	position: static;
			// }
			.video-container {
				.video-placeholder {
					justify-content: flex-end;

					.video-play-button {
						margin-right: 25%;
					}

					&:before {
						@include cover-parent;
						content: '';
						display: block;
						background: linear-gradient(to left, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 30%, rgba(0,0,0,1));
					}
				}
			}

			&.odd {
				.info {
					right: 0;
				}

				.video-container {
					.video-placeholder {
						justify-content: flex-start;

						.video-play-button {
							margin-left: 25%;
						}

						&:before {
							background: linear-gradient(to right, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 30%, rgba(0,0,0,1));
						}
					}
				}
			}
		}
	}

</style>

<script>
	import Vue from 'vue'
	import VueYoutube from 'vue-youtube'
	import PlayButton from '~/components/PlayButton/PlayButton.vue'

	Vue.use(VueYoutube)

	export default {
		props: ['act', 'idx'],
		components: {
			PlayButton
		},
		computed: {
			player () {
				console.log('this is ', this)
				return this.$refs.youtube.player
			}
		},
		methods: {
			playVideo() {
				this.playing = true;
				this.player.playVideo()
			},
			notify(notice) {
				console.log('notify', notice)
			}
		},
		data: function () {
			return {
				playerVars: {
					modestbranding: 1,
					showinfo: 0,
				},
				ready: false,
				playing: false,
				paused: false,
				ended: true
			}
		}
	}

</script>
