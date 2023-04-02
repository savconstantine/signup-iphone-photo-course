<script setup>
import { useIphoneCarousel } from "@/stores/iPhoneCarousel";

const iphoneCarouselStore = useIphoneCarousel();

const takeAPicture = () => {
  iphoneCarouselStore.clearTimeoutId();
  iphoneCarouselStore.rollTheSlides();
};
</script>

<template>
  <button
    type="button"
    class="absolute bottom-[90px] left-[133px] h-[44px] w-[44px] rounded-full bg-white xs:bottom-[71px] xs:left-[145px] xs:h-[47px] xs:w-[47px]"
    @click="takeAPicture"
  ></button>
</template>
