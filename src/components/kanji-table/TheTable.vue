<script setup lang="ts">
import { useAppStore } from "@/store/app.store";
import { computed } from "vue";
import { useDisplay } from "vuetify";
import KanjiElem from "./KanjiElem.vue";
import ThePagination from "./ThePagination.vue";

const { smAndDown, mdAndUp } = useDisplay();
const itemsPerPage = computed(() =>
  mdAndUp.value ? 120 : smAndDown.value ? 48 : 60
);
const store = useAppStore();
const pageCount = computed(() =>
  Math.ceil(store.kanjiTableFiltered.length / itemsPerPage.value)
);
</script>

<template>
  <v-data-iterator
    :items="store.kanjiTableFiltered"
    :items-per-page="itemsPerPage"
    v-model:page="store.kanjiTable.page"
  >
    <template #default="{ items }">
      <v-row>
        <KanjiElem
          v-for="kanji in items"
          :key="kanji.raw.kanji"
          :kanji="kanji.raw"
        />
      </v-row>
    </template>
    <template #footer>
      <ThePagination :page-count="pageCount" />
    </template>
  </v-data-iterator>
</template>
