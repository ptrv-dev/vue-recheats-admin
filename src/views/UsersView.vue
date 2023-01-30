<template>
  <div class="users-view">
    <user-form v-model="user" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  components: { UserForm },
  data() {
    return {
      user: {
        id: '',
        username: '',
        password: '',
        link: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.users-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
