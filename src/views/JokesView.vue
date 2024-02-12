<template>
  <div class="joke-wrapper">
    <GetCategory class="button-get-category me-5" />
    <GetJoke />
    <div v-if="isLoading" class="text-white">
      <div class="spinner-border mt-5" role="status"></div>
    </div>
    <CardContainer
      v-else
      class="card-joke"
      :joke-obj="resultJokeObject"
      :error-message="errorMessage"
    />
  </div>
</template>

<script setup>
import GetJoke from '@/components/GetJoke.vue'
import CardContainer from '@/components/CardContainer.vue'
import GetCategory from '@/components/GetCategory.vue'
import { useFavoriteStore } from '@/stores/storeJokes.js'
import { storeToRefs } from 'pinia'

const store = useFavoriteStore()
// eslint-disable-next-line vue/no-dupe-keys
const { resultJokeObject, errorMessage, isLoading } = storeToRefs(store)

defineProps({
  jokeObj: {
    type: Object
  },
  errorMessage: {
    type: String
  }
})
</script>
