<script setup lang="ts">
import response from "./constant/response.json"
import MultiStep from "./components/MultiStep.vue"
</script>

<template>
  <MultiStep :stepForm="response" />
</template>
