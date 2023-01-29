<template>
  <app-menu />
  <main id="main"><router-view /></main>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue';

export default {
  components: {
    AppMenu,
  },
};
</script>

<style lang="scss">
@import '@/scss/vars';

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PT Sans', system-ui, sans-serif;
}
body {
  font-size: 16px;
  background-color: $color-dark;
  color: $color-white;
}
ul {
  list-style: none;
}
img {
  display: block;
}
button {
  cursor: pointer;
}
h1 {
  font-size: 2.5rem; /* 40px */
}
h2 {
  font-size: 2rem; /* 32px */
}
h3 {
  font-size: 1.5rem; /* 24px */
}
h4 {
  font-size: 1.25rem; /* 20px */
}
h5 {
  font-size: 1.125rem; /* 18px */
}
h6 {
  font-size: 1rem; /* 16px */
}
#app {
  min-height: 100vh;
  display: flex;
}
#main {
  padding: 2rem;
  overflow: auto;
}
</style>
