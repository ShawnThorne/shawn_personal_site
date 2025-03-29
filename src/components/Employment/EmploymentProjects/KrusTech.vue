<template>
  <ProjectSection>
    <template #title>KrusTech Service App</template>
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
        <p>
          KrusTech is a service app that allows users to book services and manage their
          appointments. The app is built with Vue and Ionic for the frontend (allowing the mobile
          application to be cross-platform), and Laravel for the backend. It also integrates with
          Stripe for payment processing.
        </p>
        <br />
        <p>
          I was responsible for developing the frontend of the app, including the user interface and
          user experience. I also worked on the integration with the backend API and the Stripe
          payment gateway.
        </p>
      </div>
    </template>
  </ProjectSection>
</template>

<script setup lang="ts">
import ProjectSection from '@/components/Templates/ProjectSection.vue'
import TechChip from '@/components/Templates/TechChip.vue'
</script>
