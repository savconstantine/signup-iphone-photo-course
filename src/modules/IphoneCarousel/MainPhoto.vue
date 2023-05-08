<script setup>
import { ref, computed } from "vue";
import { getSrc, getSrcset } from "@/utils/iphoneCarouselImages";

import { useIphoneCarousel } from "@/stores/iphoneCarousel";

const iphoneCarouselStore = useIphoneCarousel();

let slidesImgLoadedCount = ref(0);
const slides = computed(() => iphoneCarouselStore.getSlides);
const currentSlide = computed(() => iphoneCarouselStore.getCurrentSlide);

const isCurrentSlide = (slideIndex) => currentSlide.value === slideIndex;

const allSlidesLoaded = computed(
  () => slidesImgLoadedCount.value >= slides.value.length
);

const handleImageLoad = () => {
  if (allSlidesLoaded.value) return;
  slidesImgLoadedCount.value++;
  if (allSlidesLoaded.value) {
    iphoneCarouselStore.setMainSlidesLoadStatus(true);
  }
};
</script>

<template>
  <div
    class="absolute left-[12px] top-[107px] h-[387px] w-[284px] overflow-hidden bg-black xs:left-[14px] xs:top-[114px] xs:h-[418px] xs:w-[307px]"
  >
    <div class="absolute inset-0 bg-black"></div>
    <transition-group name="fade-photo" appear>
      <img
        v-show="isCurrentSlide(index) && allSlidesLoaded"
        :src="getSrc(slide.name)"
        :srcset="getSrcset(slide.name, [2, 3])"
        :alt="slide.alt"
        class="absolute h-full w-auto object-cover"
        :key="slide.name + '-main'"
        @load="handleImageLoad"
        v-for="(slide, index) in slides"
      />
    </transition-group>
  </div>
</template>
