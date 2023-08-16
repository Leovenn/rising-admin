<template>
  <el-tooltip
    placement="bottom"
    effect="light"
    virtual-triggering
    :virtual-ref="props.targetDom"
    :offset="6"
    :show-arrow="false"
    :hide-after="0"
    :visible="props.modelValue"
    @update:visible="(e) => emits('update:modelValue', e)"
    v-bind="$attrs"
    popper-class="virtual-drop-down-menu-popper">
    <template #content>
      <div class="b-rd-[var(--el-popper-border-radius)] bg-#fff shadow-[var(--el-box-shadow-light)] text-14px flex flex-col overflow-hidden select-none">
        <div
          class="flex items-center p8px gap-10px hover:bg-[var(--el-menu-text-color-1)] cursor-pointer transition-background-color duration-[var(--el-transition-duration)] max-w-220px"
          :class="{ 'cursor-not-allowed': item.disable, 'hover:bg-transparent': item.disable, 'c-[var(--el-text-color-disabled)]': item.disable }"
          v-for="item in props.list"
          :key="item.key"
          @click="change(item)">
          <div class="flex-none" v-if="item.icon"><svg-icon :name="(item.icon as string)"></svg-icon></div>
          <div class="flex-1 truncate" v-text="item.title"></div>
        </div>
      </div>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
interface ListType {
  icon?: string | boolean
  title: string
  key: string
  disable?: boolean
}

interface PropsType {
  modelValue: boolean
  targetDom: HTMLElement
  list: ListType[]
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<PropsType>(), { modelValue: false, list: () => [] })

const emits = defineEmits<{ 'update:modelValue': [value: boolean]; change: [value: string] }>()

const change = (e: ListType) => {
  if (e.disable) return

  emits('change', e.key)

  emits('update:modelValue', false)
}
</script>

<style lang="less" scoped></style>
