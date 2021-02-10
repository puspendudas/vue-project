<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div class="w-full">
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Intro to CSS</td>
                  <td>Adam</td>
                  <td>858</td>
                </tr>
                <tr class="bg-emerald-200">
                  <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                  <td>Adam</td>
                  <td>112</td>
                </tr>
                <tr>
                  <td>Intro to JavaScript</td>
                  <td>Chris</td>
                  <td>1,280</td>
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