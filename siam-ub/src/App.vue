<template>
  <div class="container-fluid vh-100 p-0">
    <div class="row g-0 h-100">
      
      <div class="col-lg-8 d-none d-lg-block left-panel">
        
        <div class="info-card d-flex align-items-center m-4 p-3 shadow">
          
          <div class="qr-placeholder me-3"></div>
          
          <div class="text-white">
            <h6 class="mb-1 fw-bold">Penerapan Pola Distribusi Irigasi Pipa dan Pompa Benam Bertenaga Surya di Desa Ngebong, Kabupaten Tulungagung</h6>
            <p class="mb-1 text-subtitle">Implementation of Solar-Powered Submersible Pump and Pipe Irrigation Distribution System in Ngebong Village, Tulungagung Regency</p>
            <p class="mb-0 text-credit text-light mt-2">
              Darmanto, S.T., M.T. & Prof. Dr. Ir. Sukardi, MS.<br>
              <em class="text-white-50">Illustrator: Oreza Yans Aprilia</em>
            </p>
          </div>
        </div>

      </div>

      <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center right-panel">

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
/* Left Panel (Placeholder Background) */
.left-panel {
  position: relative;
  background-color: #6c757d; /* Standard slate gray placeholder color */
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
  background-color: #e9ecef; /* Light gray box */
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

/* Right Panel (Login Area) */
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

/* Login Content Container */
.login-container {
  z-index: 2; 
  max-width: 400px;
}

.siam-instruction {
  font-size: 0.85rem;
  line-height: 1.4;
}

/* Custom Button Styling */
.btn-siam {
  background-color: #0d6efd; 
  border: none;
  transition: background-color 0.2s ease-in-out;
}

.btn-siam:hover {
  background-color: #0b5ed7; 
}
</style>