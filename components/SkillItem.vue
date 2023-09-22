<template>
  <div>
    <div>{{ skill.name }}</div>
    <div>{{ skill.description }}</div>
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
