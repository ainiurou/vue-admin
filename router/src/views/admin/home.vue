<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { echart1, echart2 } from './echart'
interface ICard {
  title: string
  price: number
  icon: string
  totalTitle: string
  total: number
}
const cards = ref<ICard[]>([
  { title: '总人数', price: 23309, icon: 'fas fa-people-group', totalTitle: '总人数', total: 200 },
  { title: '销售额', price: 21986, icon: 'fas fa-coins', totalTitle: '总销售额', total: 300 },
  { title: '订单数', price: 30312, icon: 'fas fa-money-check', totalTitle: '总订单数', total: 400 },
  { title: '点赞数', price: 24309, icon: 'fas fa-6', totalTitle: '总点赞数', total: 500 },
])
nextTick(() => {
  echarts.init(document.getElementById('echart1')).setOption(echart1)
  echarts.init(document.getElementById('echart2')).setOption(echart2)
})
</script>

<template>
  <div class="grid md:grid-cols-4 gap-3">
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      class="cursor-pointer"
      v-for="(card, index) of cards"
      :key="index">
      <template #header>
        <div class="flex justify-between items-center">
          {{ card.title }}
          <el-tag type="danger" size="small" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between items-center">
        <span class="text-2xl">${{ card.price }}</span>
        <i :class="card.icon" class="text-3xl text-amber-300"></i>
      </section>
      <section class="flex justify-between items-center text-xs mt-3">
        {{ card.totalTitle }}
        <span>{{ card.total }}</span>
      </section>
    </el-card>
  </div>
  <div class="  mt-5 grid md:grid-cols-2 gap-3">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
            <div>
              用户统计
            </div>
        </template>      
          <!-- card body -->
          <div id="echart1" class="h-72 w-full"></div>
      </el-card>
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
            <div>
              销售额
            </div>
        </template>      
          <!-- card body -->
           <div id="echart2" class="h-72 w-full"></div>
      </el-card>
   
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts"></script>
