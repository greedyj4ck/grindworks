<script setup>
import { computed } from "vue";
import { useDataStore } from "src/stores/data-store";

const DStore = useDataStore();

const props = defineProps(["skill"]);
const skill = computed(() => props.skill);
const tooltipData = DStore.getTooltipData(props.skill.skill);
</script>
<template>
  <div class="row justify-between skill-bar">
    <q-tooltip :delay="1500" :hide-delay="500" class="tooltip-skill">
      <div class="label">{{ tooltipData.label }}</div>
      <div class="desc">
        {{ tooltipData.description }}
      </div>

      <div class="section-label">ACTION</div>
      <div class="section-value">{{ tooltipData.action }}</div>

      <div class="section-label">REACTION</div>
      <div class="section-value">{{ tooltipData.reaction }}</div>

      <div class="section-label">COMBINATION</div>
      <div class="section-value">{{ tooltipData.combination }}</div>

      <div v-if="tooltipData.specialty" class="section-label">SPECIALTY</div>
      <div v-if="tooltipData.specialty" class="section-value">
        {{ tooltipData.specialty }}
      </div>
    </q-tooltip>
    <div class="label">{{ skill.skill }}</div>
    <div class="bar">
      <div
        v-for="square in [1, 2, 3, 4, 5, 6]"
        :key="square"
        class="square"
        :class="[
          square <= skill.value ? 'filled' : 'empty',
          square > skill.max ? 'limited' : '',
        ]"
        @click="
          () => {
            if (square == 1 && skill.value == 1) {
              skill.value = 0;
              return;
            }
            if (square <= skill.max && square >= skill.min)
              skill.value = square;
            return;
          }
        "
      ></div>
    </div>
  </div>
</template>
