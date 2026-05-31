<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import majapahitImg from '@/assets/images/1.jpg'
import pakanSapiImg from '@/assets/images/2.jpg'
import klinikKesehatanImg from '@/assets/images/3.jpg'
import minyakAtsiriImg from '@/assets/images/4.jpg'
import smartFarmingImg from '@/assets/images/5.jpg'
import aplikasiBatikImg from '@/assets/images/6.jpg'
import orthopedicImg from '@/assets/images/7.jpg'
import qrCodeImg from '@/assets/images/1qr.jpg'

const currentSlide = ref(0)

const slides = ref([
  {
    id: 1,
    bgImg: majapahitImg,
    qrCode: qrCodeImg,
    title: 'Penerapan Pola Distribusi Irigasi Pipa dan Pompa Benam Bertenaga Surya di Desa Ngebong, Kabupaten Tulungagung',
    subtitle: 'Implementation of Solar-Powered Submersible Pump and Pipe Irrigation Distribution System in Ngebong Village, Tulungagung Regency',
    author: 'Darmanto, S.T., M.T. & Prof. Dr. Ir. Sukardi, MS.',
    illustrator: 'Oreza Yans Aprilia'
  },
  {
    id: 2,
    bgImg: pakanSapiImg,
    qrCode: qrCodeImg,
    title: 'Virtual Museum of Majapahit',
    subtitle: 'Virtual Museum of Majapahit',
    author: 'Sahiruddin, M.A., Ph.D. - Fakultas Ilmu Budaya',
    illustrator: 'Faula Mulyani'
  },
  {
    id: 3,
    bgImg: klinikKesehatanImg,
    qrCode: qrCodeImg,
    title: 'Klinik Kesehatan Keliling Universitas Brawijaya: Menjangkau Setiap Rumah',
    subtitle: 'Universitas Brawijaya Mobile Health Clinic: Reaching Every Home, Caring for Every Community',
    author: 'Ns. Elvira Sari Dewi, S.Kep, M.Biomed',
    illustrator: 'Humaira Fatiha'
  },
    {
    id: 4,
    bgImg: minyakAtsiriImg,
    qrCode: qrCodeImg,
    title: 'Virtual Museum of Majapahit',
    subtitle: 'Virtual Museum of Majapahit',
    author: 'Sahiruddin, M.A., Ph.D. - Fakultas Ilmu Budaya',
    illustrator: 'Faula Mulyani'
  },
])


const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

// Autoplay
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
      
      <div class="slide position-relative" v-for="slide in slides" :key="slide.id" :style="{ backgroundImage: `url(${slide.bgImg})` }">
        
        <div class="slide-caption">
          <div class="row d-flex align-items-end m-0">
            <div class="col-2 px-0">
              <img :src="slide.qrCode" alt="QR Code" style="width: 100%">
            </div>
            <div class="col-10">
              <h4 class="title-caption fw-bold">{{ slide.title }}</h4>
              <h5 class="fs-italic fw-normal" style="line-height: 1.2; font-size: 1rem; margin-bottom: 0.8rem;">{{ slide.subtitle }}</h5>
              <span class="d-block fs-i mb-1">{{ slide.author }}</span>
              <span class="d-block fs-i"><em>Illustrator: {{ slide.illustrator }}</em></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-pagination d-flex flex-column position-absolute">
      <button v-for="(slide, index) in slides" :key="'dot-' + index" class="dot-btn"
        :class="{ active: currentSlide === index }" @click="currentSlide = index"></button>
    </div>

  </div>
</template>

<style scoped>
.slider-track {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide {
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
}

.slide-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1rem;
  padding: 20% 32px 32px 32px;
  color: #fff;
  background: linear-gradient(
    to top,
    rgba(0,0,0,1),
    rgba(0,0,0,0)
  );
  text-align: left;
  z-index: 5; 
}

.slide-caption * {
  color: #fff;
}

.slide-caption .title-caption {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.fs-i {
  font-size: 0.85rem;
  opacity: 0.9;
}

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
  margin: 6px 0;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dot-btn.active {
  background-color: #ffffff;
  transform: scale(1.2);
}

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
  bottom: 25px; /* Moved down slightly so it sits neatly in the dark gradient */
}
</style>