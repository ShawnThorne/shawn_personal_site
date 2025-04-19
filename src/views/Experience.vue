<script setup lang="ts">
import EmploymentSection from '@/components/Employment/EmploymentSection.vue'
import SectionTemplate from '@/components/Templates/SectionTemplate.vue'
import WomensCouncilOfRealtors from '@/components/Employment/EmploymentProjects/WomensCouncilOfRealtors.vue'
import AssetlystPropertyManagement from '@/components/Employment/EmploymentProjects/AssetlystPropertyManagement.vue'
import AmpedFuels from '@/components/Employment/EmploymentProjects/AmpedFuels.vue'
import AssetlystMain from '@/components/Employment/EmploymentProjects/AssetlystMain.vue'
import BundoSite from '@/components/Employment/EmploymentProjects/BundoSite.vue'
import CustomMatBoard from '@/components/Employment/EmploymentProjects/CustomMatBoard.vue'
import KrusTech from '@/components/Employment/EmploymentProjects/KrusTech.vue'
import CritterIndy from '@/components/Employment/EmploymentProjects/CritterIndy.vue'
</script>

<template>
  <SectionTemplate>
    <template #title>Experience</template>
    <template #content>
      <div>
        Below you'll find my work experience along with notable projects I've worked on in that time
      </div>
      <div>
        <EmploymentSection>
          <template #title>Full Stack Software Developer</template>
          <template #subtitle>Maiden Voyage | Feb 2023 - Current</template>
          <template #content>
            <div>
              Full stack software developer working mainly in Vue, Laravel, Tailwind CSS, and Ionic
            </div>
            <div
              class="card static bg-base-200 my-2 p-4 shadow-lg! grid grid-cols-1 lg:grid-cols-3 gap-4"
            >
              <WomensCouncilOfRealtors />
              <AmpedFuels />
              <KrusTech />
              <!-- <BundoSite /> -->
              <AssetlystMain />
              <AssetlystPropertyManagement />
              <CritterIndy />
              <!-- <CustomMatBoard /> -->
            </div>
          </template>
        </EmploymentSection>
      </div>
    </template>
  </SectionTemplate>
</template>
