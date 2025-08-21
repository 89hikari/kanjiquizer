import { useLocalStorage } from "@vueuse/core";
import { GRADES_LIST, KANJI_LIST, TABLE_COLORS_LIST } from "../const";

import type { KanjiProgress } from "../types";

export const getInitialStore = () => {
  const initialState = {
    kanjiList: KANJI_LIST,
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
    progress: useLocalStorage("progress", new Map<string, KanjiProgress>()),
    kanjiTable: {
      map: useLocalStorage("kanji-table-map", new Map<string, string>()),
      page: useLocalStorage("kanji-table-page", 1),
      colorsList: TABLE_COLORS_LIST,
      filter: null as string | null,
    },
  };

  initialState.indexList = [
    ...Array(initialState.kanjiList.length).keys(),
  ].sort(() => 0.5 - Math.random());

  return initialState;
};
