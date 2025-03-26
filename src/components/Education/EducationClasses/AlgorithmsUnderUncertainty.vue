<template>
  <EducationSectionCard>
    <template #title> Algorithms Under Uncertainty </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      I worked with classmates to tackle the unique challenges that arise when algorithms meet unpredictable situations. My team collaborated to tackle challenges across various fields like robotics, fintech, and economics, developing algorithms that adapt to unpredictability. This includes a special focus on reinforcement learning, where I enhanced algorithms that improve with experience, even under uncertain conditions. I learned to identify uncertainty, design robust solutions with limited data, and balance algorithm design with practical deployment through team-focused projects. By working closely with my classmates, I not only gained a deeper understanding of algorithms under uncertainty but also developed essential teamwork and communication skills that are vital in any career.
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
