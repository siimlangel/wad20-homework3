import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// Load vuex
Vue.use(Vuex);

const state = () => ({
  posts: [],
  user: {},
  profiles: []
});

const getters = {
  getPosts: (state) => state.posts,
  getProfiles: (state) => state.profiles,
  user: (state) => state.user,
};

const actions = {
  fetchUser: ({ commit }) => {
    axios
      .get("http://localhost:9000/api/user")
      .then((res) => {
        commit("setUser", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  fetchPosts: ({ commit }) => {
    // Get posts from api
    axios
      .get("http://localhost:9000/api/posts")
      .then((res) => {
        // Commit changes to state
        commit("setPosts", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },


  fetchProfiles: ({ commit }) => {
    // Get profiles from api
    axios
      .get("http://localhost:9000/api/profiles")
      .then((res) => {
        // Commit changes to state
        commit("setProfiles", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

};

const mutations = {
  // Set state posts
  setPosts: (state, posts) => {
    state.posts = posts;
  },
  setUser: (state, user) => {
    state.user = user;
  },
  setProfiles: (state, profiles) => {
    state.profiles = profiles;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
