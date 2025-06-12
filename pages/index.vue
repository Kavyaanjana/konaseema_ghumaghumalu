<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gray-800">
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div class="relative z-10 text-center text-white container-max px-4">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          A CULINARY<br>
          CELEBRATION OF<br>
          <span class="text-orange-500">AUTHENTIC ANDHRA</span><br>
          FLAVORS
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Welcome to Konaseema Ghumaghumalu in KPHB, Hyderabad.<br>
          Indulge in a rich array of traditional Andhra dishes prepared<br>
          with time-honored recipes and fresh, local ingredients.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="/order" class="btn-primary text-lg px-8 py-4">
            Order Now
          </NuxtLink>
          <NuxtLink to="/quote" class="btn-secondary text-lg px-8 py-4">
            Request Quote
          </NuxtLink>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Launch Offer Banner -->
    <section class="bg-orange-500 text-white py-4">
      <div class="container-max text-center">
        <p class="text-lg font-semibold">
          🎉 Exclusive Launch Offer: Enjoy 25% off on your first online order! 🎉
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Authentic Flavors -->
          <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">AUTHENTIC ANDHRA FLAVORS</h3>
            <p class="text-gray-600 leading-relaxed">
              Savor the rich, traditional flavors of coastal Andhra. Our menu features time-honored dishes prepared with fresh, local ingredients, capturing the true essence of Andhra cuisine.
            </p>
          </div>

          <!-- Regional Mastery -->
          <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">REGIONAL CULINARY MASTERY</h3>
            <p class="text-gray-600 leading-relaxed">
              Our diverse menu includes classic Andhra delicacies alongside modern interpretations, catering to varied palates while staying true to our culinary roots.
            </p>
          </div>

          <!-- Warm Ambience -->
          <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">WARM, INVITING AMBIENCE</h3>
            <p class="text-gray-600 leading-relaxed">
              Enjoy a comfortable dining experience in our modern yet cozy setting, where our friendly staff provides attentive service, making every visit a memorable culinary journey.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Ready to Experience Authentic Andhra Cuisine?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us for an unforgettable dining experience that celebrates the rich culinary heritage of Andhra Pradesh.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="/menu" class="btn-primary text-lg px-8 py-4">
            View Our Menu
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary text-lg px-8 py-4">
            Visit Us Today
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page component
useHead({
  title: 'Konaseema Ghumaghumalu - Authentic Andhra Flavors',
  meta: [
    { name: 'description', content: 'Experience authentic Andhra cuisine at Konaseema Ghumaghumalu in KPHB, Hyderabad. Traditional flavors, fresh ingredients, warm ambience.' }
  ]
})
</script>

