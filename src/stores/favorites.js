import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorites', () => {
  const localStorageGetData = JSON.parse(localStorage.getItem('favorites'))
  const favoriteJokes = ref( localStorageGetData ? localStorageGetData : []);
  function updateLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(favoriteJokes.value))
  }
  function addToFavorites(jokeObject) {
    const isUnique = favoriteJokes.value.every((joke) => joke.id !== jokeObject.id)
    if (isUnique) {
      favoriteJokes.value.push(jokeObject);
      updateLocalStorage();
    }
  }
  function removeFromFavorites(id) {
    favoriteJokes.value = favoriteJokes.value.filter((joke) => joke.id !== id)
    updateLocalStorage();
  }

  return { favoriteJokes, addToFavorites, removeFromFavorites }
})
