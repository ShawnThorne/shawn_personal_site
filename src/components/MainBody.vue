<template>
  <div id="body" class="container mx-auto py-12 px-4 flex flex-col gap-12">
    <IntroSection />
    <EducationSection />
    <ExperienceSection />
  </div>
</template>
<script setup lang="ts">
import EducationSection from './EducationSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import IntroSection from './IntroSection.vue'
</script>
