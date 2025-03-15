<template>
  <div class="flex">
    <div class="text-white flex text-xs font-bold bg-success rounded-full px-2 py-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const color = ref()

const darkColors: string[] = [
  'black',
  'darkslategray',
  'darkred',
  'darkblue',
  'darkmagenta',
  'darkcyan',
  'darkorange',
  'darkviolet',
  'darkorchid',
  'darkseagreen',
  'darkslateblue',
]

onMounted(() => {
  color.value = darkColors[Math.floor(Math.random() * darkColors.length)]
})
</script>
