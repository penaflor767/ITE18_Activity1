<template>
  <section class="relative mx-auto w-full max-w-[390px]" aria-label="Profile portrait">
    <div class="absolute -bottom-4 -left-4 h-28 w-28 rounded-bl-[3rem] border-b border-l border-[#26364a] sm:-left-5 sm:h-32 sm:w-32" aria-hidden="true" />
    <div class="absolute -right-4 -top-4 h-28 w-28 rounded-tr-[3rem] border-r border-t border-[#26364a] sm:-right-5 sm:h-32 sm:w-32" aria-hidden="true" />
    <div class="relative overflow-hidden rounded-[2rem] bg-[#101927] p-4 shadow-[0_24px_70px_-38px_rgba(0,0,0,0.8)] sm:p-5">
      <img
        src="/profile-photo.jpg"
        alt="Portrait of Nicko James A. Peñaflor"
        class="aspect-square w-full rounded-[1.5rem] object-cover"
        width="768"
        height="768"
      >
      <div class="absolute bottom-8 left-8 right-8 rounded-2xl border border-[#26364a] bg-[#0b1321]/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-9 sm:left-9 sm:right-9">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6a22]">Based in Butuan City</p>
        <p class="mt-1 text-sm font-medium text-[#f4f7fb]">Curious by nature. Building with purpose.</p>
      </div>
    </div>
  </section>
</template>
