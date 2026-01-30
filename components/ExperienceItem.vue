<template>
  <div class="mb-6">
    <h3 class="font-semibold text-gray-900 mb-2">
      <div class="flex items-center">
        <img
          v-if="experience.companyLogo"
          :src="experience.companyLogo"
          class="w-7 h-7 mr-2"
          :alt="experience.company"
          loading="lazy"
        />
        <a
          :href="experience.link"
          class="hover:underline hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
          :title="experience.company"
        >
          {{ experience.company }}
        </a>
      </div>
    </h3>
    <p class="text-base text-gray-600 font-bold mb-1">
      {{ experience.title }}
      <span class="text-gray-900 font-light">
        ({{ experience.startDate }} - {{ experience.endDate }})
      </span>
    </p>
    <p class="text-md text-gray-600">
      {{ experience.description }}
    </p>
    <transition name="fade">
      <ul
        v-show="showBullets"
        class="list-disc ml-5 mt-2 text-gray-500 text-sm"
      >
        <li
          v-for="(bullet, index) in experience.bullets"
          :key="index"
          class="mb-1"
        >
          {{ bullet }}
        </li>
      </ul>
    </transition>
    <button
      v-if="experience.bullets && experience.bullets.length"
      @click="showBullets = !showBullets"
      class="flex items-center text-sm text-black hover:text-gray-700 transition duration-300 mt-2"
    >
      <span v-show="!showBullets" class="font-semibold">
        Show Details
        <ArrowDownIcon class="inline-block h-4 w-4 text-black stroke-black" />
      </span>
      <span v-show="showBullets" class="font-semibold">
        Hide Details
        <ArrowUpIcon class="inline-block h-4 w-4 text-black stroke-black" />
      </span>
    </button>
  </div>
</template>

<script setup>
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
const { experience } = props;
const showBullets = ref(false);
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.25s ease;
}
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
