<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
</script>

<template>
  <div class="admin min-h-screen  w-screen  flex">
    <MenuComponent class="hidden md:block"/>
    <div class="content flex-1 bg-slate-100">
      <Navbar />
      <HistoryLink />
      <div class="m-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { route: { meta: { auth: true } } }
</script>
