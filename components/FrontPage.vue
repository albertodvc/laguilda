<template>
	<div class="fronti">
		<youtube
			:video-id="videoID"
			:player-vars="playerVars"/>
	</div>
</template>

<style lang="scss" scoped>

</style>

<script>

import data from '../db/off-limits'

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
