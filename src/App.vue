<template>
  <div>
    <Menu :data="data"/>
    <List/>
    <button @click="openRegistration = !openRegistration">Registration</button>
    <Registration v-if="openRegistration"></Registration>
  </div>
</template>

<script>
  import Menu from './components/Menu'
  import List from './components/List'
  import Registration from './components/registration/Registration.vue'
  import axios from 'axios';


  export default {
    data(){
      return{
          data: null,
          openRegistration: false,
          target: ''
      }
    },
    components: {
        Registration,
        Menu,
        List
    },
    mounted() {
        console.log('mounted');
        axios
            .get(`https://swapi.co/api/`)
            .then(result => this.data = result.data);
    },

}
</script>
<style scoped>


</style>
