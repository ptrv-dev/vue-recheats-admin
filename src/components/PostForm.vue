<template>
  <div class="post-form">
    <post-form-image v-model="image" />
    <app-input v-model="title" placeholder="Title..." />
    <app-text-area v-model="description" placeholder="Description..." />
    <app-select title="Select user..." v-model="user"></app-select>
    <app-button class="post-form__button">Create</app-button>
  </div>
</template>

<script>
import AppInput from './AppInput.vue';
import AppTextArea from './AppTextArea.vue';
import AppSelect from './AppSelect.vue';
import AppButton from './AppButton.vue';
import PostFormImage from './PostFormImage.vue';

export default {
  components: {
    PostFormImage,
    AppInput,
    AppTextArea,
    AppSelect,
    AppButton,
  },
  data() {
    return {
      image: '',
      title: '',
      description: '',
      user: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.post-form {
  background: $color-grey;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &__button {
    align-self: center;
  }
}
</style>
