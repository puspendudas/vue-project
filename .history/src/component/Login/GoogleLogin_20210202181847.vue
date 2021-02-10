<template>
  <section class="p-2 text-center"><p>-----------------Or-------------------</p></section>
                <section class="p-2">
                    <button @click="google_login" class="w-full p-2 rounded bg-gradient-to-l from-green-500 to-blue-700 text-white">Login With Google</button>
                </section>
</template>

<script>
export default {
    methods: {
        google_login(){
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                console.log(res);
                this.close();
            }).catch((e) => {
                console.log(e);
            });
        }
    }

}
</script>

<style>

</style>