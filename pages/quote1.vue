<template>
  <div>
    <!-- Quote Header -->
    <section class="quote-header">
      <div class="container">
        <h1>Request a Quote</h1>
        <p>
          Planning an event or celebration? Let us cater your special occasion
          with authentic Andhra cuisine that will delight your guests.
        </p>
      </div>
    </section>

    <!-- Quote Form -->
    <!-- Quote Form -->
    <section class="quote-form-section">
      <div class="container">
        <div class="form-container">
          <h2>Get Your Catering Quote</h2>
          <form @submit.prevent="submitQuote" class="quote-form">
            <!-- Personal Information -->
            <div class="form-section">
              <h3>Personal Information</h3>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div class="form-group">
                  <label for="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    placeholder="Enter company name (optional)"
                  />
                </div>
              </div>
            </div>

            <!-- Event Details -->
            <div class="form-section">
              <h3>Event Details</h3>
              <div class="form-row">
                <div class="form-group">
                  <label for="eventType">Event Type *</label>
                  <select id="eventType" v-model="form.eventType" required>
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="festival">Festival Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="guests">Number of Guests *</label>
                  <select id="guests" v-model="form.guests" required>
                    <option value="">Select guest count</option>
                    <option value="10-25">10-25 guests</option>
                    <option value="26-50">26-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-200">101-200 guests</option>
                    <option value="200+">200+ guests</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="eventDate">Event Date *</label>
                  <input
                    type="date"
                    id="eventDate"
                    v-model="form.eventDate"
                    required
                    :min="minDate"
                  />
                </div>
                <div class="form-group">
                  <label for="eventTime">Event Time</label>
                  <input type="time" id="eventTime" v-model="form.eventTime" />
                </div>
              </div>
              <div class="form-group">
                <label for="venue">Venue/Location *</label>
                <input
                  type="text"
                  id="venue"
                  v-model="form.venue"
                  required
                  placeholder="Enter event venue or location"
                />
              </div>
            </div>

            <!-- Catering Preferences -->
            <div class="form-section">
              <h3>Catering Preferences</h3>
              <div class="form-group">
                <label>Service Type *</label>
                <div class="checkbox-group">
                  <div class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="form.serviceType"
                      value="buffet"
                      required
                    />
                    <span>Buffet Service</span>
                  </div>
                  <div class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="form.serviceType"
                      value="plated"
                      required
                    />
                    <span>Plated Service</span>
                  </div>
                  <!-- <div class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="form.serviceType"
                      value="family"
                      required
                    />
                    <span>Family Style</span>
                  </div> -->
                </div>
              </div>

              <div class="form-group pt-5">
                <label>Dietary Requirements</label>
                <div class="checkbox-group">
                  <div class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="form.dietary"
                      value="vegetarian"
                    />
                    <span>Vegetarian Options</span>
                  </div>
                  <div class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="form.dietary"
                      value="vegan"
                    />
                    <span>Vegan Options</span>
                  </div>
                  <div class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="form.dietary"
                      value="glutenfree"
                    />
                    <span>Gluten-Free Options</span>
                  </div>
                  <div class="checkbox-label">
                    <input
                      type="checkbox"
                      v-model="form.dietary"
                      value="spicylevel"
                    />
                    <span>Mild Spice Level</span>
                  </div>
                </div>
              </div>

              <div class="form-group pt-5">
                <label for="budget">Budget Range</label>
                <select id="budget" v-model="form.budget">
                  <option value="">Select budget range</option>
                  <option value="under-500">Under ₹500 per person</option>
                  <option value="500-1000">₹500 - ₹1000 per person</option>
                  <option value="1000-1500">₹1000 - ₹1500 per person</option>
                  <option value="1500-2000">₹1500 - ₹2000 per person</option>
                  <option value="above-2000">Above ₹2000 per person</option>
                </select>
              </div>
            </div>

            <!-- Additional Information -->
            <div class="form-section">
              <h3>Additional Information</h3>
              <div class="form-group">
                <label for="specialRequests"
                  >Special Requests or Menu Preferences</label
                >
                <textarea
                  id="specialRequests"
                  v-model="form.specialRequests"
                  rows="4"
                  placeholder="Tell us about any specific dishes, requirements, etc."
                ></textarea>
              </div>
              <div class="form-group pt-3 width-hear">
                <label for="referralSource">How did you hear about us?</label>
                <select id="referralSource" v-model="form.referralSource">
                  <option value="">Select an option</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="friend">Friend/Referral</option>
                  <option value="event">Saw at an Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group checkbox-group">
                <div class="checkbox-label">
                  <input type="checkbox" v-model="form.agreeTerms" required />
                  <span>I agree to the Terms and Conditions *</span>
                </div>
                <div class="checkbox-label">
                  <input type="checkbox" v-model="form.agreePrivacy" required />
                  <span>I agree to the Privacy Policy *</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary submit-btn"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Submitting..." : "Request Quote" }}
            </button>
          </form>

          <div
            v-if="submitMessage"
            class="submit-message"
            :class="submitSuccess ? 'success' : 'error'"
          >
            {{ submitMessage }}
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us">
      <div class="container">
        <h2>Why Choose Our Catering Services?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🍽️</div>
            <h3>Authentic Flavors</h3>
            <p>
              Traditional Andhra recipes prepared by experienced chefs using
              authentic spices and techniques.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👨‍🍳</div>
            <h3>Professional Service</h3>
            <p>
              Experienced catering team ensuring seamless service and
              presentation for your special event.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌿</div>
            <h3>Fresh Ingredients</h3>
            <p>
              We use only the freshest, locally sourced ingredients to ensure
              the highest quality dishes.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>
              Affordable catering packages without compromising on quality or
              taste.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <h2>Need to Discuss Your Event?</h2>
        <p>
          Our catering specialists are here to help you plan the perfect menu
          for your occasion.
        </p>
        <div class="cta-buttons">
          <a href="tel:+917674800999" class="btn btn-primary"
            >Call Us: 076748 00999</a
          >
          <NuxtLink to="/contact" class="btn btn-secondary"
            >Contact Us</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

