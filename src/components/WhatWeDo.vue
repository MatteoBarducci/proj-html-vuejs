<script>
    export default{
        name: 'WhatWeDo',
    }
</script>

<template>
    <section class="main-container">
        <!-- Titolo sezione -->
        <span>PELICULA STUDIO</span>
        <h2>THIS IS WHAT WE DO</h2>
        <!-- Titolo sezione -->

        <!-- CARDS -->
        <div class="row">
            <div class="col33">
                <img src="../assets/image (14).svg">
                <h4>ARRAY OF EQUIPMENT</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventores</span>
            </div>
            <div class="col33">
                <img src="../assets/image (15).svg">
                <h4>TOP DIRECTORS</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventores</span>
            </div>
            <div class="col33">
                <img src="../assets/image (16).svg">
                <h4>NEW TECHNOLOGIES</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventores</span>
            </div>
            <div class="col33">
                <img src="../assets/image (17).svg">
                <h4>MINUTE EDITING</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventores</span>
            </div>
            <div class="col33">
                <img src="../assets/image (18).svg">
                <h4>VERSATILE ACTORS</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventores</span>
            </div>
            <div class="col33">
                <img src="../assets/image (19).svg">
                <h4>VERSATILE ACTORS</h4>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventores</span>
            </div>
        </div>
        <!-- CARDS -->

    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

.main-container{
    text-align: center;
    margin-top: 100px;
    color: #666666;

    span{
        font-weight: bolder;
        font-size: 14px;
    }

    h2{
        margin: 25px 0 40px;
        color: #111111;
    }

    .row{
        flex-wrap: wrap;
        justify-content: space-between;

        .col33{
            margin-bottom: 45px;
            text-align: center;

            img{
                height: 75px;
                margin: auto;
                margin-bottom: 20px;
            }

            h4{
                margin-bottom: 15px;
                color: #111111;
            }
        }
    }
}

</style>