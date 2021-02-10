import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogedIn: false,
        };
    },
    mutations: {
        setIsLoged
    }
});

export default store;