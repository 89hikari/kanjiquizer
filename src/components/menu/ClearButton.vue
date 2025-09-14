<script setup lang="ts">
import { useAppStore } from "@/store/app.store";

const store = useAppStore();
</script>

<template>
  <div class="ml-auto text-h5 font-weight-bold d-flex align-center">
    <v-btn size="small" variant="outlined" @click="store.clear"
      >Clear progress</v-btn
    >
  </div>
</template>

<style scoped></style>
