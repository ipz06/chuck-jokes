<template>
  <button class="category-button ms-5" @click="handleGetJoke(category)">Get another one</button>
</template>

<script setup>

import { onMounted } from 'vue'
import useGetJoke from '@/hook/useGetJoke.js'
import { useFavoriteStore } from '@/stores/storeJokes.js'
import { storeToRefs } from 'pinia'

const store = useFavoriteStore()
const { category } = storeToRefs(store)
const { getJokes } = useGetJoke()

function handleGetJoke (category) {
  getJokes(category.value);
}

onMounted(() => {
  getJokes()
})
</script>
