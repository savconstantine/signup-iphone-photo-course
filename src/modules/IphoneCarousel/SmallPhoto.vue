<script setup>
import { ref, computed } from "vue";
import { getSrc, getSrcset } from "@/utils/iphoneCarouselImages";

import { useIphoneCarousel } from "@/stores/iphoneCarousel";
const iphoneCarouselStore = useIphoneCarousel();

let slidesImgLoadedCount = ref(0);
const slides = computed(() => iphoneCarouselStore.getSlides);
const getPreviousSlide = computed(() => iphoneCarouselStore.getPreviousSlide);

const isPreviousSlide = (slideIndex) => getPreviousSlide.value === slideIndex;

const allSlidesLoaded = computed(
  () => slidesImgLoadedCount.value >= slides.value.length
);

const handleImageLoad = () => {
  if (allSlidesLoaded.value) return;
  slidesImgLoadedCount.value++;
  if (allSlidesLoaded.value) {
    iphoneCarouselStore.setGallerySlidesLoadStatus(true);
  }
};
</script>

<template>
  <div
    class="absolute bottom-[116px] left-[24px] h-[39px] w-[39px] overflow-hidden rounded-[1.5px] bg-black xs:bottom-[73px] xs:left-[27px] xs:h-[41px] xs:w-[41px]"
  >
    <div class="absolute inset-0 bg-black"></div>
    <transition-group name="fade-photo" appear>
      <img
        v-show="isPreviousSlide(index) && allSlidesLoaded"
        :src="getSrc(`small-${slide.name}`)"
        :srcset="getSrcset(`small-${slide.name}`, [2, 3])"
        :alt="slide.alt"
        class="h-full w-auto object-cover"
        :key="slide.name + '-small'"
        @load="handleImageLoad"
        v-for="(slide, index) in slides"
      />
    </transition-group>
  </div>
</template>
