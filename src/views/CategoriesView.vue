<template>
  <div class="category-view">
    <category-form
      v-model="category"
      :editMode="editMode"
      @create="handleCreate"
      @edit="handleEdit"
      @cancel="handleCancel"
    />
    <div class="category-view__list">
      <h2>Categories list</h2>
      <category-table :categories="categories" />
    </div>
  </div>
</template>

<script>
import appAxios from '@/appAxios';

import CategoryForm from '@/components/CategoryForm.vue';
import CategoryTable from '@/components/CategoryTable.vue';

export default {
  components: { CategoryForm, CategoryTable },
  data() {
    return {
      category: '',
      editMode: false,
      categories: [],
    };
  },
  methods: {
    async fetchCategories() {
      const { data } = await appAxios.get('/category');
      this.categories = data;
    },
    async handleCreate() {
      if (this.category.length < 3) return alert('Enter a category name!');

      try {
        await appAxios.post('/category', { title: this.category });
        this.fetchCategories();
        alert('Category has been successfully created!');
      } catch (error) {
        console.error(error);
        alert('Category create error...');
      } finally {
        this.handleCancel();
      }
    },
    async handleEdit() {},
    handleCancel() {
      this.editMode = false;
      this.category = '';
    },
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style lang="scss" scoped>
.category-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
