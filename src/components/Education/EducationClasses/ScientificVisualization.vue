<template>
  <EducationSectionCard>
    <template #title> Scientific Visualization </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      This course introduces principles, methods and techniques for visual analysis of scientific data. I learned how to make effective visualization of scalar, vector and tensor field data using state-of-the-art techniques including those for surface and volume geometry representation.
    </template>
    <template #projects>
      <div>
        <div class="font-bold">Project 1</div>
        <div>
          This project was a simple program that took in a list of numbers and sorted them using the
          bubble sort algorithm.
        </div>
      </div>
      <div>
        <div class="font-bold">Project 2</div>
        <div>
          This project was a simple program that took in a list of numbers and sorted them using the
          quick sort algorithm.
        </div>
      </div>
    </template>
  </EducationSectionCard>
</template>

<script setup lang="ts">
import EducationSectionCard from '../EducationSectionCard.vue'
</script>
