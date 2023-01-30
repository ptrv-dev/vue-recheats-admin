<template>
  <div class="category-form">
    <app-input
      class="category-form__input"
      :modelValue="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Category name..."
    />
    <app-button @click="$emit('create')" v-if="!editMode">Create</app-button>
    <div class="category-form__row" v-else>
      <app-button @click="$emit('edit')">Save</app-button>
      <app-button @click="$emit('cancel')">Cancel</app-button>
    </div>
  </div>
</template>

<script>
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';

export default {
  components: { AppInput, AppButton },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    editMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'create', 'edit', 'cancel'],
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.category-form {
  padding: 2rem;
  display: flex;
  background: $color-grey;
  border-radius: 1rem;
  gap: 1rem;
  &__input {
    width: 20rem;
  }
  &__row {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
