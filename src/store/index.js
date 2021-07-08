import { createStore } from "vuex"

const store = createStore({
    state: {
        login: false,
        userInfo: null,
        cartList: [],
        showCart: false
    },
    mutations: {
        SHOWCART(state, { showCart }) {
            state.showCart = showCart;
        },
    },
    actions: {

    },
    modules: {

    }
})

export default store