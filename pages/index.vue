<script setup>

useHead({
  title: "Home - Nuxt 3 with Tailwind",
});
</script>
<template>
  <div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: true,
      }"
      :pagination="{
         dynamicBullets: true,
       }"
    >
      <SwiperSlide v-for="slide in 4" :key="slide">
        <div class="flex items-center justify-center relative  h-[480px] overflow-hidden">
         <img class="object-cover w-full h-full" src="~/assets/images/carousel.png" alt=""> 
         <p class="absolute">Image Slide {{ slide }}</p>
        </div>
      </SwiperSlide>
    </Swiper>

    <HomepagePanel/>
    
  </div>
</template>
