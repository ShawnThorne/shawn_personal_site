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
        This project encompasses a mobile application and a user-facing backend designed to
        streamline management and enhance user engagement. The mobile application facilitates
        networking within the Women's Council of Realtors, enabling users to connect, track event
        attendance, and monitor interactions. The backend provides robust tools for managing
        upcoming events, allowing users to create and RSVP to events seamlessly. Additionally, it
        supports the management of partners and sponsors for both the mobile app and events,
        ensuring a comprehensive and efficient experience.
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import ProjectSection from '@/components/Templates/ProjectSection.vue'
import TechChip from '@/components/Templates/TechChip.vue'
</script>
