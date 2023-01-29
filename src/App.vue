<template>
  <app-menu v-if="isLogged" />
  <main id="main" v-if="isLogged"><router-view /></main>
  <login-view v-if="!isLogged" @auth="checkAuth" />
</template>

<script>
import appAxios from './appAxios';

import AppMenu from '@/components/AppMenu.vue';
import LoginView from './views/LoginView.vue';

export default {
  components: {
    AppMenu,
    LoginView,
  },
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    async checkAuth() {
      this.isLogged = false;
      try {
        const { data } = await appAxios.get('/get-me');
        console.log(data);
        this.isLogged = true;
        this.$store.dispatch('setUser', data);
      } catch (error) {
        console.error(error);
        alert('Auth error!');
      }
    },
  },
  mounted() {
    this.checkAuth();
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
  flex: 1;
}
</style>
