<template>
  <div class="container-fluid vh-100 p-0">
    <div class="row g-0 h-100">
      
      <div class="col-lg-8 d-none d-lg-block left-panel">
        
        <div class="info-card d-flex align-items-center m-4 p-3 shadow">
          
          <img src="@/assets/images/qr-placeholder.png" alt="QR Code" class="qr-code me-3 bg-white p-1">
          
          <div class="text-white">
            <h6 class="mb-1 fw-bold">Virtual Museum of Majapahit</h6>
            <p class="mb-1 text-subtitle">Virtual Museum of Majapahit</p>
            <p class="mb-0 text-credit text-light">
              Sahiruddin, M.A., Ph.D. - Fakultas Ilmu Budaya<br>
              <em class="text-white-50">Illustrator: Faula Mulyani</em>
            </p>
          </div>
        </div>

      </div>

      <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center right-panel">
        
        <div class="siam-watermark"></div>

        <div class="login-container px-4 px-md-5 w-100">
          
          <div class="text-center mb-4">
            <img src="@/assets/images/logo-siam-long.png" alt="SIAM UB" class="siam-logo">
          </div>

          <p class="text-center text-secondary small mb-3">Sign in to start your session</p>
          
          <p class="text-center text-primary siam-instruction">
            Jika nim anda belum terdaftar, Silahkan login ke bais.ub.ac.id menggunakan NIM. Setelah berhasil login, kemudian klik tombol <strong>"Sync To IAM"</strong>. Selanjutnya silahkan dicoba login kembali.
          </p>
          
          <p class="text-center text-primary mb-4 siam-instruction">
            If your Student ID (NIM) is not yet registered, please log in to bais.ub.ac.id using your credentials. Once logged in, click the 'Sync to IAM' button. After that, please try logging in again.
          </p>

          <button class="btn btn-primary w-100 py-2 fw-bold btn-siam">
            <i class="fa fa-university me-2"></i> LOGIN UB
          </button>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Left Panel (Illustration) */
.left-panel {
  /* Replace with your actual illustration path */
  background-image: url('@/assets/images/illustration.jpg'); 
  background-size: cover;
  background-position: center;
  position: relative;
}

/* Info Card Overlay */
.info-card {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #0a0a0a;
  max-width: 450px;
  border-radius: 4px; /* Optional: adds a slight curve if desired */
}

.qr-code {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.text-subtitle {
  font-size: 0.85rem;
}

.text-credit {
  font-size: 0.75rem;
}

/* Right Panel (Login Area) */
.right-panel {
  position: relative;
  background-color: #ffffff;
  overflow: hidden; /* Ensures watermark doesn't spill out */
}

/* The Faint Background Watermark */
.siam-watermark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Replace with your actual watermark pattern path */
  background-image: url('@/assets/images/watermark-pattern.png');
  background-size: cover;
  background-position: center;
  opacity: 0.05; /* Adjust this to make it more/less visible */
  z-index: 1;
  pointer-events: none; /* Prevents the watermark from blocking clicks */
}

/* Login Content Container */
.login-container {
  z-index: 2; /* Keeps the form above the watermark */
  max-width: 400px;
}

.siam-logo {
  max-width: 180px;
}

.siam-instruction {
  font-size: 0.85rem;
  line-height: 1.4;
}

/* Custom Button Styling */
.btn-siam {
  background-color: #0d6efd; /* UB primary blue */
  border: none;
  transition: background-color 0.2s ease-in-out;
}

.btn-siam:hover {
  background-color: #0b5ed7; /* Slightly darker on hover */
}
</style>