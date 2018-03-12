<template>
    <div>
        <front-page/>
        <presentation/>
    </div>
</template>

<script>

    import Vue from 'vue'
    import VueYoutube from 'vue-youtube'

    Vue.use(VueYoutube)

    import FrontPage from '~/components/FrontPage/FrontPage.vue'
    import Presentation from '~/components/Presentation/Presentation.vue'
    import Show from '~/components/Show/Show.vue'

    export default {
        components: {
            FrontPage,
            Presentation,
            Show
        }
    }
</script>
