<template>
  <div class="login">
    <van-nav-bar title="会员登陆" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>
      <div class="form">
        <div class="form-item">
          <input v-model="mobile" class="inp" placeholder="请输入手机号码">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" placeholder="请输入图形验证码">
          <img v-if="picUrl" :src="picUrl" @click="getPicCode">
        </div>
        <div class="form-item">
          <input v-model="smsCode" class="inp" placeholder="请输入短信验证码">
          <button @click="getCode">
            {{  baseSecound === second ?"获取验证码" :`${second}后重新获取验证码`}}
          </button>
        </div>
      </div>
      <button class="login-btn">登录</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getPicCode, getSmsCaptcha, login } from '@/api/login'

export default {
  name: 'loginIndex',
  data () { // 数据
    return {
      picUrl: '', // 图片的url
      picKey: '', // 图片的key值
      baseSecound: 60, // 基础时间
      second: 60, // 倒计时的时间
      timer: null, // 计时器id
      mobile: '', // 手机号
      picCode: '', // 图片验证码
      smsCode: '' // 手机验证码
    }
  },

  methods: {
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.picUrl = base64
      this.picKey = key
      this.$toast.success('成功显示图片')
    },
    onClickLeft () {
      Toast('返回')
    },
    validFn () { // 对手机号以及图片验证码进行检验
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    async getCode () {
      if (!this.validFn()) {
        return
      }
      if (!this.timer) {
        const res = await getSmsCaptcha(this.mobile, this.picKey, this.picCode)
        if (res.statue === 200) {
          this.$toast('发送验证码成功')
        }
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 1) {
            clearInterval(this.timer)// 销毁计时器
            this.timer = null
            this.second = this.baseSecound// 重置计时器
          }
        }, 1000)
      }
    },
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\w{6}$/.test(this.smsCode)) {
        return
      }
      const res = await login(this.mobile, this.smsCode)
      if (res.data === 200) {
        this.$router.push('/')
        this.$toast('登录成功')
      }
    },

    async created () { // 时间钩子
      this.getPicCode()
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-block: 20px;

    h3 {
      font-size: 26px;
      font-weight: normal;
    }

    p {
      line-height: 10px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form {
    padding: auto;

    .form-item {
      border-bottom: 1px solid #f3f1f2;
      padding: 8px;
      margin-bottom: 14px;
      display: flex;
      align-items: center;

      .inp {
        display: block;
        border: none;
        outline: none;
        height: 32px;
        font-size: 14px;
        flex: 1;
      }

      img {
        width: 94px;
        height: 31px;
      }

      button {
        height: 31px;
        border: none;
        font-size: 13px;
        color: #cea26a;
        background-color: transparent;
        padding-right: 9px;
      }
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
