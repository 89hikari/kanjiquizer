<script setup lang="ts">
import TheCard from "./components/TheCard.vue";
import TheGrades from "./components/TheGrades.vue";
import TheLevels from "./components/TheLevels.vue";
import TheMeaning from "./components/TheMeaning.vue";
import TheResult from "./components/TheResult.vue";
import { useAppStore } from "./store/app.store";

const store = useAppStore();
store.setKanji();
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="h-100">
        <v-row>
          <v-col cols="12">
            <TheLevels />
            <TheResult />
            <TheCard />
            <template v-if="store.isSelected">
              <TheMeaning />
              <TheGrades />
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
