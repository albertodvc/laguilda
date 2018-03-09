<template>
	<div>
		<navigator/>
		<nuxt/>
	</div>
</template>

<style lang="scss">
    @import 'normalize\.css/normalize.css';
    body {
        margin: 0;
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
