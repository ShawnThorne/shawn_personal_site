<template>
  <ProjectSection>
    <template #title>Assetlyst Property Management System</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Laravel</TechChip>
        <TechChip>Tailwind CSS</TechChip>
      </div>
    </template>
    <template #content>
      <div>Project 1 content</div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import TechChip from '@/components/Templates/TechChip.vue'
import ProjectSection from '@/components/Templates/ProjectSection.vue'
</script>
