<script setup>
import { defineProps, computed } from "vue";
import { getSrc, getSrcset } from "@/utils/iphoneCarouselImages";

const props = defineProps({
  slide: {
    type: Object,
  },
});

const mainSrc = computed(() => getSrc(props.slide.name));
const mainSrcset = computed(() => getSrcset(props.slide.name, [2, 3]));
</script>

<template>
  <div
    class="absolute left-[13px] top-[131px] h-[387px] w-[284px] overflow-hidden bg-black xs:left-[15px] xs:top-[114px] xs:h-[418px] xs:w-[307px]"
  >
    <transition name="fade-photo" mode="out-in" appear>
      <img
        :src="mainSrc"
        :alt="props.slide.alt"
        :srcset="mainSrcset"
        class="h-full w-auto object-cover"
        :key="props.slide.name + '-main'"
      />
    </transition>
  </div>
</template>
