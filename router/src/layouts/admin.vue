<script setup lang="ts">

</script>

<template>
 <div class="w-screen h-screen  flex ">
     <div class="menu w-[200px] h-full bg-gray-800 p-4">
         <div class="logo text-gray-300">
             <i class="fas fa-paw text-red-300 text-3xl mt-2"></i>
             ZpManage
         </div>
         <!-- 菜单 -->
         <div class="left-container">
             <dl>
                 <dt class="flex justify-between">
                     <section>
                         <i class="fab fa-adversal text-slate-200"></i>
                         <span class="text-white ml-2">错误页面</span>
                     </section>
                     <section>
                         <i class="fas fa-angle-right text-white"></i>
                     </section>
                 </dt>
                 <dd class="pl-4 text-white hover:bg-violet-500 duration-300 rounded-sm cursor-pointer ">404错误</dd>
                 <dd class="pl-4">405错误</dd>
             </dl>
         </div>
     </div>
     <div class="content flex-1 bg-slate-200">
         <router-view></router-view>
     </div>
 </div>
</template>

<style>
</style>
<script>
export default{
    route: { meta:{ auth:true } }
}
</script>
