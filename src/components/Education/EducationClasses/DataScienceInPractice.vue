<template>
  <EducationSectionCard>
    <template #title> Data Science In Practice </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      This course is a practical, project-based introduction to production data science where I
      learned data science concepts and techniques in a very applied setting. I examined many, many
      different datasets and worked with them to accomplish different tasks of analysis as computer
      scientists and domain scientists work together to solve problems. Topics covered include bar
      charts, line charts, scatterplots, statistics, getting and cleaning data, k-nearest neighbors,
      Naive Bayes classifiers, linear regression, logistic regression, support vector machines,
      decision trees, and neural networks.
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
