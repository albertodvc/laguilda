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
		font-family: $body-font;
		font-size: 16px;
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: $heading-font;
	}

	h2 {
		font-size: $big-heading;
		margin: 1em 0;
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
