<template>
  <div class="users-view">
    <user-form
      v-model="user"
      @cancel="handleCancel"
      @edit="handleEditSave"
      @create="handleCreate"
    />
    <div class="users-view__list">
      <h3>Users list</h3>
      <users-table :users="users" @edit="handleEdit" @remove="handleRemove" />
    </div>
  </div>
</template>

<script>
import appAxios from '@/appAxios';

import UserForm from '@/components/UserForm.vue';
import UsersTable from '@/components/UsersTable.vue';

export default {
  components: { UserForm, UsersTable },
  data() {
    return {
      user: {
        id: '',
        username: '',
        password: '',
        link: '',
      },
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      const { data } = await appAxios.get('/user');
      this.users = data;
    },
    async handleRemove(user) {
      if (
        !window.confirm('Do you really want to delete a user?') ||
        !window.confirm('Are you sure?')
      )
        return;

      try {
        await appAxios.delete(`/user/${user._id}`);
        this.fetchUsers();
        alert('User successfully deleted!');
      } catch (error) {
        console.log(error);
        alert('User delete error...');
      }
    },
    handleEdit(user) {
      this.user.id = user._id;
      this.user.username = user.username;
      this.user.password = user.password;
      this.user.link = user.link;
    },
    handleCancel() {
      this.user.id = '';
      this.user.username = '';
      this.user.password = '';
      this.user.link = '';
    },
    async handleCreate() {
      if (!this.user.username) return alert('Enter a username!');
      if (!this.user.password) return alert('Enter a password!');

      try {
        await appAxios.post('/user', {
          username: this.user.username,
          password: this.user.password,
          link: this.user.link,
        });
        this.fetchUsers();
        alert('User successfully created!');
      } catch (error) {
        console.error(error);
        alert('User create error...');
      } finally {
        this.handleCancel();
      }
    },
    async handleEditSave() {
      if (!this.user.username) return alert('Enter a username!');
      if (!this.user.password) return alert('Enter a password!');

      try {
        await appAxios.patch(`/user/${this.user.id}`);
        this.fetchUsers();
        alert('User successfully changed!');
      } catch (error) {
        console.error(error);
        alert('User update error...');
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
.users-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
