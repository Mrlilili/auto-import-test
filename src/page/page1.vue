<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  ElMessage.success('Hello world Page1')
})
</script>

<template><h1>page1 is lazy Loading route</h1></template>
