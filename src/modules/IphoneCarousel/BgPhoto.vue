<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  slide: {
    type: Object,
  },
});

const mainSrc = computed(() => {
  return new URL(
    `/src/assets/iPhoneCarousel/${props.slide.name}.jpg`,
    import.meta.url
  );
});

const scaleArray = [2, 3];

const mainSrcset = computed(() => {
  return scaleArray.reduce((acc, scale) => {
    acc = acc.length === 0 ? acc : `${acc}, `;
    return `${acc}${new URL(
      `/src/assets/iPhoneCarousel/${props.slide.name}@${scale}x.jpg`,
      import.meta.url
    )} ${scale}x`;
  }, "");
});
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
