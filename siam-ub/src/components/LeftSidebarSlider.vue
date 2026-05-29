<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)

const slides = ref([
  {
    id: 1,
    bgColor: '#4a5568', 
    title: 'Penerapan Pola Distribusi Irigasi Pipa dan Pompa Benam Bertenaga Surya di Desa Ngebong, Kabupaten Tulungagung',
    subtitle: 'Implementation of Solar-Powered Submersible Pump and Pipe Irrigation Distribution System in Ngebong Village, Tulungagung Regency',
    author: 'Darmanto, S.T., M.T. & Prof. Dr. Ir. Sukardi, MS.',
    illustrator: 'Oreza Yans Aprilia'
  },
  {
    id: 2,
    bgColor: '#2c5282', 
    title: 'Virtual Museum of Majapahit',
    subtitle: 'Virtual Museum of Majapahit',
    author: 'Sahiruddin, M.A., Ph.D. - Fakultas Ilmu Budaya',
    illustrator: 'Faula Mulyani'
  },
  {
    id: 3,
    bgColor: '#276749', 
    title: 'Klinik Kesehatan Keliling Universitas Brawijaya: Menjangkau Setiap Rumah',
    subtitle: 'Universitas Brawijaya Mobile Health Clinic: Reaching Every Home, Caring for Every Community',
    author: 'Ns. Elvira Sari Dewi, S.Kep, M.Biomed',
    illustrator: 'Humaira Fatiha'
  }
])

// Navigation Functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  // Adding slides.length before modulo prevents negative numbers in JS
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

// Auto-play (Optional)
let slideInterval
onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<template>
  <div class="slider-wrapper w-100 h-100 overflow-hidden position-relative" style="background-color: #000;">
    
    <div class="slider-track" :style="{ transform: `translateY(-${currentSlide * 100}%)` }">
      <div 
        class="slide" 
        v-for="slide in slides" 
        :key="slide.id"
        :style="{ backgroundColor: slide.bgColor }"
      >
        </div>
    </div>

    <button class="nav-arrow top-arrow" @click="prevSlide">
      <i class="fa fa-chevron-up"></i>
    </button>

    <button class="nav-arrow bottom-arrow" @click="nextSlide">
      <i class="fa fa-chevron-down"></i>
    </button>

    <div class="slider-pagination d-flex flex-column position-absolute">
      <button 
        v-for="(slide, index) in slides" 
        :key="'dot-' + index"
        class="dot-btn"
        :class="{ active: currentSlide === index }"
        @click="currentSlide = index"
      ></button>
    </div>
    
    <div class="info-card d-flex align-items-center m-4 p-3 shadow position-absolute">
      <div class="qr-placeholder me-3"></div>
      <div class="text-white info-content">
        <h6 class="mb-1 fw-bold">{{ slides[currentSlide].title }}</h6>
        <p class="mb-1 text-subtitle">{{ slides[currentSlide].subtitle }}</p>
        <p class="mb-0 text-credit text-light mt-2">
          {{ slides[currentSlide].author }}<br>
          <em class="text-white-50">Illustrator: {{ slides[currentSlide].illustrator }}</em>
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* =========================================
   VERTICAL SLIDER STYLES
========================================= */

.slider-track {
  display: flex;
  flex-direction: column; /* Stacks the slides vertically */
  height: 100%;
  width: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide {
  min-height: 100%; /* Forces each slide to take full height */
  min-width: 100%;
  background-size: cover;
  background-position: center;
}

/* =========================================
   NAVIGATION CONTROLS
========================================= */

/* Pagination Dots (Middle Right) */
.slider-pagination {
  right: 25px; 
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  align-items: center;
}

.dot-btn {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  margin: 6px 0; /* Vertical margin instead of horizontal */
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dot-btn.active {
  background-color: #ffffff;
  transform: scale(1.2);
}

/* Navigation Arrows (Top & Bottom Center) */
.nav-arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;
}

.nav-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.top-arrow {
  top: 25px;
}

.bottom-arrow {
  bottom: 160px; /* Positioned just above the info card so it doesn't overlap */
}

/* =========================================
   INFO CARD STYLES
========================================= */

.info-card {
  bottom: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.85); 
  max-width: 650px; 
  border-radius: 8px; 
  z-index: 10;
}

.info-content {
  min-height: 90px; 
}

.qr-placeholder {
  width: 90px;
  height: 90px;
  background-color: #e9ecef; 
  border-radius: 4px;
  flex-shrink: 0; 
}

.text-subtitle {
  font-size: 0.85rem;
  line-height: 1.2;
}

.text-credit {
  font-size: 0.75rem;
  line-height: 1.4;
}
</style>