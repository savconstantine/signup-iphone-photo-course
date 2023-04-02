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
  <transition name="fade-photo" mode="out-in" appear>
    <img
      :src="mainSrc"
      :alt="props.slide.alt"
      :srcset="mainSrcset"
      class="absolute left-[20px] top-[118px] z-[-1] max-w-[250px] scale-125 blur-3xl sm:max-w-[305px]"
      :key="props.slide.name + '-bg'"
    />
  </transition>
</template>
