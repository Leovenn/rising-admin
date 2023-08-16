<template>
  <!-- line-md集合icon -->
  <icon-line-md:moon-twotone v-if="isRender('line-md:moon-twotone')" />

  <icon-line-md:heart-filled v-if="isRender('line-md:heart-filled')" />

  <icon-line-md:linkedin v-if="isRender('line-md:linkedin')" />

  <icon-line-md:menu-fold-left v-if="isRender('line-md:menu-fold-left')" />

  <icon-line-md:menu-fold-right v-if="isRender('line-md:menu-fold-right')" />

  <!-- icon-park-outline 集合 -->
  <icon-icon-park-outline:workbench v-if="isRender('icon-park-outline:workbench')" />

  <icon-icon-park-outline:file-excel v-if="isRender('icon-park-outline:file-excel')" />

  <icon-icon-park-outline:branch-one v-if="isRender('icon-park-outline:branch-one')" />

  <icon-icon-park-outline:bowl-one v-if="isRender('icon-park-outline:bowl-one')" />

  <icon-icon-park-outline:fire v-if="isRender('icon-park-outline:fire')" />

  <icon-icon-park-outline:close v-if="isRender('icon-park-outline:close')" />

  <icon-icon-park-outline:refresh v-if="isRender('icon-park-outline:refresh')" />

  <!-- logos 集合 icon -->
  <icon-logos:github-icon v-if="isRender('logos:github-icon')" />

  <!-- 本地文件夹icon -->
  <icon-custom:logo v-if="isRender('custom:logo')" />

  <icon-custom:default-avatar v-if="isRender('custom:default-avatar')" />
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ name: string }>(), {})

const isRender = (name: string) => props.name === name
</script>
