<script setup>
const panels = [
  {
    icon: 'ai-globe',
    title: 'VenSys Indonesia',
    desc: 'PT Venturium System Indonesia (VenSys) established since 2003. We provide comprehensive services.'
  },
  {
    icon: 'ai-globe',
    title: 'Solutions',
    desc: 'Based on our experience, we collaborate with our partners and our teams to provide the best solution for our client.'
  },
  {
    icon: 'ai-globe',
    title: 'Latest News',
    desc: 'New financial message standards present significant opportunities to extend automation and straight through processing.'
  }, 

]
</script>
<template>
  <section class="container mt-10">
    <h2 class="text-xl md:text-2xl text-primary text-center">Lorem ipsum dolor <br> sit amet consectetur</h2>
    <div class="grid items-center grid-cols-3 gap-6 mt-8">
      <div v-for="list in panels" class="bg-slate-100 px-8 py-7 rounded-xl">
        <i :class="list.icon +' ai-globe text-5xl text-primary'"></i>
        <h5 class="text-lg font-medium text-primary mt-4">{{ list.title }}</h5>
        <p class="mt-2">{{ list.desc }}</p>
      </div>
    </div>
  </section>
</template>