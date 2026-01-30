<template>
  <div class="mb-6">
    <h3 class="font-semibold text-gray-900 pb-1">
      <div class="flex items-center">
        <img
          v-if="project.logo"
          :src="project.logo"
          class="w-7 h-7 mr-2"
          :alt="project.name"
          loading="lazy"
        />
        <a
          :href="project.link"
          class="hover:underline hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
          :title="project.name"
        >
          {{ project.name }}
        </a>
        <span
          v-if="project.startDate && project.endDate"
          class="pl-1 text-base text-gray-900 font-light"
        >
          ({{ project.startDate }} - {{ project.endDate }})
        </span>
      </div>
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
