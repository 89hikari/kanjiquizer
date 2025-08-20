<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "../store/app.store";

const store = useAppStore();

const page = ref(1);
const pageCount = computed(() => Math.ceil(store.kanjiList.length / 100));

const getColor = (kanji: string) => store.kanjiTableAdded.get(kanji);
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
          :class="`bg-${getColor(kanji.raw.kanji)}`"
          v-for="kanji in items"
          :key="kanji.raw.kanji"
        >
          <v-tooltip
            :open-on-hover="false"
            open-on-click
            location="bottom"
            max-width="250"
            target="cursor"
            interactive
            close-on-content-click
            offset="25"
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
              <p>Kun: {{ kanji.raw.kun }}</p>
              <div class="d-flex justify-content-between ga-2 my-2">
                <v-btn
                  v-for="el in store.kanjiTableColorsList"
                  :color="el"
                  @click="store.kanjiTableToggleKanji(kanji.raw.kanji, el)"
                  size="small"
                ></v-btn>
              </div>
            </div>
          </v-tooltip>
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
  user-select: none;
  &-level {
    position: absolute;
    font-size: 8px;
    top: 2px;
    right: 2px;
  }
}
</style>
