<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <nav class="container-max">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="logo">
            <NuxtLink to="/" class="logo-link">
              <img
                src="/logo.png"
                alt="Konaseema Ghumaghumalu"
                class="logo-img"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="nav-link"
            :class="{ 'text-orange-500': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link"
            :class="{ 'text-orange-500': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/menu"
            class="nav-link"
            :class="{ 'text-orange-500': $route.path === '/menu' }"
          >
            Our Menu
          </NuxtLink>
          <NuxtLink
            to="/gallery"
            class="nav-link"
            :class="{ 'text-orange-500': $route.path === '/gallery' }"
          >
            Gallery
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="nav-link"
            :class="{ 'text-orange-500': $route.path === '/contact' }"
          >
            Contact Us
          </NuxtLink>
          <NuxtLink
            to="/quote1"
            class="btn-secondary text-sm"
            :class="{ 'text-orange-500': $route.path === '/quote1' }"
            >Request Quote1</NuxtLink
          >

          <NuxtLink to="/quote" class="btn-secondary text-sm">
            Request Quote 2
          </NuxtLink>
          <NuxtLink to="/order" class="btn-primary text-sm">
            ORDER NOW
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-4 p-3" >
          <NuxtLink to="/" class="nav-link" @click="closeMobileMenu">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="nav-link" @click="closeMobileMenu">
            About
          </NuxtLink>
          <NuxtLink to="/menu" class="nav-link" @click="closeMobileMenu">
            Our Menu
          </NuxtLink>
          <NuxtLink to="/gallery" class="nav-link" @click="closeMobileMenu">
            Gallery
          </NuxtLink>
          <NuxtLink to="/contact" class="nav-link" @click="closeMobileMenu">
            Contact Us
          </NuxtLink>
          <div class="flex flex-col space-y-2 pt-4">
             <NuxtLink
              to="/quote1"
              class="btn-secondary text-center"
              @click="closeMobileMenu"
            >
              Request Quote 1
            </NuxtLink>
            <NuxtLink
              to="/quote"
              class="btn-secondary text-center"
              @click="closeMobileMenu"
            >
              Request Quote 2
            </NuxtLink>
            <NuxtLink
              to="/order"
              class="btn-primary text-center"
              @click="closeMobileMenu"
            >
              ORDER NOW
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.logo {
  margin-left: 30px;
}
.logo-img {
  height: 75px;
  width: auto;
}
.nav-link {
  @apply text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200;
}
</style>
