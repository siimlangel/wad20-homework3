import Vue from "vue";
import Vuex from "vuex";

// Load vuex
Vue.use(Vuex);

const state = () => ({
    posts: [],
});

const getters = {
    getPosts: (state) => state.posts,
};

const actions = {};

const mutations = {};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
