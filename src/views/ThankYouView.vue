<script setup>
import Btn from "@/ui/Btn.vue";

const youtubeLink = "https://www.youtube.com/user/iPhonePS?sub_confirmation=1";

const goToYoutube = () => {
  window.open(youtubeLink);
};
</script>
<template>
  <div
    class="flex flex-col justify-center bg-[#0F0F0F] px-[16px] text-[#EEECEC]"
  >
    <div class="font-serif">
      <h1 class="text-center text-[32px] font-normal leading-[48px]">
        Thank You!
      </h1>
      <p class="text-center text-lg font-normal leading-[26px] text-[#EEECEC]">
        You will get notified when iPhone <br />Photo Academy becomes available
      </p>
    </div>
    <Btn @click="() => goToYoutube()" class="mt-[16px]">
      Subscribe To Our Youtube Channel
    </Btn>
  </div>
</template>
