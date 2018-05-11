<template>
    <ul class="acts">
        <li v-for="(act, index) in acts" :key="act.videoId">
            <act :act="act" :idx="index"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

	.acts {
		margin: 0;
		padding: 0;
		list-style: none;
	}

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
