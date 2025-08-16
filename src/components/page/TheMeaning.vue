<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "../../store/app.store";

const store = useAppStore();

const kun = ref<string | null>(store.currentKanji.kun);
const on = ref<string | null>(store.currentKanji.on);

// onMounted(async () => {
//   if (store.menu.lang.selected !== "ru") {
//     console.log(123);
//     kun.value = null;
//     on.value = null;
//     kun.value = await translate(store.currentKanji.kun, "es");
//     on.value = await translate(store.currentKanji.on, "es");
//   }
// });
</script>

<template>
  <div class="text-center mx-auto mt-5" :style="{ maxWidth: '300px' }">
    <p>Onyomi: {{ on || "-" }}</p>
    <p>Kunyomi: {{ kun || "-" }}</p>
  </div>
</template>

<style scoped></style>
