<template>
  <EducationSectionCard>
    <template #title> Special Topics: Applied Deep Learning </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      This class was a deep dive into the C++ programming language. We learned about the intricacies
      of the language and how to use it to create efficient and effective programs.
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
