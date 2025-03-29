<template>
  <ProjectSection>
    <template #title>Bundo</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Laravel</TechChip>
        <TechChip>Tailwind CSS</TechChip>
      </div>
    </template>
    <template #content>
      <div>
        <p>
          Bundo is a web application that allows users to create and manage personal loans between
          individuals. It provides a user-friendly interface for inputing details, customizing
          options, and generating custom repayment plans for both borrowers and borrowees.
        </p>
        <br />
        <p>
          The application is built using Vue.js for the frontend and Laravel for the backend,
          ensuring a seamless and efficient user experience.
        </p>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import TechChip from '@/components/Templates/TechChip.vue'
import ProjectSection from '@/components/Templates/ProjectSection.vue'
</script>
