<template>
	<ul class="profiles">
		<li v-for="profile in profiles"
		:key="profile.name"
		@click="toggleExpanded(profile)">
			<profile :profile="profile" :expanded="activeProfile == profile.name"/>
		</li>
	</ul>
</template>

<style lang="scss" scoped>

	@import "variables";

	.profiles {
		background: $white;
		margin-bottom: 0;
		padding:0;
		list-style: none;

		@include breakpoint(769px) {
			display: flex;
			height: 100%;
		}
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
			profiles: Profiles,
			activeProfile: null
		}
	},
	methods: {
		toggleExpanded(profile) {
			this.activeProfile = (this.activeProfile == profile.name)? null : profile.name
		}
	}
}
</script>
