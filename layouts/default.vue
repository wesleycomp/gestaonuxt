<template>
 <div>
   <div class="bg-gray-100">
            <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
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

</style>