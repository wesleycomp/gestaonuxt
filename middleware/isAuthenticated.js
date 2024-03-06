export default function({  to, app, store, redirect, query }) {

     var token = to.query.access_token


  if (query.lang) {
    app.$cookiz.set('acces_token', token)

  }

  else{
    return redirect("/auth/login");
  }
//  if (!store.state.auth.loggedIn) {
 //   return redirect("/auth/login");
//  }


}

/*
export default async (to, from, next) => {


//  document.title = `${to.name} - ${process.env.VUE_APP_SISTEMA}`

  if (to.name !== 'login' && !store.getters['auth/hasToken']) {

    try {

      await store.dispatch('auth/ActionCheckToken')
      // next({ path: to.path })
      next({ name: 'login' })

    } catch (err) {

      //tratar a menssagem de erro i
      next({ name: 'login' })
     // reject(err)

    }

  } else {

        var token = to.query.access_token

        if(token){// se existir token entra para setar na store

          var user = {name:'Wesley R Lima', cpf:'00141340126'}
            store.dispatch('auth/ActionSetToken', token)
            store.dispatch('auth/ActionSetUser', user)

        }



    if (to.name === 'login' && store.getters['auth/hasToken']) {

      next({ name: 'home' })

    } else {

      next()

    }

  }
}
*/
