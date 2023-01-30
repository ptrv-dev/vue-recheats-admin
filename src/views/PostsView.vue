<template>
  <div id="post-view">
    <post-form v-model="post" @create="handleCreate" />
    <post-list
      v-model:filter="filter"
      :posts="posts"
      :max-page="maxPage"
      @remove="handleRemove"
      @edit="handleEdit"
    />
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
      post: {
        image: '',
        title: '',
        description: '',
        category: '',
        user: '',
      },
      maxPage: 1,
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const { data } = await appAxios.get(
        `/post?search=${this.filter.searchQuery}&page=${this.filter.page}&limit=${this.filter.displayBy}${this.authorQueryParam}`
      );
      this.posts = data.data;
      this.maxPage = data.maxPage;
    },
    async imageUpload(image) {
      const { data } = await appAxios.get(image, {
        responseType: 'blob',
        baseURL: '',
      });
      const imageFile = new File([data], `image.${data.type.split('/')[1]}`);

      const formData = new FormData();

      formData.append('images', imageFile);

      const response = await appAxios.post('/upload', formData);

      return response.data.files[0];
    },
    async handleCreate() {
      if (!this.post.image) return alert('Select the image!');
      if (this.post.title.length < 4) return alert('Enter a title!');
      if (this.post.description.length < 4)
        return alert('Enter a description!');
      if (!this.post.user) return alert('Select a user!');
      if (!this.post.category) return alert('Select a category!');

      const fileUrl = await this.imageUpload(this.post.image);

      try {
        await appAxios.post('/post', {
          image: fileUrl,
          title: this.post.title,
          description: this.post.description,
          category: this.post.category,
          author: this.post.user,
        });
        this.fetchPosts();
        alert('Post has been successfully created!');
      } catch (error) {
        console.error(error);
        alert('Post create error...');
      }
    },
    async handleRemove(post) {
      if (this.$store.state.level < 2 && post.author !== this.$store.state.id)
        return alert("You're not the author");

      if (
        !window.confirm('Do you really want to delete the post?') ||
        !window.confirm('Are your sure?')
      )
        return false;

      try {
        await appAxios.delete(`/post/${post._id}`);
        alert('Post successfully deleted!');
        this.fetchPosts();
      } catch (error) {
        console.error(error);
        alert('Post delete error...');
      }
    },
    async handleEdit(post) {
      if (this.$store.state.level < 2 && post.author !== this.$store.state.id)
        return alert("You're not the author");
      console.log(post);
    },
  },
  computed: {
    authorQueryParam() {
      if (this.filter.isEditable) {
        if (this.$store.state.level > 1) return '';
        return `&author=${this.$store.state.id}`;
      }
      return '';
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
