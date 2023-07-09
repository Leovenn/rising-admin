<template>
  <div class="flex h-full">
    <aside class="b-r-1 b-r-solid b-r-#e8e8e8 h-full">
      <div></div>

      <el-menu default-active="2" class="border-r-transparent">
        <el-sub-menu index="1">
          <template #title>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
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

<script lang="ts" setup></script>

<style lang="less" scoped></style>
