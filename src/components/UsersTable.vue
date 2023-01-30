<template>
  <table>
    <th>ID</th>
    <th>Created at</th>
    <th>Username</th>
    <th>Password</th>
    <th>Link</th>
    <th>Actions</th>
    <tr v-for="(user, idx) in users" :key="user._id">
      <td>{{ idx + 1 }}</td>
      <td>
        {{ user.createdAt ? new Date(user.createdAt).toLocaleString() : '—' }}
      </td>
      <td :class="{ accent: user.level > 1 }">{{ user.username }}</td>
      <td>{{ user.password }}</td>
      <td>{{ user.link || '—' }}</td>
      <td>
        <app-button
          v-if="user.level < 2"
          small
          dark
          @click="$emit('remove', user)"
          >Remove</app-button
        >
        <app-button small dark @click="$emit('edit', user)">Edit</app-button>
      </td>
    </tr>
  </table>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  components: { AppButton },
  props: {
    users: {
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
  th {
    padding: 0.25rem 0.5rem;
    background: $color-grey;
    font-weight: normal;
  }
  td {
    padding: 0.25rem 0.5rem;
    background: $color-light-grey;
    &.accent {
      color: #22c55e;
    }
  }
}
</style>
