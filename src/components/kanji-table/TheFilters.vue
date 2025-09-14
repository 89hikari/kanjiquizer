<script setup lang="ts">
import { useAppStore } from "@/store/app.store";
const store = useAppStore();
</script>

<template>
  <div class="d-flex justify-content-between ga-2 mt-2 mb-5">
    <v-btn
      v-for="el in store.kanjiTable.colorsList"
      :color="el"
      :class="{
        'border-md border-primary border-opacity-100':
          el === store.kanjiTable.filter,
      }"
      @click="store.kanjiTableSetFilter(el)"
      size="small"
    ></v-btn>
  </div>
</template>
