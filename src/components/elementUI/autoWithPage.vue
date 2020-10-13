<template>
  <div id="home">
    <el-container>
      <el-aside width="auto">
        <div class="logo"></div>
        <el-menu class="el-menu-vertical-demo" collapse-transition="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item>
                <i class="el-icon-location"></i>
                <span slot="title">选项1</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-location"></i>
                <span slot="title">选项2</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <i class="el-icon-location toggle" @click="toggleCollapse"></i>
          <div class="system-title">管理系统</div>
        </el-header>
        <el-main>
          <el-button type="primary" @click="openFullScreen1" v-loading.fullscreen.lock="fullscreenLoading">
            指令方式
          </el-button>
          <el-button type="primary" @click="openFullScreen2">
            服务方式
          </el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      fullscreenLoading: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    toggleCollapse() {
      console.log(123456789)
      this.isCollapse = !this.isCollapse
    },
    openFullScreen1() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 700px;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    background-color: #fe4;
  }
  .el-main {
    background-color: #fff;
  }
  .toggle {
    font-size: 36px;
    color: #989898;
    cursor: pointer;
    line-height: 30px;
  }
}
</style>
