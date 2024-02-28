<template>
 <home-root />
</template>

<script>

export default {

  name: 'IndexPage',

    data() {
      return{}
    },

    mounted(){
      console.log(this.$dayjs().format())
    }


}

</script>
