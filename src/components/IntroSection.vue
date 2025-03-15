<template>
  <div class="grid grid-cols-1 gap-8">
    <SectionTemplate class="text-center">
      <template #title>Hi, I'm Shawn</template>
      <template #subtitle>Programming extraordinare</template>
      <template #content>
        <p>
          I specialize in turning dreams, ideas, and random thoughts into working, production ready
          code.
        </p>
        <p>Learn a little more about me down below</p>
        <div class="flex justify-center">
          <img class="rounded-lg max-h-[400px] w-auto" src="../assets/imgs/Shawn-0752.jpg" alt="" />
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script setup lang="ts">
import SectionTemplate from './SectionTemplate.vue'
</script>
