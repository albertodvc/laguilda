<template>
    <ul class="profiles">
        <li v-for="profile in profiles" :key="profile.name">
            <profile :profile="profile"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

	@import "variables";

	.profiles {
		background: $white;
		margin-bottom: 0;
		padding: 20px $fluid-margin;
	}

</style>

<script>

import Profiles from '~/db/bio'
import Profile from './Profile'

export default {
    components: {
        Profile
    },
	data: function () {
		return {
			profiles: Profiles
		}
	}
}
</script>
