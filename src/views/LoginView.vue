<template>
  <h1>Login to Your Account</h1>
<!--  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click.prevent="handleLogin">Submit</button></p>-->

  <el-form
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px; align-content: center"
  >
    <el-form-item label="Email">
      <el-input v-model="email" placeholder="Email" type="text"/>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="password" placeholder="Password" type="password"/>
    </el-form-item>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><el-button @click.prevent="handleLogin">Submit</el-button></p>
  </el-form>

</template>

<script setup>
import { ref } from 'vue'
// import { firebaseApp } from '../firebase'
import { auth } from '../firebase'
import { useRouter } from 'vue-router' // import router
import { useAuthStore } from '../stores/useAuthStore'

const store = useAuthStore()
const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router

const handleLogin = async () => {
  store.login()
}

</script>
