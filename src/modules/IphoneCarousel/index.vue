<script setup>
import { onMounted, computed } from "vue";

import BgPhoto from "./BgPhoto.vue";
import MainPhoto from "./MainPhoto.vue";
import SmallPhoto from "./SmallPhoto.vue";
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
    class="w-full max-w-[393px] px-[4px] xs:px-[10px] md:flex md:min-h-full md:flex-col md:justify-center"
  >
    <div class="iphone-bg-mokup">
      <BgPhoto :slide="currentSlide" />
      <SmallPhoto :slide="previousSlide" />
      <ShutterButton />
      <MainPhoto :slide="currentSlide" />
    </div>
    <ProgressIndicator />
  </div>
</template>

<style scoped>
.iphone-bg-mokup {
  @apply relative mx-auto h-[692px] w-full max-w-[310px] bg-contain bg-center bg-no-repeat xs:max-w-[336px];
  background-image: url("@/assets/iPhoneCarousel/iPhone-mokup.png");
  background-image: -webkit-image-set(
    url("@/assets/iPhoneCarousel/iPhone-mokup@2x.png") 2x,
    url("@/assets/iPhoneCarousel/iPhone-mokup@3x.png") 3x
  );
  background-image: image-set(
    url("@/assets/iPhoneCarousel/iPhone-mokup@2x.png") 2x,
    url("@/assets/iPhoneCarousel/iPhone-mokup@3x.png") 3x
  );
}
</style>
