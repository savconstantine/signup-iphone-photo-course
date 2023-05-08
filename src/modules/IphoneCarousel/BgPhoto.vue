<script setup>
import { computed } from "vue";
import { getSrc, getSrcset } from "@/utils/iphoneCarouselImages";

import { useIphoneCarousel } from "@/stores/iphoneCarousel";

const iphoneCarouselStore = useIphoneCarousel();

const slides = computed(() => iphoneCarouselStore.getSlides);
const currentSlide = computed(() => iphoneCarouselStore.getCurrentSlide);

const isCurrentSlide = (slideIndex) => currentSlide.value === slideIndex;
</script>

<template>
  <transition-group name="fade-photo" appear>
    <img
      v-show="isCurrentSlide(index)"
      :src="getSrc(slide.name)"
      :srcset="getSrcset(slide.name, [2, 3])"
      :alt="slide.alt"
      class="absolute left-[20px] top-[118px] z-[-1] max-w-[250px] scale-125 blur-3xl sm:max-w-[305px]"
      :key="slide.name + '-bg'"
      v-for="(slide, index) in slides"
    />
  </transition-group>
</template>
