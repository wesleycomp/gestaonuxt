<template>
      <div>
        {{ produtos }}
     </div>
</template>

<script>

export default {

   name:'produto',


    data() {

        return{
          produtos:[],
          texto: '',
          tableAlunos:[]
        };

    },


 async asyncData({ store }) {
    return {
      produtos: await store.dispatch('product/getCategories')
       // .then(response => response.map(o => ({ ...o, is_updating: false })))
    }
  },



  // async fetch({ $axios }) { //depois do componente ser criado
  //   this.produtos = await $axios.get('posts?_limit=3')
  // },

  // async asyncData({ $axios }){ //antes do componente ser criado

  //   const products = await $axios.get('posts?_limit=3')

  //   return {
  //     products,
  //   }


    /*
   await new Promise((context) => {
      setTimeout(() => {

        resolve()
      }, 3000 )

    })


        return{

                products:[
                          {name:'product-a'},
                          {name:'product-b'}
                ]
        }
        */
    //},



    //methods:{
    // ...mapActions("alunos", ["findAllAlunos"]),

    //  pesquisaAlunos(){
    //   this.tableAlunos = this.findAllAlunos
    //  }

    //},



}
</script>

<style>

</style>
