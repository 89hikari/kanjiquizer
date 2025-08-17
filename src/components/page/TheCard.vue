<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "../../store/app.store";

const store = useAppStore();

const classNames = computed(() => ({
  "mx-auto pa-6 rounded kanji mt-12 cursor-pointer border-lg border-opacity-100":
    true,
  [`border-${store.kanjiProgressColor}`]: true,
}));
</script>

<template>
  <div class="mt-12">
    <v-hover v-if="store.kanji" v-slot="{ isHovering, props }">
      <v-card
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        :class="classNames"
        :max-width="245"
        @click="store.setSelected()"
      >
        {{ store.kanji.kanji }}
      </v-card>
    </v-hover>
    <h1 v-else class="text-center">Select levels from above</h1>
  </div>
</template>

<style scoped>
.kanji {
  text-align: center;
  font-size: 130px;
}
</style>
