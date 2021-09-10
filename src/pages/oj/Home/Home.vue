<template>
  <page>
    <el-row :gutter='20'>
      <el-col :span="18">
        <news />
        <rate />
      </el-col>
      <el-col :span="6">
        <hito-koto />
      </el-col>
    </el-row>
    
  </page>
</template>

<script>
import Page from '../../../components/Page.vue'
import HitoKoto from '../../../widgets/HitoKoto.vue'
import News from '../../../widgets/News.vue'
import Rate from '../../../widgets/Rate.vue'
export default {
  components: {Page, HitoKoto, Rate, News},
  props: {},
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
</style>