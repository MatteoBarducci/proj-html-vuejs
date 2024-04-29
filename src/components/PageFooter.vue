<script>
    import { store } from '../store';


    export default{
        name: 'PageFooter',
        data() {
            return{
                store
            }
        }
    }
</script>

<template>
    <footer>
        <section class="main-container">
            <div class="row">
                <!-- Prima colonna -->
                <div class="col25">
                    <h4>CONTACT INFO</h4>
                    <div class="flex">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>2/45 Tower Street New York, USA</span>
                    </div>
                    <div class="flex">
                        <i class="fa-solid fa-phone"></i>
                        <span>Call Us On 0800 840 1010</span>
                    </div>
                    <div class="flex">
                        <i class="fa-solid fa-envelope"></i>
                        <span>Demo@example.com</span>
                    </div>
                </div>
                <!-- Seconda colonna -->
                <div class="col25">
                    <h4>INFORMATION</h4>
                    <ul>
                        <li v-for="info in store.footerInformation"><a :href="info.link">{{ info.text }}</a></li>
                    </ul>
                </div>
                <!-- terza colonna -->
                <div class="col25">
                    <h4>USEFUL LINKS</h4>
                    <ul>
                        <li v-for="links in store.footerUsefulLinks"><a :href="links.link">{{ links.text }}</a></li>
                    </ul>
                </div>
                <!-- Quarta colonna -->
                <div class="col25">
                    <h4 class="special-margin">NEWSLETTER</h4>
                    <span>Subscribe To Receive Inspiration, Ideas & News In Your Inbox.</span>
                    <input type="email" placeholder="Enter Your Email">
                    <button>SUBSCRIBE</button>
                </div>
            </div>

            <hr>
            <div class="hr-span">
                <span >© 2023 All Rights Reserved Developed By TemplateMela</span>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

footer{
    height: 480px;
    background-color: #111111;
    padding-top: 100px;
    color: #CCCCCC;

    a{
        color: #CCCCCC;
    }

    .row{
        width: 100%;
        justify-content: space-between;
        text-align: start;
    }

    .col25{
        align-items: baseline;
        text-align: start;

        input{
            padding: 10px;
            background-color: #1C1C1C;
            border: none;
            width: 100%;
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }

    .col25 *{
        margin-top: 10px;
    }

    h4{
        color: white;
    }

    span, a{
        font-size: 14px;
        font-weight: 500;
    }

    .flex{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .special-margin{
        margin-bottom: 15px;
    }

    hr{
        color: 666666;
        margin-top: 100px;
    }

    .hr-span{
        text-align: center;
        margin-top: 12px;
    }

    a:hover{
        color: white;
        font-weight: bolder;
    }
}

</style>