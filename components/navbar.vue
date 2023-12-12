<script setup>
function showHide() {
  document.getElementById("hamburger").checked = false;
}

const navLinks = [
   {name : "home", url : "/"},
   {name : "about us", url : "/about"},
   {name : "services", url : "/service"},
   {name : "solutions", url : "/"},
   {name : "partner", url : "/partner"},
   {name : "contact", url : "/contact"}
]
</script>

<template>
  <header class="fixed inset-x-0 z-30 bg-white py-6 transition-all">
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="relative">
          <NuxtLink to="/">
            <h1 class="text-lg md:text-2xl font-semibold text-primary">
              vensys
            </h1>
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <input
            type="checkbox"
            class="peer hidden"
            name="hamburger"
            id="hamburger"
          />
          <label
            for="hamburger"
            class="relative peer-checked:hamburger z-30 block cursor-pointer md:hidden"
          >
            <span
              class="duration-200 inline-block w-7 focus:w-0 h-1 bg-black after:bg-black before:bg-black rounded-xl after:rounded-xl before:rounded-xl"
            ></span>
          </label>
          <div
            @click="showHide"
            class="absolute inset-0 h-screen bg-gray-900/30 opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"
          ></div>
          <div
            class="peer-checked:translate-x-0 w-72 sm:w-96 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 md:w-auto md:static md:translate-x-0 z-20 ease-out"
          >
            <div class="flex flex-col md:items-center md:flex-row h-full">
              <ul
              
                class="bg-white dark:md:bg-transparent md:bg-transparent flex items-center px-7 pt-20 md:pb-0 pb-[38rem] space-y-8 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-10 md:pt-0"
              >
                <li
                v-for="link in navLinks"
              :key="link"
                >
                  <NuxtLink
                    @click="showHide"
                    class="capitalize tracking-wide hover:text-primary transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:-bottom-2 before:block before:absolute before:bg-primary"
                    to="/"
                    >{{link.name}}</NuxtLink
                  >
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
  right: 0;
  transition-delay: 0.2s, 0s;
  transition-duration: 0.1s;
  transition-property: margin, transform;
  content: "";
  position: absolute;
  width: 20px;
  height: 4px;
}

#hamburger ~ label span::after {
  margin-top: 10px;
}

#hamburger ~ label span::before {
  margin-top: -10px;
}

#hamburger:checked ~ label span {
  background-color: transparent;
}

#hamburger:checked ~ label span:before,
#hamburger:checked ~ label span:after {
  transition-delay: 0s, 0.2s;
  margin-top: 0;
}

#hamburger:checked ~ label span:before {
  transform: rotate(45deg);
}

#hamburger:checked ~ label span:after {
  transform: rotate(-45deg);
}
</style>
