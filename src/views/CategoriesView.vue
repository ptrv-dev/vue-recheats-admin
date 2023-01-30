<template>
  <div class="category-view">
    <category-form
      v-model="category"
      :editMode="editMode"
      @create="handleCreate"
      @edit="handleEdit"
      @cancel="handleCancel"
    />
  </div>
</template>

<script>
import CategoryForm from '@/components/CategoryForm.vue';
import appAxios from '@/appAxios';
export default {
  components: { CategoryForm },
  data() {
    return {
      category: '',
      editMode: false,
      categories: [],
    };
  },
  methods: {
    async fetchCategories() {},
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
};
</script>

<style lang="scss" scoped>
.category-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
