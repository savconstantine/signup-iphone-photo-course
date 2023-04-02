<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="flex min-h-screen justify-center bg-[#0f0f0f] text-[#EEECEC]">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>
