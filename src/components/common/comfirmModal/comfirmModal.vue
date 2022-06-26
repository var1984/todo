<template>
  <div class="wrap-comfirm">
    <div class="wrap-comfirm__text">{{ text }}</div>
    <div class="wrap-comfirm__btn-wrap">
      <button class="wrap-comfirm__btn-wrap__ok btn" @click="comfirm">
        OK
      </button>
      <button class="wrap-comfirm__btn-wrap__close btn" @click="closeModal">
        CANCEL
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ComfirmModal",
  props: {
    text: {
      type: String,
      default: "Do you want to confirm?",
    },
    taskId: {
      type: Number,
    },
  },
  methods: {
    ...mapMutations({
      setDeleteItem: "setDeleteItem",
    }),
    comfirm() {
      this.setDeleteItem(this.taskId);
      this.$emit("closeModal");
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-comfirm {
  width: 200px;
  height: 100px;
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

  &__btn-wrap {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .btn {
      padding: 5px 15px;
      border: none;
      color: #30bb76;
      cursor: pointer;
      background-color: #5c2d88;

      &:hover {
        background-color: #4a3f53;
      }
    }
  }
}
</style>
