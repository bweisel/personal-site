<template>
  <div class="mb-6">
    <h3 class="font-semibold text-gray-900 pb-1">
      {{ skill.name }}
    </h3>

    <p class="text-md text-gray-600">{{ skill.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
const { skill } = props;
</script>
