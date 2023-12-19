export default({ redirect }) => {
    console.log('auth middleware nomeado')
    const loggedIn = false
    if (!loggedIn){
        return redirect('/')
    }
    console.log(context)


}