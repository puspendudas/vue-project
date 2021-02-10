<template>
    <foot class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 text-xl ">
      EduInCS Technologies @ {{ year }}
    </foot>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear,
        }
    }

}
</script>

<style>

</style>