<template>
  <ProjectSection>
    <template #title>Assetlyst</template>
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
          Assetlyst is a comprehensive web application designed to facilitate the posting and
          browsing of commercial real estate listings. The platform also provides access to
          historical data for a diverse range of commercial properties, empowering users with
          valuable insights.
        </p>
        <br />
        <p>
          My primary responsibility was providing long-term support and addressing bugs to ensure
          the platform remained stable and functioned efficiently over time.
        </p>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import TechChip from '@/components/Templates/TechChip.vue'
import ProjectSection from '@/components/Templates/ProjectSection.vue'
</script>
