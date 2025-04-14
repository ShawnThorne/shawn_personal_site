<template>
  <EducationSectionCard>
    <template #title> Special Topics: Applied Deep Learning </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      This class was a deep dive into deep learning and related topics. I learned about the
      fundamentals of deep learning, including neural networks, convolutional neural networks,
      recurrent neural networks, and generative adversarial networks. I also learned about the
      practical applications of deep learning, including image classification, natural language
      processing, and reinforcement learning. The class was a mix of theory and practical
      applications, with a focus on using deep learning frameworks such as TensorFlow and PyTorch.
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
