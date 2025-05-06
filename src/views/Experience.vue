<script setup lang="ts">
import EmploymentSection from '@/components/Employment/EmploymentSection.vue'
import SectionTemplate from '@/components/Templates/SectionTemplate.vue'
import WomensCouncilOfRealtors from '@/components/Employment/EmploymentProjects/WomensCouncilOfRealtors.vue'
import AssetlystPropertyManagement from '@/components/Employment/EmploymentProjects/AssetlystPropertyManagement.vue'
import AmpedFuels from '@/components/Employment/EmploymentProjects/AmpedFuels.vue'
import AssetlystMain from '@/components/Employment/EmploymentProjects/AssetlystMain.vue'
import KrusTech from '@/components/Employment/EmploymentProjects/KrusTech.vue'
import CritterIndy from '@/components/Employment/EmploymentProjects/CritterIndy.vue'
</script>

<template>
  <SectionTemplate>
    <template #title>
      <div>Experience</div>
    </template>
    <template #content>
      <div class="text-center text-lg text-gray-700 mb-8">
        Below you'll find my work experience along with notable projects I've worked on in that
        time.
      </div>
      <div class="max-w-6xl mx-auto">
        <EmploymentSection>
          <template #title>
            <h2 class="text-2xl font-bold">Full Stack Software Developer</h2>
          </template>
          <template #subtitle>
            <p class="text-gray-600">Maiden Voyage | Feb 2023 - Current</p>
          </template>
          <template #content>
            <div class="text-gray-700 mb-6">
              Full stack software developer working mainly in Vue, Laravel, Tailwind CSS, and Ionic.
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <WomensCouncilOfRealtors />
              <AmpedFuels />
              <KrusTech />
              <AssetlystMain />
              <AssetlystPropertyManagement />
              <CritterIndy />
            </div>
          </template>
        </EmploymentSection>
      </div>
    </template>
  </SectionTemplate>
</template>
