<template>
  <div class="min-h-screen w-full flex items-center justify-center">
    <!-- Login Card -->
    <div class="w-full max-w-xs bg-white rounded-2xl shadow-sm p-8">
      <!-- Title -->
      <h1 class="text-3xl font-semibold text-center text-gray-900 mb-8">
        Sign in
      </h1>

      <!-- Form -->
      <div class="space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="Email or Username"
          class="w-full rounded-lg border border-gray-300
                 px-4 py-2 text-sm text-gray-900
                 placeholder-gray-400
                 focus:outline-none
                 focus:ring-2 focus:ring-gray-900/20"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full rounded-lg border border-gray-300
                 px-4 py-2 text-sm text-gray-900
                 placeholder-gray-400
                 focus:outline-none
                 focus:ring-2 focus:ring-gray-900/20"
        />
      </div>

      <!-- Login Button -->
      <button
        @click="login"
        class="mt-6 w-full rounded-lg
               bg-gray-900 text-white
               py-2 font-medium
               hover:bg-gray-800
               transition"
      >
        Login
      </button>

      <!-- Links -->
      <div class="mt-6 flex justify-between text-sm">
        <button
          @click="goSignup"
          class="text-gray-600 hover:text-gray-900 transition"
        >
          회원가입
        </button>

        <button
          @click="goFindPassword"
          class="text-gray-600 hover:text-gray-900 transition"
        >
          비밀번호 찾기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')

const login = () => {
  // 임시 로그인 (UX 흐름 확인용)
  router.push('/dashboard')
}

const goSignup = () => {
  router.push('/signup')
}

const goFindPassword = () => {
  router.push('/forgot-password')
}
</script>
