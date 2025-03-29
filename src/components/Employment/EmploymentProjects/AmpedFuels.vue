<template>
  <ProjectSection>
    <template #title>Amped Fuels App</template>
    <template #tech>
      <div class="flex justify-center gap-1">
        <TechChip>Vue</TechChip>
        <TechChip>Ionic</TechChip>
        <TechChip>Laravel</TechChip>
        <TechChip>Tailwind CSS</TechChip>
        <TechChip>Stripe</TechChip>
      </div>
    </template>
    <template #content>
      <div>
        The application is designed to be a user-friendly and efficient way for users to easily
        request fuel delivery, track their orders, and manage their accounts.
        <br />
        <br />
        The application is built using Vue and Ionic, and is designed to be cross-platform, allowing
        users to access the service from both iOS and Android devices.
        <br />
        <br />
        The backend is built using Laravel, providing a robust and scalable solution for managing
        user accounts, orders, and payments. The application also integrates with Stripe for secure
        payment processing.
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import ProjectSection from '@/components/Templates/ProjectSection.vue'
import TechChip from '@/components/Templates/TechChip.vue'
</script>
