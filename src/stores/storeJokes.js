import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LOCAL_STORAGE_GET_DATA } from '@/common/constants.js'

export const useFavoriteStore = defineStore('favorites', () => {
  const favoriteJokes = ref(LOCAL_STORAGE_GET_DATA ? LOCAL_STORAGE_GET_DATA : [])
  const category = ref('')
  const resultJokeObject = ref({});
  const errorMessage = ref('')
  function updateLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(favoriteJokes.value))
  }
  function addToFavorites(jokeObject) {
    const isUnique = favoriteJokes.value.every((joke) => joke.id !== jokeObject.id)
    if (isUnique) {
      favoriteJokes.value.unshift(jokeObject)
      updateLocalStorage()
    }
  }
  function removeFromFavorites(id) {
    favoriteJokes.value = favoriteJokes.value.filter((joke) => joke.id !== id)
    updateLocalStorage()
  }

  return {
    favoriteJokes,
    addToFavorites,
    removeFromFavorites,
    category,
    resultJokeObject,
    errorMessage
  }
})
