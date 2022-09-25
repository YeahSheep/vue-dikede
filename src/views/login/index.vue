<template>
  <div class="login-container">
    <div>
      <div class="logo-img">
        <el-avatar :size="96" :src="logoSrc" />
      </div>

      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="mobile">
          <span class="svg-container el-icon-mobile-phone">
            <!-- <svg-icon icon-class="user" /> -->
          </span>
          <el-input
            ref="mobile"
            v-model="loginForm.mobile"
            placeholder="请输入账户"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container el-icon-lock">
            <!-- <svg-icon icon-class="password" /> -->
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
          />
          <span class="show-pwd" @click="showPass">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>

        <div class="yanzhengma">
          <el-form-item prop="yanzhengma">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              v-model="loginForm.yanzhengma"
              placeholder="请输入验证码"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>
          <div class="yanzheng" @click="getYanZheng">
            <img :src="imgData" alt="">
          </div>
        </div>

        <el-button
          class="btn"
          :loading="loading"
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click="login"
        >登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入自定义规则
import { validMbile } from '@/utils/validate'
// 引入api
import { yanzhengApi, userLoginApi } from '@/api'

export default {
  name: 'Login',
  data() {
    const mobileValid = (rule, value, callback) => {
      if (validMbile(value)) {
        callback()
      } else {
        callback(new Error('格式错误'))
      }
    }
    return {
      random: '',
      imgData: '',
      passwordType: 'password',
      loading: false,
      loginForm: {
        mobile: '',
        password: '',
        yanzhengma: ''
      },
      loginRules: {
        mobile: [
          { required: true, trigger: 'blur', message: '请输入账户' },
          {
            validator: mobileValid,
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码' },
          { min: 5, max: 10, tirgenre: 'blur', message: '格式错误' }
        ],
        yanzhengma: [
          { required: true, trigger: 'blur', message: '请输入验证码' }
        ]
      },
      logoSrc: 'http://likede2-admin.itheima.net/img/logo.595745bd.png'
    }
  },
  created() {
    this.getYanZheng()
  },
  methods: {
    showPass() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    async getYanZheng() {
      try {
        this.random = Math.random()
        const res = await yanzhengApi(this.random)
        console.log(res)
        const url = window.URL.createObjectURL(res.data)
        // 将图片转换成img标签可以识别的url
        this.imgData = url
      } catch (error) {
        console.log(error)
      }
    },
    async login() {
      try {
        const res = await userLoginApi(
          this.loginForm.mobile,
          this.loginForm.password,
          this.loginForm.yanzhengma,
          this.random,
          0
        )
        console.log(res)
        this.$router.push('/dashboard')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #fff;
$light_gray: #999;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background: url('~@/assets/common/background.png') no-repeat; // 设置背景图片
  background-size: cover;
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
    width: 100%;
    margin-bottom: 24px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #999;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .logo-img {
    border: 0;
    position: absolute;
    margin-top: -46px;
    left: 50%;
    margin-left: -46px;
    z-index: 1;
    .el-avatar {
      background: transparent;
    }
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 76px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    background: white;
    margin-top: 250px;
    border-radius: 10px;
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
  .btn {
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
    opacity: 0.91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }
  .yanzhengma {
    display: flex;
  }
}
</style>
