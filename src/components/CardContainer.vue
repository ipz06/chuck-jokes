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
import { computed } from 'vue';
import IconStar from '@/components/IconStar.vue';
import { useFavoriteStore } from '@/stores/favorites.js';
import { storeToRefs } from 'pinia';
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  joke: {
    type: String,
    required: true
  },
  result: {
    type: Object,
    required: true
  },
  errorMessage: {
    type: String
  }
})

const store = useFavoriteStore();
const { favoriteJokes } = storeToRefs(store);
const { addToFavorites, removeFromFavorites } = store;

const isFavoriteCheck = computed(() => {
  return favoriteJokes.value.some((jokeObj) => jokeObj.id === props.id);
})

function toggleFav() {
  if (!isFavoriteCheck.value) {
    addToFavorites(props.result);
  } else {
    removeFromFavorites(props.id);
  }
}
</script>
