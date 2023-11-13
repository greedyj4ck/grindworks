<template>
  <q-page class="page-creator">
    <div class="row container justify-center">
      <div class="col-10 q-pa-md q-ma-md q-mt-lg text-center">
        <h1>ARCHETYPE</h1>

        <q-card flat class="bg-transparent q-mb-xl">
          <q-card-section class="q-pa-none">
            <div class="fit row justify-between items-center">
              <div class="col">
                <q-input
                  v-model="CStore.general.name"
                  class="q-pa-sm input-creator"
                  outlined
                  square
                  label="Name"
                ></q-input>
                <q-input
                  v-model="CStore.general.weight"
                  class="q-pa-sm input-creator"
                  outlined
                  square
                  label="Weight"
                ></q-input>
              </div>
              <div class="col">
                <q-input
                  v-model="CStore.general.age"
                  class="q-pa-sm input-creator"
                  outlined
                  square
                  label="Age"
                ></q-input>
                <q-input
                  v-model="CStore.general.height"
                  class="q-pa-sm input-creator"
                  outlined
                  square
                  label="Height"
                ></q-input>
              </div>
              <div class="col">
                <q-input
                  v-model="CStore.general.sex"
                  class="q-pa-sm input-creator"
                  outlined
                  square
                  label="Sex"
                ></q-input>
                <q-input
                  v-model="CStore.general.money"
                  class="q-pa-sm input-creator"
                  outlined
                  square
                  label="Money"
                ></q-input>
              </div>
              <div class="col">
                <q-img
                  src="../assets/icons/avatar.svg"
                  spinner-color="white"
                  :ratio="1"
                  style="max-width: 200px"
                  fit
                >
                </q-img>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- CCC -->

        <div class="row q-col-gutter-lg q-mb-xl">
          <div class="col">
            <q-card flat bordered class="card-glass">
              <q-card-section>
                <div class="select-culture text-h6 classic-header">
                  CHOOSE CULTURE
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card flat bordered class="card-glass">
              <q-card-section>
                <div class="select-culture text-h6 classic-header">
                  CHOOSE CONCEPT
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card flat bordered class="card-glass">
              <q-card-section>
                <div class="select-culture text-h6 classic-header">
                  CHOOSE CULT
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- LIMIT BAR -->

        <div clas="row" style="width: 100%">
          <div class="col">
            ATTRIBUTES {{ CStore.countPoints.attributePoints }} /
            {{ CStore.points.attributes.limit }}
          </div>
          <div class="col">
            SKILLS {{ CStore.countPoints.skillPoints }} /
            {{ CStore.points.skills.limit }}
          </div>
        </div>
        <!--STATS -->

        <div class="row q-col-gutter-lg items-start">
          <div class="col-4">
            <AttributeBar :attribute="CStore.attributes.body" label="body" />

            <div class="skills-container">
              <SkillBar
                v-for="skill in CStore.attributes.body.skills"
                v-bind:key="skill.skill"
                :skill="skill"
              />
            </div>
          </div>
          <div class="col-4">
            <AttributeBar
              :attribute="CStore.attributes.agility"
              label="agility"
            />
            <div class="skills-container">
              <SkillBar
                v-for="skill in CStore.attributes.agility.skills"
                v-bind:key="skill.skill"
                :skill="skill"
              />
            </div>
          </div>
          <div class="col-4">
            <AttributeBar
              :attribute="CStore.attributes.charisma"
              label="charisma"
            />
            <div class="skills-container">
              <SkillBar
                v-for="skill in CStore.attributes.charisma.skills"
                v-bind:key="skill.skill"
                :skill="skill"
              />
            </div>
          </div>

          <div class="col-4">
            <AttributeBar
              :attribute="CStore.attributes.intellect"
              label="intellect"
            />
            <div class="skills-container">
              <SkillBar
                v-for="skill in CStore.attributes.intellect.skills"
                v-bind:key="skill.skill"
                :skill="skill"
              />
            </div>
          </div>
          <div class="col-4">
            <AttributeBar
              :attribute="CStore.attributes.psyche"
              label="psyche"
            />
            <div class="skills-container">
              <SkillBar
                v-for="skill in CStore.attributes.psyche.skills"
                v-bind:key="skill.skill"
                :skill="skill"
              />
            </div>
          </div>
          <div class="col-4">
            <AttributeBar
              :attribute="CStore.attributes.instinct"
              label="instinct"
            />
            <div class="skills-container">
              <SkillBar
                v-for="skill in CStore.attributes.instinct.skills"
                v-bind:key="skill.skill"
                :skill="skill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useCharacterStore } from "src/stores/character-store";
import AttributeBar from "src/components/sheet/AttributeBar.vue";
import SkillBar from "src/components/sheet/SkillBar.vue";

export default defineComponent({
  name: "PageCreator",
  components: { AttributeBar, SkillBar },

  setup() {
    const CStore = useCharacterStore();
    return { CStore };
  },
});
</script>
