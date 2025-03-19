<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div>
        <h1 class="text-6xl font-bold">
          Hi there, I'm
          <span class="transition-all ease-in-out font-normal hover:font-bold skew-46">Shawn</span>
        </h1>
        <p class="pt-2 text-center italic">
          Taking ideas from <span class="font-bold">Inception</span> to
          <span class="font-bold">Production</span>.
        </p>
        <!-- <div class="flex gap-4">
          <button @click="scrollElement('body')" class="btn btn-primary transition-all"><span class="transition-all hover:-skew-x-12">get to know me</span></button>
          <button @click="scrollElement" class="btn btn-primary transition-all"><span class="transition-all hover:-skew-x-12">my education</span></button>
          <button @click="scrollBody" class="btn btn-primary transition-all"><span class="transition-all hover:-skew-x-12">my experience</span></button>
          <button @click="scrollBody" class="btn btn-primary transition-all"><span class="transition-all hover:-skew-x-12">my personal Projects</span></button>
        </div> -->
        <ul class="menu-vertical mt-6 lg:menu-horizontal bg-base-200 rounded-box gap-4">
          <li
            class="border-2 px-2 py-1 rounded-xl cursor-pointer hover:bg-primary hover:border-0 font-bold hover:m-[2px] transition"
          >
            <span @click="scrollElement('body')">About</span>
          </li>
          <li
            class="border-2 px-2 py-1 rounded-xl cursor-pointer hover:bg-primary hover:border-0 font-bold hover:m-[2px] transition"
          >
            <span @click="scrollElement('educationSection')">Education</span>
          </li>
          <li
            class="border-2 px-2 py-1 rounded-xl cursor-pointer hover:bg-primary hover:border-0 font-bold hover:m-[2px] transition"
          >
            <span @click="scrollElement('experienceSection')">Work Experience</span>
          </li>
          <li
            class="border-2 px-2 py-1 rounded-xl cursor-pointer hover:bg-primary hover:border-0 font-bold hover:m-[2px] transition"
          >
            <span @click="scrollElement('personProjectSection')">Personal Projects</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function scrollElement(id: string) {
  const body = document.getElementById(id)
  if (body) {
    body.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
