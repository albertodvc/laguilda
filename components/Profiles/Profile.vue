<template>
	<div class="profile"
		:class="{expanded: expanded}">
		<h3 class="name" :class="{expanded: expanded}">{{ profile.name }}</h3>
		<div class="bio" :class="{expanded: expanded}">
			<p>{{ profile.bio }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>

	@import "helpers";
	@import "variables";


	.name {
		margin: 0;
		padding: 10px $fluid-margin;
		color: $black;
		background: $main-color-alt;
		border-bottom: 4px solid $black;
		@include breakpoint(889px) {
			&.expanded {
				//background: $white;
			}
		}
	}

	.bio {

		overflow: hidden;
		margin: 0;
		max-height: 0;

		p {
			padding: 10px $fluid-margin;
		}

		&.expanded {
			transition: max-height .4s ease-in-out;
			max-height: 500px;

			@include breakpoint(889px) {
				// position: absolute;
				// width: 66%;
				// right: 0;
				// top: 0;
				// bottom: 0;
			}
		}

		@include breakpoint(889px) {
			max-height: 1500px;
			padding: 30px $fluid-margin;
			p {
				margin: 0;
				padding: 0;
				line-height: 25px;
			}
		}
	}

	@include breakpoint(889px) {

		// .name {
		// 	text-orientation: mixed;
		// 	writing-m	ode: vertical-lr;
		// }

		// .profile {
		// 	&.expanded {
		// 		position: absolute;
		// 			width: 67%;
		// 			right: 0;
		// 			top: 0;
		// 			bottom: 0;
		// 		&:before {
		// 			@include cover-parent;
		// 			content: '';
		// 			display: block;
		// 			background: linear-gradient(to top, rgba($black,0), rgba($black,0) 60%, rgba($black,1));
		// 			opacity: 1;

		// 		}
		// 	}

		// }

		// .name:first-of-type {
		// 	writing-mode: vertical-lr;
		// }
		// .name:last-of-type {
		// 	writing-mode: vertical-lr;
		// 	text-orientation: upright;
		// }



	}

</style>

<script>

	export default {
		props: ['profile', 'expanded'],
	}

</script>
