<template>
  <div class="post-form-image">
    <input
      type="file"
      style="display: none"
      ref="fileInputRef"
      accept="image/jpeg, image/png"
      @change="handleFile"
    />
    <img v-if="modelValue" :src="modelValue" alt="" />
    <button
      v-if="!modelValue"
      class="post-form-image__btn"
      @click="$refs.fileInputRef.click()"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 6V26M26 16H6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      v-else
      class="post-form-image__btn post-form-image__btn_remove"
      @click="handleRemove"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleFile(event) {
      const imageBlobUrl = URL.createObjectURL(event.target.files[0]);
      this.$emit('update:modelValue', imageBlobUrl);
    },
    handleRemove() {
      window.confirm('Remove image?') && this.$emit('update:modelValue', '');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.post-form-image {
  background: $color-light-grey;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  width: 580px;
  height: 240px;
  &:hover {
    .post-form-image__btn_remove {
      opacity: 1;
    }
  }
  &__btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    padding: 1rem;
    border-radius: 1rem;
    background: $color-grey;
    color: $color-white;
    border: none;
    &_remove {
      left: 1rem !important;
      top: 1rem;
      transform: translate(0, 0);
      padding: 0.5rem;
      border-radius: 0.25rem;
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
