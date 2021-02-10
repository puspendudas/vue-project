import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogedIn: false,
        };
    },
    mutations: {
        setIsLogedIn(state ) {

        }
    }
});

export default store;