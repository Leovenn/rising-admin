<template>
  <!-- line-md集合icon -->
  <icon-line-md:moon-twotone v-if="isRender('line-md:moon-twotone')" />

  <icon-line-md:heart-filled v-if="isRender('line-md:heart-filled')" />

  <icon-line-md:linkedin v-if="isRender('line-md:linkedin')" />

  <icon-line-md:menu-fold-left v-if="isRender('line-md:menu-fold-left')" />

  <icon-line-md:menu-fold-right v-if="isRender('line-md:menu-fold-right')" />

  <!-- mdi 集合 -->

  <!-- 本地文件夹icon -->
  <icon-custom:logo v-if="isRender('custom:logo')" />
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ name: string }>(), {})

const isRender = (name: string) => props.name === name
</script>
