<template>
  <div class="card-joke">
    <p>{{ joke }}</p>
    <h3 v-if="errorMessage">{{ errorMessage }}</h3>
    <IconStar
      @click="toggleFav"
      :iconColor="isFavoriteCheck ? '#79c700' : 'black'"
      class="mt-4"
      :selectedId="id"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import IconStar from '@/components/IconStar.vue'
import { useFavoriteStore } from '@/stores/favorites.js'
import { storeToRefs } from 'pinia'
const props = defineProps(['id', 'joke', 'result', 'errorMessage'])
// const emit = defineEmits(['remove-favorites'])
const store = useFavoriteStore()
const { favoriteJokes } = storeToRefs(store)
const { addToFavorites, removeFromFavorites } = store
const isFavoriteCheck = computed(() => {
  return favoriteJokes.value.some((jokeObj) => jokeObj.id === props.id)
  // return this.$store.state.favoriteJokes.some(
  //     (jokesObj) => jokesObj.id === this.id
  // );
})

function toggleFav() {
  console.log('joke:', props.joke)
  if (!isFavoriteCheck.value) {
    console.log("isFavorite", isFavoriteCheck);
    console.log("favoritesJokes:", favoriteJokes.value)

    addToFavorites(props.result)
  } else {
    removeFromFavorites(props.id)
  }


  // this.$store.commit('removeFromFavorites', id)
  // this.favorites = this.$store.state.favoriteJokes
}
</script>
