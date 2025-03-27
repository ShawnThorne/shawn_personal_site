<template>
  <ProjectSection>
    <template #title>Women's Council of Realtors Utah</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Ionic</TechChip>
        <TechChip>Laravel</TechChip>
        <TechChip>Tailwind CSS</TechChip>
      </div>
    </template>
    <template #content>
      <div>
        Project that includes both a mobile app and a user facing backend to allow for managing the
        mobile application. The mobile application facilitates networking within the Women's Council
        Of Realtors as well as tracking event attendance and user interaction. The backend allows
        users to input upcoming events that can then be RSVP'd to from that same backend as well as
        managing partners and sponsors for both the app and events.
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import ProjectSection from '@/components/Templates/ProjectSection.vue'
import TechChip from '@/components/Templates/TechChip.vue'
</script>
