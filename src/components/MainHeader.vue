<template>
  <div class="min-h-screen">
    <div class="text-center p-8 h-screen w-full">
      <div class="flex bg-info-content h-full w-full text-white rounded-lg shadow-lg">
        <div class="flex flex-grow justify-center gap-4 items-center flex-col w-full">
          <div class="p-24">
            <div class="font-bold text-5xl xl:text-9xl text-left flex">Hi there I'm Shawn</div>
            <div class="flex gap-3 mt-4">
              <div class="flex">
                <div
                  class="text-info-content flex text-xl font-bold bg-white rounded-full px-2 py-1"
                >
                  Web
                </div>
              </div>
              <div class="flex">
                <div
                  class="text-info-content flex text-xl font-bold bg-white rounded-full px-2 py-1"
                >
                  Mobile
                </div>
              </div>
              <div class="flex">
                <div
                  class="text-info-content flex text-xl font-bold bg-white rounded-full px-2 py-1"
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
        <div class="flex justify-end items-center min-h-full h-auto w-full">
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
  @apply font-bold pl-4 border-l-2;
}
</style>
