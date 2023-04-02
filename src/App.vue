<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="flex min-h-screen justify-center">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>
