<template>
  <div class="user-form">
    <h4 class="user-form__title">
      {{ modelValue.id ? 'Update user' : 'Create new user' }}
    </h4>
    <app-input
      :modelValue="modelValue.username"
      @input="
        $emit('update:modelValue', {
          ...modelValue,
          username: $event.target.value,
        })
      "
      placeholder="username..."
    />
    <app-input
      :modelValue="modelValue.password"
      @input="
        $emit('update:modelValue', {
          ...modelValue,
          password: $event.target.value,
        })
      "
      placeholder="password..."
    />
    <app-input
      :modelValue="modelValue.link"
      @input="
        $emit('update:modelValue', {
          ...modelValue,
          link: $event.target.value,
        })
      "
      placeholder="link..."
    />
    <app-button v-if="!modelValue.id" @click="$emit('create')"
      >Create</app-button
    >
    <div class="user-form__row" v-else>
      <app-button @click="$emit('edit')">Save</app-button>
      <app-button @click="$emit('cancel')">Cancel</app-button>
    </div>
  </div>
</template>

<script>
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';
export default {
  components: { AppButton, AppInput },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:modelValue', 'create', 'edit', 'cancel'],
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.user-form {
  padding: 1rem;
  border-radius: 1rem;
  background: $color-grey;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  .input {
    width: 20rem;
  }
  &__title {
    font-weight: normal;
  }
  &__row {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
