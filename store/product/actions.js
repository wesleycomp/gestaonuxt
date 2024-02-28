export default {


load ({ commit }) {
   setTimeout(
     commit,
     1000,
     'update',
     { _id: 1, title: 'Product', price: 99.99 }
   )
 }



      // actions: {
      //       findAllAlunos: () => (
      //           http.get('/alunos/todos').then(resp => {
      //                 return resp.data;
      //                 })
      //             ),

      //       },

}

