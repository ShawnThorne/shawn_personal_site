<template>
  <ProjectSection>
    <template #title>Custom Matboard Shopify Plugin</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Tailwind CSS</TechChip>
        <TechChip>Shopify</TechChip>
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
