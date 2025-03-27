<template>
  <ProjectSection>
    <template #title>Amped Fuels App</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Ionic</TechChip>
        <TechChip>Laravel</TechChip>
        <TechChip>Tailwind CSS</TechChip>
      </div>
    </template>
    <template #content>
      <div>Project 3 content</div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import ProjectSection from '@/components/Templates/ProjectSection.vue'
import TechChip from '@/components/Templates/TechChip.vue'
</script>
