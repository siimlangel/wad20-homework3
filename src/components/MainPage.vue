<template>
<div>
    <h1>Main Page</h1>
  <div v-bind:key="post.id" v-for="post in getPosts">
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name:"MainPage",
    computed: {
        ...mapGetters(["getPosts"])
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