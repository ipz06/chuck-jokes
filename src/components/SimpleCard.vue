<template>
  <div>
    <h3 v-if="errorMessage">{{ errorMessage }}</h3>
    <p v-else>{{ jokeValue }}</p>
  </div>
</template>

<script setup>
defineProps({
  jokeValue: {
    type: String
  },
  errorMessage: {
    type: String
  }
})
</script>
