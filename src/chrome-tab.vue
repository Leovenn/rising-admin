<template>
  <div class="chrome-tab h-full flex c-[var(--el-text-color-primary)] text-14px p-[10px_10px_0_10px]">
    <div class="chrome-tab-item active">
      <div>工作工作台工作台工作台工作台台</div>
    </div>

    <div class="chrome-tab-item">
      <div>分分析页分析页分析页析页</div>
    </div>

    <div class="chrome-tab-item">
      <div>你好特踏实他</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.chrome-tab-item {
  position: relative;

  width: fit-content;

  display: flex;

  align-items: center;

  padding: 10px;

  cursor: pointer;

  border-radius: 10px 10px 0 0;

  user-select: none;

  & > div {
    position: relative;

    &::after {
      content: '|';
      position: absolute;
      right: -13px;
    }
  }

  &.active,
  &:hover {
    > div {
      &::after {
        content: '';
      }
    }
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

  &:hover {
    background-color: var(--el-menu-text-color-1);

    &::before {
      background-image: radial-gradient(circle 20px at 100% 0, transparent 10px, var(--el-menu-text-color-1) 50%);
    }
    &::after {
      background-image: radial-gradient(circle 10px at 0 0, transparent 10px, var(--el-menu-text-color-1) 50%);
    }
  }

  &.active {
    color: var(--primary-color);
    background-color: var(--primary-color-4);
    z-index: 1;

    &::before {
      background-image: radial-gradient(circle 20px at 100% 0, transparent 10px, var(--primary-color-4) 50%);
    }
    &::after {
      background-image: radial-gradient(circle 10px at 0 0, transparent 10px, var(--primary-color-4) 50%);
    }
  }
}
</style>
