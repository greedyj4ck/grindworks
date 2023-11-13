<template>
  <q-bar class="q-electron-drag deg-window-bar">
    <img
      src="../../assets/windowComponents/app-logo.svg"
      height="25"
      class="windowbar-logo"
    />
    <q-space />
    <q-btn @click="minimize()" class="minimize-btn" />
    <q-btn @click="toggleMaximize()" class="maximize-btn" />
    <q-btn @click="closeAppConfirm = true" class="close-btn" />
  </q-bar>

  <q-dialog v-model="closeAppConfirm" persistent transition-show="scale">
    <q-card flat bordered class="q-card-glass">
      <q-card-section class="row items-center">
        <span class="q-ml-sm"
          >You are currently not connected to any network.</span
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          outline
          class="btn-glass"
          label="Cancel"
          color="primary"
          v-close-popup
        />
        <q-btn
          outline
          class="btn-glass"
          label="Exit"
          color="secondary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "windowBar",

  setup() {
    const $q = useQuasar();

    const closeAppConfirm = ref(false);

    function minimize() {
      if (process.env.MODE === "electron") {
        window.wAPI.minimize();
      }
    }

    function toggleMaximize() {
      if (process.env.MODE === "electron") {
        window.wAPI.toggleMaximize();
      }
    }

    function closeApp() {
      if (process.env.MODE === "electron") {
        window.wAPI.close();
      }
    }

    return { minimize, toggleMaximize, closeAppConfirm };
  },
});
</script>
