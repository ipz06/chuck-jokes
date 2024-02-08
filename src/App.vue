<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>
<style lang="sass">
@import "./assets/style/style"
</style>
