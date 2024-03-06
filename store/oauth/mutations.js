export default {

 updateUser (state, payload) {
  state.user = payload
 },

 updateToken (state, payload) {
  state.access_token = payload
 }


}
