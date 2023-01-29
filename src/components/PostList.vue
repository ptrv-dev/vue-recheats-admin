<template>
  <div class="post-list">
    <div class="post-list__header post-list-header">
      <h2 class="post-list-header__title">Post list</h2>
      <app-input
        class="post-list-header__input"
        placeholder="Search..."
        v-model.lazy="searchQuery"
      />
      <div class="post-list-header__col">
        <app-checkbox label="Editable" v-model="isEditable" />
        <div class="post-list-header__display">
          Display by:
          <app-select v-model="displayBy">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
          </app-select>
        </div>
      </div>
    </div>
    <posts-table :posts="posts" />
    <app-pagination v-model="page" :maxPage="maxPage" />
  </div>
</template>

<script>
import AppInput from './AppInput.vue';
import AppCheckbox from './AppCheckbox.vue';
import AppSelect from './AppSelect.vue';
import PostsTable from './PostsTable.vue';
import AppPagination from './AppPagination.vue';

export default {
  components: { AppInput, AppCheckbox, AppSelect, PostsTable, AppPagination },
  props: {
    filter: {
      type: Object,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
    maxPage: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:filter'],
  data() {
    return {
      searchQuery: this.filter.searchQuery,
      isEditable: this.filter.isEditable,
      displayBy: this.filter.displayBy,
      page: this.filter.page || 1,
    };
  },
  watch: {
    searchQuery(v) {
      this.$emit('update:filter', { ...this.filter, searchQuery: v });
    },
    isEditable(v) {
      this.$emit('update:filter', { ...this.filter, isEditable: v });
    },
    displayBy(v) {
      this.$emit('update:filter', { ...this.filter, displayBy: v });
    },
    page(v) {
      this.$emit('update:filter', { ...this.filter, page: v });
    },
  },
};
</script>

<style lang="scss" scoped>
.post-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.post-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__title {
    font-weight: normal;
  }
  &__input {
    width: 20rem;
  }
  &__col {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  &__display {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
