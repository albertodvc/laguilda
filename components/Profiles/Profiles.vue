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

		@include breakpoint(889px) {
			display: flex;
			flex-flow: row wrap;
			align-content: space-between;
			background: $black;
			// // height: 100%;

			// position: relative;
			// //background-image: url('img/1.jpg');
			li {
				//flex-grow: 1;
				width: 50%;
				background: $main-color-alt;
				border: 2px solid $black;
			}
		}

		@include breakpoint(1040px) {
			li {
				width: 33%;
			}
		}

		@include breakpoint(1378px) {
			li {
				width: 25%;
			}
		}
	}

</style>

<script>

import LaGuilda from '~/db/laguilda'
import Profile from './Profile'

export default {
	components: {
		Profile
	},
	data: function () {
		return {
			profiles: LaGuilda.bio,
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
