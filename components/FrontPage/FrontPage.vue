<template>
	<header id="container" class="front-video" v-fit-to-viewport :class="{playing: playing}">
		<svg id="offlimits-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
			<defs>
				<mask id="vmask" x="0" y="0" width="100%" height="100%" >
					<rect id="rotular" x="0" y="0" width="100%" height="100%"/>
					<text id="off" x="50%" y="61%">OFFLIMITS</text>
					<text id="laguilda" x="50%" y="70%">laGuilda Obscénica</text>
				</mask>
			</defs>
			<rect id="maestro" x="0" y="0" width="100%" height="100%"/>
		</svg>
		<play-button
			class="video-play-button"
			:class="{ playing: playing }"
			v-show="ready"
			@click.native="playVideo">
		</play-button>
		<div class="intro-video-container"
			:class="{ playing: playing, 'init-playing': initPlaying }">
			<youtube
				:video-id="video"
				:player-vars="playerVars"
				ref="youtube"
				width="100%"
				height="100%"
				@ready="ready = true"
				@ended="playing = false; initPlaying = false;"
				@playing="initPlaying = true"/>
		</div>
		<div class="video-container">
			<video id="video" autoplay muted preload loop playsinline>
				<source src="./bg.mp4" type="video/mp4">
			</video>
		</div>
	</header>
</template>

<style lang="scss" scoped>

	@import "helpers";
	@import "variables";

	$play-button-size: 150px;
	$small-play-button-size: 105px;

	header {
		position: relative;
		@include aspect-ratio(16, 12);

		@include breakpoint(640px) {
			padding: 0;
			width: 100%;
		}
	}

	#off-limits {
		opacity: 1;
	}

	#off {
		font-size: 300px;
	}
	#laguilda {
		font-size: 90px;
		text-align: right;
	}

	svg {
		font-family: $brand-font;

		width: 100%;
		height: 100%;
		position:absolute;
	}
	svg text {
		text-anchor: middle;
		x: 22%;
	}
	svg mask rect {
		fill: rgba(255, 255, 255, 1);
	}
	svg {
		rect {
			fill: black;
			-webkit-mask: url(#vmask);
			mask: url(#vmask);
		}
	}

	.video-play-button {
		opacity: 1;
		transform: scale(1);
		position: absolute;
		width: $small-play-button-size !important;
		height: $small-play-button-size !important;
		top: calc(50% - #{$small-play-button-size / 2});
		left: calc(50% - #{$small-play-button-size / 2});

		@include breakpoint(640px) {
			top: calc(72% - #{$small-play-button-size / 2});
			// left: calc(50% - #{$play-button-size / 2});
			// width: $play-button-size !important;
			// height: $play-button-size !important;
		}
	}

	.video-container {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
		background: $main-color;
	}

	.intro-video-container {
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
			transition: opacity 0.4 * 2 ease-in-out;
			z-index: 2;
			opacity: 1;
		}

		&.init-playing {
			&:before {
				z-index: -1
			}

		}
	}

	video {
		position: absolute;
		top: 50%;
		left: 50%;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		overflow: hidden;
		transform: translate(-50%,-50%);
	}

	header.playing {
		#off-limits {
			opacity: 0;
			z-index: -1;
		}

		.video-play-button {
			opacity: 0;
		}

		.intro-video-container {
			opacity: 1;
			z-index: 2;
		}
	}

</style>

<script>

	import Vue from 'vue'
	import data from '~/db/off-limits'
	import Viewport from '~/helpers/viewport'
	import VueYoutube from 'vue-youtube'
	import PlayButton from '~/components/PlayButton/PlayButton.vue'

	Vue.use(VueYoutube)

	export default {
		props: ['act'],
		components: {
			PlayButton
		},
		data: function () {
			return {
				playerVars: {
					modestbranding: 1,
					showinfo: 0,
				},
				ready: false,
				playing: false,
				initPlaying: false,
				paused: false,
				ended: true,
				video: data.intro.videoId
			}
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
		directives: {
			fitToViewport: {
				inserted: function (el) {

					var offText = document.getElementById("off");
					var laguildaText = document.getElementById("laguilda");

					const breakpoint = 640;

					setHeight()
					window.addEventListener('resize', setHeight)

					function setHeight() {
						const fontSize = 300;
						const ratio = Viewport.width() / Viewport.height();
						const ratioBreakPoint = 1.3
						if (ratio > ratioBreakPoint) {
							el.classList.remove("narrow")
							offText.style.fontSize = fontSize
							console.log(1)
						} else {
							el.classList.add("narrow")
							offText.style.fontSize = fontSize * ratio / ratioBreakPoint + 'px';
							console.log(2)
						}
						if (Viewport.width() > breakpoint) {
							el.style.height = Viewport.height()+'px';
							offText.setAttribute('y', '50%');
							laguildaText.setAttribute('y', '60%');
							console.log('A')
						} else {
							el.style.height = null;
							offText.style.fontSize = fontSize
							offText.setAttribute('y', '61%');
							laguildaText.setAttribute('y', '70%');
							console.log('B')
						}
					}
				}
			}
		}
	}

</script>
