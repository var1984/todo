<template>
  <div>
    <ChangeTask :task="getTask" />
  </div>
</template>
<script>
import ChangeTask from "../components/changeTask/changeTask";
import { mapGetters } from "vuex";
export default {
  components: { ChangeTask },
  computed: {
    ...mapGetters({ task: "task" }),
    getTask() {
      return this.task(+this.$route.params.id);
    },
  },
};
</script>
