<template>
  <div class="fs-loader flex flex-center">
    <XyzTransition>
      <img
        v-if="true"
        xyz="ease-in-out fade duration-10 iterate-infinite
      direction-alternate"
        draggable="false"
        src="../../assets/icons/fromHell/marauders.svg"
        class="fs-loader-icon"
    /></XyzTransition>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "fsLoader",
});
</script>
