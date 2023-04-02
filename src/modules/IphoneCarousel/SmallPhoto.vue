<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  slide: {
    type: Object,
  },
});

const mainSrc = computed(() => {
  return new URL(
    `/src/assets/iPhoneCarousel/small-${props.slide.name}.jpg`,
    import.meta.url
  );
});

const scaleArray = [2, 3];

const mainSrcset = computed(() => {
  return scaleArray.reduce((acc, scale) => {
    acc = acc.length === 0 ? acc : `${acc}, `;
    return `${acc}${new URL(
      `/src/assets/iPhoneCarousel/small-${props.slide.name}@${scale}x.jpg`,
      import.meta.url
    )} ${scale}x`;
  }, "");
});
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
