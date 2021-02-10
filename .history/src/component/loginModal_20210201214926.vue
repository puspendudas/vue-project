<template>
<section @click="$emit('close-modal')" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
<div class="absolute inset-0">
    <div class="flex h-full">
        <div class="z-20 m-auto bg-white p-2 rounded shadow">
            <div>
                <h1 class="text-2xl">Login</h1>
                <form>
                    <div class="mx-2 my-2 p-2">
                        <label>Username</label>
                        <input class="rounder shadow p-2 w-full" type="text"/>
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