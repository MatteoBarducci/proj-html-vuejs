<script>
    import Jumbo from './Jumbo.vue';
    import WhatWeDo from './WhatWeDo.vue';



    export default{
        name: 'PageMain',
        components: {
            Jumbo,
            WhatWeDo,
        },
    }
</script>

<template>
    <Jumbo></Jumbo>
    <WhatWeDo></WhatWeDo>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

</style>