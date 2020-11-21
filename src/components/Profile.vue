<template>
  <div class="profile">
    <div class="profile-author">
      <span class="profile-author-info">
        <img id="image" :src="this.profile.author.avatar" />
        <p id="nimi">{{ authorName }}</p>
      </span>
    </div>
    <div class="profile-actions">
      <button
        type="button"
        name="Subscribe"
        @click="subscribeActive = !subscribeActive"
        :class="[
          this.subscribeActive
            ? 'subscribe-button subscribed'
            : 'subscribe-button',
        ]"
      >
      <div v-if="subscribeActive">Subscribed </div>
      <div v-else>Subscribe </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      firstname: this.profile.author.firstname,
      lastname: this.profile.author.lastname,
      subscribeActive: false,
    };
  },
  props: {
    profile: Object,
  },
  computed: {
    authorName() {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script>


<style scoped>
.profile {
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.profile .profile-author {
  padding: 10px;
}

.profile .profile-author::after {
  content: "";
  display: block;
  clear: both;
}

.profile .profile-author .profile-author-info {
  position: relative;
}

.profile .profile-author .profile-author-info img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  position: relative;
}

.profile-actions {
  display: flex;
  justify-content: center;
  height: 54px;
}

#nimi {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.subscribe-button.subscribed {
  background-color: white;
  color: #8b008b;
  border: 1px solid #8b008b;
  box-shadow: 0px 0px 15px -2px #8a8a8a;
  margin-bottom: 25px;
}

.subscribe-button {
  color: white;
  background-color: #8b008b;
  height: 25px;
  line-height: 10px;
  border: none;
  margin-bottom: 25px;
}
</style>