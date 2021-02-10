<template>
<section @click="$emit('close-modal')" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
<div class="absolute inset-0">
    <div class="flex h-full">
        <div class="z-20 m-auto bg-white p-2 rounded shadow">
            <div class="p-2 border">
                <h1 class="text-2xl w-full justify-center">Login</h1>
                <form class="p-2 my-4">
                    <div class=" p-2">
                        <label>Username</label>
                        <input class="rounded border p-2 w-full" type="text" placeholder="Enter UserName"/>
                    </div>
                    <div class=" p-2">
                        <label>Password</label>
                        <input class="rounded border p-2 w-full" type="password" placeholder="Enter Password"/>
                    </div>
                    <div class=" p-2">
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
}
</script>

<style>

</style>