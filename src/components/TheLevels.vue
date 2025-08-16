<script setup lang="ts">
import { useAppStore } from "../store/app.store";

const store = useAppStore();
</script>

<template>
  <v-row>
    <v-col class="d-flex justify-center" v-for="el in store.levels">
      <v-btn
        color="primary"
        :variant="store.selectedLevels.indexOf(el) !== -1 ? 'flat' : 'outlined'"
        @click="store.setLevel(el)"
      >
        N{{ el }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped></style>
