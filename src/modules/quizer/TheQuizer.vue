<script setup lang="ts">
import TheCard from "@/components/quizer/TheCard.vue";
import TheGrades from "@/components/quizer/TheGrades.vue";
import TheMeaning from "@/components/quizer/TheMeaning.vue";
import { useAppStore } from "@/store/app.store";

const store = useAppStore();
</script>

<template>
  <v-row>
    <v-col cols="12">
      <TheCard />
      <template v-if="store.isSelected">
        <TheMeaning />
        <TheGrades />
      </template>
    </v-col>
  </v-row>
</template>

<style scoped></style>
