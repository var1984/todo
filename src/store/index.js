import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        description: "Finish the task",
        oldDescription: "",
        status: false,
      },
    ],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    task: (state) => (id) => {
      return state.tasks.find((task) => task.id === id);
    },
  },
  mutations: {
    setEditDescription(state, { value, id }) {
      const item = state.tasks.find((task) => task.id === id);
      item.oldDescription = item.description;
      item.description = value;
    },
    setCreateTask(state, payload) {
      state.tasks.push(payload);
    },
    setDeleteItem(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    setResetChange(state, payload) {
      const item = state.tasks.find((item) => item.oldDescription === payload);
      item.description = payload;
    },
    setChangeStatus(state, payload) {
      state.tasks.status = state.tasks.find((item) => item.status === payload);
    },
  },
  actions: {
    getCreateTask({ commit }, payload) {
      commit("setCreateTask", payload);
    },
  },
  modules: {},
});
