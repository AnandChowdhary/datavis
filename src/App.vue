<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main><router-view /></main>
  </div>
</template>

<style lang="scss">
body {
  font: menu;
  font-size: 100%;
  margin: 0;
}
</style>

<style lang="scss" scoped>
nav {
  position: fixed;
  overflow: auto;
  background-color: #eee;
}
main {
  margin: auto;
  padding: 2rem;
  max-width: 600px;
}
</style>
