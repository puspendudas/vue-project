import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLogedIn: false,
        };
    },
    mutations: {
        set
    }
});

export default store;