<template>
 <home />
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
