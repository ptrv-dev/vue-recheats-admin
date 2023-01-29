<template>
  <input type="text" class="input" />
</template>

<style lang="scss" scoped>
@import '@/scss/vars';
.input {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: $color-white;
  background: $color-light-grey;
  border-radius: 0.5rem;
  border: none;
  &:focus {
    outline: 1px solid $color-dark;
  }
}
</style>
