<template>
  <div class="add-wrap">
    <input
      type="text"
      v-model="description"
      class="add-wrap__input"
      placeholder="Add a new task"
    />
    <div class="add-wrap__add-btn">
      <button @click="saveTask" class="btn">Save</button>
      <button @click="CancelModal" class="btn">Cancel</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddTask",
  data() {
    return {
      description: "",
    };
  },
  computed: {
    ...mapGetters({
      task: "task",
      tasks: "tasks",
    }),
  },
  methods: {
    ...mapActions({ getCreateTask: "getCreateTask" }),

    CancelModal() {
      this.$emit("closeAddModal");
    },
    saveTask() {
      const int = Math.floor(Math.random() * (150000 - 0 + 1)) + 0;

      if (!this.description) return;
      this.getCreateTask({
        id: int,
        description: this.description,
        oldDescription: this.description,
        status: false,
      });

      this.$emit("closeAddModal");
    },
  },
};
</script>
<style lang="scss" scoped>
.add-wrap {
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5c2d88;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  &__add-btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .btn {
    padding: 5px 15px;
    border: none;
    color: #30bb76;
    cursor: pointer;
    font-size: 25px;
    background-color: #5c2d88;

    &:hover {
      background-color: #4a3f53;
    }
  }

  &__input {
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 15px;
  }
}
</style>
