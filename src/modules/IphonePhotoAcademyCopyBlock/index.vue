<script setup>
import SignUpForm from "./SignUpForm.vue";
</script>

<template>
  <div
    class="mt-[10px] flex flex-col items-start justify-start gap-[16px] p-[16px] xs:mt-[79px] md:mt-0 md:min-h-full md:justify-center"
  >
    <div
      class="flex shrink-0 grow-0 items-start justify-start rounded-[32px] bg-[#2b5341] px-4 py-2"
    >
      <p
        class="order-none flex-none shrink-0 grow-0 text-left text-xs font-semibold uppercase leading-[12px] tracking-[2px] text-[#eeecec]"
      >
        New course
      </p>
    </div>
    <h1
      class="shrink-0 grow-0 text-left font-serif text-[40px] leading-[48px] text-[#eeecec] md:mb-[20px] md:max-w-[449px] md:text-[63px] md:leading-[63px]"
    >
      iPhone Photo Academy
    </h1>
    <SignUpForm />
  </div>
</template>
