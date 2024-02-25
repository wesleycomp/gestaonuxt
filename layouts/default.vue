<template>
 <div>
      <div class="flex bg-[#00477D] border-b-4 border-red-800 shadow-sm" >

        <div>
        <img  src="@/assets/imgs/logo_TCE.jpg" class="img-logo">
        </div>

        <div class="pl-0 pt-1 ml-0">
               <div class="text-base font-bold text-gray-100">&nbsp;Tribunal de Contas</div>
               <div class="text-base text-gray-100">&nbsp;do Estado do Tocantins</div>
        </div>

          <div class="flex bg-[#0066B0] ml-6 w-10/12" >
               <span class="text-2xl pt-3 pl-44 font-bold text-gray-100" >SISTEMA ESCOLAR</span>
               <span class="text-2xl pt-3 ml-44 pl-44 font-normal text-gray-100" >Nome Usuario do Sistema</span>

                <span >
                   <button class="bg-red-900 text-white p-2 pl-6 pr-4 m-2 ml-44  rounded">Sair</button>
                </span>
                </div>


      </div>

      <div class="bg-gray-300 pt-1 pl-14 ">
        <div class="container mx-auto flex text-lg text-gray-800 items-center space-x-4 mb-10">
            <nuxt-link :to="{name: 'a-empresa'}">A empresa</nuxt-link>
            <nuxt-link to="/servicos">Servicos</nuxt-link>
            <nuxt-link to="/produtos">Produtos</nuxt-link>
        </div>
      </div>
     <div>
       <div class="container mx-auto">
            <Nuxt />
       </div>
     </div>
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

  .row_header{
         padding: 0 0 30 0 !important;
         background-color:  #0066B0 !important;
         display: flex;
         box-shadow: 0px 5px 2px #931d19;

    }


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
