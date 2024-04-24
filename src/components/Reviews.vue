<script>
    export default{
        name: 'Reviews',
    }
</script>

<template>
    <section class="bg">
        <div class="main-container">
            <!-- Immagine -->
            <div >
                <img src="https://static.thenounproject.com/png/19279-200.png" class="quote-png">
            </div>
            <!-- Paragrafo -->
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Quasi ratione adipisci placeat qui explicabo mollitia nulla a? Officia cupiditate nos fugiat aspernatur sequi! Accusamus non.</p>
            <!-- Utente -->
            <div class="user">
                <div class="user-img-container">
                    <img src="../assets/01.jpg">
                </div>
                <div class="user-info">
                    <span class="name">JOHN DOE</span>
                    <span>Designer</span>
                </div>
            </div>
            <!-- Selected review -->
            <div class="big-dots">
                <span>.</span>..
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

.bg{
    background-image: url('../assets/Parallax-02.jpg');
    height: 540px;
    width: calc(100% - 20px);
    margin: 0 10px 100px;

    .main-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;

        .quote-png{
            filter: invert(1);
            height: 100px;
        }

        p{
            max-width: 550px;
            line-height: 2;
            font-size: 14px;
            font-weight: 500;
            margin-top: -10px;
        }

        .user{
            display: flex;
            margin-top: 18px;
            justify-content: space-between;
            text-align: left;
            gap: 12px;
            align-items: center;

            img{
                border-radius: 50%;
            }

            .user-info{
                display: flex;
                flex-direction: column;

                span{
                    font-size: 12px;
                    font-weight: 500;
                }

                .name{
                    font-size: 15px;
                    font-weight: bold;
                }
            }
        }
        
        .big-dots{
            font-size: 60px;
            line-height: 0.3;
            color: #666666;
            
            span{
                color: white;
            }
        }
    }

}

</style>