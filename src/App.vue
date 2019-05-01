<template>
  <div id="app" >
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
import myheader from '../src/components/myheader/myheader'
export default {
  components:{
    myheader,
  },
  name: 'App'
}
</script>

<style lang="stylus">
@import 'common/css/common';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  background-color:#FFF;
  font-size:14px
  width:100%;
  height:100%
  overflow-x:hidden
}
.ivu-layout {
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #FFFFFF;
}
</style>
