<template>
  <div id="post-view">
    <post-form />
    <post-list />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: { PostForm, PostList },
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
