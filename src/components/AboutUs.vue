<script>
    export default{
        name: 'AboutUs',
    }
</script>

<template>
    <section>
        <div class="bg">
            <div class="row">
                <div class="col50"></div>
                <div class="col50">
                    <span>ABOUT US</span>
                    <h2>HIGH QUALITY CINEMATICS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora eaque ipsam harum, eius provident corporis! Modi labore cupiditate ex, corrupti error tenetur sunt reiciendis, quod doloribus repellendus eaque deserunt! Excepturi eius provident corporis!</p>
                    <div>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

section{

    .bg{
        margin-top: 100px;
        margin-bottom: 100px;
        background-image: url(../assets/About-Us.jpg);
        background-size: cover;
        width: calc(100% - 20px);
        margin: 0 10px 100px;
        height: 500px;

        .row{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            padding: 0 200px;

            .col50{
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;

                span{
                    font-weight: bolder;
                    margin-bottom: 22px;
                }

                h2{
                    margin-bottom: 38px;
                }

                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 38px;
                    line-height: 2;
                }
            }
        }
    }
}

</style>