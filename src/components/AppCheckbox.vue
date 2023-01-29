<template>
  <label v-if="label">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    {{ label }}
  </label>
  <input
    v-else
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
input[type='checkbox'] {
  width: 1rem;
  height: 1rem;
}
label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: $color-white;
}
</style>
