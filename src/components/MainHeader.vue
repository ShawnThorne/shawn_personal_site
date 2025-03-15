<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div>
        <h1 class="text-5xl font-bold">Hi there, I'm Shawn</h1>
        <p class="py-6">Taking ideas from inception to production.</p>
        <button @click="scrollBody" class="btn btn-primary">See what's up</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function scrollBody() {
  const body = document.getElementById('body')
  if (body) {
    body.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
