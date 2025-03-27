<template>
  <EducationSectionCard>
    <template #title> High Performance Computing </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      This class provided an introduction to High-Performance Computing (HPC), which is the practice
      of leveraging parallel computing power, from computer clusters and supercomputers, to solve
      complex computational problems faster. I gained hands-on experiences using openMP, MPI and
      CUDA to write highly optimized code for modern multi-core processors and GPUs and computing
      clusters. The course explores concepts and challenges of performance scalability portability,
      and energy efficiency of HPC applications and systems, parallel hardware, parallel programming
      models, how to run on an HPC system, shared memory programming (Pthreads, OpenMP), performance
      analysis, distributed programming (MPI), load balancing, GPU programming, parallel and
      distributed applications.
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
