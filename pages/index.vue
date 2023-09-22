<template>
  <div>
    <div>Hi</div>
    <div>
      <SkillItem v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </div>
</template>

<script setup>
const skills = ref([{ name: "SQL", description: "Database Query Language" }]);
</script>
