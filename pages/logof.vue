<template>
  <div> TELA de Logof</div>
</template>

<script>
export default {

 computed: {
  authenticated : {
     set() {

      this.$store.commit("logoff");

      }
  }
 }

}
</script>

<style>

</style>
