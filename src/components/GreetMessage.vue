<template>
  <div class="hello w-50">
    <p class="title-size">{{ props.msgFirst }}</p>
    <h1 class="title-size mb-5">{{ props.msgSecond }}</h1>
    <span class="text-white fst-italic">{{ props.additionalText }} </span>
  </div>
</template>

<script setup>
const props = defineProps(['msgFirst', 'msgSecond', 'additionalText'])
</script>
