<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "../store/app.store";

const store = useAppStore();
const pageCount = computed(() =>
  Math.ceil(store.kanjiTableFiltered.length / 105)
);

const getColor = (kanji: string) => store.kanjiTable.map.get(kanji);
</script>

<template>
  <div class="d-flex justify-content-between ga-2 mt-2 mb-5">
    <v-btn
      v-for="el in store.kanjiTable.colorsList"
      :color="el"
      :class="{
        'border-md border-primary border-opacity-100':
          el === store.kanjiTable.filter,
      }"
      @click="store.kanjiTableSetFilter(el)"
      size="small"
    ></v-btn>
  </div>
  <v-data-iterator
    :items="store.kanjiTableFiltered"
    :items-per-page="105"
    v-model:page="store.kanjiTable.page"
  >
    <template #default="{ items }">
      <div class="d-flex flex-wrap ga-1">
        <div
          class="kanji border text-h5 pa-2 bg-white cursor-pointer"
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
                  v-for="el in store.kanjiTable.colorsList"
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
          v-model="store.kanjiTable.page"
          :length="pageCount"
          :total-visible="3"
          size="x-small"
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
