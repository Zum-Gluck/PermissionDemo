<template>
  <div id="app">
    <nav v-if="$route.name !== 'login'">
      <router-link to="/home">首页</router-link> |
      <router-link to="/permission">权限</router-link>
      <el-button @click="logout"  style="margin:0 30px 0 100px;cursor:pointer" type="danger" size="mini">退出登陆</el-button>
      <span>欢迎～{{userInfo.username}}</span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  background-color: #fafafa;
}

nav {
  margin: 0 30px;
  padding: 20px 0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
