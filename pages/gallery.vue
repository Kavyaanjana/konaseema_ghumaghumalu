<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-r from-orange-50 to-orange-100">
      <div class="container-max text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Gallery</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Take a visual journey through our restaurant, dishes, and the vibrant atmosphere that makes Konaseema Ghumaghumalu special.
        </p>
      </div>
    </section>

    <!-- Gallery Tabs -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="flex flex-wrap justify-center mb-12 gap-4">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              activeCategory === category 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="index"
            class="group cursor-pointer"
            @click="openLightbox(index)"
          >
            <div class="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 h-64">
              <div class="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <p class="text-gray-500">{{ image.title }}</p>
              </div>
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-lg font-semibold text-gray-800">{{ image.title }}</h3>
              <p class="text-gray-600">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxOpen" 
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl max-h-full">
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-orange-500 z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div class="bg-gray-300 rounded-lg h-96 w-full flex items-center justify-center">
          <p class="text-gray-600 text-xl">{{ currentImage?.title }}</p>
        </div>
        
        <div class="text-center mt-4">
          <h3 class="text-xl font-semibold text-white mb-2">{{ currentImage?.title }}</h3>
          <p class="text-gray-300">{{ currentImage?.description }}</p>
        </div>

        <!-- Navigation arrows -->
        <button 
          @click.stop="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          @click.stop="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Gallery - Konaseema Ghumaghumalu',
  meta: [
    { name: 'description', content: 'View our gallery showcasing delicious Andhra dishes, restaurant ambiance, and dining experiences at Konaseema Ghumaghumalu.' }
  ]
})

const activeCategory = ref('All')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const categories = ['All', 'Food', 'Restaurant', 'Events', 'Chef Specials']

const images = [
  {
    category: 'Food',
    title: 'Andhra Chicken Curry',
    description: 'Traditional spicy chicken curry with authentic Andhra spices'
  },
  {
    category: 'Food',
    title: 'Hyderabadi Biryani',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },
  {
    category: 'Food',
    title: 'Gongura Mutton',
    description: 'Signature mutton curry with tangy gongura leaves'
  },
  {
    category: 'Restaurant',
    title: 'Dining Area',
    description: 'Comfortable and modern dining space with traditional touches'
  },
  {
    category: 'Restaurant',
    title: 'Kitchen',
    description: 'Our clean and modern kitchen where magic happens'
  },
  {
    category: 'Food',
    title: 'Fish Pulusu',
    description: 'Tangy fish curry with tamarind and vegetables'
  },
  {
    category: 'Events',
    title: 'Family Celebration',
    description: 'Families enjoying authentic Andhra cuisine together'
  },
  {
    category: 'Chef Specials',
    title: 'Prawns Fry',
    description: 'Fresh prawns cooked with coastal spices and curry leaves'
  },
  {
    category: 'Food',
    title: 'Traditional Thali',
    description: 'Complete Andhra meal with variety of dishes'
  },
  {
    category: 'Restaurant',
    title: 'Entrance',
    description: 'Welcoming entrance with traditional Andhra decor'
  },
  {
    category: 'Chef Specials',
    title: 'Chicken 65',
    description: 'Spicy deep-fried chicken marinated in traditional spices'
  },
  {
    category: 'Events',
    title: 'Festival Celebration',
    description: 'Special festival menu and decorations'
  }
]

const filteredImages = computed(() => {
  if (activeCategory.value === 'All') {
    return images
  }
  return images.filter(image => image.category === activeCategory.value)
})

const currentImage = computed(() => {
  return filteredImages.value[currentImageIndex.value]
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? filteredImages.value.length - 1 
    : currentImageIndex.value - 1
}

// Handle keyboard navigation
const handleKeydown = (event) => {
  if (!lightboxOpen.value) return
  
  if (event.key === 'Escape') {
    closeLightbox()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  } else if (event.key === 'ArrowLeft') {
    previousImage()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

