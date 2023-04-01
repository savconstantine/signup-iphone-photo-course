<script setup>
import Item from "./Item.vue";
import { ref } from "vue";
const completed = ref(0);
setInterval(
  () => (completed.value = Math.floor(Math.random() * 100) + 1),
  2000
);
</script>

<template>
  <div class="flex w-full justify-center gap-[8px] pb-[30px] pt-[15px]">
    <Item :completed="completed" />
    <Item :completed="completed" />
    <Item :completed="completed" />
    <Item :completed="completed" />
  </div>
</template>
