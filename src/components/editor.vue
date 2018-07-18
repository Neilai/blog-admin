<template>
  <div class="editor">
    <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="tags"></el-input>
      </el-form-item>
      <el-form-item label="日志">
        <textarea v-model="content"></textarea>
      </el-form-item>
      <el-button type="success" @click="publish">发表</el-button>
      <el-button type="primary" @click="save">仅保存</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        title:'',
        tags:'',
        content:'',
      }
    },
    computed:{
        id(){
          return this.$route.params.id
      }
    },
    methods:{
        publish(){
          this.$axios.put(`http://39.106.205.132/api/node/article/publish/${this.id}`, {
            title: this.title,
            tags:this.tags,
            content:this.content,
            isPublished:true,
          })
            .then((res)=>{
            this.$router.push({path:"/list"})
            console.log(res);
          })
           .catch((err)=>{
             alert(err.response.data.error)
          })
        },
        save(){
          this.$axios.put(`http://39.106.205.132/api/node/article/update/${this.id}`,{
            title: this.title,
            tags:this.tags,
            content:this.content,
          }).then((res)=>{
            this.$router.push({path:"/list"})
          })
          .catch((err)=>{

            alert(err.response.data.error)
          })
        }
    },
    created(){
        this.$axios.get(`http://39.106.205.132/api/node/article/${this.id}`).then((res)=>{
            this.title=res.data[0]["title"]
            this.tags=res.data[0]["tags"]
            this.content=res.data[0]["content"]
        })
    }
  }
</script>

<style lang="scss" scoped>
  .editor{
    margin:20px 20px;
    textarea{
      width: 100%;
      height:500px
    }
  }
</style>
