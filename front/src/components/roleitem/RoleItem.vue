<template>
  <div class="role_item ">
    <div class="wrapper" @click="onRoleChange(role)">
      <div>{{role.username}}</div>
      <div class="desc">{{role.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  // ComponentName 首字母大写的驼峰命名
  name: 'RoleItem',
  // 组件
  components: {},
  props: {
    role: {
      type: Object,
      default: () => {}
    }
  },
  // 变量
  data() {
    return {}
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
    onRoleChange(role) {
      this.$emit('onRoleChange', role)
    }
  }
}
</script>

<style lang="scss" scoped>
$bgc:#eef1f6;
$act_bgc:#e3eafd;
$hover_bgc:#f5f7fa;

.active {
  background-color: $act_bgc!important;
}
.role_item {
    height: 68px;
    padding: 10px;
    font-size: 14px;
    background-color: $bgc;
    border-bottom: 1px solid #e7e7e7;

    .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;

        .desc {
            color: #999;
        }
    }

    &:hover {
        background-color: $hover_bgc;
    }
}
</style>
