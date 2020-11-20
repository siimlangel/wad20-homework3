<template>

<section class="main-container">
  <div v-bind:key="post.id" v-for="post in getPosts">
      <Post v-bind:post="post"/>
  </div>
</section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Post from './Post.vue';
export default {
    name:"MainPage",
    computed: {
        ...mapGetters(["getPosts"])
    },
    components: {
        Post
    },
    methods: {
        ...mapActions(["fetchPosts"]),
    },
    created() {
        this.fetchPosts();
    }
}
</script>

<style scoped>
    .main-container {
        width: 50%;
        min-height: 100%;
        margin: auto auto;
        padding: 90px 15px 15px 15px;
        background-color: #ffffff;
    }
</style>