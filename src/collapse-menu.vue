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
        <!-- <el-menu default-active="2" class="border-r-none p-r-10px p-l-10px p-b-10px" :collapse="isCollapse" :collapse-transition="false">
          <el-sub-menu index="1" popper-class="collapse-sub-menu" :popper-offset="15">
            <template #title>
              <el-icon><setting /></el-icon>
              <span class="aside-menu-title">仪表盘仪表盘仪表盘仪表盘仪表盘仪表盘仪表盘仪表盘</span>
            </template>
            <el-menu-item index="1-1">
              <el-icon><Lock /></el-icon>
              <template #title>
                <span class="aside-menu-title">分析分析页分析页分析页分析页分析页分析页分析页页</span>
              </template>
            </el-menu-item>
            <el-menu-item index="1-2">
              <el-icon><User /></el-icon>
              <template #title>工作台</template>
            </el-menu-item>

            <el-sub-menu index="1-4" :popper-offset="15">
              <template #title>
                <el-icon><User /></el-icon>
                <span>item four</span>
              </template>
              <el-menu-item index="1-4-1">
                <el-icon><User /></el-icon>
                <template #title>工作台</template>
              </el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><Position /></el-icon>
            <template #title>
              <span class="aside-menu-title">菜单菜单已菜单已菜单已菜单已菜单已菜单已菜单已菜单已菜单已菜单已已</span>
            </template>
          </el-menu-item>
        </el-menu> -->

        <el-menu class="border-r-none p-r-10px p-l-10px p-b-10px" :collapse="isCollapse" :collapse-transition="false" default-active="1">
          <collapse-sub-menu :list="list" />
        </el-menu>
      </el-scrollbar>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import CollapseSubMenu from './collapse-sub-menu.vue'

const text = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

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

const isCollapse = ref(false)
</script>

<style lang="less" scoped>
.aside-menu {
  --el-menu-item-height: 46px;

  --el-menu-sub-item-height: var(--el-menu-item-height);

  :deep(.el-menu) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .el-sub-menu {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .el-sub-menu__title {
        border-radius: 4px;

        &:hover {
          background-color: var(--el-menu-text-color-1);
        }
      }

      &.is-active {
        > .el-sub-menu__title {
          color: var(--primary-color);
        }
      }
    }

    .el-menu-item {
      border-radius: 4px;

      &:hover {
        background-color: var(--el-menu-text-color-1);
      }

      &.is-active {
        color: var(--primary-color);
        background-color: var(--primary-color-4);
      }
    }

    &.el-menu--collapse {
      .el-menu-item {
        .el-menu-tooltip__trigger {
          justify-content: center;
          padding: 0;
        }
      }

      .el-sub-menu {
        .el-sub-menu__title {
          padding-right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 0;
          .aside-menu-title {
            display: none;
          }
        }
      }
    }
  }
}
</style>
