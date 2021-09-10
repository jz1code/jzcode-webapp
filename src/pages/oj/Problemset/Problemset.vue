<template>
  <page>
    <el-row :gutter="20">
      <el-col :span="18">
        <problem-list></problem-list>
      </el-col>
      <el-col :span="6">
        <tags></tags>
      </el-col>
    </el-row>
  </page>
</template>

<script>
import Page from "../../../components/Page.vue";
import ProblemList from "../../../components/ProblemList.vue";
import Tags from "../../../widgets/Tags.vue";
export default {
  components: { ProblemList, Tags, Page },
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>