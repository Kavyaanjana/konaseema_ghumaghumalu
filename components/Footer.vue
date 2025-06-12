<template>
  <footer class="bg-gray-800 text-white">
    <div class="container-max section-padding">
      <!-- Grid layout: 1 row, 4 columns -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 1. Restaurant Info -->
        <div>
          <div class="mb-4">
            <NuxtLink to="/" class="logo-link inline-block">
              <img src="/logo.png" alt="Konaseema Ghumaghumalu" class="logo-img" />
            </NuxtLink>
          </div>
          <p class="text-gray-300 mb-4">
            Authentic Andhra flavors in the heart of KPHB, Hyderabad. Experience
            traditional coastal cuisine with a modern touch.
          </p>
          <div class="text-gray-300 space-y-1">
            <!-- <p>📍 KPHB, Hyderabad</p> -->
           
          </div>
        </div>

        <!-- 2. Location -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-orange-500">Our Location</h3>
          <p class="text-gray-300">
            Konaseema Ghumaghumalu, Flat No: 681, Lakshmi Arcade, 13th Phase Rd,
            9th Phase, Kukatpally Housing Board Colony, Hafeezpet, Hyderabad, Telangana 500085
          </p>
        </div>

        <!-- 3. Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-orange-500">Quick Links</h3>
          <ul class="space-y-2 text-gray-300">
            <li><NuxtLink to="/" class="hover:text-orange-500">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-orange-500">About</NuxtLink></li>
            <li><NuxtLink to="/menu" class="hover:text-orange-500">Our Menu</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="hover:text-orange-500">Gallery</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-orange-500">Contact Us</NuxtLink></li>
          </ul>
        </div>

        <!-- 4. Hours & Social -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-orange-500">Opening Hours</h3>
          <div class="text-gray-300 mb-4">
            <p>Monday - Sunday</p>
            <p>11:00 AM - 10:00 PM</p>
             <!-- <p>📞 +91 76748 00999</p> -->
            <!-- <p>✉️ info@konaseema.com</p> -->
          </div>
          <div class="flex space-x-4">
            <!-- Social Icons -->
            <a href="#" class="text-gray-300 hover:text-orange-500 transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- Twitter -->
                <path d="M24 4.557c-...z" />
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-orange-500 transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- Facebook -->
                <path d="M22.46 6c-...z" />
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-orange-500 transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- LinkedIn -->
                <path d="M12.017 0C5.396...z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Text -->
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          © 2024 Konaseema Ghumaghumalu. All rights reserved. |
          <span class="text-orange-500">Made with Manus</span>
        </p>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.logo {
  margin-left: 30px;
}
.logo-img {
  height: 75px;
  width: auto;
}
</style>
