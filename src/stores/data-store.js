// Main store used for Degenesis data and custom items

import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    dataVersion: 0.1,
    tooltips: [
      {
        string: "body",
        label: "Body",
        description: `Body stands for physical force, tenacity, and stamina.
        People with a high Body Attribute go down slower and get back up again faster.
        They terrify their enemies through their physical presence.
        Those who keep fit have shoulders that can carry a larger burden.
        This Attribute allows them to survive longer, resist pain, and use their body as a weapon.`,
      },
      {
        string: "agility",
        label: "Agility",
        description: `Strength without control means nothing. People with
        high Agility are more nimble and can dodge dangers,
        manipulate complex mechanisms, and kill their enemies
        with firearms over long distances—perhaps with a rifle of
        their own design, with a filed down barrel and an optimised
        mechanism.`,
      },
      {
        string: "charisma",
        label: "Charisma",
        description: `People with Charisma impress through their authentic
        presence. They don’t have to pretend to be liked or adored.
        Others follow them out of conviction and with devotion.
        Charisma opens up doors to the world: diplomacy,
        negotiation, and unity require people with Charisma who
        stand out from the crowd and are able leaders.`,
      },
      {
        string: "intellect",
        label: "Intellect",
        description: `A trained and keen Intellect enables abstract thinking and
        deep concentration. Both are essential to understanding and using technology or science.
        A clever thinker can quickly absorb and remember knowledge from various sources.
        Intellect means planning and foresight, considerate action, and an intuitive sense of consequence.`,
      },
      {
        string: "psyche",
        label: "Psyche",
        description: `Psyche is the fire that keeps our inner engine hot and
        burning, that fuels our will and faith. Psyche is mental
        strength, Intellect’s unloved sister. It fuels lies and
        deception, intimidation and mental superiority. With the
        Psyche’s power one can resist the Primer’s influence and
        go beyond the limits of their own abilities.`,
      },
      {
        string: "instinct",
        label: "Instinct",
        description: `Instinct has helped us to survive when neither language
        nor rules were available and we had to stick together
        anyway. Instinct guides our rudimentary reactions to
        outside influences, unleashes the beast within us. In a
        world without any measure, Instinct guarantees survival.`,
      },
      {
        string: "athletics",
        label: "Athletics",
        description: `Climbing, running, jumping and swimming: Athletics in its simplest form means forging ahead without any elegance, but efficiently. When the human machine works, you leap barriers and cover good distances.
        Apocalyptics quickly ﬂee across rooftops by using Athletics, and a Scrapper uses it to vault across a chasm to reach the artifact he desires.
        The athlete adapts to his environment, uses the wisdom of his body to master any path and escapes quickly under duress.`,
        action: `Running; climbing; jumping; swimming; over-coming obstacles; covering distances`,
        reaction: `Gauging time/distance relation; regaining balance; escaping from dangerous situations`,
        combination: `>BOD+Stamina: jogging or prolonged swimming`,
      },
      {
        string: "brawl",
        label: "Brawl",
        description: `The fist, the elbow, and the knee are the weapons humans
        are born with. They cannot be stolen, they cannot jam,
        and they are always available. They push down enemies,
        making them gasp for breath, and they break ribs. The
        more trained the fighter, the faster he will get through his
        enemy’s defense to strike his throat or spleen.
        All these unarmed combat techniques are summarized
        under the Brawl Skill.`,
        action: `Boxing; kicking; throwing; pit fighting`,
        reaction: `Escaping a brawl; breaking strangleholds`,
        combination: `>PSY+Reaction: disarm an opponent`,
      },
      {
        string: "force",
        label: "Force",
        description: `The blow is focused energy: the enemy’s skull shatters in a
        compound fracture. Force is pure physical violence. When
        the talk is over, when the anger lashes out, simple hands
        become garrotes breaking a neck, bludgeons splintering
        wood and bashing through shields as if they were old
        sheets of metal. A door is kicked from its hinges, bonds are
        broken with a crack.
        Force is the power behind the Anabaptists’ swords, the
        Judge's hammers, and the Clanners’ clubs.`,
        action: `Bending up sewer grates; breaking chains;
        kicking in doors; showing strength (arm wrestling)`,
        reaction: `Holding someone; pushing against an opposing
        force (arm wrestling or keeping a door closed)`,
        combination: `>PSY+Domination: intimidation by force`,
        specialty: `In many melee attacks, the BOD+Force score
        is used to augment the Damage of a weapon`,
      },
      {
        string: "melee",
        label: "Melee",
        description: `Sword, axe, morning star: humans have always been
        creative when it comes to developing their murder
        implements. The Melee Skill allows a fighter to use
        these weapons precisely and replaces uncoordinated
        bludgeoning and flailing with a series of complex thrusts,
        blows, parries, and feints. The weapon becomes an
        extension of the arm, and the fighter becomes a danger to
        his enemies.
        No combatant can afford to slack off when facing
        someone trained in this Skill.`,
        action: `Using weapons: axe, sword, hammer, club, knife, Splayer, etc.`,
        reaction: `Knowledge about weaknesses and properties
        of various sorts of weapons in combat; gauging the enemy’s
        combat power`,
        combination: `>PSY+Reaction: disarm an opponent`,
      },
      {
        string: "stamina",
        label: "Stamina",
        description: `High Stamina makes strength-sapping Actions possible.
        Gangs of Scourgers run down their enemies. Scrappers
        survive for days without water. A Clan’s Chieftain can dive
        to the bottom of a lake and retrieve strange pearls. After a
        hot meal, the Orgiastic sheds his battlefield illnesses like
        an old skin. A runner without Stamina will not reach his
        goal quickly, but will instead tire and falter.`,
        action: `Tracking; diving; marching for hours`,
        reaction: `Fleeing; holding your breath; overcoming
        illness, poisoning, and weariness; standing guard for
        several nights in a row`,
        combination: `>INS+Survival: hounding; >BOD+Toughness: forced march`,
      },
      {
        string: "toughness",
        label: "Toughness",
        description: `Those who dish out harm must also take it. How long can
        the Scrapper withstand the tundra’s cold? How much pain
        can the Preservist in the Psychokinetic’s comet fire endure
        before falling down and turning to ashes? Toughness is the
        internal armor that deflects the blows and gives the fighter
        time to strike back. He may lose a fight from time to time,
        but he quickly gets up again, licks his wounds, and asks
        for more.`,
        action: `Impressing with pain tolerance`,
        reaction: `Physical regeneration; withstanding pain and
        environmental influences; enduring torture`,
        combination: `>INS+Survival: facing extreme cold or heat`,
        specialty: `Maximum Flesh Wounds = BOD+Toughness x 2`,
      },
    ],
  }),
  getters: {},
  actions: {
    getTooltipData(string) {
      if (string) {
        return this.tooltips.find((e) => e.string == string);
      } else return null;
    },
  },
});
