<script>
    import Jumbo from './Jumbo.vue';
    import WhatWeDo from './WhatWeDo.vue';
    import AboutUs from './AboutUs.vue';




    export default{
        name: 'PageMain',
        components: {
            Jumbo,
            WhatWeDo,
            AboutUs,
            
        },
    }
</script>

<template>
    <Jumbo></Jumbo>
    <WhatWeDo></WhatWeDo>
    <AboutUs></AboutUs>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

</style>