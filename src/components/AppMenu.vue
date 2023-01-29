<template>
  <aside class="aside">
    <h3 class="aside__logo">Admin-panel</h3>
    <nav class="aside__nav aside-nav">
      <router-link
        v-for="(item, idx) in navigation"
        :key="idx"
        :to="item.link"
        class="aside-nav__item"
        active-class="aside-nav__item_active"
        exact-active-class=""
      >
        <img :src="`/assets/img/icons/${item.icon}`" alt="" />
        {{ item.title }}
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          icon: 'home.svg',
          title: 'Home',
          link: '/',
          level: 1,
        },
        {
          icon: 'folder.svg',
          title: 'Posts',
          link: '/posts',
          level: 1,
        },
        {
          icon: 'home.svg',
          title: 'Categories',
          link: '/categories',
          level: 2,
        },
        {
          icon: 'users.svg',
          title: 'Users',
          link: '/users',
          level: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.aside {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: $color-grey;
  min-width: 20rem;
  &__logo {
    align-self: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
}
.aside-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &__item {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: $color-white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    gap: 0.5rem;
    &_active {
      background: $color-dark;
    }
  }
}
</style>
