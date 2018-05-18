<template>
	<div>
		<navigator/>
		<nuxt/>
	</div>
</template>

<style lang="scss">
	@import "normalize\.css/normalize.css";
	@import "variables";

	html {
		height: 100%;
	}

	body,
	#__nuxt,
	.___layout {
		min-height: 100%;
	}

	body {
		margin: 0;
		@extend %body-text;
		background: $black;
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		@extend %heading;
	}

	h2 {
		@extend %large-heading;
	}

	* {
		box-sizing: border-box;
	}

	nav + section {
		padding-top: $navigator-height;
	}

	section > h2 {
		padding-left: $fluid-margin / 2;
		margin: 0;
		color: $dimed-white-0;
		background: $black;
		font-weight: 200;
	}

</style>

<script>

    import Navigator from '~/components/Navigator/Navigator.vue'

    export default {
        components: {
            Navigator
        }
    }
</script>
