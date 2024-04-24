<script>
  import { store } from './store';
  import PageHeader from './components/PageHeader.vue';
  import PageMain from './components/PageMain.vue';
  import PageFooter from './components/PageFooter.vue';



  export default{
    components: {
      PageHeader,
      PageMain,
      PageFooter
    },
    data() {
      return {
        store,
      };
    },
    methods: {
      
    },
    mounted(){
    }
  }
</script>

<template>
  <header>
    <PageHeader></PageHeader>
  </header>
  <main>
    <PageMain></PageMain>
  </main>
  <footer>
    <PageFooter></PageFooter>
  </footer>

</template>

<style lang="scss">
  @use './style/generic.scss';

</style>
