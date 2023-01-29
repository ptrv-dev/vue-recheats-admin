<template>
  <input
    type="text"
    class="input"
    :value="modelValue"
    @change="onChange"
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    modelModifiers: {
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(e) {
      if (!this.modelModifiers.lazy)
        this.$emit('update:modelValue', e.target.value);
    },
    onChange(e) {
      if (this.modelModifiers.lazy)
        this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

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
