<template>
  <div class="grid">
    <div class="common-layout">
      <el-container>
        <el-header>
          <nav>
            <router-link to="/">Grid</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/upload">Upload</router-link> |
            <router-link to="/login">Login</router-link>

            <span v-if="isLoggedIn">>
              <button @click="signOut">Logout</button></span>
            <span v-else>
              <router-link to="/register"> Register </router-link> |
              <router-link to="/sign-in"> Login </router-link>
            </span>

          </nav>
        </el-header>
      </el-container>

      <router-view/>

    </div>
  </div>


</template>

<script>
import { ref } from 'vue' // used for conditional rendering - del watchEffect
import { firebaseApp } from './firebase'
import { auth } from './firebase'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(true)

// runs after firebase is initialized
auth.onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})


const signOut = () => {
  firebaseApp.auth().signOut()
  router.push('/')
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
