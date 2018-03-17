<template>
	<div class="profile">
		<h2 class="name">{{ profile.name }}</h2>
		<p class="bio">{{ profile.bio }}</p>
	</div>
</template>

<style lang="scss" scoped>

	.profile {
		background: pink;
	}

</style>

<script>

	export default {
		props: ['profile'],
	}

</script>
