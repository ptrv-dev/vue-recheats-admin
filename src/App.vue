<template>
  <router-view />
</template>

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
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.25rem;
}
h5 {
  font-size: 1.125rem;
}
h6 {
  font-size: 1rem;
}
</style>
