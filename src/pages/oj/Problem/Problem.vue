
<template>
  <page>
      <problem />
  </page>
</template>

<script>
import Page from '../../../components/Page.vue'
import Problem from '../../../components/Problem.vue'
export default {
  components: {Page, Problem},
  props: {},
  data () {
    return {
    }
  },
  mounted: function() {
    this.init()
  },
  methods: {
    init: function() {
        const pathname = window.location.pathname.toLowerCase();
        const parts = pathname.split('/').filter(Boolean);
        const problem_id = parts[1]

        console.log(problem_id)
        // 更新 state
    }
  }
}

</script>

<style lang="scss" scoped>
</style>