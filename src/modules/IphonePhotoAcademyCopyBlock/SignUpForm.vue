<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import Btn from "@/ui/Btn.vue";
import EmailInputField from "@/ui/EmailInputField.vue";

import { isAnyError } from "@/utils/formValidation";

const router = useRouter();

let signUpFormData = reactive({
  email: "",
});

const serverRequest = async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1500);
  });

  if (response.success) {
    signUpFormData.email = "";
    router.push({ path: "thank-you" });
  }
};

const signUpButtonPressed = () => {
  if (!isAnyError(signUpFormData).value) {
    serverRequest();
  }
};
</script>

<template>
  <div class="w-full">
    <div
      class="mb-[28px] text-[22px] font-normal leading-[30px] text-[#EEECEC]"
    >
      Sign up now to get notified <br />when this course is available!
    </div>
    <form @submit.prevent>
      <EmailInputField v-model="signUpFormData.email" class="" />
      <Btn @click="signUpButtonPressed"> Please Notify Me </Btn>
    </form>
  </div>
</template>
