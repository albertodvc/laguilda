<template>
	<header id="container" class="front-video">
		<div id="gray"></div>
		<h1>OFF LIMITS</h1>
	</header>
</template>

<style lang="scss" scoped>

	#container, 
	#container h1 {
		background: url('./bg.jpg');
		height: 700px;
		width: 100%;
		background-size: cover;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}

	#container {
		position: relative;

		#gray {
			background: black;
			width: 100%;
			height: 100%;
		}

		h1 {
			font-size: 8em;
			position: absolute;
			top: 0;
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
		}
	}

</style>
