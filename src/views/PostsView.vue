<template>
  <div id="post-view">
    <post-form />
    <post-list v-model:filter="filter" :posts="posts" />
  </div>
</template>

<script>
import appAxios from '@/appAxios';

import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: { PostForm, PostList },
  data() {
    return {
      filter: {
        searchQuery: '',
        isEditable: true,
        displayBy: '10',
      },
      posts: [],
      page: 1,
    };
  },
  methods: {
    async fetchPosts() {
      const { data } = await appAxios.get(
        `/post?search=${this.filter.searchQuery}&page=${this.page}&limit=${this.filter.displayBy}`
      );
      this.posts = data.data;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    filter: {
      deep: true,
      handler() {
        this.fetchPosts();
      },
    },
    page() {
      this.fetchPosts();
    },
  },
};
</script>

<style lang="scss" scoped>
#post-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
}
</style>
