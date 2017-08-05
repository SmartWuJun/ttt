import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        result: '',
        enter: ''
    },
    mutations: {
        calculator(state, value) {
            if (value == 'clear') {
                state.result = '';
                state.enter = '';
            } else if (value == '=') {
                state.result = eval(state.enter);
                state.enter += value;

            } else {
                state.enter += value;
            }
        }
    }
})