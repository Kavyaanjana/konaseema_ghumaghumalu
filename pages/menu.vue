<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-r from-orange-50 to-orange-100">
      <div class="container-max text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Menu</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our carefully curated selection of authentic Andhra dishes, each prepared with traditional recipes and the finest ingredients.
        </p>
      </div>
    </section>

    <!-- Menu Categories -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <!-- Appetizers -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">Appetizers</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Chicken 65</h3>
                <span class="text-orange-500 font-bold">₹280</span>
              </div>
              <p class="text-gray-600">Spicy deep-fried chicken marinated in traditional Andhra spices</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Prawns Fry</h3>
                <span class="text-orange-500 font-bold">₹350</span>
              </div>
              <p class="text-gray-600">Fresh prawns cooked with coastal spices and curry leaves</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Mutton Pepper Fry</h3>
                <span class="text-orange-500 font-bold">₹320</span>
              </div>
              <p class="text-gray-600">Tender mutton pieces tossed with black pepper and onions</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Fish Fry</h3>
                <span class="text-orange-500 font-bold">₹300</span>
              </div>
              <p class="text-gray-600">Fresh fish marinated in turmeric and red chili powder, pan-fried</p>
            </div>
          </div>
        </div>

        <!-- Main Courses -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">Main Courses</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Andhra Chicken Curry</h3>
                <span class="text-orange-500 font-bold">₹380</span>
              </div>
              <p class="text-gray-600">Traditional chicken curry with tamarind and red chilies</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Gongura Mutton</h3>
                <span class="text-orange-500 font-bold">₹450</span>
              </div>
              <p class="text-gray-600">Signature mutton curry with tangy gongura leaves</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Fish Pulusu</h3>
                <span class="text-orange-500 font-bold">₹400</span>
              </div>
              <p class="text-gray-600">Tangy fish curry with tamarind and vegetables</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Prawn Curry</h3>
                <span class="text-orange-500 font-bold">₹420</span>
              </div>
              <p class="text-gray-600">Coastal style prawn curry with coconut and spices</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Vegetable Koora</h3>
                <span class="text-orange-500 font-bold">₹250</span>
              </div>
              <p class="text-gray-600">Mixed vegetables cooked in traditional Andhra style</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Dal Tadka</h3>
                <span class="text-orange-500 font-bold">₹180</span>
              </div>
              <p class="text-gray-600">Yellow lentils tempered with cumin and mustard seeds</p>
            </div>
          </div>
        </div>

        <!-- Rice & Biryanis -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">Rice & Biryanis</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Hyderabadi Biryani</h3>
                <span class="text-orange-500 font-bold">₹350</span>
              </div>
              <p class="text-gray-600">Aromatic basmati rice with tender meat and traditional spices</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Vegetable Biryani</h3>
                <span class="text-orange-500 font-bold">₹280</span>
              </div>
              <p class="text-gray-600">Fragrant rice with mixed vegetables and aromatic spices</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Curd Rice</h3>
                <span class="text-orange-500 font-bold">₹150</span>
              </div>
              <p class="text-gray-600">Cooling rice mixed with yogurt and tempered spices</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Lemon Rice</h3>
                <span class="text-orange-500 font-bold">₹160</span>
              </div>
              <p class="text-gray-600">Tangy rice flavored with lemon and curry leaves</p>
            </div>
          </div>
        </div>

        <!-- Breads -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">Breads</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Naan</h3>
                <span class="text-orange-500 font-bold">₹60</span>
              </div>
              <p class="text-gray-600">Soft leavened bread baked in tandoor</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Roti</h3>
                <span class="text-orange-500 font-bold">₹40</span>
              </div>
              <p class="text-gray-600">Traditional whole wheat flatbread</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Paratha</h3>
                <span class="text-orange-500 font-bold">₹80</span>
              </div>
              <p class="text-gray-600">Layered flatbread cooked with ghee</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Garlic Naan</h3>
                <span class="text-orange-500 font-bold">₹80</span>
              </div>
              <p class="text-gray-600">Naan topped with fresh garlic and herbs</p>
            </div>
          </div>
        </div>

        <!-- Desserts -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">Desserts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Gulab Jamun</h3>
                <span class="text-orange-500 font-bold">₹120</span>
              </div>
              <p class="text-gray-600">Soft milk dumplings in sugar syrup</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Rasmalai</h3>
                <span class="text-orange-500 font-bold">₹140</span>
              </div>
              <p class="text-gray-600">Cottage cheese dumplings in sweetened milk</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Payasam</h3>
                <span class="text-orange-500 font-bold">₹100</span>
              </div>
              <p class="text-gray-600">Traditional South Indian sweet pudding</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Ice Cream</h3>
                <span class="text-orange-500 font-bold">₹80</span>
              </div>
              <p class="text-gray-600">Choice of vanilla, chocolate, or kulfi</p>
            </div>
          </div>
        </div>

        <!-- Beverages -->
        <div>
          <h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">Beverages</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Lassi</h3>
                <span class="text-orange-500 font-bold">₹80</span>
              </div>
              <p class="text-gray-600">Sweet or salted yogurt drink</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Fresh Lime Water</h3>
                <span class="text-orange-500 font-bold">₹60</span>
              </div>
              <p class="text-gray-600">Refreshing lime juice with mint</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Buttermilk</h3>
                <span class="text-orange-500 font-bold">₹50</span>
              </div>
              <p class="text-gray-600">Spiced yogurt drink with curry leaves</p>
            </div>

            <div class="border-b border-gray-200 pb-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-800">Filter Coffee</h3>
                <span class="text-orange-500 font-bold">₹40</span>
              </div>
              <p class="text-gray-600">Traditional South Indian coffee</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-padding bg-orange-500 text-white">
      <div class="container-max text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Order?</h2>
        <p class="text-xl mb-8">Experience the authentic flavors of Andhra Pradesh</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/order" class="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Order Online
          </NuxtLink>
          <NuxtLink to="/contact" class="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Visit Restaurant
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Our Menu - Konaseema Ghumaghumalu',
  meta: [
    { name: 'description', content: 'Explore our authentic Andhra menu featuring traditional dishes, biryanis, curries, and more. Fresh ingredients, traditional recipes.' }
  ]
})
</script>

