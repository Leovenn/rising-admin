<template>
  <div class="flex h-full">
    <aside-menu />

    <div class="h-full flex-1 flex flex-col overflow-hidden">
      <header class="h-60px shadow-[0_1px_0px_var(--el-border-color)] flex items-center p-l-22px justify-between">
        <nav class="p-[0px_10px]">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
            <el-breadcrumb-item>分析页</el-breadcrumb-item>
          </el-breadcrumb>
        </nav>

        <div class="h-full flex items-center">
          <el-tooltip effect="dark" content="github" placement="bottom" :enterable="false">
            <div class="h-full flex items-center cursor-pointer transition-all hover:bg-[var(--el-menu-text-color-1)] p-[0px_10px]" @click="openNewLink('https://github.com/Leovenn/rising-admin')">
              <svg-icon name="logos:github-icon" />
            </div>
          </el-tooltip>

          <div class="flex items-center gap-6px text-16px color-[var(--el-text-color-primary)] h-full p-[0px_10px] hover:bg-[var(--el-menu-text-color-1)] cursor-pointer transition-all">
            <div class="text-36px rd-36px overflow-hidden">
              <svg-icon name="custom:default-avatar" />
            </div>

            <span>Leoven</span>
          </div>
        </div>
      </header>

      <div class="h-46px b-b-1px b-b-solid b-b-[var(--el-border-color)]">
        <chrome-tab />
      </div>

      <!-- <main class="flex-1 bg-#F1F3F4 shadow-[10px_10px_0px_#F1F3F4]"> -->
      <main class="flex-1 bg-#F1F3F4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)_inset]">
        <!-- <div v-for="item in result1" class="w50px h50px" :style="{ backgroundColor: item }"></div> -->
      </main>
      <!-- <footer class="h10"></footer> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import AsideMenu from './aside-menu.vue'
import ChromeTab from './chrome-tab.vue'
import { colord } from 'colord'

const primary = '#3366FF'

// const primary = '#646CFF'

const primaryColord = colord(primary)

const element = document.documentElement

const primaryColordBrightness = primaryColord.brightness()

const step = (0.9 - primaryColordBrightness) / 4 - 0.04

element.style.setProperty(`--primary-color`, primaryColord.toHex())

let result1 = [primaryColord.toHex()]

Array.from({ length: 4 }, (item, index) => index + 1).forEach((item) => {
  element.style.setProperty(`--primary-color-${item}`, primaryColord.lighten(item * step).toHex())

  result1.push(primaryColord.lighten(item * step).toHex())
})

// element.style.setProperty('--el-menu-text-color-1', colord(getComputedStyle(element).getPropertyValue('--el-menu-text-color')).alpha(0.1).toHex())

element.style.setProperty('--el-menu-text-color-1', colord('#fff').darken(0.06).toHex())

const text = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

const openNewLink = (url: string) => {
  window.open(url)
}
</script>

<style lang="less" scoped></style>
