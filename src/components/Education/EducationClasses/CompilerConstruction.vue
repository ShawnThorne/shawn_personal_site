<template>
  <EducationSectionCard>
    <template #title> Conmpiler Construction </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      This course is an introduction to key design principles and techniques for constructing
      compilers. The major goal of this course is to understand the components, algorithms, and
      theories behind compilers, including lexical analysis, syntax analysis, semantic analysis,
      intermediate code generation, target code generation, and some of the principles of
      optimization. Topics include lexical analysis, syntax analysis, semantic analysis,
      intermediate code generation, run-time environments, target code generation, and optimization.
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
