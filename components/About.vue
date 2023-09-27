<template>
  <div class="mb-6">
    <p>{{ about }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  about: {
    type: String,
    required: true,
  },
});
const { about } = props;
</script>
