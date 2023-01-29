<template>
  <div class="pagination">
    <button
      class="pagination__btn"
      :class="{ pagination__btn_active: modelValue === idx + 1 }"
      @click="$emit('update:modelValue', idx + 1)"
      v-for="(_, idx) in Array(maxPage)"
      :key="idx"
    >
      {{ idx + 1 }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    maxPage: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.pagination {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  &__btn {
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    background: $color-light-grey;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border: none;
    color: $color-white;
    transition: background 0.25s ease-in-out;
    &:hover {
      background: $color-grey;
    }
    &_active {
      background: $color-grey;
    }
  }
}
</style>
