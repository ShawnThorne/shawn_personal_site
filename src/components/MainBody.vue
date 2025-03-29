<template>
  <div id="body" class="container mx-auto py-12 px-4 flex flex-col">
    <IntroSection is="div" id="introSection" />
    <ExperienceSection is="div" id="experienceSection" />
    <EducationSection is="div" id="educationSection" />
  </div>
</template>
<script setup lang="ts">
import EducationSection from './Education/EducationSection.vue'
import ExperienceSection from './Employment/ExperienceSection.vue'
import IntroSection from './IntroSection.vue'
</script>
