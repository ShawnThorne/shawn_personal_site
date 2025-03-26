<template>
  <div id="introSection" class="grid grid-cols-1 gap-8">
    <SectionTemplate class="text-center">
      <template #title>About Me</template>
      <template #content>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div class="flex flex-col justify-center items-center">
            <p class="lg:text-2xl">
              Hi, I’m Shawn Thorne, a passionate and innovative computer science graduate with two
              years of hands-on experience as a full-stack software developer. I thrive at the
              intersection of creativity and technology, designing and building user-friendly,
              efficient solutions that make a difference. Whether I’m refining code or tackling a
              challenging project, I bring curiosity and problem-solving energy to every task.
              <br /><br />
              When I’m not coding, you’ll find me embracing the great outdoors. I’m an avid mountain
              biker and rock climber who loves pushing boundaries and exploring new terrain. From
              summiting peaks to navigating forest trails, my adventures fuel my drive for
              growth—both personally and professionally.
              <br /><br />
              If you’re looking for someone who brings both technical expertise and a passion for
              life, I’m your guy! Let’s connect and create something extraordinary.
            </p>
          </div>
          <div class="flex justify-center">
            <img class="rounded-lg max-h-100% w-auto" src="../assets/imgs/Shawn-0752.jpg" alt="" />
          </div>
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script setup lang="ts">
import SectionTemplate from './Templates/SectionTemplate.vue'
</script>
