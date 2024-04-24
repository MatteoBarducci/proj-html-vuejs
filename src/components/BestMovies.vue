<script>
    export default{
        name: 'BestMovies',
    }
</script>

<template>
    <section class="main-container">
        <!-- Titolo sezione -->
        <span>YOUR WATCHLIST</span>
        <h2>BEST HITS MOVIES</h2>
        <!-- /Titolo sezione -->

        <!-- Cards -->
        <div class="row">
            <div class="col33">
                <img src="../assets/Gallery-01.jpg">
                <h4>SEVENTEENTH SUMMER</h4>
                <span>Commercial, Music Video.</span>
            </div>
            <div class="col33">
                <img src="../assets/Gallery-02.jpg">
                <h4>A MESSAGE TO SPACE</h4>
                <span>Short film</span>
            </div>
            <div class="col33">
                <img src="../assets/Gallery-03.jpg">
                <h4>THE MOST BEAUTIFUL THING</h4>
                <span>Music Video</span>
            </div>
            <div class="col33">
                <img src="../assets/Gallery-04.jpg">
                <h4>PERMISSION TO SPEAK</h4>
                <span>Documentary</span>
            </div>
            <div class="col33">
                <img src="../assets/Gallery-05.jpg">
                <h4>EXPLORE OUR SPACE</h4>
                <span>Film noir</span>
            </div>
            <div class="col33">
                <img src="../assets/Gallery-06.jpg">
                <h4>FILM PRODUCTION</h4>
                <span>Blaxploitation</span>
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
            margin-bottom: 40px;
            text-align: center;

            img{
                width: 355px;
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