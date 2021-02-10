<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div class="w-full">
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img v-if="store.authUser.photoURL" :src="User.photoURL"  width="40" height="40" class="lazy mx2 rounded"/></td>
                  <td>Adam</td>
                  <td>858</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import {useStore} from "vuex";
export default {
  setup(){
    const store = useStore();
    const User = computed(() => store.state.authUser);

    return {User}
  }
}
</script>

<style>

</style>