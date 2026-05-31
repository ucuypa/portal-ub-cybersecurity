<template>
    <div class="auth-page-wrapper d-flex flex-column justify-content-center align-items-center vh-100">

        <h3 class="text-white text-center mb-4 auth-title">
            Sistem Autentikasi<br>Universitas Brawijaya
        </h3>

        <div class="card auth-card rounded-0 border-0">
            <div class="card-body p-4">

                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label class="form-label small mb-1 text-dark">Username or email</label>
                        <div class="input-group">
                            <input type="text" class="form-control rounded-0 auth-input border-end-0" />
                            <span class="input-group-text rounded-0 auth-input-icon bg-light">
                                <i class="fa fa-envelope text-secondary"></i>
                            </span>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label small mb-1 text-dark">Password</label>
                        <div class="input-group">
                            <input type="password" class="form-control rounded-0 auth-input border-end-0" />
                            <span class="input-group-text rounded-0 auth-input-icon bg-light">
                                <i class="fa fa-lock text-secondary"></i>
                            </span>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mb-3">
                        <button type="submit" class="btn btn-primary rounded-0 px-5 fw-normal btn-signin">
                            SIGN IN
                        </button>
                    </div>

                    <div class="mt-1">
                        <a href="#" class="text-decoration-underline small text-primary">I forgot my password</a>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
 
const handleLogin = () => {
  router.push({ path: '/', query: { hacked: 'true' } })
}
</script>

<style scoped>
.auth-page-wrapper {
    background-color: #00314f;
    font-family: Arial, Helvetica, sans-serif;
}

.auth-title {
    font-weight: 400;
    line-height: 1.3;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
}

.auth-card {
    width: 100%;
    max-width: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Form Labels */
.form-label {
    font-size: 0.85rem;
}

/* Input Fields (Slightly blue-grey background) */
.auth-input {
    background-color: #f4f7f9;
    border-color: #ced4da;
}

.auth-input:focus {
    background-color: #ffffff;
    box-shadow: none;
    border-color: #86b7fe;
}

/* Icons box */
.auth-input-icon {
    border-left: none;
    border-color: #ced4da;
    background-color: #e9ecef !important;
    /* Slightly darker gray for the icon box */
}

/* Button Styling */
.btn-signin {
    background-color: #0d6efd;
    border: none;
    padding-top: 7px;
    padding-bottom: 7px;
    font-size: 0.9rem;
}

.btn-signin:hover {
    background-color: #0b5ed7;
}
</style>