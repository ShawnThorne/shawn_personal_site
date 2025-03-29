<template>
  <div class="border-t-1 mt-4 pt-2">
    <div class="text-lg font-bold">
      <slot name="title"></slot>
    </div>
    <div class="my-2">
      <slot name="tech"></slot>
    </div>
    <div class="text-left">
      <slot name="content"></slot>
    </div>
  </div>
</template>
