import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogedIn: false,
            authUser: {}
        };
    },
    mutations: {
        setIsLogedIn( state ) {
            state.isLogedIn = true;
        },
        setAuthUser( state,  ) {
            state.authUser = true;
        }
    }
});

export default store;