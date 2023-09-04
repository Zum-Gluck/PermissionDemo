<template>
  <div v-if="per.show">
    <slot v-if="per.write"></slot>

    <template v-else>

      <!-- 权限项配置开始 -->
      <template v-if="type === 'input'">
        <el-form-item :label="label">
          <el-input :value="value" disabled></el-input>
        </el-form-item>
      </template>

      <template v-else-if="type === 'select'">
        <el-form-item label="活动区域">
          <el-select :value="value" disabled placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </template>

      <template v-else>
        <span>{{value || '无权限'}}</span>
      </template>
      <!-- 权限项配置结束 -->

    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // ComponentName 首字母大写的驼峰命名
  name: 'PerDiv',
  props: {
    path: {
      type: String,
      default: '',
      validator: function(val) {
        return val.length > 0
      }
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  },
  // 组件
  components: {},
  // 变量
  data() {
    return {
      per: {
        show: false,
        write: false
      }
    }
  },
  // 计算属性
  computed: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  },
  // 监控data中的数据变化
  watch: {
    userInfo: function(val) {
      this.per =  this.getPermissionByPath(this.path)
    }
  },
  // 生命周期 - 创建完成(可以访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(可以访问dom元素)
  mounted() {
  },
  // 方法
  methods: {
    getPermissionByPath(path) {
      if (!path.length) { //如果没有提供path，不显示这个组件
        return {
          show: false,
          write: false
        }
      }

      const permission = this.userInfo.permission
      if (permission === '*') {
        return {
          show: true,
          write: true
        }
      }

      const permissionTree = JSON.parse(permission)
      const pathList = path.split('/')

      // 遍历数组获取对应节点
      const node = pathList.reduce((prev, cur) => {
        return prev[cur]
      }, permissionTree)

      // 如果没有找到对应的权限节点 返回false
      return node || {
        show: false,
        write: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
