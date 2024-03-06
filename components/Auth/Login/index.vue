<template>
  <div>
  <h3 class="mb-0"><b>Painel de Acesso </b></h3>
    <br/>

    <button type="button" @click="autenticarUsuario" class="btn btn-primary w-100">Fazer Login SSO</button>

</div>
</template>
<script>
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    };
  },

    methods: {
      
           autenticarUsuario(){
                 window.location.href="http://localhost:8080/authentication"
                }

    }

};
</script>
<style></style>
