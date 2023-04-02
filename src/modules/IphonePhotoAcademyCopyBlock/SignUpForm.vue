<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import Btn from "@/ui/Btn.vue";
import EmailInputField from "@/ui/EmailInputField.vue";
import Spinner from "@/ui/Spinner.vue";

import { isAnyError } from "@/utils/formValidation";

const router = useRouter();

let signUpFormData = reactive({
  email: "",
});

let loading = ref(false);

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
    loading.value = true;
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
    <form @submit.prevent class="relative">
      <EmailInputField
        v-model="signUpFormData.email"
        :class="{ 'opacity-60': loading }"
        :disabled="loading"
        class="transition-opacity duration-300 ease-in-out"
      />
      <Btn
        @click="signUpButtonPressed"
        :class="{ 'opacity-60': loading }"
        :disabled="loading"
        class="transition-opacity duration-300 ease-in-out"
      >
        Please Notify Me
      </Btn>
      <transition name="fade">
        <div
          class="absolute top-1/3 z-10 mx-auto max-h-[55px] w-full transition-all duration-300 ease-in-out md:left-1/3 md:w-[55px]"
        >
          <Spinner v-if="loading" class="" />
        </div>
      </transition>
    </form>
  </div>
</template>
