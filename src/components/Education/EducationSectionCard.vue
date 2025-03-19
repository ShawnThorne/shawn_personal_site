<template>
  <div
    class="educationClassCard snap-center p-4 min-w-full lg:max-w-1/2 lg:min-w-1/4 container min-h-full text-left rounded-lg from-base-300 to-base-200 shadow bg-gradient-to-br"
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
