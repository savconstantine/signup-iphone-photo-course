<script setup>
import IphonePhotoAcademyCopyBlock from "@/modules/IphonePhotoAcademyCopyBlock/IphonePhotoAcademyCopyBlock.vue";
import IphoneCarousel from "@/modules/IphoneCarousel/IphoneCarousel.vue";
import IPSLogo from "@/assets/ips-logo.svg?component";
</script>

<template>
  <div
    class="flex w-full max-w-[393px] flex-col items-start justify-start gap-4 md:flex-row"
  >
    <IPSLogo class="absolute left-[20px] top-[62px] hidden h-[45px] md:block" />
    <IphonePhotoAcademyCopyBlock />
    <IphoneCarousel />
  </div>
</template>
