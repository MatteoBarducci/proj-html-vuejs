<script>
  import { store } from './store';
  import PageHeader from './components/PageHeader.vue';
  import PageMain from './components/PageMain.vue';


  export default{
    components: {
      PageHeader,
      PageMain,
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

</template>

<style lang="scss">
  @use './style/generic.scss';

</style>
