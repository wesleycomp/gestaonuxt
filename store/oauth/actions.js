export default {

 ActionSetUser({ commit }, payload) {
    commit(types.SET_USER, payload)
},

 ActionSetToken({ commit }, payload) {

    storage.setLocalToken(payload)
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
},

 ActionCheckToken ({ dispatch, state }) {

  console.log(state.access_token)

  if (state.access_token) {
    return Promise.resolve(state.access_token)
  }

  const access_token = storage.getLocalToken()

  if (!access_token) {
    return Promise.reject(new Error('Token Inválido'))
  }

  dispatch('ActionSetToken', access_token)
  return dispatch('ActionLoadSession')
},




 ActionLoadSession ({ dispatch }) {

  autenticar.get('userinfo').then(res => {
      const data =res.data
      dispatch('ActionSetUser', data)
      return Promise.resolve()

      }).catch((err) => {
        dispatch('ActionSignOut')
        return Promise.reject(err)
      })

},

ActionSignOut ({ dispatch }){
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}

}
