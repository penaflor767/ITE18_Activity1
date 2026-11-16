<script setup lang="ts">
useSeoMeta({
  title: 'Profile | Nicko James A. Peñaflor',
  description: 'Personal information, education, skills, and interests of Nicko James A. Peñaflor.'
})

const skills = [
  'Basic Web Development',
  'HTML, CSS, and JavaScript',
  'Programming',
  'Database Management',
  'Software Development'
]

const hobbies = [
  'Playing online games',
  'Exploring technology',
  'Learning programming',
  'Developing personal projects'
]
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-14 sm:py-18 lg:px-8 lg:py-20">
    <section class="max-w-3xl">
      <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6a22] sm:text-sm">A little about me</p>
      <h1 class="text-4xl font-semibold tracking-[-0.04em] text-[#f4f7fb] sm:text-5xl">My profile</h1>
      <p class="mt-5 max-w-2xl text-base leading-8 text-[#9aacc3] sm:text-lg">
        I’m building a foundation in technology and software development, one curious question and hands-on project at a time.
      </p>
    </section>

    <section aria-labelledby="personal-info-heading" class="mt-12 rounded-3xl border border-[#202d40] bg-[#0c1421] p-6 shadow-[0_16px_50px_-40px_rgba(0,0,0,0.8)] sm:p-9">
      <div class="flex flex-col gap-7 md:flex-row md:items-center md:gap-10">
        <img
          src="/profile-photo.jpg"
          alt="Portrait of Nicko James A. Peñaflor"
          class="h-32 w-32 rounded-2xl bg-[#111b2a] object-cover sm:h-40 sm:w-40"
          width="768"
          height="768"
        >
        <div class="flex-1">
          <h2 id="personal-info-heading" class="text-2xl font-semibold tracking-tight text-[#f4f7fb]">Personal information</h2>
          <dl class="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.13em] text-[#758ba6]">Full name</dt>
              <dd class="mt-1.5 text-sm font-medium text-[#d3deeb] sm:text-base">Nicko James A. Peñaflor</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.13em] text-[#758ba6]">Course</dt>
              <dd class="mt-1.5 text-sm font-medium text-[#d3deeb] sm:text-base">Bachelor of Science in Information Technology</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.13em] text-[#758ba6]">School</dt>
              <dd class="mt-1.5 text-sm font-medium text-[#d3deeb] sm:text-base">Caraga State University</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.13em] text-[#758ba6]">Campus</dt>
              <dd class="mt-1.5 text-sm font-medium text-[#d3deeb] sm:text-base">Main Campus, Butuan City</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <div class="mt-8 grid gap-8 md:grid-cols-2">
      <section aria-labelledby="education-heading" class="rounded-3xl border border-[#202d40] bg-[#0c1421] p-7 sm:p-8">
        <p class="text-xs font-semibold uppercase tracking-[0.17em] text-[#ff6a22]">Education</p>
        <h2 id="education-heading" class="mt-3 text-xl font-semibold text-[#f4f7fb]">Educational background</h2>
        <div class="mt-6 border-l-2 border-[#ff4d00] pl-5">
          <p class="font-medium leading-7 text-[#d3deeb]">Bachelor of Science in Information Technology</p>
          <p class="mt-1 text-sm leading-6 text-[#9aacc3]">Caraga State University</p>
        </div>
      </section>

      <section aria-labelledby="skills-heading" class="rounded-3xl border border-[#202d40] bg-[#0c1421] p-7 sm:p-8">
        <p class="text-xs font-semibold uppercase tracking-[0.17em] text-[#ff6a22]">What I’m exploring</p>
        <h2 id="skills-heading" class="mt-3 text-xl font-semibold text-[#f4f7fb]">Skills and interests</h2>
        <ul class="mt-5 flex flex-wrap gap-2.5">
          <li v-for="skill in skills" :key="skill" class="rounded-full bg-[#172234] px-3.5 py-2 text-sm text-[#b3c1d2]">
            {{ skill }}
          </li>
        </ul>
      </section>

      <section aria-labelledby="hobbies-heading" class="rounded-3xl border border-[#202d40] bg-[#0c1421] p-7 sm:col-span-2 sm:p-8">
        <p class="text-xs font-semibold uppercase tracking-[0.17em] text-[#ff6a22]">Outside of class</p>
        <h2 id="hobbies-heading" class="mt-3 text-xl font-semibold text-[#f4f7fb]">Hobbies</h2>
        <ul class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="hobby in hobbies" :key="hobby" class="flex items-center gap-3 text-sm text-[#b3c1d2]">
            <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4d00]" aria-hidden="true" />
            {{ hobby }}
          </li>
        </ul>
      </section>
    </div>

    <div class="mt-10">
      <NuxtLink to="/" class="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#ff6a22] transition-colors hover:text-[#ff8a4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]">
        <span aria-hidden="true">←</span>
        Back to home
      </NuxtLink>
    </div>
  </div>
</template>
