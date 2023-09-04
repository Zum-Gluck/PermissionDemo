<template>
  <el-container class="container">
    <PageDrawer :page-list="pageList" ref="drawer" @onPageChange="onPageChange"/>
    <el-aside width="225px">
      <RoleItem :class="{active:role.id === current.id}" :key="role.id" :role="role" v-for="role of roleList" @onRoleChange="onRoleChange"/>
    </el-aside>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{currentPage}}</span>

          <el-button
            style="float: right; padding: 3px 0;margin-left:30px; color:green;"
            type="text"
            @click="onSave">保存</el-button>
          <el-button style="float: right; padding: 3px 0" type="text" @click="$refs.drawer.show()">切换页面</el-button>
          <el-switch
            style="float: right;"
            v-if="current.tree"
            v-model="currentRender.show"
          />
        </div>

        <div class="box" v-if="current.page">
          <template v-for="(list,title) of current.page">
            <div v-if="title!== 'show'" :key="title" class="fied">
              <span class="title">{{title}}</span>
              <div class="item" v-for="(value,key) of list.config" :key="key">
                <span>{{key}}</span>

                <div class="f_r">
                  <template v-if="!list.isButton">
                    <el-checkbox v-model="currentRender[title][key].show">显示</el-checkbox>
                    <el-checkbox v-model="currentRender[title][key].write">写</el-checkbox>
                  </template>

                  <template v-else>
                    <el-switch v-model="currentRender[title][key].show">显示</el-switch>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import { constructPageViewTrees, constructFullTreeByPageName } from './constructorTree'
import RoleItem from '@/components/roleitem/RoleItem.vue'
import PageDrawer from '@/components/page-drawerf/PageDrawer.vue'

import permissionTree from './tree.config'
export default {
  // ComponentName 首字母大写的驼峰命名
  name: 'PerVue',
  // 组件
  components: {
    RoleItem,
    PageDrawer
  },
  // 变量
  data() {
    return {
      roleList: [],
      pageList: [],
      current: {
        id: null,
        username: null,
        desc: null,
        permission: null,
        page: null,
        tree: null
      },
      currentPage: null,
      currentRender: null,
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
  mounted() {
    this.init()
  },
  // 方法
  methods: {
    init() {
      this.$api.getRoleList().then(value => {
        if (value.code !== 0) this.$message.error(value.message || '获取角色列表失败')
        this.roleList = value.data
        if (!value.data || this.roleList.length <= 0) return this.$message.info('未获取到角色列表')

        this.initPage()
        this.setCurrentRole(value.data[0])
        this.setTree()
      })
    },
    // 设置当前选中的角色，默认第一个 => value[0]
    setCurrentRole(role) {
      const { id, username, desc, permission } = role
      this.current.id = id
      this.current.username = username
      this.current.desc = desc
      this.current.permission = permission
    },
    initPage() {
      const pages = Object.keys(permissionTree)
      const firstPageName = pages[0]
      this.setPage(firstPageName)
    },
    setTree() {
      // 当前选中角色的权限
      const currentPermission = this.current.permission

      if (currentPermission.trim() === '*') {
        this.current.tree = constructFullTreeByPageName(permissionTree, true)
      } else {
        this.current.tree = JSON.parse(currentPermission)
      }

      const currentPage =  this.currentPage
      this.currentRender = this.current.tree[currentPage]
    },
    setPage(page) {
      const pages = Object.keys(permissionTree)
      const currentPage = permissionTree[page]
      if (!currentPage) return this.$message.info('页面不存在～')

      this.currentPage = page
      this.current.page = constructPageViewTrees(currentPage)
      this.pageList = pages
    },
    onPageChange(page) {
      this.setPage(page)
      this.setTree()
    },
    onRoleChange(role) {
      this.initPage()
      this.setCurrentRole(role)
      this.setTree()
    },
    onSave() {
      const { tree, id } = this.current

      const data = {
        id,
        permission: JSON.stringify(tree)
      }

      this.$api.updateRole(data).then(value => {
        if (value.code !== 0) return this.$message.error(value.message || '保存失败')
        this.$message.success('保存成功')
        const currentPermission = value.data.permission
        this.current.permission = currentPermission
        this.roleList.find(item => item.id === this.current.id).permission = currentPermission
        this.$store.dispatch('setPermission', currentPermission)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 30px;
  height:calc(100vh - 68px);

  >.el-main {
    padding-top: 0px;
  }
}

.box {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  .title {
    font-size: 16px;
    font-weight: 500;
    color: #b6b5b5;
  }

  .item {
    width: 200px;
    margin: 15px 0;
    .f_r {
      float: right;
    }
  }
}

.show_page {
  float: right;
  margin-left: 20px;

  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
}
</style>
