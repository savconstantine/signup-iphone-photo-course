<script setup>
import MailIcon from "@/assets/mail-icon.svg?component";
import { ref } from "vue";

const email = ref("");
const isError = ref(false);
const labelText = ref("Enter Your Email Address");

let timer;

const validateEmail = () => {
  clearTimeout(timer);
  if (!email.value) {
    labelText.value = "Email is required";
    isError.value = true;
    timer = setTimeout(() => {
      isError.value = false;
      labelText.value = "Enter Your Email Address";
    }, 2000);
  } else if (
    !String(email.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    labelText.value = "Invalid email address";
    isError.value = true;
  } else {
    labelText.value = "Enter Your Email Address";
    isError.value = false;
  }
};
</script>

<template>
  <div class="relative mb-3 w-full">
    <input
      type="email"
      class="focus:border-primary focus:shadow-te-primary peer m-0 block h-[62px] w-full rounded-md border border-solid border-[#3A3A3A] bg-[#171715] bg-clip-padding p-[16px] pr-[45px] text-[16px] font-normal leading-tight text-[#EEECEC] ease-in-out placeholder:text-transparent focus:bg-[#171715] focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-[#EEECEC] focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
      id="emailInput"
      placeholder="name@example.com"
      v-model="email"
      @input="validateEmail"
    />
    <label
      for="emailInput"
      class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-[16px] text-[16px] text-[#EEECEC] transition-[opacity,_transform,color] duration-100 ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-[#3A3A3A] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-[#3A3A3A] motion-reduce:transition-none"
      :class="{
        ' peer-focus:text-[#FF0000] peer-[:not(:placeholder-shown)]:text-[#FF0000]':
          isError,
      }"
    >
      {{ labelText }}
    </label>
    <MailIcon class="absolute right-[16px] top-[19px]" />
  </div>
</template>
