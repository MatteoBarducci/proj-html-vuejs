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
        <nav class="header-centre">
            <div v-for="headerLink in store.headerInfo">
                <a :href="headerLink.link">{{ headerLink.text }}</a>
            </div>
        </nav>
        <div class="header-right">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div class="divider"></div>
            <div v-for="social in store.headerSocials">
                <a :href="social.link"> <i class="fa-brands" :class="social.icon"></i></a>
            </div>
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

    img{
        height: 30px;
    }

    .header-centre{
        display: flex;
        gap: 30px;
        align-items: center;

    }
    
    a{
        color: #0F0F0F;
    }
    .header-right{
        display: flex;
        gap: 20px;
        align-items: center;


        .divider{
            height: 18px;
            background-color: grey;
            width: 1px;
        }
    }
}


</style>