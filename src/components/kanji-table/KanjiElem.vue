<script setup lang="ts">
import type { IKanji } from "@/common/types";
import { useAppStore } from "@/store/app.store";
import TooltipData from "./TooltipData.vue";

interface Props {
  kanji: IKanji;
}

defineProps<Props>();
const store = useAppStore();
const getColor = (kanji: string) => store.kanjiTable.map.get(kanji);
</script>

<template>
  <v-col cols="3" md="1" sm="2">
    <div
      class="kanji border text-h5 pa-2 bg-white cursor-pointer"
      :class="`bg-${getColor(kanji.kanji)}`"
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
        <template v-slot:activator="{ props: thisProps }">
          <div v-bind="thisProps">
            <p>{{ kanji.kanji }}</p>
            <span class="kanji-level">N{{ kanji.level }}</span>
          </div>
        </template>
        <TooltipData :kanji="kanji" />
      </v-tooltip>
    </div>
  </v-col>
</template>

<style lang="scss" scoped>
.kanji {
  position: relative;
  user-select: none;
  width: 50px;
  margin: 0 auto;
  text-align: center;
  height: 50px;
  &-level {
    position: absolute;
    font-size: 8px;
    top: 2px;
    right: 2px;
  }
}
</style>
