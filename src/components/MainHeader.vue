<template>
  <header class="bg-animated text-white py-6 relative">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Left Section -->
      <div class="flex flex-col">
        <div class="text-4xl md:text-5xl font-bold">
          <RouterLink to="/">Shawn Thorne</RouterLink>
        </div>
        <div class="text-lg md:text-xl italic">Full-Stack Software Developer</div>
      </div>

      <!-- Right Section -->
      <nav class="hidden md:flex gap-6">
        <RouterLink :to="{ name: 'About' }" class="menuItem" :class="route.name">About</RouterLink>
        <RouterLink :to="{ name: 'Experience' }" class="menuItem">Experience</RouterLink>
        <RouterLink :to="{ name: 'Education' }" class="menuItem">Education</RouterLink>
      </nav>

      <!-- Hamburger Menu Button -->
      <button
        class="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white"
        @click="toggleMenu"
      >
        <span class="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-black bg-opacity-90 text-white absolute top-full left-0 w-full py-4 z-50"
    >
      <nav class="flex flex-col items-center gap-4">
        <RouterLink :to="{ name: 'About' }" class="menuItem" @click="closeMenu">About</RouterLink>
        <RouterLink :to="{ name: 'Experience' }" class="menuItem" @click="closeMenu"
          >Experience</RouterLink
        >
        <RouterLink :to="{ name: 'Education' }" class="menuItem" @click="closeMenu"
          >Education</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Reactive state for the menu
const isMenuOpen = ref(false)

// Toggles the menu open/close state
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Closes the menu
function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
@reference 'tailwindcss';

/* Background animation similar to LandingPage */
.bg-animated {
  @apply bg-gradient-to-r from-sky-600 via-black to-sky-800;
  background-size: 600% 600%;
  animation: gradientAnimation 10s ease-in-out infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Menu item hover effect */
.menuItem {
  @apply relative inline-flex pb-1 text-lg font-semibold transition-all cursor-pointer;
}

.menuItem:after {
  content: '';
  @apply absolute bottom-0 left-0 h-[.15rem] bg-white rounded-full w-0 transition-all;
}

.menuItem:hover:after {
  @apply w-full;
}
</style>
