<template>
   <Navbar />
   <NuxtPage class="pt-20" />
   <Footer/>
</template>

<style>
.page-enter-active,
.page-leave-active {
   transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
}
</style>
