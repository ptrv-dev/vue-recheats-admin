<template>
  <button class="btn" :class="{ btn_small: small, btn_dark: dark }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: $color-white;
  background: $color-light-grey;
  border: none;
  display: inline-flex;
  &_small {
    padding: 0.25rem 0.5rem;
  }
  &_dark {
    background: $color-grey;
  }
}
</style>
