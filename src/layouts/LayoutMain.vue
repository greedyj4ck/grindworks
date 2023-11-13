<!-- MAIN LAYOUT FOR APPLICATION -->

<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="deg-header-main">
      <WindowBar />
    </q-header>

    <!-- <fsLoader /> -->
    <q-drawer
      class="tool-drawer"
      :mini="true"
      :mini-width="80"
      side="left"
      v-model="toolDrawerOpen"
      :overlay="true"
      :persistent="true"
      behavior="desktop"
    >
      <navItem
        class="tool-drawer-navitem"
        v-for="navitem in UIStore.toolDrawer.items"
        v-bind="navitem"
        :key="navitem.title"
      />
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="desktop"
      elevated
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-scroll-area style="height: 100vh">
        <router-view />
      </q-scroll-area>
    </q-page-container>

    <!--   <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script>
// Node libraries imports
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

// Store definitions

import { useUIStore } from "src/stores/ui-store";

// Components definitions
import WindowBar from "src/components/window/windowBar.vue";
import navItem from "src/components/navigation/navItem.vue";
import fsLoader from "src/components/window/fsLoader.vue";

export default defineComponent({
  name: "LayoutMain",

  components: {
    WindowBar,
    navItem,
    //fsLoader,
  },

  setup() {
    // Setup dark mode (for dev for now)
    const $q = useQuasar();
    const UIStore = useUIStore();

    $q.dark.set(true);

    // Drawers  visibility control
    const toolDrawerOpen = ref(true);
    const rightDrawerOpen = ref(false);

    const dashBoardDefaultLinks = [
      {
        type: "link",
        title: "Dashboard",
        caption: "App center",
        link: "/",
        icon: "grindworks",
      },
      {
        type: "link",
        title: "New Character",
        caption: "Bring a new life to this wretched world",
        link: "/creator",
        icon: "plus",
      },
      {
        type: "separator",
        title: "",
        caption: "",
        link: "/",
        icon: "",
      },
      {
        type: "link",
        title: "Settings",
        caption: "Change profile and app options",
        link: "/settings",
        icon: "settings",
      },
    ];

    UIStore.toolDrawer.items = dashBoardDefaultLinks;

    return {
      UIStore,
      toolDrawerOpen,

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
