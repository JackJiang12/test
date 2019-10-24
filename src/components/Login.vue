<template>
  <div class="login">
    <el-form ref="form" status-icon :model="form" :rules="rules" label-width="80px">
      <img class="logo" src="../assets/li.jpg" alt="">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" class="loginBtn" type="primary">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      // 获取到 el-form调用 el-form组件的方法
      this.$refs.form.resetFields()
    },
    login () {
      // 跳转商品页
      this.$refs.form.validate(isValid => {
        // 如果校验失败了, 直接 return
        if (!isValid) return
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 1000
        })
        this.$router.push({ name: 'product' })
      })
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: #2d434c;
  overflow: hidden;

  .el-form {
    width: 400px;
    padding: 20px;
    padding-top: 70px;
    margin: 0 auto;
    margin-top: 200px;
    background: #fff;
    border-radius: 20px;
    position: relative;

    .logo {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: -118px;
      border-radius: 50%;
      border: 5px solid #fff;
    }

    .loginBtn {
      margin-right: 70px;
    }
  }
}
</style>
