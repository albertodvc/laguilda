<template>
	<div class="profile">
		<h3 class="name">{{ profile.name }}</h3>
		<transition name="slide">
			<div class="bio" v-show="expanded">
				<p>{{ profile.bio }}</p>
			</div>

		</transition>
	</div>
</template>

<style lang="scss" scoped>

	@import "helpers";
	@import "variables";

	.name {
		margin: 0;
		padding: 10px;
		background: $main-color-alt;
		color: $black;
		border-bottom: 2px solid $white;
	}

	.bio {
		max-height: 500px;
		overflow: hidden;
		margin: 0;
		padding: 0;

		p {
			padding: 10px;
		}
	}

	.slide-enter-active, .slide-leave-active {
		transition: max-height .4s ease-in-out;
	}
	.slide-enter,
	.slide-leave-to {
		max-height: 0;
	}

	@include breakpoint(769px) {

		.name {
			text-orientation: mixed;
			writing-mode: vertical-lr;
		}

		.profile {
			display: flex;
			height: 100%;
		}
	}

</style>

<script>

	export default {
		props: ['profile', 'expanded'],
	}

</script>
