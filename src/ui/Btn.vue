<template>
  <button class="ips-btn-bg">
    <p class="text-base font-semibold leading-4 text-[#eeecec]">
      <slot>Button</slot>
    </p>
  </button>
</template>

<style lang="scss" scoped>
.ips-btn-bg {
  @apply relative z-[1] box-border flex w-full items-center justify-center rounded-[6px] border-[1px] border-transparent bg-clip-padding px-[35.5px] py-4 transition-transform duration-100 ease-linear active:scale-[0.95];
  background: linear-gradient(135deg, #370c14 0%, #280c23 100%) padding-box,
    linear-gradient(135deg, #d41c3d 0%, #861b83 100%) border-box;

  &::before {
    @apply absolute bottom-0 left-0 right-0 top-0 z-[-1] rounded-[6px] border-transparent opacity-0 transition-opacity duration-300 ease-linear content-[''];
    background: linear-gradient(135deg, #62051c 0%, #440c3a 100%) padding-box,
      linear-gradient(135deg, #d41c3d 0%, #861b83 100%) border-box;
  }
  &:hover::before {
    @apply opacity-100;
  }
}
</style>
