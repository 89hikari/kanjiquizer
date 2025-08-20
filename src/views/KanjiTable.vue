<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "../store/app.store";

const store = useAppStore();

const page = ref(1);
const pageCount = computed(() => Math.ceil(store.kanjiList.length / 100));

const getIsAdded = (kanji: string) =>
  store.kanjiTableAdded.indexOf(kanji) !== -1;
</script>

<template>
  <v-data-iterator
    :items="store.kanjiList"
    :items-per-page="100"
    v-model:page="page"
  >
    <template #default="{ items }">
      <div class="d-flex flex-wrap ga-3">
        <div
          class="kanji border text-h4 bg-white cursor-pointer"
          v-for="kanji in items"
          :key="kanji.raw.kanji"
          @dblclick="store.kanjiTableToggleKanji(kanji.raw.kanji)"
        >
          <div
            :class="{ 'bg-green': getIsAdded(kanji.raw.kanji) }"
            class="pa-2"
          >
            <p>{{ kanji.raw.kanji }}</p>
            <span class="kanji-level">N{{ kanji.raw.level }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="d-flex justify-center pa-4">
        <v-pagination
          v-model="page"
          :length="pageCount"
          :total-visible="4"
          rounded="circle"
        />
      </div>
    </template>
  </v-data-iterator>
</template>

<style lang="scss" scoped>
.kanji {
  position: relative;
  &-level {
    position: absolute;
    font-size: 8px;
    top: 2px;
    right: 2px;
  }
}
</style>
