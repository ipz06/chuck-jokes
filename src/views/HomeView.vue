<template>
  <main class="home-page d-flex flex-row justify-content-center align-items-center gap-5">
    <GreetMessage :msg-first="MESSAGE_FIRST" :msg-second="MESSAGE_SECOND" />
    <div class="image-container">
      <img src="../assets/image-chuck.png" alt="Chuck Norris" width="420px" />
      <RouterLink to="/jokes" class="button-router"> Get Jokes </RouterLink>
    </div>
  </main>
</template>

<script setup>
import GreetMessage from '@/components/GreetMessage.vue'
import { MESSAGE_FIRST, MESSAGE_SECOND } from '@/common/constants.js'
</script>
