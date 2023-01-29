<template>
  <button class="btn">
    <slot />
  </button>
</template>

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
}
</style>
