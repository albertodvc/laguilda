<template>
    <ul class="acts">
        <li v-for="act in acts" :key="act.videoId">
            <act :act="act"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
	
</style>

<script>

import Data from '~/db/off-limits'
import Act from './Act'

export default {
    components: {
        Act
    },
	data: function () {
		return {
			playerVars: {
				modestbranding: 1,
				showinfo: 0,
				origin: 'localhost'
			},
			acts: Data.acts
		}
	}
}
</script>
