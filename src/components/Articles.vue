<script>
    export default{
        name: 'Articles',
    }
</script>

<template>
        <section class="main-container">
        <!-- Titolo sezione -->
        <span>LATEST NEWS</span>
        <h2>ARTICLES UPDATED DAILY</h2>
        <!-- /Titolo sezione -->

        <!-- Cards -->
        <div class="row">
            <div class="col33">
                <img src="../assets/blog01.jpg">
                <span>November 06, 2021 By Admin</span>
                <h4>RECAP YOUR LATEST COMPANY EVENT</h4>
                <span>Possimus, expedita sint! Aperiam possimus est ratione dolorum earum quaerat.</span>
            </div>
            <div class="col33">
                <img src="../assets/blog02.jpg">
                <span>May 27, 2022 By Admin</span>
                <h4>HOW TO EDIT A FILM SCORE TO SERVE</h4>
                <span>Lorem ipsum dolor, sit amet consectetur elit adipisicing el. Vitae consequa modi.</span>
            </div>
            <div class="col33">
                <img src="../assets/blog03.jpg">
                <span>May 27, 2022 By Admin</span>
                <h4>ARE YOU READY TO MAKE IT AWESOME</h4>
                <span>Inventore totam molestiae obcaecati aut neque error atque velit minima culpa suscipit.</span>
            </div>
        </div>
        <!-- /Cards -->

    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

.main-container{
    text-align: center;
    margin-top: 100px;
    color: #666666;
    margin-bottom: 60px;

    span{
        font-weight: 500;
        font-size: 14px;
        line-height: 2;
    }

    h2{
        margin: 25px 0 40px;
        color: #111111;
    }

    .row{
        flex-wrap: wrap;
        justify-content: space-between;

        .col33{
            margin-bottom: 100px;
            text-align: left;

            img{
                width: 355px;
                margin: auto;
                margin-bottom: 10px;
            }

            h4{
                margin-bottom: 10px;
                margin-top: 8px;
                color: #111111;
            }
        }
    }
}
</style>