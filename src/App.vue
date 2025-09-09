<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const currentTab = ref(route.path);
const routes = router.getRoutes();

watch(currentTab, () => !currentTab.value && router.push("/quizer"));
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs v-model="currentTab" align-tabs="center" size>
        <v-tab v-for="el in routes" :to="el.path" replace>{{ el.name }}</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
