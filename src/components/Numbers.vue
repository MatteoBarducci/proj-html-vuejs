<script>
    export default{
        name: 'Numbers',
    }
</script>

<template>
    <section class="bg">
        <div class="main-container">
            <!-- Contenuto -->
            <div class="row">
                <div class="col25">
                    <span class="big-font-size">158</span>
                    <span>SATISFIED CLIENTS</span>
                </div>
                <div class="col25">
                    <span class="big-font-size">3+</span>
                    <span>OUR PROJECT</span>
                </div>
                <div class="col25">
                    <span class="big-font-size">1906</span>
                    <span>CUP OF COFFEE</span>
                </div>
                <div class="col25">
                    <span class="big-font-size">2</span>
                    <span>OUR AWARDS</span>
                </div>
            </div>
            <!-- /Contenuto -->
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

.bg{
    background-image: url('../assets/Parallax-03.jpg');
    background-position: center;
    height: 190px;
    width: calc(100% - 20px);
    margin: 0 10px 100px;

    .main-container{
        height: 100%;
    }

    .row{
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    
    .col25{
        color: white;
        gap: 10px;
        font-weight: 700;
        font-size: 15px;

        .big-font-size{
            font-size: 32px;
            font-weight: 700;
        }
    }
}

</style>