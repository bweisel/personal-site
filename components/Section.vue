<template>
  <div class="block pt-4 md:flex">
    <div class="pb-6 md:w-full md:max-w-150 md:p-0">
      <h2
        class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase"
      >
        {{ title }}
      </h2>
    </div>
    <div class="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20">
      <!-- Inject the child content-->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const { title } = props;
</script>
