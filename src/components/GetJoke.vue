<template>
  <button class="category-button ms-5" @click="getJokes(props.category)">Get another one</button>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { URL_GET_JOKE } from '@/common/constants.js'

const errorMsg = ref('')
const emit = defineEmits(['joke-object', 'error-message'])
const props = defineProps({
  category: String
})

async function getJokes(category) {

  try {
    const response = await axios.get(
      !category ? URL_GET_JOKE : `${URL_GET_JOKE}?category=${category}`
    )

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
