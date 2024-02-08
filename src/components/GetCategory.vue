<template>
  <select class="dropdown-content" v-model="category" @click="selectCategory(category)">
    <option value="">Choose Category</option>
    <option v-for="(category, index) in categories" :key="index" :value="category">
      {{ category ? handleFirstCapitalLetter(category) : '' }}
    </option>
  </select>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { URL_GET_CATEGORY } from '@/common/constants.js'

const emit = defineEmits(['handle-category-change'])
const categories = ref([])

const errorMsg = ref('')
const category = ref('')

function handleFirstCapitalLetter (category) {
   return category.slice(0, 1).toUpperCase() + category.substring(1)
}

async function getCategories() {
  try {
    const response = await axios.get(URL_GET_CATEGORY)
    categories.value = response.data
  } catch (error) {
    errorMsg.value = 'Error retrieving category!'
  }
}
function selectCategory(selectedCategory) {
  category.value = selectedCategory
  emit('handle-category-change', category.value)
}

onMounted(() => {
  getCategories()
})
</script>
