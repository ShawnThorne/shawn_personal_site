<template>
  <SectionTemplate>
    <template #title>Education</template>
    <template #subtitle>Utah State University</template>
    <!-- <div class="text-xs font-bold">Bachelors of Computer Science | Cum Laude</div>
    <div> -->
    <template #content>
      <div>
        During my time at USU, I dove deep into the ever-evolving world of computer science,
        mastering everything from complex algorithms to full-stack development. It was more than
        just earning a degree—it was an adventure in problem-solving, collaboration, and pushing the
        boundaries of what technology can achieve. I thrived on hands-on projects that challenged me
        to innovate, and I built lasting connections with mentors and peers who shared my passion
        for creating impactful solutions.
        <br /><br />
        Being an Aggie wasn’t just an identity—it shaped my relentless curiosity and drive to learn.
        USU provided the perfect launchpad for my journey as a developer, and the experience
        continues to inspire me to grow and contribute to the tech world. Here you’ll find some of
        the more interesting electives I took along with some of their related projects.
      </div>
      <div id="EducationClassesContainer" class="relative mt-4">
        <div
          id="classesGroup"
          class="grid grid-cols-2 gap-4"
        >
          <ScientificVisualization />
          <DataScienceInPractice />
          <AppliedDeepLearning />
          <IntroToMachineLearning />
          <HighPerformanceComputing />
          <CompilerConstruction />
          <ModernWebDevelopment />
        </div>
      </div>
    </template>
  </SectionTemplate>
</template>

<script setup lang="ts">
import SectionTemplate from '../Templates/SectionTemplate.vue'
import ScientificVisualization from './EducationClasses/ScientificVisualization.vue'
import DataScienceInPractice from './EducationClasses/DataScienceInPractice.vue'
import AppliedDeepLearning from './EducationClasses/AppliedDeepLearning.vue'
import IntroToMachineLearning from './EducationClasses/IntroToMachineLearning.vue'
import HighPerformanceComputing from './EducationClasses/HighPerformanceComputing.vue'
import CompilerConstruction from './EducationClasses/CompilerConstruction.vue'
import ModernWebDevelopment from './EducationClasses/ModernWebDevelopment.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const scrollContainer = document.getElementById('classesGroup')

  let isDragging = false
  let startX: number
  let scrollLeft: number

  scrollContainer?.addEventListener('mousedown', (e) => {
    isDragging = true
    startX = e.pageX - scrollContainer.offsetLeft
    scrollLeft = scrollContainer.scrollLeft
  })

  scrollContainer?.addEventListener('mouseleave', () => {
    isDragging = false
  })

  scrollContainer?.addEventListener('mouseup', () => {
    isDragging = false
  })

  scrollContainer?.addEventListener('mousemove', (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainer.offsetLeft
    const walk = x - startX
    scrollContainer.scrollLeft = scrollLeft - walk
  })
})
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
