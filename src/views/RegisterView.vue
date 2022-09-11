<template>
  <h1>Register New Account</h1>
  <p><input type="text" placeholder="Email" v-model="store.email" /></p>
  <p><input type="password" placeholder="Password" v-model="store.password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click.prevent="handleRegister">Submit</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { firebaseApp } from '../firebase'
import { auth } from '../firebase'
import { useRouter } from 'vue-router' // import router
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthStore } from '../stores/useAuthStore'

const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const store = useAuthStore()
const handleSubmit=async()=>{
  store.signup()
}

const handleRegister = async () => {
  store.register()
}

// const signUp = async () => { // we also renamed this method
//   try {
//     const user = await createUserWithEmailAndPassword(auth, email.value, password.value)
//   } catch (error) { console.log(error)}
// }
</script>
