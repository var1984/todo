<template>
  <div>
    <div class="description">
      <h2>{{ task.description }}</h2>
    </div>
    <div class="wrap-change">
      <input
        type="text"
        v-model="inputValue"
        class="wrap-change__input-value"
      />
      <div for="symbols" class="wrap-change__btns__check-box">
        <input
          type="checkbox"
          id="symbols"
          name="symbols"
          value="symbols"
          class="wrap-change__check-box"
          @click="resolveSave"
        />
        <label for="symbols">Resolve save</label>
      </div>
      <div class="wrap-change__btns">
        <button
          @click="changeTask"
          :disabled="resolve"
          :style="resolve ? 'background: #bfb4c9' : '#5c2d88'"
        >
          Save change
        </button>
        <button @click="resetChange">Return change</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "ChangeTask",
  props: {
    task: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      inputValue: "",
      resolve: true,
    };
  },
  methods: {
    ...mapActions({
      getCreateTask: "getCreateTask",
    }),
    ...mapMutations({
      setEditDescription: "setEditDescription",
      setResetChange: "setResetChange",
    }),
    changeTask() {
      if (!this.task?.description || !this.inputValue) return;
      this.setEditDescription({ value: this.inputValue, id: this.task.id });
      this.inputValue = "";
      this.$router.push({ path: "/" });
    },
    resetChange() {
      this.setResetChange(this.task?.oldDescription);
    },
    resolveSave() {
      this.resolve = !this.resolve;
    },
  },
};
</script>
<style lang="scss" scoped>
.description {
  text-align: center;
  padding-top: 50px;
  max-width: 700px;
  margin: auto;
}

.wrap-change {
  margin-top: 75px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__input-value {
    width: 400px;
    height: 30px;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 20px;
    border: 2px solid rgb(211, 205, 205);
    border-radius: 10px;
  }

  &__btns {
    display: flex;

    button {
      display: block;
      margin-left: 20px;
      margin-top: 20px;
      padding: 10px;
      border-radius: 5px;
      background-color: #299ee2;
      color: #fff;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #8c4bc9;
      }
    }
  }
}
</style>
