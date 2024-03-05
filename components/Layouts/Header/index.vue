<!-- HEADER-->
     <template>
    <div>
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
          <template v-if="!isAuthenticated">
             <div>
                <nuxt-link class=" pl-8  text-lg text-gray-600 hover:underline" :to="{name: 'index'}">Home</nuxt-link>
                <nuxt-link class=" pl-8  text-lg text-gray-600 hover:underline" :to="{name:'alunos-aluno' }">Alunos</nuxt-link>
                <nuxt-link class=" pl-8  text-lg text-gray-600 hover:underline" :to="{name:'produtos-produto'}">Produtos</nuxt-link>
            </div>
        </template>
      </div>
      </div>
      </template>
    <!-- FIM MENUS-->
  <script>
  export default {
    methods: {
      async logout() {
        await this.$auth.logout();  // this method will logout the user and make token to false on the local storage of the user browser
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;  // it check if user isAuthenticated
      }
    }
  };

    </script>
  <style></style>
