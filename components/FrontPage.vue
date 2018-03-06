<template>
	<header class="front-video">
		<youtube
			class="front"
			width="100%"
			height="100%"
			:video-id="videoID"
			:player-vars="playerVars"/>
	</header>
</template>

<style lang="scss" scoped>

	.front-video {
		height: 700px;
	}

</style>

<script>

import data from '~/db/off-limits'

export default {
	data: function () {
		return {
			videoID: data.intro.videoId,
			playerVars: {
				modestbranding: 1,
				showinfo: 0,
				origin: 'localhost'
			}
		}
	}
}
</script>
