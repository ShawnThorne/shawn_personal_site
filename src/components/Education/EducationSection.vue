<script setup lang="ts">
import EducationSectionCard from './EducationSectionCard.vue'
import SectionTemplate from '../Templates/SectionTemplate.vue'
</script>

<template>
  <SectionTemplate>
    <template #title>Education</template>
    <template #subtitle>Utah State University</template>
    <!-- <div class="text-xs font-bold">Bachelors of Computer Science | Cum Laude</div>
    <div> -->
    <template #content>
      <div>
        I graduated from Utah State University with a bachelors in Computer Science. There I studied
        a lot... and I mean a lot. Below you'll find some of the more notable elective classes I
        took and some of the related projects that I completed there.
      </div>
      <div>
        <EducationSectionCard>
          <template #title> C++ Programming </template>
          <template #subtitle> Data Structures and Algorithms </template>
          <template #description>
            This class was a deep dive into the C++ programming language. We learned about the
            intricacies of the language and how to use it to create efficient and effective
            programs.
          </template>
          <template #projects>
            <div>
              <div class="font-bold">Project 1</div>
              <div>
                This project was a simple program that took in a list of numbers and sorted them
                using the bubble sort algorithm.
              </div>
            </div>
            <div>
              <div class="font-bold">Project 2</div>
              <div>
                This project was a simple program that took in a list of numbers and sorted them
                using the quick sort algorithm.
              </div>
            </div>
          </template>
        </EducationSectionCard>
      </div>
    </template>
  </SectionTemplate>
</template>
