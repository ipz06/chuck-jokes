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
const props = defineProps(['id', 'joke', 'result', 'errorMessage'])
// const emit = defineEmits(['remove-favorites'])

const isFavoriteCheck = computed(() => {
  return 'true;'
  // return this.$store.state.favoriteJokes.some(
  //     (jokesObj) => jokesObj.id === this.id
  // );
})

const toggleFav = (id) => {
  console.log("joke:", props.joke)
  if (!isFavoriteCheck.value) {
    this.$store.commit('addToFavorites', this.result)
  } else {
    this.$store.commit('removeFromFavorites', id)
    this.favorites = this.$store.state.favoriteJokes
  }
}
</script>
