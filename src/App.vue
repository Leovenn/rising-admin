<template>
  <div class="flex h-full">
    <aside class="b-r-1 b-r-solid b-r-#e8e8e8 h-full w220px select-none">
      <div class="h60px flex items-center justify-center">
        <img :src="logoPng" alt="" class="h40px" />
        <h2 class="text-16px font-bold c-#356AD2">Rising Admin</h2>
      </div>

      <el-menu default-active="2" class="border-r-none">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>仪表盘</span>
          </template>
          <el-menu-item index="1-1">
            <el-icon><setting /></el-icon>
            <template #title>分析页</template>
          </el-menu-item>
          <el-menu-item index="1-2">
            <el-icon><setting /></el-icon>
            <template #title>工作台</template>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>

        <el-menu-item :index="item?.toString()" v-for="item in text">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </aside>
    <div class="h-full flex-1 flex flex-col">
      <header></header>
      <div></div>
      <main></main>
      <footer></footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logoPng from '@/assets/image/logo.png'
// import { Document, Setting } from '@element-plus/icons-vue'

const text = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
</script>

<style lang="less" scoped></style>
