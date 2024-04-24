<script>
    export default{
        name: 'Form',
    }
</script>

<template>
    <section class="main-container">
        <div class="row">
            <div class="col50 right">
                <span>COLLABORATE</span>
                <h2>WANT TO WORK WITH US? <br> LEAVE US A MESSAGE!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora eaque ipsam harum, eius provident corporis! Modi labore cupiditate ex, corrupti error tenetur sunt reiciendis, quod doloribus repellendus eaque deserunt! Excepturi eius provident corporis! Molestias corrupti enim accusantium aliquam reiciendis.</p>
            </div>

            <div class="col50">
                <div class="input-row">
                    <div>
                        <input type="text" placeholder="Your Name">
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email">
                    </div>
                    <div>
                        <input type="text" placeholder="Mobile Number">
                    </div>
                    <div>
                        <input type="text" placeholder="Your Pincode">
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                <button>SUBMIT NOW</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

    .main-container{
        margin-bottom: 100px;
    }

        .row{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            .input-row{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                

                div{
                    width: calc(50% - 20px);
                    margin-bottom: 30px;

                    input{
                        width: 100%;
                    }
                }
            }

            .right{
                padding-right: 50px;
            }
            .col50{
                color: #666666;
                display: flex;
                flex-direction: column;
                justify-content: center;

                span{
                    font-weight: 500;
                    font-size: 14px;
                }

                h2{
                    margin: 25px 0 40px;
                    color: #111111;
                }

                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 38px;
                    line-height: 2;
                }
            }

            #message{
                height: 180px;
                text-align: start;
            }

            input, textarea{
                background-color: #F2F2F2;
                border: none;
                padding: 10px;
            }

            button{
                margin-top: 25px;
                background-color: #111111;
                color: white;
            }
        }
</style>