<template>
  <div
    class="card rounded-lg p-4 hover:shadow-lg duration-300 bg-gradient-to-b from-slate-700 to-slate-900"
  >
    <div class="mt-4 pt-2 text-white">
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
  </div>
</template>
