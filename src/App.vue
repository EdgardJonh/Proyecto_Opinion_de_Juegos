<template>
  <div class="header mb-2">

    <div class="m-3">
      <a href="" style="color: white; text-decoration: none;"><font-awesome-icon :icon="['fas', 'headset']" style="color: #f1f4fa;" /> Games opinion</a>
    </div>
    <div class="m-3">
      <router-link style="color:rgb(230, 228, 228); text-decoration: none;" to="/"><font-awesome-icon :icon="['fas', 'house']" style="color: #e6e4e4;" /> Home</router-link>
    </div>
</div>

  <router-view />
</template>

<style>
.header {
  background-color: black;
  display: flex;
  justify-content: space-between;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
