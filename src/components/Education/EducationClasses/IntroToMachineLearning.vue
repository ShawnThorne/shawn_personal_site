<template>
  <EducationSectionCard>
    <template #title> Intro To Machine Learning </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      This course offered a deep dive into the practical applications of machine learning. I learned how to effectively clean and preprocess data, extract and select impactful features, and apply both supervised and unsupervised machine learning techniques. I gained proficiency in using popular machine learning libraries, enhancing hands-on skills on solving real-world problems.
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
