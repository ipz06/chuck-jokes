<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="d-flex justify-content-between align-items-center fs-5 p-5 fw-bold">
    <RouterLink to="/">
      <img src="../assets/logo.png" alt="Logo" width="80" />
    </RouterLink>
    <nav class="d-flex justify-content-between gap-5">
      <RouterLink to="/" class="link-style">Home</RouterLink>
      <RouterLink to="/jokes" class="link-style">Jokes</RouterLink>
      <RouterLink to="/favorites" class="link-style">Favorites </RouterLink>
    </nav>
  </header>
</template>
