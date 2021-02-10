import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogedIn: false,
        };
    },
    mutations: {
        setIsLogedIn( state ) {
            state.isLogedIn = true;
        },
        setAuthUser( state ) {
            state.isLogedIn = true;
        }
    }
});

export default store;