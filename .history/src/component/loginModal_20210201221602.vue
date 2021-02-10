<template>
<section @click="$emit('close-modal')" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
<div class="absolute inset-0">
    <div class="flex h-full">
        <div class="z-20 m-auto bg-white p-2 rounded shadow">
            <div class="p-2 border rounded">
                <h1 class="text-2xl text-center">Login</h1>
                <form class="m-2" @submit.prevent="loginSubmit">
                    <div >
                        <label>Username<span class="text-red-600">*</span></label>
                        <input class="rounded border p-2 w-full" v-model="" type="text" placeholder="Enter UserName"/>
                    </div>
                    <div >
                        <label>Password<span class="text-red-600">*</span></label>
                        <input class="rounded border p-2 w-full" type="password" placeholder="Enter Password"/>
                    </div>
                    <div class="my-2 p-2">
                        <button type="submit" class="w-full p-2 rounded bg-gradient-to-l from-blue-500 to-blue-700 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        loginSubmit() {
            //Login Submit
        }
    },
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    }
}
</script>

<style>

</style>