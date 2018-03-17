<template>
	<div>
		<navigator/>
		<nuxt/>
	</div>
</template>

<style lang="scss">
    @import "normalize\.css/normalize.css";
	@import "variables";

	body {
		margin: 0;
		@extend %body-text;
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

</style>

<script>

    import Navigator from '~/components/Navigator/Navigator.vue'

    export default {
        components: {
            Navigator
        }
    }
</script>
