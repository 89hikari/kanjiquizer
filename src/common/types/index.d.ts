export interface IKanji {
  kanji: string;
  on: string;
  kun: string;
  key: string;
  strokes: string;
  level: string;
}

export type KanjiProgress = {
  count: number;
  result: number[];
};
