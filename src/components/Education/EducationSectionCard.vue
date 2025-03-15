<template>
  <div class="border-t-1 py-2 my-2">
    <div class="text-xl font-bold">
      <slot name="title"></slot>
    </div>
    <div class="font-bold text-sm">
      <slot name="subtitle"></slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
    <div>
      <div class="font-bold text-lg">Notable Class Projects</div>
      <slot name="projects"></slot>
    </div>
  </div>
</template>
