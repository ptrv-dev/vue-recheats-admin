<template>
  <table>
    <th>ID</th>
    <th>Created date</th>
    <th>Title</th>
    <th>Category</th>
    <th>Moderator</th>
    <th>Actions</th>

    <tr v-for="(item, idx) in posts" :key="idx">
      <td>{{ idx + 1 }}</td>
      <td>{{ new Date(item.createdAt).toLocaleString() }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.category?.title || '—' }}</td>
      <td>{{ item.author?.username || '—' }}</td>
      <td>
        <app-button :small="true" :dark="true" @click="$emit('remove', item)"
          >Remove</app-button
        >
        <app-button :small="true" :dark="true" @click="$emit('edit', item)"
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
    posts: {
      type: Array,
      required: true,
    },
  },
  emits: ['edit', 'remove'],
  methods: {
    handleEdit(id) {
      this.$emit('edit', id);
    },
    handleRemove(id) {
      this.$emit('remove', id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
table {
  width: 100%;
  th {
    font-weight: normal;
    padding: 0.5rem;
    background: $color-grey;
  }
  td {
    background: $color-light-grey;
    padding: 0.25rem 0.5rem;
  }
}
</style>
