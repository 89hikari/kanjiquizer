<script setup lang="ts">
import { useAppStore } from "@/store/app.store";

interface Props {
  pageCount: number;
}
defineProps<Props>();
const store = useAppStore();
</script>

<template>
  <div class="d-flex justify-center pa-4">
    <v-pagination
      v-model="store.kanjiTable.page"
      :length="pageCount"
      :total-visible="3"
      size="x-small"
    />
  </div>
</template>
