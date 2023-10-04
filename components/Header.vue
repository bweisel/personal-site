<template>
  <div class="block mb-2 md:flex">
    <div class="w-full max-w-150">
      <img
        class="rounded-full transform transition-all duration-150 hover:scale-105"
        :src="profile.image"
        :alt="profile.name"
        width="150"
        height="150"
      />
    </div>
    <div class="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
      <h1
        class="text-5xl text-gray-900 font-bold leading-tight hover:text-black"
      >
        {{ profile.name }}
      </h1>
      <p class="text-gray-600 mt-4">
        {{ profile.subLine }}
      </p>
      <ul class="mt-4 uppercase tracking-wider">
        <li class="inline list-none pr-4">
          <NuxtLink
            class="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
            :href="`mailto:${profile.email}`"
          >
            <img src="email_icon.svg" width="35" height="35" alt="Email Me" />
          </NuxtLink>
        </li>
        <li class="inline list-none pr-4">
          <NuxtLink
            class="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
            :to="profile.github"
            target="_blank"
          >
            <img src="github_icon.svg" width="35" height="35" alt="GitHub" />
          </NuxtLink>
        </li>
        <li class="inline list-none pr-4">
          <NuxtLink
            class="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
            :to="profile.linkedin"
            target="_blank"
          >
            <img
              src="linkedin_icon.svg"
              width="35"
              height="35"
              alt="LinkedIn"
            />
          </NuxtLink>
        </li>
        <li class="inline list-none pr-3">
          <NuxtLink
            class="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
            :to="profile.twitter"
            target="_blank"
          >
            <img src="twitter_icon.svg" width="35" height="35" alt="Twitter" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
const { profile } = props;
</script>
