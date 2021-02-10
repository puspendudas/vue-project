import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogedIn: false,
            authUser: {}
        };
    },
    mutations: {
        setIsLogedIn( state, pal ) {
            state.isLogedIn = true;
        },
        setAuthUser( state, payload ) {
            state.authUser = payload;
        }
    }
});

export default store;