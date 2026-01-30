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
    <Transition
      name="collapse"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div v-if="showBullets" class="collapse-wrap pt-2">
        <ul class="list-disc ml-5 text-gray-500 text-sm">
          <li
            v-for="(bullet, index) in experience.bullets"
            :key="index"
            class="mb-1"
          >
            {{ bullet }}
          </li>
        </ul>
      </div>
    </Transition>
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

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const onBeforeEnter = (el) => {
  el.style.height = "0px";
  el.style.opacity = "0";
};

const onEnter = (el) => {
  if (prefersReducedMotion()) {
    el.style.height = "auto";
    el.style.opacity = "1";
    return;
  }

  el.style.transition =
    "height 320ms cubic-bezier(0.2, 0.0, 0, 1), opacity 220ms ease";
  void el.offsetHeight;
  requestAnimationFrame(() => {
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = "1";
  });
};

const onAfterEnter = (el) => {
  el.style.height = "auto";
  el.style.transition = "";
};

const onBeforeLeave = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = "1";
};

const onLeave = (el) => {
  if (prefersReducedMotion()) {
    el.style.height = "0px";
    el.style.opacity = "0";
    return;
  }

  el.style.transition =
    "height 240ms cubic-bezier(0.4, 0.0, 0.6, 1), opacity 160ms ease";
  void el.offsetHeight;
  requestAnimationFrame(() => {
    el.style.height = "0px";
    el.style.opacity = "0";
  });
};

const onAfterLeave = (el) => {
  el.style.height = "";
  el.style.opacity = "";
  el.style.transition = "";
};
</script>

<style scoped>
.collapse-wrap {
  overflow: hidden;
}
</style>
