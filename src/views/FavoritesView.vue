<template>
  <div class="flex flex-column my-3">
    <h1 class="text-white mb-1 mt-5">Favorites view</h1>
    <div v-if="updatedFavorites.length !== 0">
      <CardContainer
          v-for="favorite of updatedFavorites"
          :key="favorite.id"
          :joke="favorite.value"
          :id="favorite.id"
          :result="favorite"
      />
    </div>
    <h2 v-else class="text-light mt-5">There is no selected jokes!</h2>
  </div>

</template>

<script setup>
import CardContainer from '@/components/CardContainer.vue';
import { useFavoriteStore } from '@/stores/favorites.js';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
const store = useFavoriteStore();
const { favoriteJokes } = storeToRefs(store);

const updatedFavorites = computed(() => favoriteJokes.value);
</script>
