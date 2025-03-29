<template>
  <ProjectSection>
    <template #title>Critter Removal Indianpolis</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Laravel</TechChip>
        <TechChip>Bootstrap</TechChip>
      </div>
    </template>
    <template #content>
      <div>
        <p>
          Critter Removal Indianapolis is a web application that allows technicians within the
          organization to schedule appointments, provide estimates, and provide "critter" removal
          services. The app is built with Vue and Laravel for the frontend and backend,
          respectively. It also uses Bootstrap for styling.
        </p>
        <br />
        <p>
          I was on a team responsible for developing the frontend and backend of the app, including
          the user interface and user experience.
        </p>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import TechChip from '@/components/Templates/TechChip.vue'
import ProjectSection from '@/components/Templates/ProjectSection.vue'
</script>
