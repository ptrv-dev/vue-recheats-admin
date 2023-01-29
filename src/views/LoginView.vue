<template>
  <div class="wrapper">
    <div class="login">
      <h2>Login</h2>
      <app-input
        class="login__input"
        placeholder="username"
        v-model="username"
      />
      <app-input
        class="login__input"
        placeholder="password"
        type="password"
        v-model="password"
      />
      <app-button @click="handleSubmit">Login</app-button>
    </div>
  </div>
</template>

<script>
import appAxios from '@/appAxios';

import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';

export default {
  components: { AppInput, AppButton },
  emits: ['auth'],
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await appAxios.post('/login', {
          username: this.username,
          password: this.password,
        });
        this.$emit('auth', true);
      } catch (error) {
        console.error(error);
        alert('Auth error!');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/vars';
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.login {
  background: $color-grey;
  display: inline-flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  align-items: center;
  gap: 1rem;
  &__input {
    width: 20rem;
  }
}
</style>
