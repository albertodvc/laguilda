<template>
	<header id="container" class="front-video">
		<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
			<defs>
				<mask id="mask" x="0" y="0" width="100%" height="100%" >
				<rect x="0" y="0" width="100%" height="100%"/>
				<text x="50%" y="50%">OFF LIMITS</text>
				</mask>
			</defs>
			<rect x="0" y="0" width="100%" height="100%"/>
		</svg>
		<div class="video-container">
			<video id="video" autoplay="autoplay" muted="muted" preload="auto" loop="loop">
				<source src="./bg.mp4" type="video/mp4">
			</video>
		</div>
	</header>
</template>

<style lang="scss" scoped>

	header {
		height: 600px;
		position: relative;
	}

	svg {
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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
		-webkit-mask: url(#mask);
		mask: url(#mask);
	}

	.video-container {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%; 
		overflow: hidden;
		z-index: -1;
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
