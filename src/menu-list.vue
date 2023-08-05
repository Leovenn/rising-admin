<template>
  <template v-for="item in props.list" :key="item.id">
    <el-sub-menu :index="item.id" popper-class="popper-sub-menu" :popper-offset="12" v-if="item.children?.length">
      <template #title>
        <svg-icon :name="item.icon" /><span class="aside-menu-title">{{ item.title }}</span>
      </template>
      <menu-list :list="item.children" />
    </el-sub-menu>

    <el-menu-item :index="item.id" v-else class="gap-6px rd-4px">
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

const MenuList = defineAsyncComponent(() => import('./menu-list.vue'))

const props = withDefaults(defineProps<PropsType>(), {})
</script>

<style lang="less" scoped></style>
