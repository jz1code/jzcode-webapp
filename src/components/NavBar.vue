<template>
<div>
    <el-menu :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal">
        <span>桔子编程信息学奥赛题库系统</span>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">闯天梯</el-menu-item>
        <el-menu-item index="7">题目</el-menu-item>
        <el-menu-item index="3">竞赛</el-menu-item>
        <el-menu-item index="4">状态</el-menu-item>
        <el-menu-item index="5">排名</el-menu-item>
        <el-sub-menu index="6">
            <template #title>帮助</template>
            <el-menu-item index="6-1">感谢</el-menu-item>
        </el-sub-menu>
    </el-menu>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
        }
    },
}
</script>

<style lang="scss" scoped>
</style>