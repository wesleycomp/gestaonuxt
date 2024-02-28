<template>
    <div>
          <h1 class="text-lg font-bold">Servicos</h1>
          <nuxt-link to="/servicos/desenvolvimento-de-site">
            Desenvolvimento de Sites
          </nuxt-link>
          <nuxt-link to="/servicos/marketing-digital">
            Marketing Digital
          </nuxt-link>
         <br><br>
             <nuxt-child/>
        </div>
  </template>



  <script>


  import { mapActions } from "vuex";


  export default {

      name:'',

      //    middleware(){
        //      console.log('middleware servicos')
        // },

      data() {

          return{

          };

      },

      methods:{

        
      },

  }
  </script>

  <style>

  </style>
