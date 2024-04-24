<script>
    export default{
        name: 'Team',
    }
</script>

<template>
    <section class="main-container">
        <!-- Titolo sezione -->
        <span>PELICULA STUDIO</span>
        <h2>THIS IS WHAT WE DO</h2>
        <!-- Titolo sezione -->

        <!-- Cards -->
        <div class="row">
            <div class="col25">
                <img src="../assets/Team-01.jpg">
                <h4>FABIO GUERRA</h4>
                <span>Main Director</span>
            </div>
            <div class="col25">
                <img src="../assets/Team-02.jpg">
                <h4>UMBERTO PAGODA</h4>
                <span>Main Writer</span>
            </div>
            <div class="col25">
                <img src="../assets/Team-03.jpg">
                <h4>GLORIA RICCASSO</h4>
                <span>Main Producer</span>
            </div>
            <div class="col25">
                <img src="../assets/Team-04.jpg">
                <h4>LIO NAPOIN</h4>
                <span>Cameraman</span>
            </div>
        </div>
        <!-- /Cards -->

    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

    .main-container{
        text-align: center;
        color: #666666;
        margin-bottom: 100px;

        .row{
            justify-content: space-between;

            img{
                margin-bottom: 20px;
                width: 255px;
            }

            h4{
                margin-bottom: 15px;
                color: #111111;
            }
        }
    }

    span{
        font-weight: bolder;
        font-size: 14px;
    }

    h2{
        margin: 25px 0 40px;
        color: #111111;
    }

</style>