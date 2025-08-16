<script setup lang="ts">
import { useAppStore } from "../store/app.store";

const store = useAppStore();
</script>

<template>
  <div class="text-center mx-auto mt-5" :style="{ maxWidth: '300px' }">
    <p>Он: {{ store.currentKanji.on || '-' }}</p>
    <p>Кун: {{ store.currentKanji.kun || '-' }}</p>
  </div>
</template>

<style scoped></style>
