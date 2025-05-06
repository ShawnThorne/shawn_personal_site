<template>
  <div class="text-center relative pb-2 pt-12 container mx-auto mb-12">
    <div class="title text-5xl z-10 lg:text-5xl shadow-md p-2 pb-4 font-bold w-full text-center">
      <slot name="title"></slot>
    </div>
    <div class="font-bold lg:text-4xl mt-6">
      <slot name="subtitle"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
