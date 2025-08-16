<script setup lang="ts">
import TheMenu from "./modules/menu/TheMenu.vue";
import ThePage from "./modules/page/ThePage.vue";
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="h-100">
        <TheMenu />
        <ThePage />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
