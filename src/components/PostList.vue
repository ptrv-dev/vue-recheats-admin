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
  </div>
</template>

<script>
import AppInput from './AppInput.vue';
import AppCheckbox from './AppCheckbox.vue';
import AppSelect from './AppSelect.vue';

export default {
  components: { AppInput, AppCheckbox, AppSelect },
  data() {
    return {
      searchQuery: '',
      isEditable: true,
      displayBy: '10',
    };
  },
};
</script>

<style lang="scss" scoped>
.post-list {
  width: 100%;
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
