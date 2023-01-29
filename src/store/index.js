import { createStore } from 'vuex';

export default createStore({
  state: {
    id: '',
    username: '',
    level: 0,
    link: '',
  },
  getters: {},
  mutations: {
    setId(state, payload) {
      state.id = payload;
    },
    setUsername(state, payload) {
      state.username = payload;
    },
    setLevel(state, payload) {
      state.level = payload;
    },
    setLink(state, payload) {
      state.link = payload;
    },
  },
  actions: {
    setUser(context, user) {
      context.commit('setId', user._id);
      context.commit('setUsername', user.username);
      context.commit('setLevel', user.level);
      context.commit('setLink', user.link);
    },
  },
});
