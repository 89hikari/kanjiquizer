<script setup lang="ts">
import { useAppStore } from "../store/app.store";

const store = useAppStore();
</script>

<template>
  <div class="w-100 d-flex mt-10">
    <div class="ml-auto text-h4 font-weight-bold d-flex align-center">
      <p>{{ store.scoreValue }}%</p>
      <v-icon class="cursor-pointer" @click="store.clear()"
        >mdi-close-octagon-outline</v-icon
      >
    </div>
  </div>
</template>

<style scoped></style>
