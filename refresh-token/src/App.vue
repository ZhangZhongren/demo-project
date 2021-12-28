<template>
  <div id="app">
   <el-button type="primary" @click="login">login</el-button>
   <el-button type="primary" @click="getData">data</el-button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Login, getData, getData1, getData2, error } from './api/test'
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    async login() {
      const { data } = await Login()
      localStorage.setItem('ACCESS_TOKEN', data.token)
      localStorage.setItem('REFRESH_TOKEN', data.refresh_token)
    },
    async getData() {
      const { data } = await getData()
      console.log(data)
      const resp = await getData1()
      console.log(resp)
      const resp2 = await getData2()
      console.log(resp2)
    }
  },
  // 异常测试
  // async mounted() {
  //   error().then(res => {
  //     console.log(res, 'res')
  //   }).catch(e => {
  //     console.log(e, 'e')
  //   })
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