useHead({
  title: "Request Quote - Konaseema Ghumaghumalu Catering",
  meta: [
    {
      name: "description",
      content:
        "Request a catering quote for your special event. Authentic Andhra cuisine catering services for weddings, corporate events, and celebrations in Hyderabad.",
    },
  ],
});

const form = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  eventType: "",
  guests: "",
  eventDate: "",
  eventTime: "",
  venue: "",
  serviceType: "",
  dietary: [],
  budget: "",
  specialRequests: "",
  referralSource: '',
  agreeTerms: false,
  agreePrivacy: false,
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split("T")[0];
});

const submitQuote = async () => {
  isSubmitting.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    submitMessage.value = "Thank you! We’ll get back to you soon.";
    submitSuccess.value = true;
    Object.keys(form).forEach((key) => {
      form[key] = Array.isArray(form[key])
        ? []
        : typeof form[key] === "boolean"
        ? false
        : "";
    });
  } catch (error) {
    submitMessage.value = "Something went wrong. Please try again.";
    submitSuccess.value = false;
  } finally {
    isSubmitting.value = false;
    setTimeout(() => (submitMessage.value = ""), 7000);
  }
};
</script>

<style scoped>
.quote-container {
  padding: 30px;
}
.quote-header {
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: #fdd0c0;
  text-align: center;
}

.quote-header h1 {
  font-size: 2.7rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: bold;
}

.quote-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.quote-form-section {
  padding: 4rem 0;
  background: white;
}

.form-container {
  max-width: 900px;
  margin: 0 auto;
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  font-weight: 550;
}

.quote-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.form-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ff6b35;
  /* border-bottom: 2px solid #ff6b35; */
  font-weight: bold;
  padding-bottom: 0.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.width-hear{
  max-width: 350px;
}
.form-group label {
  font-weight: 550;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: "roboto", sans-serif;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6b35;
}

.radio-group,
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.radio-label,
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  /* font-weight: normal; */
}

.radio-label input,
.checkbox-label input {
  margin: 0;
  padding: 0;
  width: auto;
}

.submit-btn {
  padding: 1.25rem 3rem;
  font-size: 1.2rem;
  align-self: center;
  min-width: 250px;
  margin-top: 1rem;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.why-choose-us {
  padding: 4rem 0;
  background: #f8f9fa;
}

.why-choose-us h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
  font-weight: 550;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 20px;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.contact-cta {
  padding: 4rem 0;
  background: white;
  text-align: center;
}

.contact-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
    font-weight: 550;

}

.contact-cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
  margin: 20px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .form-container {
    padding: 2rem;
  }

  .form-section {
    padding: 1.5rem;
  }

  .radio-group,
  .checkbox-group {
    flex-direction: column;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
