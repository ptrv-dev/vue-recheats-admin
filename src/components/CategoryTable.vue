<template>
  <table>
    <th>ID</th>
    <th>Created date</th>
    <th>Title</th>
    <th>Actions</th>
    <tr v-for="(category, idx) in categories" :key="category._id">
      <td>{{ idx + 1 }}</td>
      <td>
        {{
          category.createdAt
            ? new Date(category.createdAt).toLocaleString()
            : '—'
        }}
      </td>
      <td>{{ category.title }}</td>
      <td>
        <app-button small dark @click="$emit('remove', category)"
          >Remove</app-button
        >
        <app-button small dark @click="$emit('edit', category)"
          >Edit</app-button
        >
      </td>
    </tr>
  </table>
</template>

<script>
import AppButton from './AppButton.vue';
export default {
  components: { AppButton },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  emits: ['remove', 'edit'],
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
table {
  width: 100%;
  font-size: 1rem;
  color: $color-white;

  th {
    background: $color-grey;
    font-weight: normal;
    padding: 0.25rem 0.5rem;
  }
  td {
    background: $color-light-grey;
    padding: 0.25rem 0.5rem;
  }
}
</style>
