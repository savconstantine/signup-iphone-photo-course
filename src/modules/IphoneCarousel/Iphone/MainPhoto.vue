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
  <div
    class="absolute left-[23px] top-[116px] h-[418px] w-[307px] overflow-hidden bg-black"
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
