<script setup lang="ts">
useSeoMeta({
  title: 'Home | Nicko James A. Peñaflor',
  description: 'Meet Nicko James A. Peñaflor, an Information Technology student at Caraga State University.'
})
</script>

<template>
  <section class="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
    <div class="order-2 max-w-2xl lg:order-1">
      <p class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6a22] sm:text-sm">
        <span class="h-px w-9 bg-[#ff4d00]" aria-hidden="true" />
        Welcome to my corner of the web
      </p>
      <h1 class="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#f4f7fb] sm:text-5xl lg:text-6xl">
        Hello, I’m
        <span class="mt-1 block text-[#ff6a22]">Nicko James A. Peñaflor.</span>
      </h1>
      <p class="mt-7 max-w-xl text-base leading-8 text-[#9aacc3] sm:text-lg">
        I’m an Information Technology student at Caraga State University who enjoys exploring technology, learning how software works, and turning ideas into small projects.
      </p>
      <div class="mt-9 flex flex-wrap items-center gap-4">
        <NuxtLink
          to="/profile"
          class="inline-flex items-center gap-3 rounded-full bg-[#ff4d00] px-6 py-3.5 text-sm font-semibold text-[#080d16] transition-colors duration-200 hover:bg-[#ff6a22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]"
        >
          Get to know me
          <span aria-hidden="true">→</span>
        </NuxtLink>
        <span class="text-sm text-[#8fa2ba]">BS Information Technology</span>
      </div>
      <div class="mt-14 border-t border-[#1b2939] pt-6">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[#758ba6]">Currently learning</p>
        <p class="mt-2 text-sm text-[#b3c1d2]">Web development · Programming · Database management</p>
      </div>
    </div>
    <div class="order-1 px-4 sm:px-8 lg:order-2 lg:px-4">
      <ProfileCard />
    </div>
  </section>
</template>
