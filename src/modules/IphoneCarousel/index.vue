<script setup>
import { onMounted, computed } from "vue";

import BgPhoto from "./BgPhoto.vue";
import MainPhoto from "./MainPhoto.vue";
import SmallPhoto from "./SmallPhoto.vue";
import IphoneMokup from "./IphoneMokup.vue";
import ShutterButton from "./ShutterButton.vue";
import ProgressIndicator from "./ProgressIndicator/List.vue";

import { useIphoneCarousel } from "@/stores/iPhoneCarousel";

const iphoneCarouselStore = useIphoneCarousel();

const slides = iphoneCarouselStore.getSlides;

onMounted(() => {
  iphoneCarouselStore.rollTheSlides();
});

const currentSlide = computed(
  () => slides[iphoneCarouselStore.getCurrentSlide]
);

const previousSlide = computed(() => {
  return slides[
    iphoneCarouselStore.getCurrentSlide - 1 < 0
      ? slides.length - 1
      : iphoneCarouselStore.getCurrentSlide - 1
  ];
});
</script>

<template>
  <div
    class="w-full max-w-[393px] px-[20px] md:flex md:min-h-full md:flex-col md:justify-center"
  >
    <div class="relative">
      <BgPhoto :slide="currentSlide" />
      <IphoneMokup />
      <SmallPhoto :slide="previousSlide" />
      <ShutterButton />
      <MainPhoto :slide="currentSlide" />
    </div>
    <ProgressIndicator />
  </div>
</template>
