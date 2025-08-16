<script setup lang="ts">
import { useAppStore } from "../store/app.store";

const store = useAppStore();
</script>

<template>
  <div class="mt-12">
    <v-hover v-if="store.currentKanji" v-slot="{ isHovering, props }">
      <v-card
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        class="mx-auto pa-6 rounded kanji mt-12 cursor-pointer"
        :max-width="300"
        @click="store.setSelected()"
      >
        {{ store.currentKanji.kanji }}
      </v-card>
    </v-hover>
    <h1 v-else class="text-center">Select levels from above</h1>
  </div>
</template>

<style scoped>
.kanji {
  text-align: center;
  font-size: 165px;
}
</style>
