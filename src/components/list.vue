<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确定要删除吗?</span>
      <span slot="footer" class="dialog-footer">
             <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="deleteArticle">确 定</el-button>
      </span>
    </el-dialog>
    <div class="container">
      <div class="header">
        <h1>文章列表</h1>
        <el-button type="success" @click="add">新文章</el-button>
      </div>
      <div class="article-list">
        <el-card class="box-card" v-for="{id,title} in articles" :key="id">
          <span class="title">{{title}}</span>
          <el-button  type="primary" > <router-link class="title" :to="'/editor/' + id"> 修改</router-link></el-button>
          <el-button  type="danger" @click="ask" :data-index="id">删除</el-button>
        </el-card>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data(){
        return{
            articles:"",
            dialogVisible:false,
            index:"",
        }
    },
    created() {
      this.$axios.get('http://39.106.205.132/api/node/article').then((res)=>{
          this.articles = res.data;
      })
    },
    methods: {
      deleteArticle(){
        this.$axios.delete("http://39.106.205.132/api/node/article/"+this.index).then()
        this.$axios.get('http://39.106.205.132/api/node/article').then((res)=>{
          this.articles = res.data;
          this.dialogVisible=false;
          this.$router.go(0)
        })

      },
      ask(){
            this.dialogVisible=true
            this.index=event.currentTarget.getAttribute('data-index')
      },
      add(){
          this.$axios.post("http://39.106.205.132/api/node/article").then((res)=>{
              this.$router.push({path:"/editor/"+res.data.insertId})
            }
          )
      }
    }
  }
</script>
<style lang="scss" scoped>
.container{
  margin: 10px auto;

  width: 800px;

  .header{
    padding: 0px 18px;
    background-color: $background;
    height :60px;
    /*text-align: center;*/
    justify-content: space-between;
    display: flex;
    align-items: center;
     }
  .article-list{
    .title{
      flex:1
    }
    .box-card{
      margin-top: 20px;
      /*display: flex;*/
      /*justify-content: center;*/
       /*align-items: center;*/
       /*justify-content: space-between;*/
       font-size: 20px;
    }
  }

  button{
    padding:  0.5em 1em;
    margin-left: 10px;
    float: right;
  }
}
li a {
  text-decoration: none;
}
</style>
