<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >

      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
        />
      </el-form-item>

      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >
        登 录
      </el-button>

      <div style="position:relative">

        <div class="tips">
          <span>Username : admin</span>
          <span>Password : 123456</span>
          <span class="ml">该账号默认拥有全部权限</span>
        </div>

        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : 123456</span>
          <span class="ml">该账号默认拥有部分读写权限</span>
        </div>

        <div class="tips">
          <span style="margin-right:18px;">Username : staff</span>
          <span style="margin-left:11px">Password : 123456</span>
          <span class="ml">该账号默认拥有部分只读权限</span>
        </div>
      </div>
    </el-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  components: {
  },
  name: 'LoginVue',

  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },

  watch: {
  },

  created () {
  },

  mounted () {
  },

  destroyed () {
  },

  methods: {
    ...mapActions({
      login: 'login'
    }),
    handleLogin() {
      this.login(this.loginForm).then(_ => {
        this.$router.push('/home')
        this.$message.success('登陆成功')
      }).catch(err => {
        this.$message.error(err.message || '登录时出现了未知的错误')
        console.log('登录时出现了错误', err)
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
        color: $cursor;
    }
}
.ml {
    margin-left: 10px;
}

/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            caret-color: $cursor;

            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
            }
        }
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
    }

    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }

    .thirdparty-button {
        position: absolute;
        right: 0;
        bottom: 6px;
    }

    @media only screen and (max-width: 470px) {
        .thirdparty-button {
            display: none;
        }
    }
}
</style>
