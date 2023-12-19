<template>
      <div>
        <div class="container mx-auto ">
          <h1 class="text-lg font-bold">Produtos</h1>
          <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
          <nuxt-link to="/produtos/produto-b">Produto B</nuxt-link>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, vel nostrum deserunt ducimus velit possimus laboriosam quod quia, tempore quisquam amet accusantium. Ullam distinctio alias neque unde eos quis facere.</p>
        </div>
       <br>
       <br>
       <div 
       v-for="product in products" :key="product.id"
       class="border-b border-gray-400 py-3"
       >
        {{ product.body }}
      </div>

    </div>
</template>

<script>
export default {

   name:'',
      //   middleware(){
          //    console.log('middleware empresa')
          // },
      //  middleware:'auth',   
    data() {

        return{

        };
     
    },

  async asyncData({ $axios }){

    const products = await $axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')

    return {
      products,
    }


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
    },

    methods:{},

}
</script>

<style>

</style>