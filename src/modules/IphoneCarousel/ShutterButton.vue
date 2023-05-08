<script setup>
import { useIphoneCarousel } from "@/stores/iphoneCarousel";

const iphoneCarouselStore = useIphoneCarousel();

const takeAPicture = () => {
  iphoneCarouselStore.clearTimeoutId();
  iphoneCarouselStore.rollTheSlides();
};
</script>

<template>
  <button
    type="button"
    class="duration-400 absolute bottom-[114px] left-[133px] h-[44px] w-[44px] rounded-full bg-white transition-transform ease-linear active:scale-[0.80] xs:bottom-[71px] xs:left-[145px] xs:h-[47px] xs:w-[47px]"
    @click="takeAPicture"
  ></button>
</template>
