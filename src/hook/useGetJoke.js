import axios from 'axios'

import { URL_GET_JOKE } from '@/common/constants.js'
import { useFavoriteStore } from '@/stores/storeJokes.js'
import { storeToRefs } from 'pinia'
import {computed} from "vue";
const store = useFavoriteStore()
const { category, resultJokeObject, errorMessage } = storeToRefs(store)
export default function useGetJoke() {
  const selectedCategory = computed(() => category.value)
  async function getJokes(category = selectedCategory.value) {
    try {
      const response = await axios.get(
        !category ? URL_GET_JOKE : `${URL_GET_JOKE}?category=${category}`
      )
      resultJokeObject.value = response.data
    } catch (e) {
      errorMessage.value = 'Error retrieving data!'
    }
  }
  return {
    getJokes
  }
}
