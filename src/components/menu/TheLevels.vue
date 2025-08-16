<script setup lang="ts">
import { watch } from "vue";
import { useAppStore } from "../../store/app.store";

const store = useAppStore();

watch(
  () => store.menu.selectedLevels,
  () => {
    store.setKanji();
  }
);
</script>

<template>
  <v-select
    label="Levels"
    v-model="store.menu.selectedLevels"
    :items="store.menu.levels"
    multiple
    chips
  ></v-select>
</template>

<style scoped></style>
