import { Store } from "vuex";

const store = createStore({
    state() {
        return {
            count: 1,
        };
    },
});

export default store;