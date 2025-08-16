import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

import { GRADES_LIST, KANJI_LIST } from "../common/const/index";
import type { IKanji } from "../common/types";

const initialState = {
  kanjiList: KANJI_LIST,
  score: useLocalStorage("score", [] as number[]),
  indexList: [] as number[],
  currentIndex: 0,
  gradesList: GRADES_LIST,
  isSelected: false,
  menu: {
    opened: false,
    levels: Array.from({ length: 5 }, (_, i) => i + 1),
    selectedLevels: useLocalStorage("selected-levels", [] as number[]),
    lang: {
      selected: useLocalStorage("language", "ru"),
      list: [
        {
          title: "Русский",
          value: "ru",
        },
        {
          title: "English",
          value: "en",
        },
      ],
    },
  },
};

initialState.indexList = [...Array(initialState.kanjiList.length).keys()].sort(
  () => 0.5 - Math.random()
);

export const useAppStore = defineStore("app", {
  state: () => ({
    ...initialState,
  }),
  actions: {
    setScore(value: number) {
      this.score.push(value);
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
      this.score = [];
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
    scoreValue(): number {
      return (
        Math.ceil(this.score.reduce((a, b) => a + b, 0) / this.score.length) ||
        0
      );
    },
    kanji(): IKanji | undefined {
      const kanjiIndex = this.filteredIndexes.at(this.currentIndex);
      if (kanjiIndex) return this.kanjiList.at(kanjiIndex);
      return kanjiIndex as undefined;
    },
  },
});
