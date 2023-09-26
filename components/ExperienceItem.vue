<template>
  <div class="mb-6">
    <h3 class="font-semibold text-gray-900 pb-1">
      <NuxtLink :to="experience.link" class="hover:underline hover:text-black">
        {{ experience.name }}
      </NuxtLink>
    </h3>
    <p class="text-md text-gray-600 font-light">{{ experience.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
const { experience } = props;
</script>
