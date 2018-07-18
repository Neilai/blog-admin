<template>
<div class="container">
<header>
  <h2>后台管理系统</h2>
</header>
  <div class="form">
    <el-form  label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="username"></el-input>
    </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" type="password"  @keyup.enter="login"></el-input>
      </el-form-item>
    </el-form>>
  </div>
  <el-button  type="primary" @click="login">登录</el-button>
</div>
</template>

<script>

  import md5 from 'md5'

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$axios.post(
          'http://39.106.205.132/api/node/token',
          {
            username: this.username,
            password: md5(this.password)
          })
          .then(res => {
            const data = res.data
            this.$store.commit("login",data)
            this.$router.push('/list')
          })
          .catch(err => {
            const errorMsg = err.response.data.error
            alert(errorMsg)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    padding: 10px;
    box-shadow: 0px 1px 6px rgba(0,0,0,0.6);
    width:400px;
    margin:0px auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    header{
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      height:40px;
      font-size: 1.8rem;
    }
    .form{
      margin-top: 20px;
      padding: 10px;
      border-top:10px solid skyblue;

      display: flex;
      justify-content: center;
      align-items: center;
      button{
        display: block;
        padding:0.5em 0.8em;
      }
    }
  }

</style>

