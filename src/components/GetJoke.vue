<template>
  <button class="category-button ms-5" @click="getJokes(props.category)">Get another one</button>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const errorMsg = ref('')
const emit = defineEmits(['joke-object', 'error-message'])
const props = defineProps({
  category: String
})

async function getJokes(category) {
  let url
  if (!category) {
    url = `https://api.chucknorris.io/jokes/random`
  } else {
    url = `https://api.chucknorris.io/jokes/random?category=${category}`
  }

  try {
    const response = await axios.get(url)

    emit('joke-object', response.data)
  } catch (e) {
    errorMsg.value = 'Error retrieving data!'
    emit('error-message', errorMsg)
  }
}

onMounted(() => {
  getJokes(props.category)
})
</script>
