<template>
	<div class="profile">
		<h3 class="name">{{ profile.name }}</h3>
		<p class="bio">{{ profile.bio }}</p>
	</div>
</template>

<style lang="scss" scoped>

</style>

<script>

	export default {
		props: ['profile'],
	}

</script>
