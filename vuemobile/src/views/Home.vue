<template>
  <div class="home">
    <router-view></router-view>
  <nut-tabbar 
    @tab-switch="tabSwitch" 
    :tabbar-list="tabList" 
    :bottom="true"
    
  >
</nut-tabbar>
  </div>
</template>

<script>

export default {
  data(){
    return{
      tabList:[
        {
          'tabTitle':'用户',
          'curr':true,
          'icon':require('../assets/user.png'),
          'activeIcon':require('../assets/user_active.png'),
          'href':'###'
          
        },
        {
          'tabTitle':'订单',
          'curr':false,
          'icon':require('../assets/order.png'),
          'activeIcon':require('../assets/order_active.png'),
          'href':'###'
        },
        {
          'tabTitle':'发现',
          'curr':false,
          'icon':require('../assets/discovery.png'),
          'activeIcon':require('../assets/discovery_active.png'),
          'href':'###'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':require('../assets/mine.png'),
          'activeIcon':require('../assets/mine_active.png'),
          'href':'###'
        }
      ]
    }
  },
  created(){

  },
  methods:{
    tabSwitch(value,index){
      console.log('value:' + value.tabTitle)
      console.log('index:' + index)
      if(index === 0){
        this.$router.push('/user')
      }
      else{
        this.$router.push('/order')
      }
    }
  }
}
</script>

<style lang="less">
.home{
  .nut-tabbar{
    .curr{
      color: #0fa09d;
    }
  }
}
</style>