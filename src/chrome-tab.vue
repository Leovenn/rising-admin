<template>
  <div class="chrome-tab" ref="tabScrollRef">
    <div class="chrome-tab-content">
      <div class="chrome-tab-item" v-for="item in list" @contextmenu.prevent="contextmenuEvent" :class="{ active: item.active }">
        <div class="chrome-tab-item-content">
          <div class="icon"><svg-icon :name="item.icon" /></div>

          <div class="title" v-text="item.title"></div>

          <div class="icon-line-md:close-small hover:icon-line-md:close-circle" v-if="item.isClose"></div>
        </div>
      </div>
    </div>
  </div>

  <virtual-drop-down-menu
    v-model="showDropDownMenu"
    :offset="0"
    :list="[
      { icon: 'icon-park-outline:close', title: '关闭', key: 'close', disable: false },
      { icon: 'icon-park-outline:refresh', title: '刷新', key: 'refresh', disable: false },
    ]"
    :target-dom="targetDom!"
    @change="command"
    trigger="contextmenu" />
</template>

<script lang="ts" setup>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import type { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import { debounce } from '@/utils/debounce'
import virtualDropDownMenu from './virtual-drop-down-menu.vue'

BScroll.use(ObserveDOM)

const tabScrollRef = ref<HTMLDivElement>()

let bScrollInstance: null | BScrollConstructor = null

const list = ref([
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
    active: true,
  },

  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },

  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },

  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },

  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },
  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },
  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },
  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },
  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },
  {
    title: '仪表盘',
    icon: 'line-md:linkedin',
    isClose: true,
  },
  {
    title: '工作台',
    icon: 'line-md:heart-filled',
    isClose: true,
  },

  {
    title: '分析页',
    icon: 'line-md:moon-twotone',
    isClose: true,
  },
])

const resizeObserverDebounce = debounce()

const targetDom = ref<HTMLElement>()

const showDropDownMenu = ref(false)

const contextmenuEvent = (e: MouseEvent) => {
  targetDom.value = e.currentTarget as HTMLElement

  showDropDownMenu.value = false

  setTimeout(() => (showDropDownMenu.value = true))
}

const command = (e: string) => {
  console.log(e)
}

const resizeObserver = new ResizeObserver(() => resizeObserverDebounce(() => bScrollInstance?.refresh()))

const initResizeObserver = (targetNode: Element) => resizeObserver.observe(targetNode)

/** 初始化滑动实例 */
const initChromeScroll = (callback?: (result: boolean) => void) => {
  destroyChromeScroll()

  if (tabScrollRef.value) {
    bScrollInstance = new BScroll(tabScrollRef.value, { scrollX: true, probeType: 3, observeDOM: true, bounce: false })

    bScrollInstance.on('scroll', () => (showDropDownMenu.value = false))

    initResizeObserver(tabScrollRef.value)

    callback?.(true)
    return
  }

  callback?.(false)
}

/** 销毁滑动实例以及取消监听  */
const destroyChromeScroll = () => {
  bScrollInstance?.destroy()
  resizeObserver?.disconnect()
}

onMounted(() => initChromeScroll())

onBeforeUnmount(() => destroyChromeScroll())
</script>

<style lang="less" scoped>
// 弧形
.rc (@bg-color) {
  background-color: @bg-color;

  &::before {
    background-image: radial-gradient(circle 20px at 100% 0, transparent 10px, @bg-color 50%);
  }
  &::after {
    background-image: radial-gradient(circle 10px at 0 0, transparent 10px, @bg-color 50%);
  }
}

.flex-item-center-relative () {
  position: relative;

  display: flex;

  align-items: center;
}

.chrome-tab {
  height: 100%;
  white-space: nowrap;

  overflow: hidden;

  .chrome-tab-content {
    padding: 10px 10px 0 10px;

    user-select: none;

    color: var(--el-text-color-primary);

    font-size: 14px;

    display: inline-block;

    height: 100%;

    .chrome-tab-item {
      .flex-item-center-relative ();

      width: fit-content;

      height: 100%;

      padding: 10px;

      cursor: pointer;

      border-radius: 10px 10px 0 0;

      display: inline-block;

      .chrome-tab-item-content {
        height: 100%;
        .flex-item-center-relative ();

        gap: 10px;

        &::after {
          content: '|';
          position: absolute;
          right: -13px;
        }

        .title {
          white-space: nowrap;
        }

        font-size: 14px;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 10px;
        height: 10px;
      }

      &::before {
        right: -10px;
      }

      &::after {
        left: -10px;
      }

      &.active,
      &:hover {
        .chrome-tab-item-content {
          &::after {
            content: '';
          }
        }
      }

      &:hover {
        .rc(var(--el-menu-text-color-1));
      }

      &.active {
        color: var(--primary-color);

        z-index: 1;

        .rc(var(--primary-color-4));
      }

      &:last-of-type {
        .chrome-tab-item-content::after {
          content: '';
        }
      }
    }
  }
}
</style>
