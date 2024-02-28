export default async({ redirect, next }) => {

   try {
              console.log('auth middleware nomeado')
              const loggedIn = false

              if (!loggedIn){
                 return redirect('/logof')
              }

              else{
                 return redirect('/home')
              }

              console.log(context)

    } catch (err) {

        return redirect('/login')

        }
}
