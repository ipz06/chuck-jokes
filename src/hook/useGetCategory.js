import { ref } from 'vue'
import axios from 'axios'
import { URL_GET_CATEGORY } from '@/common/constants.js'

export default function useGetCategory() {
  const categories = ref([])
  async function getCategories() {
    try {
      const response = await axios.get(URL_GET_CATEGORY)
      categories.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  return {
    categories,
    getCategories
  }
}
