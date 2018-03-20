<template>
	<header id="container" class="front-video" v-fit-to-viewport>
		<svg id="offlimits-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
			<defs>
				<mask id="vmask" x="0" y="0" width="100%" height="100%" >
					<rect x="0" y="0" width="100%" height="100%"/>
					<text x="50%" y="60%">OFF LIMITS</text>
				</mask>
			</defs>
			<rect x="0" y="0" width="100%" height="100%"/>
		</svg>
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

	header {
		position: relative;
		@include aspect-ratio(16, 12);

		@include breakpoint(640px) {
			padding: 0;
			width: 100%;
		}
	}

	svg {
		font-family: $brand-font;
		font-size: 300px;
		width: 100%;
		height: 100%;
		position:absolute;
	}
	svg text {
		text-anchor: middle;
	}
	svg mask rect {
		fill: rgba(255, 255, 255, 1);
	}
	svg > rect {
		fill: black;
		-webkit-mask: url(#vmask);
		mask: url(#vmask);
	}

	.video-container {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
		background: red;
	}

	video{
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

</style>

<script>

	import data from '~/db/off-limits'
	import Viewport from '~/helpers/viewport'

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
		},
		directives: {
			fitToViewport: {
				inserted: function (el) {

					var text = document.getElementById("offlimits-text");

					const breakpoint = 640;

					setHeight()
					window.addEventListener('resize', setHeight)

					function setHeight() {
						const fontSize = 300;
						const ratio = Viewport.width() / Viewport.height();
						const ratioBreakPoint = 1.3
						if (ratio > ratioBreakPoint) {
							el.classList.remove("narrow")
							text.style.fontSize = fontSize
						} else {
							el.classList.add("narrow")
							text.style.fontSize = fontSize * ratio / ratioBreakPoint + 'px';
						}
						if (Viewport.width() > breakpoint) {
							el.style.height = Viewport.height()+'px';
						} else {
							el.style.height = null;
							text.style.fontSize = fontSize
						}
					}
				}
			}
		}
	}

</script>
