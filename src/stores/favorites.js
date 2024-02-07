import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorites', () => {
  const favoriteJokes = ref(  [])
  // const getFromLocalStorage = computed(() => )
  // const doubleCount = computed(() => count.value * 2)
  // function updateLocalStorage() {
  //   localStorage.setItem('favorites', JSON.stringify(favoriteJokes.value))
  // }
  function addToFavorites(jokeObject) {
    const isUnique = favoriteJokes.value.every((joke) => joke.id !== jokeObject.id)
    if (isUnique) {
      favoriteJokes.value.push(jokeObject);
      // updateLocalStorage()
    }
    // return favoriteJokes.value;
  }
  function removeFromFavorites(id) {
    favoriteJokes.value = favoriteJokes.value.filter((joke) => joke.id !== id)
    // updateLocalStorage()
    // return favoriteJokes.value
  }

  return { favoriteJokes, addToFavorites, removeFromFavorites }
})
