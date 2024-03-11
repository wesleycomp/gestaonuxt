export const getters = {


    isAuthenticated(state) {
      return state.authenticated;
   },

    getUserInfo(state) {
      return state.oauth.user;
    },

    authenticatedLogof(state){
      state.loggedIn = false
    }


  };

export const state = () => ({
   authenticated:true
});


export const mutations = {

   async logoff({state}) {
    state.authenticated = false;
   return

  },


}


export const actions = {

    async loggedIn({ state }) {
    console.log('passou aki loggin')
    state.authenticated = true;
    return;
  }

  // async fetchCounter({ state }) {

  //   // make request
  //   const res = { data: 10 };
  //   state.counter = res.data;
  //   return res.data;

  // }





}
