<template>
  <EducationSectionCard>
    <template #title> Modern Web Development </template>
    <template #subtitle> Spring 2024 </template>
    <template #description>
      In this course I learned to solve problems that are common in web-based software using modern tools and practices. I developed full-stack web applications using popular frameworks in Typescript and Javascript and will acquire skills that prepare them to enter the workforce as full-time web developers. Topics include: user authentication / authorization, databases, database migrations, ORMs, REST, Model-View-Controller, module bundling, transpilation, Typescript, ReactJS, single-page vs multi-page applications, web sockets, Firebase (and other BASS platforms), CSS, geolocation / maps, and web workers.
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
