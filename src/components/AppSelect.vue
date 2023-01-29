<template>
  <select
    class="select"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option value="" selected disabled v-if="title">{{ title }}</option>
    <slot />
  </select>
</template>

<script>
export default {
  props: {
    title: { type: String },
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.select {
  background: $color-light-grey;
  color: $color-white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
}
</style>
