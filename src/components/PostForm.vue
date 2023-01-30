<template>
  <div class="post-form">
    <post-form-image v-model="image" />
    <app-input v-model="title" placeholder="Title..." />
    <app-text-area v-model="description" placeholder="Description..." />
    <app-select title="Select category..." v-model="category">
      <option
        v-for="category in categories"
        :key="category._id"
        :value="category._id"
      >
        {{ category.title }}
      </option>
    </app-select>
    <app-select v-if="isAdmin" title="Select user..." v-model="user">
      <option v-for="user in users" :key="user._id" :value="user._id">
        {{ `${user.username}${user.level > 1 ? '*' : ''}` }}
      </option>
    </app-select>
    <app-button v-if="!editMode" class="post-form__button" @click="handleCreate"
      >Create</app-button
    >
    <div class="post-form__row" v-if="editMode">
      <app-button @click="$emit('edit')">Save</app-button>
      <app-button @click="$emit('cancel')">Cancel</app-button>
    </div>
  </div>
</template>

<script>
import AppInput from './AppInput.vue';
import AppTextArea from './AppTextArea.vue';
import AppSelect from './AppSelect.vue';
import AppButton from './AppButton.vue';
import PostFormImage from './PostFormImage.vue';
import appAxios from '@/appAxios';

export default {
  components: {
    PostFormImage,
    AppInput,
    AppTextArea,
    AppSelect,
    AppButton,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    editMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'create', 'edit', 'cancel'],
  data() {
    return {
      image: this.modelValue.image,
      title: this.modelValue.title,
      description: this.modelValue.description,
      category: this.modelValue.category,
      user: this.modelValue.user,
      categories: [],
      users: [],
    };
  },
  watch: {
    image(v) {
      this.$emit('update:modelValue', { ...this.modelValue, image: v });
    },
    title(v) {
      this.$emit('update:modelValue', { ...this.modelValue, title: v });
    },
    description(v) {
      this.$emit('update:modelValue', { ...this.modelValue, description: v });
    },
    user(v) {
      this.$emit('update:modelValue', { ...this.modelValue, user: v });
    },
    category(v) {
      this.$emit('update:modelValue', { ...this.modelValue, category: v });
    },
    modelValue(v) {
      this.image = v.image;
      this.title = v.title;
      this.description = v.description;
      this.category = v.category;
      this.user = v.user;
    },
  },
  methods: {
    handleCreate() {
      this.$emit('create');
    },
    async fetchCategories() {
      const { data } = await appAxios.get('/category');
      this.categories = data;
    },
    async fetchUsers() {
      const { data } = await appAxios.get('/user');
      this.users = data;
    },
  },
  computed: {
    isAdmin() {
      return this.$store.state.level > 1;
    },
  },
  mounted() {
    this.fetchCategories();
    this.fetchUsers();
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
  &__row {
    display: inline-flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
}
</style>
