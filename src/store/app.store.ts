import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

import { GRADES_LIST, KANJI_LIST } from "../common/const/index";
import type { IKanji } from "../common/types";

const initialState = {
  kanjiList: KANJI_LIST,
  score: useLocalStorage("score", [] as number[]),
  currentKanji: {} as unknown as IKanji,
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

export const useAppStore = defineStore("app", {
  state: () => ({
    ...initialState,
  }),
  actions: {
    setScore(value: number) {
      this.score.push(value);
      this.setUnselected();
      this.setKanji();
    },
    setKanji() {
      const newKanjiIndex = Math.floor(
        Math.random() * this.filteredCardsByLevel.length
      );

      if (
        this.filteredCardsByLevel[newKanjiIndex]?.kanji ===
        this.currentKanji?.kanji
      ) {
        this.currentKanji = this.filteredCardsByLevel[newKanjiIndex + 1];
        return;
      }
      this.currentKanji = this.currentKanji =
        this.filteredCardsByLevel[newKanjiIndex];
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
    filteredCardsByLevel(store) {
      return store.kanjiList.filter((el) =>
        store.menu.selectedLevels.find((lev) => lev === +el.level)
      );
    },
    scoreValue(store) {
      return (
        Math.ceil(
          store.score.reduce((a, b) => a + b, 0) / store.score.length
        ) || 0
      );
    },
  },
});
