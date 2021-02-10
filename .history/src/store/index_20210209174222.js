import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogedIn: false,
        };
    },
    mutations: {
        setIsLogedIn( state ) {
            state
        }
    }
});

export default store;