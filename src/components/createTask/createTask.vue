<template>
  <div>
    <div v-for="task of tasks" :key="task.id" class="create-wrap">
      <div
        class="create-wrap__text"
        :style="task.status ? 'text-decoration: line-through' : ''"
      >
        {{ task.description }}
      </div>
      <div class="create-wrap__link-wrap">
        <div for="symbols" class="create-wrap__check-box">
          <input
            type="checkbox"
            id="symbols"
            name="symbols"
            value="symbols"
            @click="checkedDone(task)"
          />
          <label for="symbols"></label>
        </div>
        <router-link
          :to="{ path: `edit/${task.id}` }"
          class="create-wrap__edit"
          :disabled="task.status"
          :event="!task.status ? 'click' : ''"
        >
          EDIT
        </router-link>
        <button
          @click="deleteItem(task.id)"
          class="create-wrap__btn"
          :disabled="!task.status"
        >
          <img :src="require('@/assets/icon/icon-del.svg')" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CreateTask",
  props: {
    tasks: {
      type: Array,
      require: true,
    },
  },
  methods: {
    ...mapMutations({
      setChangeStatus: "setChangeStatus",
    }),
    deleteItem(id) {
      this.$emit("deleteTask", id);
    },
    checkedDone(task) {
      this.setChangeStatus((task.status = !task.status));
    },
  },
};
</script>

<style lang="scss" scoped>
.create-wrap {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 2px solid rgb(211, 205, 205);
  border-radius: 10px;
  padding: 10px;

  &__text {
    width: 100%;
    flex: 1;
  }

  &__edit {
    margin-right: 10px;
    color: #5e5e5e;
    text-decoration: none;
    cursor: pointer;
  }

  &__btn {
    border: none;
    background: none;
    cursor: pointer;
  }

  &__link-wrap {
    display: flex;
    align-items: center;
  }

  &__check-box {
    margin-right: 10px;
  }
}
</style>
