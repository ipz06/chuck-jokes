<template>
  <select class="dropdown-content" v-model="category" @click="selectCategory(category)">
    <option value="">Choose Category</option>
    <option v-for="(category, index) in categories" :key="index" :value="category">
      {{ category ? category.slice(0, 1).toUpperCase() + category.substring(1) : '' }}
    </option>
  </select>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import {URL_GET_CATEGORY} from "@/common/constants.js";

const emit = defineEmits(['handle-category-change']);
const categories = ref([]);

const errorMsg = ref('');
const category = ref('');

async function getCategory() {
  try {
    const response = await axios.get(URL_GET_CATEGORY);
    categories.value = response.data;

  } catch (error) {
    errorMsg.value = 'Error retrieving category!';
  }
}
function selectCategory(selectedCategory) {
  category.value = selectedCategory;
  emit('handle-category-change', category.value)
}

onMounted(() => {
  getCategory()
})
</script>
