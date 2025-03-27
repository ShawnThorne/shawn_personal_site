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
            <div class="card static bg-base-200 my-2 p-4 shadow-md">
              <WomensCouncilOfRealtors/>

              <ProjectSection>
                <template #title>KrusTech Service App</template>
                <template #tech>
                  <div class="flex justify-center gap-1">
                    <TechChip>Vue</TechChip>
                    <TechChip>Ionic</TechChip>
                    <TechChip>Laravel</TechChip>
                    <TechChip>Tailwind CSS</TechChip>
                  </div>
                </template>
                <template #content>
                  <div>Project 2 content</div>
                </template>
              </ProjectSection>
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
            </div>
          </template>
        </EmploymentSection>
      </div>
    </template>
  </SectionTemplate>
</template>

<script setup lang="ts">
import EmploymentSection from './EmploymentSection.vue'
import SectionTemplate from '../Templates/SectionTemplate.vue'
import TechChip from '../Templates/TechChip.vue'
import ProjectSection from '../Templates/ProjectSection.vue'
import WomensCouncilOfRealtors from './EmploymentProjects/WomensCouncilOfRealtors.vue'
</script>
