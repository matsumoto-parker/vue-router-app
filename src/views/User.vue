<template>
  <div>
    <h1>User.vueです</h1>
    <p>params : {{ $route.params }}</p>
    <p>id : {{ $route.params.id }}</p>
    <p>userId : {{ userId }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id;
    }
  }
};
</script>

<style>
</style>