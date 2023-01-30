<template>
  <div class="category-view">
    <category-form
      v-model="category"
      :editMode="editMode"
      @create="handleCreate"
      @edit="handleEditSave"
      @cancel="handleCancel"
    />
    <div class="category-view__list">
      <h2>Categories list</h2>
      <category-table
        :categories="categories"
        @remove="handleRemove"
        @edit="handleEdit"
      />
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
      id: '',
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
    handleEdit(category) {
      this.editMode = true;
      this.category = category.title;
      this.id = category._id;
    },
    async handleEditSave() {
      if (!window.confirm('Save the changes you made?')) return;

      try {
        await appAxios.patch(`/category/${this.id}`, { title: this.category });
        this.fetchCategories();
        alert('Category successfully changed!');
      } catch (error) {
        console.error(error);
        alert('Category update error...');
      } finally {
        this.handleCancel();
      }
    },
    handleCancel() {
      this.editMode = false;
      this.category = '';
      this.id = '';
    },
    async handleRemove(category) {
      if (
        !window.confirm('Do you really want to delete a category?') ||
        !window.confirm('Are your sure?')
      )
        return;

      try {
        await appAxios.delete(`/category/${category._id}`);
        this.fetchCategories();
        alert('Category successfully deleted!');
      } catch (error) {
        console.error(error);
        alert('Category remove error...');
      }
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
  gap: 2rem;
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
