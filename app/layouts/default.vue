<template>
  <div class="min-h-screen bg-[#070b14] text-[#f4f7fb]">
    <Navbar />
    <main>
      <slot />
    </main>
    <footer class="border-t border-[#1b2939]">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-[#8fa2ba] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {{ new Date().getFullYear() }} Nicko James A. Peñaflor</p>
        <p>Information Technology student · Caraga State University</p>
      </div>
    </footer>
  </div>
</template>
