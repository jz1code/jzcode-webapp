<template>
  <card>
      建议的题目

      <el-button long id="pick-one" @click="pickone">
        <Icon type="shuffle"></Icon>
        随机选题
      </el-button>
  </card>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: {Card},
  props: {},
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
</style>