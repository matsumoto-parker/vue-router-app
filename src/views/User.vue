<template>
  <div>
    <h1>User.vueです</h1>
    <button @click="push">push</button>
    <button @click="replace">replace</button>
    <button @click="back">back</button>
    <router-link :to="{ name: 'UserEdit', params: { id: $route.params.id }} ">Edit</router-link>|
    <router-link :to="{ name: 'UserLikes', params: { id: $route.params.id }} ">Likes</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  methods: {
    push() {
      this.$router.push({ name: "Home" });
    },
    replace() {
      this.$router.replace({ name: "About" });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style>
</style>