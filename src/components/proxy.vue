<template>
  <div class="ad-list">
    代理测试
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    // this.getData();
    this.getData2()
    this.getData3()
  },
  methods: {
    getData() {
      this.axios.get('/api', {}).then((res) => {
        debugger
        console.log(res)
      })
    },
    getData2() {
      this.axios.get('http://localhost:8000/', {}).then((res) => {
        console.log(res)
      })
    },
    getData3() {
      $.ajax({
        url: 'http://localhost:8000/jsonp',
        dataType: 'jsonp',
        // jsonp: 'test',
        // jsonpcallback: 'test',
        success: (res) => {
          debugger
        }
      })
    }
  }
}
</script>
<style lang="less">
</style>
