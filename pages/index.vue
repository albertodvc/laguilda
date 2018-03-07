<template>
    <div>
        <front-page/>
        <presentation/>
        <!-- <show/> -->
    </div>
</template>

<style lang="scss">
    // @import 'compass/reset';
    body {
        margin: 0;
    }
</style>


<script>

    import Vue from 'vue'
    import VueYoutube from 'vue-youtube'

    Vue.use(VueYoutube)

    import FrontPage from '~/components/video-clip/FrontPage.vue'
    import Presentation from '~/components/presentation/Presentation.vue'
    import Show from '~/components/show/Show.vue'

    export default {
    components: {
        FrontPage,
        Presentation,
        Show
    }
    }
</script>
