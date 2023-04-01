<template>
  <div class="h-[1px] w-full max-w-[50px] rounded-[1px] bg-[#3A3A3A]">
    <div
      :style="fillerStyles"
      class="h-full rounded-[inherit] bg-[#EEECEC]"
    ></div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    bgcolor: String,
    completed: Number,
  },
  setup(props) {
    const fillerStyles = computed(() => {
      return {
        width: `${props.completed}%`,
        transition: "width 8s ease-in-out",
      };
    });

    return { fillerStyles };
  },
};
</script>
