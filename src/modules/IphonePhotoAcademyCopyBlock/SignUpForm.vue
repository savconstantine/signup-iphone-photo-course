<script setup>
import Btn from "@/ui/Btn.vue";
import EmailInputField from "@/ui/EmailInputField.vue";
</script>

<template>
  <div class="w-full">
    <div
      class="mb-[28px] text-[22px] font-normal leading-[30px] text-[#EEECEC]"
    >
      Sign up now to get notified <br />when this course is available!
    </div>
    <EmailInputField />
    <Btn>Please Notify Me</Btn>
  </div>
</template>
