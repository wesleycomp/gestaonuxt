export const getters = {


    isAuthenticated(state) {

      return state.oauth.loggedIn;
   },

    getUserInfo(state) {
      return state.oauth.user;
    },

    authenticatedLogof(state){
      state.loggedIn = false
    }


  };
