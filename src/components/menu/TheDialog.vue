<script setup lang="ts">
import { useAppStore } from "@/store/app.store";
import TheLanguage from "./TheLanguage.vue";
import TheLevels from "./TheLevels.vue";

const store = useAppStore();
</script>

<template>
  <v-dialog v-model="store.menu.opened" max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        icon="mdi-menu"
        color="surface-variant"
        variant="flat"
      ></v-btn>
    </template>

    <template v-slot:default="{}">
      <v-card title="Menu">
        <v-card-text>
          <TheLevels />
          <TheLanguage />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" @click="store.menu.opened = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped></style>
