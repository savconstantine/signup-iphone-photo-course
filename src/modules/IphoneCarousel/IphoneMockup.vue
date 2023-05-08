<script setup>
import { ref, computed } from "vue";
import { getSrc, getSrcset } from "@/utils/iphoneCarouselImages";

import { useIphoneCarousel } from "@/stores/iphoneCarousel";

const iphoneCarouselStore = useIphoneCarousel();

const iphoneMockupLoaded = ref(false);

const mainSrc = computed(() =>
  getSrc(iphoneCarouselStore.getIphoneMockupFilename, "png")
);
const mainSrcset = computed(() =>
  getSrcset(iphoneCarouselStore.getIphoneMockupFilename, [2, 3], "png")
);

const handleImageLoad = () => {
  iphoneCarouselStore.setIphoneMockupLoadStatus(true);
  iphoneMockupLoaded.value = true;
};
</script>

<template>
  <img
    v-show="iphoneMockupLoaded"
    @load="handleImageLoad"
    :src="mainSrc"
    :alt="iphoneCarouselStore.getIphoneMockupFilename"
    :srcset="mainSrcset"
    class="absolute z-[0] mx-auto h-auto w-full max-w-[310px] bg-contain bg-center bg-no-repeat xs:h-[692px] xs:max-w-[336px]"
  />
</template>
