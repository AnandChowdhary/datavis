<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">
        <font-awesome-icon class="icon" icon="globe-americas" />
        <span>Countries</span>
      </router-link>
      <router-link to="/poverty">
        <font-awesome-icon class="icon" icon="money-bill" />
        <span>Poverty</span>
      </router-link>
      <router-link to="/generation">
        <font-awesome-icon class="icon" icon="users" />
        <span>Generation</span>
      </router-link>
      <router-link to="/latitude">
        <font-awesome-icon class="icon" icon="globe" />
        <span>Latitude</span>
      </router-link>
      <router-link to="/gender">
        <font-awesome-icon class="icon" icon="transgender" />
        <span>Gender/age</span>
      </router-link>
      <router-link to="/calculator">
        <font-awesome-icon class="icon" icon="calculator" />
        <span>Calculator</span>
      </router-link>
      <router-link to="/about">
        <font-awesome-icon class="icon" icon="info-circle" />
        <span>About</span>
      </router-link>
    </nav>
    <main><router-view /></main>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobeAmericas,
  faInfoCircle,
  faMoneyBill,
  faUsers,
  faGlobe,
  faCalculator,
  faTransgender
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faGlobeAmericas,
  faInfoCircle,
  faMoneyBill,
  faUsers,
  faGlobe,
  faCalculator,
  faTransgender
)
export default {
  components: {
    FontAwesomeIcon
  }
}
</script>


<style lang="scss">
img {
  max-width: 100%;
}
body {
  font: menu;
  font-size: 100%;
  margin: 0;
  background-color: #3c40c6;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}
</style>

<style lang="scss" scoped>
nav {
  position: fixed;
  overflow: auto;
  background-color: #0c2461;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    padding: 1rem;
    &.router-link-exact-active {
      background: #3c40c6;
    }
  }
}
@media (max-width: 500px) {
  nav {
    flex-direction: row;
    flex-wrap: nowrap;
    position: static;
    justify-content: flex-start;
  }
}
.icon {
  display: block;
  font-size: 200%;
  margin: auto;
  margin-bottom: 0.75rem;
}
main {
  margin: auto;
  padding: 2rem;
}
@media (min-width: 500px) {
  main {
    padding-left: 7.5rem;
  }
}
</style>
