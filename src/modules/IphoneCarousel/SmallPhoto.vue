<script setup>
import { defineProps, computed } from "vue";
import { getSrc, getSrcset } from "@/utils/iphoneCarouselImages";

const props = defineProps({
  slide: {
    type: Object,
  },
});

const mainSrc = computed(() => getSrc(`small-${props.slide.name}`));
const mainSrcset = computed(() =>
  getSrcset(`small-${props.slide.name}`, [2, 3])
);
</script>

<template>
  <div
    class="absolute bottom-[92px] left-[24px] h-[39px] w-[39px] overflow-hidden rounded-[1.5px] bg-black xs:bottom-[73px] xs:left-[28px] xs:h-[41px] xs:w-[41px]"
  >
    <transition name="fade-photo" mode="out-in">
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
