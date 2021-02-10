<template>
<section @click="close()" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
<div class="absolute inset-0">
    <div class="flex h-full">
        <div class="z-20 m-auto bg-white p-2 rounded shadow">
            <div class="p-2 border rounded">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="panel panel-login">
                            <div class="w-full flex">
                                <div class="grid grid-cols-2 gap-4 text-center">
                                    <div class="">
                                        <a @click="isLoginShow=true" href="javascript:;" class="text-lg">Login</a>
                                    </div>
                                    <div class="">
                                        <a @click="isLoginShow=false" href="javascript:;" class="text-lg">Register</a>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div v-if="isLoginShow">
                                            <h1 class="text-2xl text-center">Login</h1>
                                            <form class="m-2" @submit.prevent="loginSubmit">
                                                <div >
                                                    <label>Username<span class="text-red-600">*</span></label>
                                                    <input ref="emailRef" class="rounded border p-2 w-full" v-model="email" type="text" placeholder="Enter UserName"/>
                                                </div>
                                                <div >
                                                    <label>Password<span class="text-red-600">*</span></label>
                                                    <input class="rounded border p-2 w-full" v-model="password" type="password" placeholder="Enter Password"/>
                                                </div>
                                                <div class="my-2 p-2">
                                                    <button type="submit" class="w-full p-2 rounded bg-gradient-to-l from-blue-500 to-blue-700 text-white">Login</button>
                                                </div>
                                            </form>
                                            <GoogleLogin @close-modal-from-google="close" />
                                        </div>
                                        <div v-if="!isLoginShow">
                                            <h1 class="text-2xl text-center">SignUp</h1>
                                            <form class="m-2" @submit.prevent="SignupSubmit">
                                                <div >
                                                    <label>Username<span class="text-red-600">*</span></label>
                                                    <input class="rounded border p-2 w-full" v-model="email" type="text" placeholder="Enter UserName"/>
                                                </div>
                                                <div >
                                                    <label>Password<span class="text-red-600">*</span></label>
                                                    <input class="rounded border p-2 w-full" v-model="password" type="password" placeholder="Enter Password"/>
                                                </div>
                                                <div class="my-2 p-2">
                                                    <button type="submit" class="w-full p-2 rounded bg-gradient-to-l from-blue-500 to-blue-700 text-white">Sign Up</button>
                                                </div>
                                            </form>
                                            <GoogleLogin @close-modal-from-google="close" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import GoogleLogin from "./Login/GoogleLogin";
import firebase from "../utilities/firebase";
export default {
    components:{GoogleLogin},
    methods: {
        loginSubmit() {
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((res) => {
                console.log(res);
                this.close();
            }).catch((e) => {
                console.log(e);
            });
        },
        SignupSubmit() {
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((userCredential) => {
                console.log(userCredential);
                this.close();
            }).catch((error) => {
                console.log(error);
            });
        },
        close() {
            this.$emit('close-modal');
        }
    },
    mounted() {
        this.$refs.emailRef.focus();
    },
    data() {
        return {
                email: "",
                password: "",
                
                isLoginShow: true
        };
    }
}
</script>

<style>

</style>