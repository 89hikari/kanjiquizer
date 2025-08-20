import { createRouter, createWebHistory } from "vue-router";
import KanjiTable from "../views/KanjiTable.vue";
import TheQuizer from "../views/TheQuizer.vue";

const routes = [
  {
    path: "/quizer",
    name: "Quizer",
    component: TheQuizer,
  },
  {
    path: "/kanji-table",
    name: "KanjiTable",
    component: KanjiTable,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
