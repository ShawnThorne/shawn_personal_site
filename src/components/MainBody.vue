<template>
  <div id="body" class="container mx-auto py-12 px-4 flex flex-col">
    <IntroSection is="div" id="introSection"/>
    <EducationSection is="div" id="educationSection"/>
    <ExperienceSection is="div" id="experienceSection"/>
  </div>
</template>
<script setup lang="ts">
import EducationSection from './Education/EducationSection.vue'
import ExperienceSection from './Employment/ExperienceSection.vue'
import IntroSection from './IntroSection.vue'

// document.addEventListener('scroll',()=>{
//   const titles = document.getElementsByClassName('title');
//   for (const title of titles) {
//     const rect = (title as HTMLElement).getBoundingClientRect();
//     if(rect.top <= 100){
//       (title as HTMLElement).style.setProperty('font-size', `${Math.max(((((rect.top)^(1/3))/100)*3), 1)}rem`);
//     } else {
//       (title as HTMLElement).style.setProperty('font-size', '3rem');
//     }
//   }
// })
</script>
