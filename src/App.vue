<template>
  <NavigationBar />
  <main>
    <RouterView />
  </main>
</template>
<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<style lang="sass">
@import "./assets/style/style"
</style>
