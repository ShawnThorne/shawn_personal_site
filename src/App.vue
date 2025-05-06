<template>
  <main class="relative">
    <!-- <Transition appear name="simple-fade" mode="out-in"> -->
    <header v-if="routeVar.name !== 'LandingPage'">
      <MainHeader />
    </header>
    <div v-else></div>
    <!-- </Transition> -->
    <RouterView v-slot="{ Component, route }">
      <!-- <Transition name="fade-slide" mode="out-in"> -->
      <component :is="Component" :key="route.name" />
      <!-- </Transition> -->
    </RouterView>
  </main>
  <!-- <Transition appear name="simple-fade" mode="out-in"> -->
  <footer v-if="routeVar.name !== 'LandingPage'">
    <MainFooter />
  </footer>
  <div v-else></div>
  <!-- </Transition> -->
</template>

<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import { RouterView, useRoute } from 'vue-router'

const routeVar = useRoute()
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.simple-fade-enter-active,
.simple-fade-leave-active {
  transition: all 0.5s ease-out;
}

.simple-fade-enter-from {
  opacity: 0;
}

.simple-fade-leave-to {
  opacity: 0;
}
</style>
