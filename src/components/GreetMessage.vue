<script setup>
const props = defineProps(['msgFirst', 'msgSecond'])
</script>

<template>
  <div class="hello">
    <h1 class="title-size">{{ props.msgFirst }}</h1>
    <h1 class="title-size">{{ props.msgSecond }}</h1>
  </div>
</template>
