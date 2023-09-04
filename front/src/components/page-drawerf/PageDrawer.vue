<template>
  <el-drawer
    title="我是标题"
    :visible.sync="drawer"
  >
    <template v-if="pageList.length">
      <div class="container" v-for="item of pageList" :key="item">
        <span> {{item}}</span>
        <el-button type="primary" size="mini" @click="onPageChange(item)">选择</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script>
export default {
  // ComponentName 首字母大写的驼峰命名
  name: 'PageDrawer',
  props: {
    pageList: {
      type: Array,
      default: () => []
    }
  },
  // 组件
  components: {},
  // 变量
  data() {
    return {
      drawer: false
    }
  },
  // 计算属性
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成(可以访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(可以访问dom元素)
  mounted() {},
  // 方法
  methods: {
    show() {
      this.drawer = true
    },
    onPageChange(page) {
      this.drawer = false
      this.$emit('onPageChange', page)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 200px;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
}
</style>
