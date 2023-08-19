<template>工作台</template>

<script lang="ts" setup>
import { reactive, toRaw } from 'vue'
interface StateType {}
const state: StateType = reactive({})
console.log(JSON.stringify(toRaw(state)))
</script>

<style lang="less" scoped></style>
