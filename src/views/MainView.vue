<script setup>
import { ref, defineAsyncComponent } from "vue";
import Spinner from "@/ui/Spinner.vue";

import IphonePhotoAcademyCopyBlock from "@/modules/IphonePhotoAcademyCopyBlock/index.vue";
import IPSLogoText from "@/assets/ips-logo-text.svg?component";
import {
  preloadSingleImgToCache,
  preloadImgsToCache,
} from "@/utils/iphoneCarouselImages";
import { useIphoneCarousel } from "@/stores/iphoneCarousel";

const IphoneCarousel = defineAsyncComponent({
  loader: () => import("@/modules/IphoneCarousel/index.vue"),
  loadingComponent: Spinner,
});

const iphoneCarouselStore = useIphoneCarousel();

const slides = iphoneCarouselStore.getSlides;

const displayIphoneOnLoadImg = ref(false);
const iphoneImgLoadPromise = preloadSingleImgToCache(["iPhone-mokup"], "png");

const slidesImgLoadPromise = preloadImgsToCache(
  slides.reduce((acc, slide) => {
    return [...acc, slide.name, `small-${slide.name}`];
  }, []),
  "jpg"
);

Promise.all([iphoneImgLoadPromise, slidesImgLoadPromise])
  .then(() => (displayIphoneOnLoadImg.value = true))
  .catch((error) => console.error("Failed to load image:", error));
</script>

<template>
  <div
    class="flex w-full max-w-[393px] flex-col items-start justify-start gap-4 md:max-w-[1200px] md:flex-row md:justify-between"
  >
    <IPSLogoText
      class="absolute left-[20px] top-[62px] hidden h-[45px] md:block"
    />
    <IphonePhotoAcademyCopyBlock />
    <transition name="fade-photo" mode="out-in" appear>
      <IphoneCarousel v-if="displayIphoneOnLoadImg" />
      <Spinner v-else />
    </transition>
  </div>
</template>
