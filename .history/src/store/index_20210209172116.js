import {createStore} from "vu"
const store = createStore({
    state() {
        return {
            count: 1,
        };
    },
});

export default store;