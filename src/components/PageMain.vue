<script>
    import Jumbo from './Jumbo.vue';
    import WhatWeDo from './WhatWeDo.vue';
    import AboutUs from './AboutUs.vue';
    import BestMovies from './BestMovies.vue';
    import Numbers from './Numbers.vue';
    import Team from './Team.vue';
    import Reviews from './Reviews.vue';

    export default{
        name: 'PageMain',
        components: {
            Jumbo,
            WhatWeDo,
            AboutUs,
            BestMovies,
            Numbers,
            Team,
            Reviews,
            
        },
    }
</script>

<template>
    <Jumbo></Jumbo>
    <WhatWeDo></WhatWeDo>
    <AboutUs></AboutUs>
    <BestMovies></BestMovies>
    <Numbers></Numbers>
    <Team></Team>
    <Reviews></Reviews>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

</style>