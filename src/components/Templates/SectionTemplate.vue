<template>
  <div class="text-center relative pb-2 mt-12">
    <div
      class="title text-5xl z-10 lg:text-5xl shadow-xl sticky bg-base-100 p-2 top-0 font-bold w-full text-center"
    >
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
