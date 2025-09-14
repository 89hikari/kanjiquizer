<script setup lang="ts">
import type { IKanji } from "@/common/types";
import { useAppStore } from "@/store/app.store";

interface Props {
  kanji: IKanji;
}

defineProps<Props>();
const store = useAppStore();
</script>

<template>
  <div>
    <p>{{ kanji.kanji }}</p>
    <p>On: {{ kanji.on }}</p>
    <p>Kun: {{ kanji.kun }}</p>
    <div class="d-flex justify-content-between ga-2 my-2">
      <v-btn
        v-for="el in store.kanjiTable.colorsList"
        :color="el"
        @click="store.kanjiTableToggleKanji(kanji.kanji, el)"
        size="small"
      ></v-btn>
    </div>
  </div>
</template>
