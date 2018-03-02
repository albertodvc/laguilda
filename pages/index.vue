<template>
    <div>
        <h1>Aqui estamos no te creas</h1>
        <front-page/>
        <show/>
    </div>
</template>

<style lang="scss">

</style>


<script>

    import Vue from 'vue'
    import VueYoutube from 'vue-youtube'

    Vue.use(VueYoutube)

    import FrontPage from '~/components/FrontPage.vue'
    import Show from '~/components/show/Show.vue'

    export default {
    components: {
        FrontPage,
        Show
    }
    }
</script>
