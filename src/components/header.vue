<template>
<div class="container">
  <el-button  type="warning" @click="logout" plain>登出</el-button>
</div>
</template>
<script>
  export default {
    methods: {
      logout() {
        this.$store.commit("logout")
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="scss" scoped>
.container{
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: aliceblue;
  button{
    padding: 0.5em 0.8em;
    margin-right: 10px;
  }
}
</style>
