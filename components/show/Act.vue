<template>
	<div class="act" :id="'id-'+idx" :class="{odd: idx%2}">
		<div class="info">
			<header>
				<h2 class="title">{{ act.title }}</h2>
				<p class="subtitle" :v-if="act.subtitle">{{ act.subtitle }}</p>
			</header>
			<div class="description">{{ act.shortDesc }}</div>
			<div class="video-play-button-container">
				<play-button
					class="video-play-button"
					:class="{ playing: playing }"
					v-show="ready"
					@click.native="playVideo">
				</play-button>
			</div>
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
				:class="{ playing: playing, 'init-playing': initPlaying }">
				<youtube
					:video-id="act.videoId"
					:player-vars="playerVars"
					ref="youtube"
					width="100%"
					height="100%"
					@ready="ready = true"
					@ended="playing = false; initPlaying = false;"
					@playing="initPlaying = true"/>
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
	$act__play-transition-duration: 0.2s;//$short-transition-duration;
	$act__border-color: $main-color-alt;

	.title {
			margin: 13% 0;
	}

	// .subtitle {
	// 	@extend %subheading;
	// 	color: $dimed-white-1;
	// }

	.description {
		color: $dimed-white-1;
	}

	.info {
		padding: $act__info--base-padding $act__info--fluid-margin;
		color: $white;
		background: $black;

		.video-play-button {
			display: none;
		}
	}

	.video-play-button {

		transform: scale(1);
		opacity: 1;

		&.playing {
			transition: all $act__play-transition-duration ease-in-out;
			transform: scale(10);
			opacity: 0;
		}
	}

	.video-container {
		position: relative;
		overflow: hidden;
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

			&:before {
				@include cover-parent;
				content: '';
				display: block;
				background: linear-gradient(to top, rgba($black,0), rgba($black,0) 60%, rgba($black,1));
				opacity: 1;
			}

			&.playing,
			&.playing:before {
				transition: opacity $act__play-transition-duration * 2 ease-in-out;
				opacity: 0;
			}
		}

		.video {
			@extend %cover-parent;
			z-index: -1;
			opacity: 0;

			&:before {
				@include cover-parent;
				content: '';
				display: block;
				background: $black;
				z-index: 1;
			}

			&.playing {
				transition: opacity $act__play-transition-duration * 2 ease-in-out;
				z-index: 2;
				opacity: 1;
			}

			&.init-playing {
				&:before {
					z-index: -1
				}

			}
		}
	}

	@include breakpoint(768px) {


		.info {
			position: absolute;
			z-index: 2;
			background: transparent;
			width: 54%;
			height: 100%;
			padding-top: 0;
			padding-bottom: 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			header,
			.description {
				flex-shrink: 0;
			}

			.description {
				flex-grow: 0;
			}

			.video-play-button-container {
				flex-grow: 11;
				display: flex;
				align-items: center;
			}

			.video-play-button {
				display: block;
			}
		}

		.video-container {
			.video-placeholder {
			//justify-content: flex-end;

				.video-play-button {
					display: none;
					//margin-right: 19%;
					// opacity: 0;
					// transform: scale(10);
				}

				// &:hover {
				// 	.video-play-button {
				// 		transition: all $act__play-transition-duration ease-in-out;
				// 		transform: scale(1);
				// 		opacity: 1;
				// 	}
				// }

				&:before {
					@include cover-parent;
					content: '';
					display: block;
					background: linear-gradient(to left, rgba($black, 0), rgba($black, 0.8) 60%, rgba($black, 0.98) 75%, rgba($black, 1));
				}
			}
		}

		.act {
			position: relative;
			overflow: hidden;



			&.odd {
				.info {
					right: 0;

					.video-play-button-container {
						justify-content: flex-end;
					}

					.title,
					.subtitle,
					.description {
						text-align: right;
					}
				}

				.video-container {
					.video-placeholder {
						//justify-content: flex-start;

						.video-play-button {
							//margin-left: 19%;
						}

						&:before {
							background: linear-gradient(to right, rgba($black, 0), rgba($black, 0.8) 50%, rgba($black, 1) 80%, rgba($black, 1));
						}
					}
				}
			}
		}
	}

	@include breakpoint-range(768px, 1067px) {
		#id-7 {
			.info .title {
				font-size: 43px;
			}
		}
	}

	@include breakpoint(1067px) {
		.info {
			width: 45%;
			padding:
				$act__info--base-padding
				0
				$act__info--base-padding
				$act__info--fluid-margin;

			.video-play-button {
				display: none;
			}
		}

		.video-container {
			.video-placeholder {
				.video-play-button {
					display: block;
				}
			}
		}



		.act {

			&.odd {
				.info {
					padding:
						$act__info--base-padding
						$act__info--fluid-margin
						$act__info--base-padding
						0;
				}
			}
		}
	}

	@include breakpoint(1380px) {
		.info {
			.title {
				font-size: 100px !important;
			}
		}
		.video-play-button {
			width: 150px !important;
			height: 150px !important;
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
					poster: 'img/10.jpg'
				},
				ready: false,
				playing: false,
				initPlaying: false,
				paused: false,
				ended: true
			}
		}
	}

</script>
