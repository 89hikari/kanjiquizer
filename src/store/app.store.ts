import { defineStore } from "pinia";
import { getInitialStore } from "../common/helpers/store.helper";

import {
  getAverageValue,
  getRandomArbitrary,
} from "../common/helpers/math.helper";
import type { IKanji } from "../common/types";

export const useAppStore = defineStore("app", {
  state: () => ({
    ...getInitialStore(),
  }),
  actions: {
    setScore(value: number) {
      const curKanji = this.kanji?.kanji || "";
      const kanjiFromSet = this.progress.get(curKanji);
      this.progress.set(curKanji, {
        count: (kanjiFromSet?.count || 0) + 1,
        result: [...(kanjiFromSet?.result || []), value],
      });
      this.setUnselected();
      this.setNewIndex();
    },
    setNewIndex() {
      this.currentIndex++;
    },
    setSelected() {
      this.isSelected = true;
    },
    setUnselected() {
      this.isSelected = false;
    },
    clear() {
      this.progress.clear();
    },
    kanjiTableToggleKanji(kanji: string, value: string) {
      this.kanjiTableAdded.set(kanji, value);
    },
  },
  getters: {
    filteredIndexes(): number[] {
      return this.indexList.filter((el) =>
        this.menu.selectedLevels.find(
          (lev) => lev === +this.kanjiList[el].level
        )
      );
    },
    kanji(): IKanji | undefined {
      if (
        this.currentIndex % getRandomArbitrary(3, 10) === 0 &&
        this.mostProblematicKanji
      ) {
        return this.mostProblematicKanji;
      }
      const kanjiIndex = this.filteredIndexes.at(this.currentIndex);
      return kanjiIndex !== undefined
        ? this.kanjiList.at(kanjiIndex)
        : kanjiIndex;
    },
    mostProblematicKanji(): IKanji | undefined {
      const kanjiList = this.filteredIndexes
        .map((el) => this.kanjiList[el])
        .filter((el) => {
          const isSelectedLevel = this.menu.selectedLevels.find(
            (lev) => lev === +el.level
          );
          const progressResult = this.progress.get(el.kanji);
          return isSelectedLevel && progressResult && progressResult.count > 0;
        })
        .map((el) => {
          const kanji = this.progress.get(el.kanji);
          return {
            ...el,
            progressResult: getAverageValue(kanji!.result, kanji!.count),
          };
        });
      kanjiList.sort((a, b) => a.progressResult - b.progressResult);
      const foundKanji = kanjiList.at(0);
      if ((foundKanji?.progressResult || 0) < 75) {
        return foundKanji;
      }
    },
    kanjiProgressColor(): string {
      const kanji = this.progress.get(this.kanji?.kanji || "");
      const progressValue = kanji
        ? getAverageValue(kanji.result, kanji.count)
        : 0;
      if (progressValue === 100) return this.gradesList.at(-1)?.name || "";
      return (
        this.gradesList.find(
          (el, index) =>
            el.value < progressValue &&
            (this.gradesList.at(index + 1)?.value || 0) >= progressValue
        )?.name || ""
      );
    },
  },
});
