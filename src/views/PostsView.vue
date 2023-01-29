<template>
  <div id="post-view">
    <post-form />
    <post-list v-model:filter="filter" :posts="posts" :max-page="maxPage" />
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
        displayBy: '20',
        page: 1,
      },
      maxPage: 1,
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const { data } = await appAxios.get(
        `/post?search=${this.filter.searchQuery}&page=${this.filter.page}&limit=${this.filter.displayBy}`
      );
      this.posts = data.data;
      this.maxPage = data.maxPage;
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
