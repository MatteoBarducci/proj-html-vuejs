<script>
    import { store } from '../store';

    export default{
        name: 'AppHeader',
        data() {
            return{
                store
            }
        },
    }
</script>

<template>
    <header>
        <div class="header-left">
            <img src="../assets/logo.svg" alt="">
        </div>
        <div class="header-centre">

        </div>
        <div class="header-right">

        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 25px;
    border: dashed;

    img{
        height: 30px;
    }
}


</style>