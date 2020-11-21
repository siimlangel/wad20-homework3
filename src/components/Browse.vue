<template>
  <section class="main-container2">
    <div v-bind:key="profile.id" v-for="profile in getProfiles" class="profile1">
      <Profile v-bind:profile="profile" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Profile from "./Profile";
export default {
  name: "Browse",
  computed: {
    ...mapGetters(["getProfiles"]),
  },
  components: {
    Profile,
  },
  methods: {
    ...mapActions(["fetchProfiles"]),
  },
  created() {
    this.fetchProfiles();
  },
};
</script>

<style scoped>
.main-container2 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 50%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
  min-height: 100%;
}

.profile1 {
  margin: 15px auto;
  border-radius: 5px;
  height: 55%;
  width: 47%;
}

</style>