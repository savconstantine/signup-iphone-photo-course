<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  currentSlide: Number,
  isCurrentSlide: Boolean,
  isCurrentItemLessThenCurrentSlide: Boolean,
});

const fillerStyles = ref({ width: "0%" });

watch(
  () => props.currentSlide,
  (newVal) => {
    console.log("newVal", newVal);

    if (newVal === 0) {
      fillerStyles.value = { width: "0%" };
    }

    if (props.isCurrentSlide) {
      fillerStyles.value = {
        width: `100%`,
        transition: "width 8s ease-in-out",
      };
    }
    if (props.isCurrentItemLessThenCurrentSlide) {
      fillerStyles.value = {
        width: "100%",
      };
    }
  }
);
</script>
<template>
  <div class="h-[1px] w-full max-w-[50px] rounded-[1px] bg-[#3A3A3A]">
    <div
      :style="fillerStyles"
      class="h-full w-[1%] rounded-[inherit] bg-[#EEECEC]"
    ></div>
  </div>
</template>
