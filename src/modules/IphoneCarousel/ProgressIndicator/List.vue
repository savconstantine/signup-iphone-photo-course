<script setup>
import Item from "./Item.vue";

import { useIphoneCarousel } from "@/stores/iPhoneCarousel";

const iphoneCarouselStore = useIphoneCarousel();

const slides = iphoneCarouselStore.getSlides;

const isCurrentSlide = (index) => {
  return index === iphoneCarouselStore.getCurrentSlide;
};
const isCurrentItemLessThenCurrentSlide = (index) => {
  return index < iphoneCarouselStore.getCurrentSlide;
};
</script>

<template>
  <div class="flex w-full justify-center gap-[8px] pb-[30px] pt-[15px]">
    <Item
      v-for="(slide, index) in slides"
      :key="slide.id"
      :currentSlide="iphoneCarouselStore.getCurrentSlide"
      :isCurrentSlide="isCurrentSlide(index)"
      :isCurrentItemLessThenCurrentSlide="
        isCurrentItemLessThenCurrentSlide(index)
      "
    />
  </div>
</template>
