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
    class="absolute bottom-[71px] left-[153px] h-[47px] w-[47px] rounded-full bg-white"
    @click="takeAPicture"
  ></button>
</template>
