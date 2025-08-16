<script setup lang="ts">
import { useAppStore } from "../store/app.store";

const store = useAppStore();
</script>

<template>
  <div
    class="d-flex justify-space-between mx-auto mt-10 flex-wrap ga-1"
    :style="{ maxWidth: '400px' }"
  >
    <v-btn
      v-for="el in store.gradesList"
      :color="el.name"
      @click="store.setScore(el.value)"
      size="small"
    >
      {{ el.name }}
    </v-btn>
  </div>
</template>

<style scoped></style>
