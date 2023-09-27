<template>
  <div class="mb-6">
    <h3 class="font-semibold text-gray-900 mb-2">
      <NuxtLink
        :to="experience.link"
        class="hover:underline hover:text-black"
        target="_blank"
      >
        {{ experience.company }}
      </NuxtLink>
    </h3>
    <p class="text-base/4 text-gray-600 font-bold mb-2">
      {{ experience.title }}
      <span class="text-gray-900 font-light">
        ({{ experience.startDate }} - {{ experience.endDate }})
      </span>
    </p>
    <p class="text-md text-gray-600">
      {{ experience.description }}
    </p>
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
