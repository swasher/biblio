import { defineStore } from 'pinia'
import router from '../router/index'
import { auth } from '../firebase'
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from 'firebase/auth'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore({
    id: 'storeAuth',
    state: () => {
        return {
            email: '',
            password: '',
        }
    },
    getters: {

    },
    actions: {
        async register(){
            try {
                const user = await createUserWithEmailAndPassword(auth, this.email, this.password);
                if (user) {
                    router.replace({name:'home'})
                }
            } catch (error) {
                console.log(error)
            }
        },
        async login(){
            try {
                const res=await signInWithEmailAndPassword(auth, this.email, this.password)
                console.log(this.email)
                console.log(this.password)
                if (res) {
                    router.replace({name: 'home'})
                }
            } catch (error) {
                console.log(error)
            }
        },
        async logout(){
            await signOut(auth)
            router.replace({name: 'login'})
            this.email = ''
            this.password = ''
        }
    }
})