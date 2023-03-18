<template>
  <div class="a">
    <div class="b">fdasf</div>
    <el-input v-model="a">132</el-input>
    <div class="c-yellow flex-1 bg-#666">
      <div>1</div>
      <div>2</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const a = ref('1')

const b = reactive({
  a,
})

const c1 = reactive({
  a: 1,
})

const c2 = toRefs(c1)

console.log(JSON.stringify(c1))
c2.a.value = 4

console.log(c1.a === c2.a.value)

console.log(JSON.stringify(b))
</script>

<style lang="less" scoped></style>
