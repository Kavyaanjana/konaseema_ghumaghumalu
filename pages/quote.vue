<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-r from-orange-50 to-orange-100">
      <div class="container-max text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Request a Quote</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Planning an event or need catering services? Get a personalized quote for your special occasion.
        </p>
      </div>
    </section>

    <!-- Quote Form -->
    <section class="section-padding bg-white">
      <div class="container-max max-w-4xl">
        <form @submit.prevent="submitQuote" class="space-y-8">
          <!-- Event Details -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Event Details</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="eventType" class="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select 
                  id="eventType" 
                  v-model="quote.eventType"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="festival">Festival Celebration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="guestCount" class="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <input 
                  type="number" 
                  id="guestCount" 
                  v-model="quote.guestCount"
                  required
                  min="10"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="e.g., 50"
                >
              </div>

              <div>
                <label for="eventDate" class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input 
                  type="date" 
                  id="eventDate" 
                  v-model="quote.eventDate"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
              </div>

              <div>
                <label for="eventTime" class="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <input 
                  type="time" 
                  id="eventTime" 
                  v-model="quote.eventTime"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
              </div>
            </div>

            <div class="mt-6">
              <label for="venue" class="block text-sm font-medium text-gray-700 mb-2">Venue</label>
              <input 
                type="text" 
                id="venue" 
                v-model="quote.venue"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Event venue address"
              >
            </div>
          </div>

          <!-- Menu Preferences -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Menu Preferences</h2>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Meal Type (Select all that apply)</label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.mealTypes" 
                      value="breakfast"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Breakfast</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.mealTypes" 
                      value="lunch"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Lunch</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.mealTypes" 
                      value="dinner"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Dinner</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.mealTypes" 
                      value="snacks"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Snacks</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Cuisine Preferences</label>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.cuisines" 
                      value="andhra"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Traditional Andhra</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.cuisines" 
                      value="south-indian"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">South Indian</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.cuisines" 
                      value="north-indian"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">North Indian</span>
                  </label>
                </div>
              </div>

              <div>
                <label for="dietaryRestrictions" class="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                <textarea 
                  id="dietaryRestrictions" 
                  v-model="quote.dietaryRestrictions"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                  placeholder="Please mention any dietary restrictions, allergies, or special requirements..."
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="contactName" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="contactName" 
                  v-model="quote.contactName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Your full name"
                >
              </div>

              <div>
                <label for="contactEmail" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="contactEmail" 
                  v-model="quote.contactEmail"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="your.email@example.com"
                >
              </div>

              <div>
                <label for="contactPhone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="contactPhone" 
                  v-model="quote.contactPhone"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="+91 98765 43210"
                >
              </div>

              <div>
                <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select 
                  id="budget" 
                  v-model="quote.budget"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                  <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                  <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                  <option value="above-5l">Above ₹5,00,000</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Additional Requirements -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Additional Requirements</h2>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Services Needed</label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.services" 
                      value="catering"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Food Catering</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.services" 
                      value="service-staff"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Service Staff</span>
                  </label>
                  <!-- <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.services" 
                      value="equipment"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Equipment Rental</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      type="checkbox" 
                      v-model="quote.services" 
                      value="decoration"
                      class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    >
                    <span class="ml-2">Basic Decoration</span>
                  </label> -->
                </div>
              </div>

              <div>
                <label for="additionalNotes" class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea 
                  id="additionalNotes" 
                  v-model="quote.additionalNotes"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                  placeholder="Any additional requirements, special requests, or questions..."
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Submitting Quote Request...</span>
              <span v-else>Request Quote</span>
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccess" class="mt-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
          <h3 class="text-lg font-semibold mb-2">Quote Request Submitted!</h3>
          <p>Thank you for your interest in our catering services. We'll review your requirements and get back to you within 24 hours with a detailed quote.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Request Quote - Konaseema Ghumaghumalu',
  meta: [
    { name: 'description', content: 'Request a catering quote from Konaseema Ghumaghumalu for your special event. Authentic Andhra cuisine for weddings, corporate events, and celebrations.' }
  ]
})

const quote = ref({
  eventType: '',
  guestCount: '',
  eventDate: '',
  eventTime: '',
  venue: '',
  mealTypes: [],
  cuisines: [],
  dietaryRestrictions: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  budget: '',
  services: [],
  additionalNotes: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitQuote = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  quote.value = {
    eventType: '',
    guestCount: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    mealTypes: [],
    cuisines: [],
    dietaryRestrictions: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    budget: '',
    services: [],
    additionalNotes: ''
  }
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Scroll to success message
  setTimeout(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }, 100)
  
  // Hide success message after 10 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 10000)
}
</script>

