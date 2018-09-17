<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height:800px;
}
.ivu-modal-header{
  background: #565656;
}
.ivu-modal-header-inner{
  color: #fff;
  text-align: center;
}
.ivu-modal-close .ivu-icon-ios-close{
  color: #fff;
}
.ivu-modal-close .ivu-icon-ios-close:hover{
  color: rgb(190, 178, 178);
}
</style>
