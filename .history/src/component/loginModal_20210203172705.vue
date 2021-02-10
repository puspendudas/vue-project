<template>
<section @click="close()" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
<div class="absolute inset-0">
    <div class="flex h-full">
        <div class="z-20 m-auto bg-white p-2 rounded shadow">
            <div class="p-2 border rounded">
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
        </div>
    </div>
</div>
  <mdb-container>
    <mdb-btn rounded color="default" @click.native="cascading = true">launch cascading register / login modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal :show="cascading" @close="cascading = false" cascade tabs>
      <mdb-tab tabs justify class="light-blue darken-3">
        <mdb-tab-item :active="tabs==1" @click.native.prevent="tabs = 1"><mdb-icon icon="user" class="mr-1"/>Login</mdb-tab-item>
        <mdb-tab-item :active="tabs==2" @click.native.prevent="tabs = 2"><mdb-icon icon="user-plus" class="mr-1"/>Register</mdb-tab-item>
      </mdb-tab>
      <mdb-modal-body class="mx-3" v-if="tabs==1">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
        <div class="mt-2 text-center">
          <mdb-btn color="info">Log in <mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer center v-if="tabs==1">
        <div class="options text-center text-md-right mt-1">
          <p>Not a member? <a href="#" @click="tabs=2">Sign Up</a></p>
          <p>Forgot <a href="#">Password?</a></p>
        </div>
        <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
      </mdb-modal-footer>
      <mdb-modal-body class="mx-3" v-if="tabs==2">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password" class="mb-5"/>
        <mdb-input label="Repeat password" icon="lock" type="password"/>
        <div class="mt-2 text-center">
          <mdb-btn color="info">Sign Up<mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer center v-if="tabs==2">
        <div class="options text-center text-md-right mt-1">
          <p>Already have an account? <a href="#" @click="tabs=1">Log in</a></p>
        </div>
        <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
import GoogleLogin from "./Login/GoogleLogin";
import firebase from "../utilities/firebase";
import { mdbContainer, mdbBtn, mdbModal, mdbTab, mdbTabItem, mdbModalBody, mdbInput, mdbModalFooter, mdbModalTitle, mdbIcon } from 'mdbvue';
export default {
    components:{GoogleLogin ,mdbContainer, mdbBtn, mdbModal, mdbTab, mdbTabItem, mdbModalBody,mdbInput,mdbModalFooter,mdbIcon,mdbModalTitle,mdbModalTitle},
    methods: {
        loginSubmit() {
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((res) => {
                console.log(res);
                this.close();
            }).catch((e) => {
                console.log(e);
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
                cascading: false,
                tabs: 1
        };
    }
}
</script>

<style>

</style>