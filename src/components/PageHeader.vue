<script>
    import { store } from '../store';

    export default{
        name: 'PageHeader',
        data() {
            return{
                store,
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
                <a :href="headerLink.link" v-if="!headerLink.children">{{ headerLink.text }}</a>
                <span class="dropdown-span" v-else v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">{{ headerLink.text }} <i class="fa-solid fa-chevron-down"></i>
                    <ul class="dropdown">
                            <li
                                v-for="child in headerLink.children">
                                <a :href="child.link">
                                    {{ child.name }}
                                </a>
                            </li>
                    </ul>
                </span>
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
    padding: 35px;
    background-color: white;

    img{
        height: 30px;
    }

    .header-centre{
        display: flex;
        gap: 30px;
        align-items: center;

        i{
            font-size: smaller;
        }
    }
    
    a{
        color: #0F0F0F;
    }

    .dropdown-span {
        position: relative;
        display: block;
        height: auto;
        cursor: pointer;


        &:hover ul{
            display: block;
        }
    }
    .dropdown {
        position: absolute;
        top: 45px;
        left: -50px;
        display: block;
        background-color: #0F0F0F;
        
        li {
            width: 250px;
            border-bottom: 1px solid #666666;

            a {
                display: inline-block;
                padding: 8px;
                color: white;
                font-size: smaller;
                font-weight: 500;
            }
        }
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