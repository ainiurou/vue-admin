<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'

</script>

<template>
 <div class="w-screen h-screen  flex ">
     <MenuComponent />
     <div class="content flex-1 bg-slate-200">
         <Navbar />
         <HistoryLink />
         <router-view></router-view>
     </div>
 </div>
</template>

<style lang="scss" scoped>

</style>
<script lang="ts">

export default{ route: { meta:{ auth:true } }
}
</script>
