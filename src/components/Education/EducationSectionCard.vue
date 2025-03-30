<template>
  <div
    class="educationClassCard relative z-0 snap-center p-4 text-left shadow-lg! rounded-lg from-base-300 to-base-200 bg-gradient-to-br"
  >
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
