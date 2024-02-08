<template>
  <div class="joke-wrapper">
    <GetCategory class="button-get-category me-5" @handle-category-change="handleCategoryChange" />
    <GetJoke @joke-object="getJokeObj" @error-message="getErrorMessage" :category="category" />
    <CardContainer
      class="card-joke"
      :joke="result.resultFromResponse.value"
      :id="result.resultFromResponse.id"
      :result="result.resultFromResponse"
      :error-message="errorMsg"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import GetJoke from '@/components/GetJoke.vue'
import CardContainer from '@/components/CardContainer.vue'
import GetCategory from '@/components/GetCategory.vue'

const category = ref('')
const result = reactive({
  resultFromResponse: {}
})
const errorMsg = ref('')

const handleCategoryChange = (selectedCategory) => {
  category.value = selectedCategory
}

const getJokeObj = (response) => {
  result.resultFromResponse = { ...response }
  return result.resultFromResponse
}

const getErrorMessage = (message) => {
  errorMsg.value = message
}
</script>
