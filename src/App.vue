<template>
  <div>
      <my-header v-if="visible"></my-header>
      <router-view/>
  </div>
</template>
<script>
import header from './components/header'
export default {
  components:{
      'my-header':header
  },
  data(){
    return {
        visible:false
    };
  },
  watch: {
    '$route'(val) {
      console.log(val);
      this.visible = val.path !=='/login'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
