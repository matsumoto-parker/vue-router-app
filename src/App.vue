<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{path: '/'}" exact>Home</router-link>|
      <router-link :to="{name: 'About'}">About</router-link>|
      <router-link to="/profile">profile</router-link>|
      <router-link to="/User/1?age=20">User</router-link>|
      <router-link :to="{name: 'User', params: { id: 'taro', query: {age: 30}}}">User</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.active-exactly {
  color: #42b983;
}
</style>
