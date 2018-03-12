<template>
    <ul class="profiles">
        <li v-for="profile in profiles" :key="profile.name">
            <profile :profile="profile"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

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
