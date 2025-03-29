<template>
  <ProjectSection>
    <template #title>Assetlyst Property Management System</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Laravel</TechChip>
        <TechChip>Tailwind CSS</TechChip>
        <TechChip>Stripe</TechChip>
      </div>
    </template>
    <template #content>
      <div>
        <p>
          Assetlyst is a property management system that allows users to manage their properties,
          tenants, and payments. The app is built with Vue and Laravel for the frontend and backend,
          respectively. It also integrates with Stripe for payment processing.
        </p>
        <br />
        <p>
          I was on a team responsible for developing the frontend and backend the app, including the
          user interface and user experience. I also was solely responsible for on integration with
          the Stripe payment gateway.
        </p>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import TechChip from '@/components/Templates/TechChip.vue'
import ProjectSection from '@/components/Templates/ProjectSection.vue'
</script>
