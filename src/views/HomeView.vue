<template>
  <main class="d-flex flex-row justify-content-between align-items-center gap-5 mb-5 pb-5">
    <GreetMessage msg-first="Welcome to" msg-second="Chuck Norris Jokes Page" />
    <div class="image-container">
      <img src="../assets/image-chuck.png" alt="Chuck Norris" width="420px" />
      <RouterLink to="/jokes" class="button-router"> Get Jokes </RouterLink>
    </div>
  </main>
</template>

<script setup>
import GreetMessage from '@/components/GreetMessage.vue'
</script>
