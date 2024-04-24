<script>
    import Jumbo from './Jumbo.vue';
    import WhatWeDo from './WhatWeDo.vue';
    import AboutUs from './AboutUs.vue';
    import BestMovies from './BestMovies.vue';





    export default{
        name: 'PageMain',
        components: {
            Jumbo,
            WhatWeDo,
            AboutUs,
            BestMovies,
            
        },
    }
</script>

<template>
    <Jumbo></Jumbo>
    <WhatWeDo></WhatWeDo>
    <AboutUs></AboutUs>
    <BestMovies></BestMovies>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

</style>