<template>
 <div>

<!-- HEADER-->
      <div class="w-screen flex bg-[#00477D]  border-b-4 border-red-800 shadow-sm " >
            <div>
                  <img  src="@/assets/imgs/logo_TCE.jpg" class="img-logo">
            </div>

            <div class="w-1/5 pl-4">
                  <div class="text-base font-bold text-gray-100">&nbsp;Tribunal de Contas</div>
                  <div class="text-base text-gray-100">&nbsp;do Estado do Tocantins</div>
            </div>

            <div class="bg-[#0066B0] w-screen flex" >
                  <span class="text-2xl w-full pl-10 pt-3 font-bold text-gray-100" >SISTEMA ESCOLAR</span>
                  <span class="text-2xl w-1/2 pt-3 font-normal pr-4 text-gray-100" >Usuario de Teste da Silva </span>
                  <span>
                       <button class="inline-flex items-center text-white bg-red-900 font-medium mr-6 mt-3 space-x-10 px-3 py-2 rounded h-8 hover:underline ">
                         Sair <svg class="w-5 h-5 ml-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="10 0 12 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"></path>
                          </svg>
                       </button>
                  </span>
            </div>
      </div>
  <!-- FIM HEADER-->

  <!-- MENUS-->

      <div class="bg-gray-200 pt-1 pl-14  mb-10  ">
        <div>
            <nuxt-link class=" pl-8  text-lg text-gray-600 hover:underline" :to="{name: 'index'}">Home</nuxt-link>
            <nuxt-link class=" pl-8  text-lg text-gray-600 hover:underline" :to="{name:'servicos-servico' }">Servicos</nuxt-link>
            <nuxt-link class=" pl-8  text-lg text-gray-600 hover:underline" :to="{name:'produtos-produto'}">Produtos</nuxt-link>
        </div>
      </div>
    <!-- FIM MENUS-->

    <!-- BODY-->
     <div>
       <div class="container mx-auto ">
            <Nuxt />
       </div>
     </div>
    <!-- FIM BODY-->

    <!-- FOOT -->
      <div class="w-screen mt-44 pt-44">
              <footer class="bg-[#0066B0] rounded-lg shadow m-4  ">
                  <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-100 sm:text-center ">© 2024 <a href="#" class="hover:underline">TCE-TO</a>. All Rights Reserved.
                  </span>
                  <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100   sm:mt-0">
                      <li>
                          <a href="#" class="hover:underline me-4 md:me-6">Sobre</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline me-4 md:me-6">Politicas de Privacidade</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline me-4 md:me-6">Licença</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Contatos</a>
                      </li>
                  </ul>
                  </div>
        </footer>
      </div>
    <!-- FIM FOOT -->
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
