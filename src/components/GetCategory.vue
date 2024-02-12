<template>
  <select class="dropdown-content" v-model="category" @click="selectCategory(category)">
    <option value="">Choose Category</option>
    <option v-for="(category, index) in categories" :key="index" :value="category">
      {{ category ? handleFirstCapitalLetter(category) : '' }}
    </option>
  </select>
</template>

<script setup>

import { onMounted } from 'vue'
import useGetCategory from '@/hook/useGetCategory.js'
import { useFavoriteStore } from '@/stores/storeJokes.js'
import { storeToRefs } from 'pinia'

const store = useFavoriteStore()
const { category } = storeToRefs(store)
const { categories, getCategories } = useGetCategory()

function selectCategory(selectedCategory) {
  category.value = selectedCategory
}
function handleFirstCapitalLetter(category) {
  return category.slice(0, 1).toUpperCase() + category.substring(1)
}

onMounted(() => {
  getCategories()
})
</script>
