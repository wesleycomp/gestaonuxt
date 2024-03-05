<template>
 <div>

    <!-- BODY-->
     <div>
        <layouts-header />
       <div class="container mx-auto ">
            <Nuxt />
       </div>
     </div>
    <!-- FIM BODY-->

   </div>
</template>

<script>
export default {
    name: '',
    //   middleware(){
        //     console.log('middleware deafault')
        // },

    data() {
        return {
        }
    },
    methods:{},

}
</script>

<style>
/*
  .row_header{
         padding: 0 0 30 0 !important;
         background-color:  #0066B0 !important;
         display: flex;
         box-shadow: 0px 5px 2px #931d19;

    } */
 @import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css");


  .img-logo{
      margin-top: 3px;
      margin-bottom: 5px;
      margin-left: 25px;
      margin-right: 5px;
      width: 40px;
      height: 50px;
    }

  .fonte_titulo_logo {
        font-size: 1.953rem/27.34px !important;
        font-weight: bold;
        color: #EAEAEA !important;
        position: relative;
        top: 5px;
    }

    .fonte_subtitulo_logo {
        font-size: 13px !important;
        color: #EAEAEA !important;
        font-weight: 300;
        position: relative;
    }

</style>
