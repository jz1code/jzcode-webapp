<template>
  <card>
     <div slot="title" class="taglist-title">标签</div>
      <el-button v-for="tag in tagList"
              :key="tag.name"
              @click="filterByTag(tag.name)"
              type="ghost"
              :disabled="query.tag === tag.name"
              shape="circle"
              class="tag-btn">{{tag.name}}
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
        tagList: []
    }
  },
}
</script>

<style lang="scss" scoped>
</style>