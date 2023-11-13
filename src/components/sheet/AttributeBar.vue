<script setup>
import { computed } from "vue";
import { useDataStore } from "src/stores/data-store";
import { useCharacterStore } from "src/stores/character-store";

const DStore = useDataStore();
const CStore = useCharacterStore();

const props = defineProps(["attribute", "label"]);
const attribute = computed(() => props.attribute);
const tooltipData = DStore.getTooltipData(props.label);
</script>
<template>
  <div class="row fit justify-between attribute-bar">
    <q-tooltip :delay="1000" :hide-delay="500" class="tooltip-attr">
      <div class="label">{{ tooltipData.label }}</div>
      <div class="desc">
        {{ tooltipData.description }}
      </div>
    </q-tooltip>
    <div class="label">{{ label }}</div>
    <div class="bar">
      <div
        v-for="square in [1, 2, 3, 4, 5, 6]"
        :key="square"
        class="square"
        :class="[
          square <= attribute.value ? 'filled' : 'empty',
          square > attribute.max ? 'limited' : '',
        ]"
        @click="
          () => {
            if (Csto)
              if (square <= attribute.max && square >= attribute.min) {
                attribute.value = square;
              }
          }
        "
      ></div>
    </div>
  </div>
</template>
