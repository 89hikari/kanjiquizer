<script setup lang="ts">
import { useAppStore } from "../../store/app.store";

const store = useAppStore();
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
