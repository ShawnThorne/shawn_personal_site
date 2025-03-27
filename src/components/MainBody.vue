<template>
  <div id="body" class="container mx-auto py-12 px-4 flex flex-col">
    <IntroSection is="div" id="introSection" />
    <EducationSection is="div" id="educationSection" />
    <ExperienceSection is="div" id="experienceSection" />
  </div>
</template>
<script setup lang="ts">
import EducationSection from './Education/EducationSection.vue'
import ExperienceSection from './Employment/ExperienceSection.vue'
import IntroSection from './IntroSection.vue'
</script>
