<template>
  <!-- Main Container -->
  <div class="min-h-screen">
    <div class="text-center p-8 h-screen w-full">
      <!-- Grid Layout -->
      <div class="grid md:grid-cols-2 bg-animated h-full w-full text-white rounded-lg shadow-lg">
        <!-- Left Section: Content -->
        <div class="flex flex-grow justify-center gap-4 items-center flex-col w-full">
          <!-- Introduction Section -->
          <div class="p-4 md:p-24 !pb-0 max-w-full">
            <div class="font-bold text-5xl xl:text-9xl text-left flex">Hi there I'm Shawn</div>
            <div>
              <div class="md:text-xl text-sm text-left mt-4 italic">
                Taking ideas from concept to reality
              </div>
            </div>

            <!-- Menu Section -->
            <div class="text-center md:text-left mt-8 flex flex-col">
              <div>
                <div @click="redirectTo('About')" class="menuItem">About Me</div>
              </div>
              <div>
                <div @click="redirectTo('Experience')" class="menuItem">Work Experience</div>
              </div>
              <div>
                <div @click="redirectTo('Education')" class="menuItem">Education</div>
              </div>
            </div>
          </div>

          <!-- Footer Section -->
          <div class="self-start hidden md:flex md:px-24 justify-start flex-col mt-4">
            <div class="text-left">
              Designed in
              <a target="_blank" href="https://www.figma.com/" class="font-bold link-hover">Figma</a
              >.
              <br />
              Made with
              <a target="_blank" href="https://vuejs.org/" class="font-bold link-hover">Vue</a>,
              <a target="_blank" href="https://tailwindcss.com/" class="font-bold link-hover"
                >Tailwind CSS</a
              >, and
              <a target="_blank" href="https://daisyui.com/" class="font-bold link-hover">DaisyUi</a
              >.
              <br />
              Deployed using self-hosted
              <a target="_blank" href="https://coolify.io/" class="font-bold link-hover">Coolify</a>
              via
              <a target="_blank" href="https://www.hostinger.com/" class="font-bold link-hover"
                >Hostinger</a
              >
              services.
            </div>
            <div class="text-left">
              <a class="link" target="_blank" href="https://github.com/ShawnThorne">Github Link</a>
            </div>
          </div>
        </div>

        <!-- Right Section: Image -->
        <div class="hidden md:flex justify-end items-center min-h-full h-auto w-full">
          <img
            class="rounded-lg max-h-full min-h-full h-auto w-auto object-cover"
            src="../assets/imgs/Shawn-0752.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Script Section */
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectTo(id: string) {
  router.push({ name: id })
}
</script>

<style scoped>
/* Tailwind CSS Reference */
@reference 'tailwindcss';

/* Menu Item Styles */
.menuItem {
  @apply relative inline-flex pb-2 flex-shrink transition-all cursor-pointer mb-3 text-2xl font-semibold;
}

.menuItem:hover {
  @apply md:font-bold md:px-4;
}

.menuItem:after {
  content: '';
  @apply absolute bottom-0 left-0 h-[.15rem] bg-white rounded-full w-full md:w-[2rem] transition-all;
}

.menuItem:hover:after {
  @apply md:w-full md:transition-all;
}

/* Animated Background */
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
</style>
