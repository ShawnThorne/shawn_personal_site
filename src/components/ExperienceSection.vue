<template>
  <div>
    <SectionTemplate>
      <template #title>Experience</template>
      <template #subtitle>The work</template>
      <template #content>
        <div>
          Below you'll find my work experience along with notable projects I've worked on in that
          time
        </div>
        <div>
          <EmploymentSection>
            <template #title>Full Stack Software Developer</template>
            <template #subtitle>Maiden Voyage | Feb 2023 - Current</template>
            <template #content>
              <div>
                
              </div>
            </template>
          </EmploymentSection>
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script setup lang="ts">
import EmploymentSection from './EmploymentSection.vue';
import SectionTemplate from './SectionTemplate.vue'
</script>
