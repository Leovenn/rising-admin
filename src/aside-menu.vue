<template>
  <aside class="h-full select-none b-r-1px b-r-solid b-r-[var(--el-border-color)] transition-width duration-200" :class="{ w220px: !isCollapse, w65px: isCollapse }">
    <div class="h60px flex items-center justify-center gap-10px c-[var(--primary-color)] relative">
      <div class="text-30px"><svg-icon name="custom:logo" /></div>

      <h2 class="font-bold text-16px" v-if="!isCollapse">Rising Admin</h2>

      <div
        class="cursor-pointer absolute right--22px border-1px border-[var(--el-border-color)] border-solid text-15px b-rd-r-10px color-[var(--el-text-color-primary)] p-1px"
        @click="isCollapse = !isCollapse">
        <svg-icon :name="isCollapse ? 'line-md:menu-fold-right' : 'line-md:menu-fold-left'" />
      </div>
    </div>

    <div class="h-[calc(100%-60px)] aside-menu">
      <el-scrollbar>
        <el-menu class="border-r-none p-r-10px p-l-10px p-b-10px flex flex-col gap-10px" :collapse="isCollapse" :collapse-transition="false" default-active="1">
          <menu-list :list="list" />
        </el-menu>
      </el-scrollbar>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import MenuList from './menu-list.vue'

const isCollapse = ref(false)

const list = ref([
  {
    title: '工作台',
    icon: 'icon-park-outline:workbench',
    id: '1',
  },

  {
    title: '多级菜单',
    icon: 'icon-park-outline:file-excel',
    id: '2',

    children: [
      {
        title: '一级菜单',
        icon: 'icon-park-outline:branch-one',
        id: '2-1',

        children: [
          {
            title: '二级菜单',
            icon: 'icon-park-outline:bowl-one',
            id: '2-1-1',

            children: [
              {
                title: '三级菜单',
                icon: 'icon-park-outline:fire',
                id: '2-1-1-1',
              },
            ],
          },
        ],
      },
    ],
  },
])
</script>

<style lang="less" scoped></style>
