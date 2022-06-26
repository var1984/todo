<template>
  <div>
    <h1>Todo list</h1>
    <div class="content">
      <CreateTask :tasks="tasks" @deleteTask="deleteTask" />
      <AddTask v-if="showModal" @closeAddModal="closeAddModal" />
      <ComfirmModal
        v-if="showComfirmModal"
        :taskId="taskId"
        @closeModal="closeModal"
      />
      <div class="btn-wrap">
        <button @click="creaNewTask" class="new-task" id="newTask"></button>
        <label for="newTask">NEW TASK</label>
      </div>
    </div>
  </div>
</template>

<script>
import CreateTask from "../components/createTask/createTask";
import { mapGetters, mapMutations } from "vuex";
import AddTask from "../components/common/addTask/addTask";
import ComfirmModal from "../components/common/comfirmModal/comfirmModal";
export default {
  name: "HomeTodo",
  components: {
    CreateTask,
    AddTask,
    ComfirmModal,
  },
  data() {
    return {
      showComfirmModal: false,
      taskId: null,
      showModal: false,
    };
  },
  computed: {
    ...mapGetters({
      tasks: "tasks",
    }),
  },
  methods: {
    ...mapMutations({
      setShowAddTask: "setShowAddTask",
    }),
    creaNewTask() {
      this.showModal = true;
    },
    deleteTask(id) {
      this.taskId = id;
      this.showComfirmModal = true;
    },
    closeModal() {
      this.showComfirmModal = false;
    },
    closeAddModal() {
      this.showModal = false;
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}

.content {
  max-width: 700px;
  margin: 100px auto;
}

.btn-wrap {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 55px;
  label {
    cursor: pointer;
  }

  .new-task {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: #5c2d88;
    margin-right: 20px;
    display: flex;
    position: relative;
    cursor: pointer;
    &::after {
      content: "+";
      font-size: 40px;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
