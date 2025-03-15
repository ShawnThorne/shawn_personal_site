<template>
  <div class="border-t-1 mt-2 pt-2">
    <div class="text-xl font-bold">
      <slot name="title"></slot>
    </div>
    <div class="font-bold">
      <slot name="subtitle"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
