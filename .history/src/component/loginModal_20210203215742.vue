<template>
<section @click="close()" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
<div class="absolute inset-0">
    <div class="flex h-full">
        <div class="z-20 m-auto bg-white p-2 rounded shadow">
            <div class="p-2 border rounded">
                
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