<template>
    <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center px-4 py-2 text-lg positions-fixed">
      EduInCS Technologies @ {{ year }}
    </nav>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        }
    }

}
</script>

<style>

</style>