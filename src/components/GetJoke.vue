<template>
  <button class="category-button ms-5" @click="getJokes(props.category)">Get another one</button>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue';


// const resultFromResponse = reactive({
//   result: {}
// })
// const result2 = reactive({})
// const result3 = ref({});
const errorMsg = ref('')
const emit = defineEmits(['joke-object', 'error-message'])
const props = defineProps({
  category: String
})

async function getJokes(category) {
  let url
  if (!category) {
    url = `https://api.chucknorris.io/jokes/random`
  } else {
    url = `https://api.chucknorris.io/jokes/random?category=${category}`
  }

  try {
    const response = await axios.get(url)

    // resultFromResponse.result = { ...response.data }
    // console.log("resultFromResponse.result",resultFromResponse.result);
    // console.log('response.data', response.data)
    // console.log(resultFromResponse.result === response.data)
    //
    // result2.nested = response.data
    // console.log("result2.nested",result2.nested);
    // console.log(result2 === response.data)
    //
    // result3.value = response.data;
    // console.log("result3", result3.value)
    // console.log(result3.value === response.data)

    // Emit a custom event to pass the result to the parent component
    emit('joke-object', response.data);
  } catch (e) {
    errorMsg.value = 'Error retrieving data!'
    emit('error-message', errorMsg);
  }
}

onMounted(() => {
  getJokes(props.category);
})
</script>
