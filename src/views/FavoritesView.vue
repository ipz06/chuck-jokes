<template>
  <div>
    <h1 class="text-white mb-5">Favorites view</h1>
    <section v-if="updatedFavorites.length !== 0">
      <!--    <p class="text-white">{{ favorites }}</p>-->
      <!--    <p class="text-white">{{ updatedFavorites }}</p>-->
      <CardContainer
        v-for="favorite of updatedFavorites"
        :key="favorite.id"
        :joke="favorite.value"
        :id="favorite.id"
        :result="favorite"
      />
    </section>
    <h2 v-else class="text-light mt-5">There is no selected jokes!</h2>
  </div>
</template>

<script setup>
import CardContainer from '@/components/CardContainer.vue'
import { useFavoriteStore } from '@/stores/favorites.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = useFavoriteStore()
const { favoriteJokes } = storeToRefs(store)
const updatedFavorites = computed(() => favoriteJokes.value)
</script>
