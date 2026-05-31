<template>
  <div class="container-fluid vh-100 p-0">
    <div class="row g-0 h-100">

      <div class="col-lg-8 d-none d-lg-block p-0">
        <LeftSidebarSlider />
      </div>

      <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center right-panel">

        <div class="login-container px-4 px-md-5 w-100">

          <div class="text-center mb-4">
            <img src="@/assets/images/logo-siam-long.png" alt="SIAM UB" class="siam-logo">
          </div>

          <p class="text-center text-secondary small mb-3">{{ sessionTitle }}</p>

          <p class="text-center text-primary siam-instruction" v-html="instructionId"></p>

          <p class="text-center text-primary mb-4 siam-instruction">
            {{ instructionEn }}
          </p>

          <button @click="handleForward" class="btn btn-primary w-100 py-2 fw-bold btn-siam">
            <i class="fa fa-university me-2"></i> {{ buttonText }}
          </button>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' 
import LeftSidebarSlider from './components/LeftSidebarSlider.vue'

const router = useRouter()

const handleForward = () => {
  router.push('/auth-portal')
}

const sessionTitle = ref('Sign in to start your session')
const instructionId = ref('Jika nim anda belum terdaftar, Silahkan login ke bais.ub.ac.id menggunakan NIM. Setelah berhasil login, kemudian klik tombol <strong>"Sync To IAM"</strong>. Selanjutnya silahkan dicoba login kembali.')
const instructionEn = ref("If your Student ID (NIM) is not yet registered, please log in to bais.ub.ac.id using your credentials. Once logged in, click the 'Sync to IAM' button. After that, please try logging in again.")
const buttonText = ref('LOGIN UB')
</script>

<style scoped>
/* Left Panel */
.right-panel {
  position: relative;
  background-color: #ffffff;
}

/* Info Card Overlay */
.info-card {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.9);
  max-width: 650px;
  border-radius: 4px;
}

/* QR Placeholder */
.qr-placeholder {
  width: 90px;
  height: 90px;
  background-color: #e9ecef;
  /* Light gray box */
  border-radius: 4px;
  flex-shrink: 0;
}

.text-primary {
  color: #0d6efd;
  size: 0.9rem;
}

.text-subtitle {
  font-size: 0.85rem;
  line-height: 1.2;
}

.text-credit {
  font-size: 0.75rem;
  line-height: 1.4;
}

.right-panel {
  position: relative;
  background-image: url('@/assets/images/bg-onboard.jpg');
  background-size: cover;
  background-position: center;
}

.siam-logo {
  width: 210px;
  height: 60px;
}

.login-container {
  z-index: 2;
  max-width: 400px;
}

.siam-instruction {
  font-size: 0.85rem;
  line-height: 1.4;
}

.btn-siam {
  background-color: #0d6efd;
  border: none;
  transition: background-color 0.2s ease-in-out;
}

.btn-siam:hover {
  background-color: #0b5ed7;
}
</style>