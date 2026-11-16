<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' }
]
</script>

<template>
  <header class="border-b border-[#1b2939] bg-[#070b14]">
    <nav aria-label="Main navigation" class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
      <NuxtLink to="/" class="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff4d00] text-sm font-semibold tracking-wide text-[#080d16]">NP</span>
        <span class="text-sm font-semibold tracking-[0.04em] text-[#f4f7fb] sm:text-base">Nicko Peñaflor</span>
      </NuxtLink>
      <div class="flex items-center gap-1 sm:gap-2">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-current="route.path === link.to ? 'page' : undefined"
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#151f2f] hover:text-[#ff6a22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]"
          :class="route.path === link.to ? 'bg-[#172234] text-[#ff6a22]' : 'text-[#8fa2ba]'"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
