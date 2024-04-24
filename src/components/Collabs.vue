<script>
    export default{
        name: 'Collabs',
    }
</script>

<template>
    <section class="bg">
        <div class="main-container">
            <img src="../assets/01.png">
            <img src="../assets/02.png">
            <img src="../assets/03.png">
            <img src="../assets/04.png">
            <img src="../assets/05.png">
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

.bg{
    background-image: url('../assets/Parallax-03.jpg');
    background-position: center;
    height: 280px;
    width: calc(100% - 20px);
    margin: 0 10px 80px;

    .main-container{
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;

        img{
            width: calc(100% / 5 - 80px);
        }
    }
}

</style>