<script>
    export default{
        name: 'Jumbo',
    }
</script>

<template>
    <section>
        <div class="bg">
            <div class="black-overlay">
                <!-- Frecce -->
                <div class="arrow left">
                    <img src="../assets/left-arrow.svg">
                </div>
                <div class="arrow right">
                    <img src="../assets/right-arrow.svg">
                </div>
                <!-- /Frecce -->
    
                <!-- Testo Jumbo -->
                <div class="main-container">
                    <span>CINEMATO STUDIO</span>
                    <h1>ACTION AND <br> INSPIRE PEOPLE</h1>
                    <div>
                        <button>READ MORE</button>
                    </div>
                    
                </div>
                <!-- /Testo Jumbo -->
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

section{
    padding: 0 10px;
    height: 650px;
    
    .bg{
        background-image: url('../assets/Gallery-02.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
        

        .black-overlay{
            width: 100%;
            height: 100%;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.414);
            position: relative;
            display: flex;
            align-items: center;
        }
        .arrow{
            width: 40px;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.295);
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 50%;
        }
        .right{
            right: 20px;
        }
        
        img{
            height: 15px;
            filter: invert(1);
        }

        .main-container{
            color: white;
            display: flex;
            flex-direction: column;
            flex-grow: 0;
            flex-shrink: 0;

            h1{
                font-size: 44px;
                margin-bottom: 35px;
            }

            span{
                font-size: 18px;
                font-weight: bolder;
                margin-bottom: 5px;
            }
        }
    }
}

</style>