<template>
  <div class="common-layout">
    <el-container>
      <el-header>

        <el-menu
            :default-active="activeIndex"
            class="el-menu"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link to="/">Grid</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/about">About</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/upload">Upload</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <span v-if="isLoggedIn">>
                <button @click.prevent="handleLogout">Logout</button></span>
            <span v-else>
                <router-link to="/register"> Register </router-link> |
                <router-link to="/login"> Login </router-link>
            </span>
          </el-menu-item>
        </el-menu>
      </el-header>



      <el-container>
        <el-aside width="200px">



          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>



        </el-aside>
        <el-main>
          MAIN
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>


</template>


<script setup>
import { ref } from 'vue' // used for conditional rendering - del watchEffect
// import { firebaseApp } from './firebase'
import { auth } from './firebase'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/useAuthStore'

const router = useRouter()
const isLoggedIn = ref(true)
const store = useAuthStore()


const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

// runs after firebase is initialized
auth.onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})

const handleLogout = () => {
  store.logout()
}

</script>


<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.element-plus-logo {
  width: 50%;
}
</style>
