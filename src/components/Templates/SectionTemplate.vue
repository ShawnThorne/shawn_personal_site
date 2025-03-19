<template>
  <div class="text-center relative z-50 border-b-3 pb-2 min-h-[100vh]">
    <div class="title text-5xl lg:text-5xl sticky bg-base-100 p-2 top-0 font-bold text-center">
      <slot name="title"></slot>
    </div>
    <div class="font-bold lg:text-4xl">
      <slot name="subtitle"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
