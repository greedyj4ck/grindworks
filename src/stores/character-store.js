import { defineStore } from "pinia";

export const useCharacterStore = defineStore("characterStore", {
  state: () => ({
    uuid: "",
    schemaVersion: 0.1,
    currentState: "",
    customMode: false,
    points: {
      attributes: {
        start: 10,
        limit: 10,
        rules: [],
      },
      skills: {
        start: 28,
        limit: 28,
        rules: [],
      },
      background: {
        start: 4,
        used: 0,
      },
    },
    general: {
      name: "",
      age: "",
      sex: "",
      weight: "",
      height: "",
      money: "",
    },
    attributes: {
      body: {
        value: 1,
        min: 1,
        max: 3,
        skills: [
          {
            skill: "athletics",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "brawl",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "force",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "melee",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "stamina",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "toughness",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
        ],
        rules: [],
      },
      agility: {
        value: 1,
        min: 1,
        max: 3,
        skills: [
          {
            skill: "crafting",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "dexterity",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "navigation",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "mobility",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "projectiles",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "stealth",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
        ],
        rules: [],
      },
      charisma: {
        value: 1,
        min: 1,
        max: 3,
        skills: [
          {
            skill: "arts",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "conduct",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "expression",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "leadership",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "negotiation",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "seduction",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
        ],
        rules: [],
      },
      intellect: {
        value: 1,
        min: 1,
        max: 3,
        skills: [
          {
            skill: "artifact lore",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "engineering",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "focus",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "legends",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "medicine",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "science",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
        ],
        rules: [],
      },
      psyche: {
        value: 1,
        min: 1,
        max: 3,
        skills: [
          {
            skill: "cunning",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "deception",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "domination",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "faith",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "reaction",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "willpower",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
        ],
        rules: [],
      },
      instinct: {
        value: 1,
        min: 1,
        max: 3,
        skills: [
          {
            skill: "empathy",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "orienteering",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "perception",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "primal",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "survival",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
          {
            skill: "taming",
            value: 0,
            min: 0,
            max: 2,
            rules: [],
          },
        ],
        rules: [],
      },
    },
  }),
  getters: {
    countPoints(state) {
      let attrSum = 0;
      let skillSum = 0;

      for (const attribute in state.attributes) {
        attrSum +=
          state.attributes[attribute].value - state.attributes[attribute].min;

        state.attributes[attribute].skills.map((skill) => {
          skillSum += skill.value;
        });
      }
      return { attributePoints: attrSum, skillPoints: skillSum };
    },
  },
  actions: {
    setAttributeValue(attribute, newValue) {
      let currentValue = attribute.value;
      if (
        newValue - currentValue >
        this.points.attributes.limit - this.countAttributePoints
      ) {
      } else {
      }
    },
  },
});
