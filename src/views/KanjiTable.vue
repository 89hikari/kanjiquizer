<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "../store/app.store";

const store = useAppStore();

const page = ref(1);
const pageCount = computed(() => Math.ceil(store.kanjiList.length / 100));
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
          class="kanji border text-h4 pa-2 bg-white cursor-pointer"
          v-for="kanji in items"
          :key="kanji.raw.kanji"
        >
          <v-tooltip
            :open-on-hover="false"
            open-on-click
            location="bottom"
            max-width="250"
            target="cursor"
          >
            <template v-slot:activator="{ props }">
              <div v-bind="props">
                <p>{{ kanji.raw.kanji }}</p>
                <span class="kanji-level">N{{ kanji.raw.level }}</span>
              </div>
            </template>
            <div>
              <p>{{ kanji.raw.kanji }}</p>
              <p>On: {{ kanji.raw.on }}</p>
              <p>On: {{ kanji.raw.kun }}</p>
            </div>
          </v-tooltip>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="d-flex justify-center pa-4">
        <v-pagination v-model="page" :length="pageCount" rounded="circle" />
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
