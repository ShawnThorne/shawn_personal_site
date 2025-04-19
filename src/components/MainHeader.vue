<template>
  <div class="min-h-screen">
    <div class="text-center p-8 h-screen w-full">
      <div class="grid md:grid-cols-2 bg-animated h-full w-full text-white rounded-lg shadow-lg">
        <div class="flex flex-grow justify-center gap-4 items-center flex-col w-full">
          <div class="p-4 md:p-24 max-w-full">
            <div class="font-bold text-5xl xl:text-9xl text-left flex">Hi there I'm Shawn</div>
            <div class="flex gap-3 mt-4">
              <div class="flex">
                <div
                  class="text-info-content flex text-lg font-medium bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-full px-4 py-2 shadow-sm transform transition-transform hover:scale-105 hover:shadow-md"
                >
                  Web
                </div>
              </div>
              <div class="flex">
                <div
                  class="text-info-content flex text-lg font-medium bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-full px-4 py-2 shadow-sm transform transition-transform hover:scale-105 hover:shadow-md"
                >
                  Mobile
                </div>
              </div>
              <div class="flex">
                <div
                  class="text-info-content flex text-lg font-medium bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-full px-4 py-2 shadow-sm transform transition-transform hover:scale-105 hover:shadow-md"
                >
                  Design
                </div>
              </div>
            </div>

            <!-- menu -->
            <div class="text-left mt-8 flex flex-col">
              <div @click="scrollElement('introSection')" class="menuItem">About Me</div>
              <div @click="scrollElement('experienceSection')" class="menuItem">
                Work Experience
              </div>
              <div @click="scrollElement('educationSection')" class="menuItem">Education</div>
            </div>
          </div>
        </div>
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
function scrollElement(id: string) {
  const body = document.getElementById(id)
  if (body) {
    body.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@reference 'tailwindcss';

.menuItem {
  @apply transition-all cursor-pointer mb-4;
}
.menuItem:hover {
  @apply font-bold pl-4;
}

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
