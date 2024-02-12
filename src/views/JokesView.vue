<template>
  <div class="joke-wrapper">
    <GetCategory class="button-get-category me-5" />
    <GetJoke />
    <CardContainer class="card-joke" :joke-obj="resultJokeObject" :error-message="errorMessage" />
  </div>
</template>

<script setup>

import GetJoke from '@/components/GetJoke.vue'
import CardContainer from '@/components/CardContainer.vue'
import GetCategory from '@/components/GetCategory.vue'
import {useFavoriteStore} from "@/stores/storeJokes.js";
import {storeToRefs} from "pinia";

const store = useFavoriteStore()
const { resultJokeObject, errorMessage } = storeToRefs(store)

 defineProps({
  jokeObj: {
    type: Object
  },
  errorMessage: {
    type: String
  }
})
</script>
