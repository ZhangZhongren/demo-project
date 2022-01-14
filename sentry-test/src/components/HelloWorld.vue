<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="errorsomething">警告</el-button>
  </div>
</template>

<script>
import { _err } from '../utils/index'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    this.$message.error('----')
    this.$message.error('----')
    this.$message.error('----')
    this.$message.error('----')
    this.$message.error('----')
    this.$message.error('----')
    this.$message.error('----')
    this.$message.error('----')
  },
  methods: {
    errorsomething() {
      new Promise((resove, reject) => {
        setTimeout(() => {
          _err(() => {
            this.$message({
              message: '000',
              type: 'error',
              duration: 1000
            })
          }, 200)
          resove()
        })
      }).then(res => {
        this.$message({
          message: 'err',
          type: 'error',
          duration: 1000
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
