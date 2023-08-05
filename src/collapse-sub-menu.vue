<template>
  <template v-for="item in props.list" :key="item.id">
    <el-sub-menu :index="item.id" popper-class="collapse-sub-menu" :popper-offset="15" v-if="item.children?.length" class="collapse-sub-menu">
      <template #title>
        <svg-icon :name="item.icon" /><span class="aside-menu-title">{{ item.title }}</span>
      </template>
      <collapse-sub-menu :list="item.children" />
    </el-sub-menu>

    <el-menu-item :index="item.id" v-else class="gap-6px">
      <svg-icon :name="item.icon" />
      <template #title>
        <span class="aside-menu-title">{{ item.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
interface ListItem {
  title: string
  icon: string
  id: string
  children?: ListItem[]
}

interface PropsType {
  list: ListItem[]
}

const CollapseSubMenu = defineAsyncComponent(() => import('./collapse-sub-menu.vue'))

const props = withDefaults(defineProps<PropsType>(), {})
</script>

<style lang="less" scoped>
.aside-menu-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.collapse-sub-menu {
  color: aqua;
  :deep(.el-sub-menu__title) {
    gap: 6px;
  }
}
</style>
