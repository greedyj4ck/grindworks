<template>
  <q-item v-if="type == 'link'" clickable :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon
        class="navitem-icon"
        :name="'img:/src/assets/icons/' + icon + '.svg'"
      />
    </q-item-section>

    <q-tooltip
      class="navitem-tooltip"
      anchor="center right"
      self="center left"
      :offset="[25, 0]"
    >
      <div class="navitem-title">{{ title }}</div>
      <div class="navitem-caption">{{ caption }}</div>
    </q-tooltip>
  </q-item>
  <q-separator v-else />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "navItem",
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
