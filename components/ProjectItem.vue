<template>
  <div class="mb-6">
    <h3 class="font-semibold text-gray-900 pb-1">
      <NuxtLink
        :to="project.link"
        class="hover:underline hover:text-black"
        target="_blank"
      >
        {{ project.name }}
      </NuxtLink>
    </h3>
    <p class="text-md text-gray-600 font-light">{{ project.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const { project } = props;
</script>
