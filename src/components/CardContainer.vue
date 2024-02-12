<template>
  <div>
    <Card :jokeValue="jokeObj.value" :error-message="errorMessage" />
    <IconStar
      @click="toggleFav"
      :iconColor="isFavoriteCheck ? '#79c700' : 'black'"
      class="mt-4"
      :selectedId="jokeObj.id"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Card from '@/components/SimpleCard.vue'

import IconStar from '@/components/IconStar.vue'

import { useFavoriteStore } from '@/stores/storeJokes.js'
import { storeToRefs } from 'pinia'

const store = useFavoriteStore()

const { favoriteJokes } = storeToRefs(store)
const { addToFavorites, removeFromFavorites } = store

const props = defineProps({
  jokeObj: {
    type: Object
  },
  errorMessage: {
    type: String
  }
})

const isFavoriteCheck = computed(() => {
  return favoriteJokes.value.some((joke) => {
    // debugger
    return joke.id === props.jokeObj.id
  })
})

function toggleFav() {
  if (!isFavoriteCheck.value) {
    addToFavorites(props.jokeObj)
  } else {
    removeFromFavorites(props.jokeObj.id)
  }
}
</script>
