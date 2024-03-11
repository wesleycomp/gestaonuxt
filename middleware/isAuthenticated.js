export default function({ app, redirect, store}) {


//store.dispatch('oauth/ActionSetToken', "token")

var token2 = app.$cookies.get('token', { parseJSON: false }) //client
//console.log(token)
console.log(token2)

    if(!token2){
      return redirect('/login')
    }

}
