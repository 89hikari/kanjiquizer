<script setup lang="ts">
import { useAppStore } from "@/store/app.store";

const store = useAppStore();
</script>

<template>
  <v-select
    label="Language (// TODO)"
    v-model="store.menu.lang.selected"
    :items="store.menu.lang.list"
  ></v-select>
</template>

<style scoped></style>
f
