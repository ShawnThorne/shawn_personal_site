<template>
  <div
    class="educationClassCard p-4 min-w-[90vw] lg:max-w[40vw] lg:min-w-[20vw] container min-h-[50vh] text-left sticky rounded-lg from-base-300 to-base-200 shadow bg-gradient-to-br"
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
