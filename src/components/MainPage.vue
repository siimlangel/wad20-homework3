<template>
<div>
  <div v-bind:key="post.id" v-for="post in getPosts">
      <Post v-bind:post="post"/>
  </div>
</div>
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

</style>