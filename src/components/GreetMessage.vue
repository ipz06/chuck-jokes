<template>
  <div class="hello">
    <p class="title-size">{{ props.msgFirst }}</p>
    <h1 class="title-size">{{ props.msgSecond }}</h1>
  </div>
</template>

<script setup>
const props = defineProps(['msgFirst', 'msgSecond'])
</script>
