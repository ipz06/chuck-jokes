<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <main class="page-content">
    <RouterView />
  </main>
</template>
<style lang="sass">
@import "./assets/style/style"
</style>
