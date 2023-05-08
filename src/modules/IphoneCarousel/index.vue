<script setup>
import { defineAsyncComponent, watch } from "vue";

import IphoneMockup from "./IphoneMockup.vue";

const ShutterButton = defineAsyncComponent(() => import("./ShutterButton.vue"));
const BgPhoto = defineAsyncComponent(() => import("./BgPhoto.vue"));
const MainPhoto = defineAsyncComponent(() => import("./MainPhoto.vue"));
const SmallPhoto = defineAsyncComponent(() => import("./SmallPhoto.vue"));
const ProgressIndicator = defineAsyncComponent(() =>
  import("./ProgressIndicator/List.vue")
);

import { useIphoneCarousel } from "@/stores/iphoneCarousel";
const iphoneCarouselStore = useIphoneCarousel();

watch(
  () => iphoneCarouselStore.isAllPicturesLoaded,
  (isAllPicturesLoaded) => {
    if (isAllPicturesLoaded) {
      iphoneCarouselStore.rollTheSlides();
    }
  }
);
</script>

<template>
  <div
    class="w-full max-w-[393px] px-[4px] xs:px-[10px] md:flex md:min-h-full md:flex-col md:justify-center"
  >
    <div
      class="relative mx-auto h-[692px] w-full max-w-[310px] bg-contain bg-center bg-no-repeat xs:max-w-[336px]"
    >
      <BgPhoto />
      <IphoneMockup />
      <SmallPhoto />
      <ShutterButton />
      <MainPhoto />
    </div>
    <ProgressIndicator />
  </div>
</template>
