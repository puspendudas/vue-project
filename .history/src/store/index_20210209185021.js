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
            state.isLogedIn = pal;
        },
        setAuthUser( state, payload ) {
            state.authUser = payload;
        }
    }
});

export default store;