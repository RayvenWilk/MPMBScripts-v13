var iFileName = "Doctor.js";
RequiredSheetVersion(13);
/*
Doctor class by IIEarlGreyII
*/

SourceList["Doctor"] = {
  name: "Doctor",
  abbreviation: "Doctor",
  group: "Reddit/r/UnearthedArcana",
  url: "https://imgur.com/a/7Ba5MLS",
  defaultExcluded : true
};

ClassList["doctor"] = {
  name: "Doctor",
  regExpSearch: /doctor/i,
  source: ["Doctor", 0],
  primaryAbility: "Intelligence and Dexterity",
  prereqs: "Intelligence 13 or Dexterity 13",
  die: 8,
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  saves: ["Int", "Con"],
  skillstxt: {
    primary:
      "Medicine and choose two from History, Insight, Investigation, Perception, Sleight of Hand",
    secondary: "Medicine",
  },
  toolProfs: {
    primary: ["Alchemist's supplies", "Herbalism kit"],
    secondary: ["Alchemist's supplies", "Herbalism kit"],
  },
  armorProfs: {
    primary: [true, true, false, false],
    secondary: [true, true, false, false],
  },
  weaponProfs: {
    primary: [true, false, ["hand crossbow"]],
    secondary: [true, false, ["hand crossbow"]],
  },
  equipment:
    "Doctor starting equipment:\n \u2022 two simple weapons;\n \u2022 a hand crossbow and 20 bolts;\n \u2022 (a) scholar's pack or (b) a diplomat's pack;\n \u2022 (a) leather armor or (b) hide armor.\n\n",
  subclasses: ["Doctor Professions", []],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  features: {
    oath: {
      name: "Oath",
      source: [["Doctor", 2]],
      minlevel: 1,
      description: desc([
        "When you completed your medical training, you adopted an oath to solidify your resolve towards the healing arts.",
        "At 1st level choose one of the following options.",
      ]),
      choices: [
        "To Do No Harm",
        "For the Greater Good",
        "The Natural Way is the Only Way",
      ],
      "to do no harm": {
        name: "To Do No Harm",
        source: [["Doctor", 2]],
        description: desc([
          "The doctor heals for the maximum amount an ability allows as long as they have not harmed a living creature that day.",
        ]),
      },
      "for the greater good": {
        name: "For the Greater Good",
        source: [["Doctor", 2]],
        description: desc([
          "The doctor gains proficiency in Persuasion and Deception, having learned what to say to stop unnecessary questions.",
        ]),
        skills: ["Persuasion", "Deception"],
      },
      "the natural way is the only way": {
        name: "The Natural Way is the Only Way",
        source: [["Doctor", 2]],
        description: desc([
          "The doctor gains proficiency in Nature and Survival, preferring to utilize natural ingredients and treatments.",
        ]),
        skills: ["Nature", "Survival"],
      },
    },
    "medical training": {
      name: "Medical Training",
      source: [["Doctor", 3]],
      minlevel: 1,
      description: desc([
        "Due to your meticulous study into the healing arts you can use your Intelligence modifier instead of your Wisdom modifier for Medicine checks.",
        "In addition your proficiency bonus is doubled for any Medicine checks that you make",
      ]),
      skills: [["Medicine", "full"]],
      addMod: [
        {
          type: "skill",
          field: "Medicine",
          mod: "max(Int-Wis|0)",
          text:
            "Due to your meticulous study into the healing arts you can use your Intelligence modifier instead of your Wisdom modifier for Medicine checks.",
        },
      ],
    },
    "doctor's bag": {
      name: "Doctor's Bag",
      source: [["Doctor", 3]],
      minlevel: 1,
      description: desc([
        "Beginning at 1st level you gain access to a number of special supplies due to your medical training.",
        "These supplies include things like bandages, syringes, medicinal powders, and healing salves.",
        "You keep these in a storage container of your choice such as a bag, a series of pouches, or even a trunk.",
        "As long as you have access to your Doctor's Bag you may use an action to stabilize a creature that has 0 hit points, without needing to make a Medicine check.",
      ]),
      action: ["action", "Doctor's Bag"],
    },
    "first aid": {
      name: "First Aid",
      source: [["Doctor", 3]],
      minlevel: 1,
      description: desc([
        "Beginning at 1st level you can apply basic first aid to an adjacent creature you can touch.",
        "As a bonus action you heal the target for 1d4 hit points.",
        "This increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
        "You can use this feature a number of times equal to your Intelligence modifier + 1.",
        "You regain any expended uses when you finish a short or long rest.",
      ]),
      additional: levels.map(function (n) {
        return n < 5 ? "1d4" : n < 11 ? "2d4" : n < 17 ? "3d4" : "4d4";
      }),
      usages: "Intelligence modifier +1 per ",
      usagescalc: "event.value = Math.max(0, What('Int Mod')+1);",
      recovery: "short rest",
      action: ["bonus action", ""],
    },
    "second opinion": {
      name: "Second Opinion",
      source: [["Doctor", 3]],
      minlevel: 2,
      description: desc([
        "Once you have reached 2nd level you have become accustomed not only to combat, but to coordinating with other healers.",
        "Whenever an ally within 20ft of you uses a healing ability, spell, or item, you can use your reaction to increase the amount healed to a single target by half, rounded up.",
        "Your ally must be able to see or hear you.",
      ]),
      action: ["reaction", "Second Opinion"],
    },
    subclassfeature3: {
      name: "Doctor Profession",
      source: [["Doctor", 3]],
      minlevel: 3,
      description: desc([
        "At 3rd level, you choose a profession that you focus on: Surgeon, Combat Medic, or Pharmacist.",
        "Each is detailed at the end of the class description.",
        "Your choice grants you features at 3rd level and again at 7th, 11th, 15th, and 18th level.",
      ]),
    },
    "patch up": {
      name: "Patch Up",
      source: [["Doctor", 3]],
      minlevel: 5,
      description: desc([
        "By 5th level you have learned that there is always another fight around the corner, and it's best to be ready for it.",
        "Select up to 6 willing creatures that you can touch.",
        "You spend the next 10 minutes quickly stitching up any open wounds and applying painkillers where needed, whatever it takes to get them to the next battle.",
        "This cures them of any non-magical ailments and restores a number of hit points equal to half of their maximum rounded up.",
        "You can use this feature a number of times equal to your Intelligence modifier divided by two (a minimum of once).",
        "You regain any expended uses when you finish a Long Rest.",
      ]),
      recovery: "long rest",
      usages: "Intelligence modifier divided by two (a minimum of once).",
      usagescalc: "event.value = Math.max(1, What('Int Mod')/2)",
    },
    diagnosis: {
      name: "Diagnosis",
      source: [["Doctor", 3]],
      minlevel: 5,
      description: desc([
        "By 5th level you have learned to treat hostile scenarios as just another day at the office.",
        "As an action you study a living creature and gain vital insight towards its physical state.",
        "You learn one of the targets following statistics:",
        "Damage Vulnerabilities, Damage Resistances, Damage Immunities, Highest Saving Throw, Lowest Saving Throw, or whether or not the creature is below half its health.",
        "You can use this feature a number of times equal to your Intelligence modifier (a minimum of once).",
        "You regain expended uses when you finish a short or long rest.",
      ]),
      recovery: "short rest",
      usages: "Intelligence modifier (a minimum of once).",
      usagescalc: "event.value = Math.max(1, What('Int Mod'))",
      action: ["action", ""],
    },
    paramedic: {
      name: "Paramedic",
      source: [["Doctor", 3]],
      minlevel: 6,
      description: desc([
        "When you have reached 6th level you have become experienced at reaching the injured without taking damage.",
        "When you use your action to disengage you may also double your movement speed until the end of your turn.",
      ]),
      action: ["action", "Disengage (double movement speed till end of turn)"],
    },
    vaccination: {
      name: "Vaccination",
      source: [["Doctor", 3]],
      minlevel: 6,
      description: desc([
        "At 6th level you have spent countless hours attempting to aid those suffering from disease and have developed a number of treatments.",
        "As an action you can cure a target of a single disease afflicting them.",
        "Alternatively, you can inoculate a target against disease for the next 24 hours.",
        "In addition, due to exposure from numerous patients the doctor gains immunity to all disease.",
      ]),
      action: [
        ["action", "Cure Disease"],
        ["action", "Inoculate"],
      ],
      savetxt: { immune: ["disease"] },
    },
    "vitality boost": {
      name: "Vitality Boost",
      source: [["Doctor", 4]],
      minlevel: 9,
      description: desc([
        "By 5th level you have learned to treat hostile scenarios as just another day at the office.",
        "As an action you study a living creature and gain vital insight towards its physical state.",
        "You learn one of the targets following statistics:",
        "Damage Vulnerabilities, Damage Resistances, Damage Immunities, Highest Saving Throw, Lowest Saving Throw, or whether or not the creature is below half its health.",
        "You can use this feature a number of times equal to your Intelligence modifier (a minimum of once).",
        "You regain expended uses when you finish a short or long rest.",
      ]),
      recovery: "short rest",
      usages: "Intelligence modifier (a minimum of once).",
      usagescalc: "event.value = Math.max(0, What('Int Mod')+1)",
      additional: levels.map(function (n) {
        return n < 15 ? "4d6" : "6d6";
      }),
      action: ["bonus action", ""],
    },
    reanimation: {
      name: "Reanimation",
      source: [["Doctor", 4]],
      minlevel: 10,
      recovery: "short rest",
      description: desc([
        "Once you have reached your 10th level the lines between life and death have started to blur.",
        "You provide life saving aid to a creature that has died within the last 10 minutes and return them to life.",
        "The creature returns to life with 1 hit point.",
        "This procedure can't return to life a creature that has died of old age, nor can it restore any missing body parts.",
        "You cannot use this feature again until you have completed a short or long rest.",
      ]),
    },
    "experienced healer": {
      name: "Experienced Healer",
      source: [["Doctor", 4]],
      minlevel: 13,
      description: desc([
        "Whenever you make a Medicine check you can treat a d20 roll of 9 or lower as a 10.",
      ]),
    },
    sedate: {
      name: "Sedate",
      source: [["Doctor", 4]],
      minlevel: 14,
      description: desc([
        "By 14th level you have managed to create sedatives using standard supplies.",
        "As an action you can inject a willing creature with a sedative that will cause them to go unconscious for 1d4 hours.",
        "You can also attempt to inject an unwilling creature for the same effect.",
        "An unwilling target must be below one quarter of its maximum hit points for this ability to take effect.",
        "They must then succeed a Constitution saving throw or immediately fall unconscious for 1d4 hours.",
      ]),
      action: ["action", "Sedate"],
    },
    "practiced hands": {
      name: "Practiced Hands",
      source: [["Doctor", 4]],
      minlevel: 17,
      description: desc([
        "By 17th level you have performed the same procedures countless times.",
        "Whenever you use a healing ability, item, or other effect that involves a die roll you can add an additional healing die of the same type to the end result, even if the result would otherwise be maximized.",
      ]),
    },
    "experimental procedure": {
      name: "Experimental Procedure",
      source: [["Doctor", 4]],
      minlevel: 20,
      description: desc([
        "At 20th level you recognize that the limitations of the mortal body are simply defects waiting to be corrected.",
        "You target a specific stat; Strength, Dexterity, Constitution, Intelligence, Wisdom, or Charisma and attempt to improve it.",
        "This may involve replacing organs, changing appearance, or altering brain chemistry.",
        "To be successful you must succeed on a DC25 Medicine check or the procedure fails.",
        "On a success the target gains a permanent +1 bonus to the targeted ability score.",
        "You may not attempt this procedure on the same target more than 3 times, regardless of success or failure.",
        "Due to your skills a failure does not inflict any negative effects on the target, but the target receives no benefits.",
        "The procedure takes eight hours from start to finish, and cannot be paused or interrupted.",
        "The targeted creature takes five days to recover, and remains incapacitated.",
      ]),
    },
  },
};

AddSubClass("doctor", "surgeon", {
  regExpSearch: /^(?=.*surgeon).*$/i,
  subname: "Surgeon",
  source: [["Doctor", 5]],
  fullname: "Surgeon",
  features: {
    subclassfeature3: {
      name: "Expert Practice",
      source: [["Doctor", 5]],
      minlevel: 3,
      description: desc([
        "At 3rd level you can now add your intelligence modifier to the result of any healing ability you perform.",
      ]),
    },
    subclassfeature7: {
      name: "Surgery",
      source: [["Doctor", 5]],
      minlevel: 7,
      description: desc([
        "When you reach 7th level you have gained the confidence to delve deeper into the bodies of your patients.",
        "You operate on an injured subject, curing them of any ailments, both mundane and magical.",
        "The target regains a number of hit points equal to their maximum.",
        "Any hit points the target gains over their maximum become temporary hit points.",
        "This takes 2 full hours from start to finish.",
      ]),
    },
    subclassfeature11: {
      name: "Transplant",
      source: [["Doctor", 5]],
      minlevel: 11,
      description: desc([
        "By 11th level you have begun experimenting with new methods to improve life.",
        "You attempt to transplant an organ from one creature to another in order to provide a benefit.",
        "The organ must be from a creature that is either living or has died within the last 24 hours.",
        "Examples of this can be the eyes of a person with darkvision, or the stomach of a creature immune to poison.",
        "You can also replace a limb with one from a similar creature.",
        "This process takes 2 hours from start to finish and takes 2 days to recover from.",
        "To be successful you must pass a Medicine check using the chart below, your DM determines the difficulty of the operation.",
        "Difficulty | DC | Example",
        "Simple | DC15 | Human Leg",
        "Moderate | DC20 | Elf Eyes",
        "Complex | DC25 | Dragon Stomach",
        "Insane | DC30 | Beholder Stalk",
      ]),
    },
    subclassfeature15: {
      name: "Bedside Manner",
      source: [["Doctor", 5]],
      minlevel: 15,
      description: desc([
        "By 15th level you have discovered a number of easy steps to maximize the recovery of an injured individual.",
        "When your party takes a short rest whenever they expend a hit die they automatically recover the maximum it allows.",
      ]),
    },
    subclassfeature18: {
      name: "Servant of Flesh",
      source: [["Doctor", 5]],
      minlevel: 18,
      description: desc([
        "At 18th level you have reached the apex of the medical profession and have found a way to create life rather than just preserve it.",
        "You now have the ability to create a Flesh Golem from the bodies of the recently deceased.",
        "To do this you must operate on a body that has been deceased no longer than 24 hours before the beginning of the procedure.",
        "The operation takes an additional 12 hours that cannot be interrupted, otherwise it fails and the body is destroyed.",
        "The golem appears as a normal living humanoid and requires a perception check DC17 to determine its true nature.",
        "The golem cannot talk but understands you andfollows your instructions.",
        "Due to the amount of time and energy needed to create and maintain golems you can never have more than two at one time.",
        "Ask your DM for the creature’s stats.",
      ]),
    },
  },
});

AddSubClass("doctor", "combat medic", {
  regExpSearch: /^(?=.*combat)(?=.*medic).*$/i,
  subname: "Combat Medic",
  source: [["Doctor", 6]],
  fullname: "Combat Medic",
  features: {
    subclassfeature3: {
      name: "Surgical Strike",
      source: [["Doctor", 6]],
      minlevel: 3,
      description: desc([
        "When you choose this Profession at 3rd level you utilize your knowledge of anatomy when making your attacks.",
        "You now add your Intelligence modifier to your attack rolls in addition to all other bonuses.",
      ]),
      calcChanges: {
        atkCalc: [
          function (fields, v, output) {
            if (!v.isDC) output.extraHit += What("Int Mod");
          },
          "I add my intelligence modifier on the To Hit of all my attack rolls.",
        ],
      },
    },
    subclassfeature7: {
      name: "Extra Attack",
      source: [["Doctor", 6]],
      minlevel: 7,
      description: desc([
        "When you choose this Profession at 3rd level you utilize your knowledge of anatomy when making your attacks.",
        "You now add your Intelligence modifier to your attack rolls in addition to all other bonuses.",
      ]),
      attacks: levels.map(function (n) {
        return n < 7 ? 1 : 2;
      }),
    },

    subclassfeature11: {
      name: "Survival Tactics",
      source: [["Doctor", 6]],
      minlevel: 11,
      description: desc([
        "At 11th level you gain one of the following features.",
      ]),
      choices: ["Mild Mannered", "Frantic Strike", "Flash Flask"],
      "mild mannered": {
        name: "Mild Mannered",
        source: [["Doctor", 6]],
        description: desc([
          "Any creature who targets you with an attack or harmful spell must first make a Wisdom saving throw or choose a new target.",
          "If you make an attack, or deal damage to another creature, this ability ends until your next short or long rest.",
        ]),
      },
      "frantic strike": {
        name: "Frantic Strike",
        source: [["Doctor", 6]],
        description: desc([
          "When surrounded by foes you lash out wildly.",
          "You can use your action to make a basic melee attack roll against any number of creatures within 5 feet of you, with a separate attack roll for each.",
        ]),
        action: ["action", "Frantic Strike"],
      },
      "flash flask": {
        name: "Flash Flask",
        source: [["Doctor", 6]],
        description: desc([
          "As a bonus action you throw a pre-prepared flask to the ground, the volatile mixture exploding in a flash of light.",
          "Any attacks made against you until the start of your next turn are made at disadvantage.",
          "You cannot do this again until your next short or long rest.",
        ]),
        action: ["bonus action", "Flash Flask"],
        recovery: "short rest",
      },
    },

    subclassfeature15: {
      name: "Disable Organ",
      source: [["Doctor", 6]],
      minlevel: 15,
      description: desc([
        "By your 15th level you have begun to recognize the weak points common in many creatures.",
        "You attempt to make a precise strike against an enemy in order to weaken it.",
        "Choose an effect below and make a regular attack roll.",
        "If successful rather than doing damage the target must make a saving throw or suffer your ability’s effect.",
        "This effect lasts until the target is healed.",
        "		Cripple – You target a limb, such as a leg or a wing, in order to inhibit a creature’s movement. On a success the target's speed is reduced by half. DEX save.",
        "		Blind – You target the eye or eyes of a creature in order to visually impair it. Depending on the creature the DM decides how and if it can be blinded. DEX save.",
        "		Disarm – You target an extremity, such as a hand, claw or tentacle. On a success their extremity is disabled, as well as dropping anything they were holding. STR save.",
        "		Disable - You target a unique organ in order to disable a creature’s natural ability, such as its fire breath or poisonous sting. Your DM may determine an ability cannot be disabled in this way. CON save.",
      ]),
    },

    subclassfeature18: {
      name: "Adrenaline Shot",
      source: [["Doctor", 6]],
      minlevel: 18,
      description: desc([
        "Having reached 18th level you have experienced enough battles that the desire to slay your foes overpowers your instincts for self-preservation.",
        "As a bonus action you inject yourself with a concoction of your own creation designed to improve your speed and reflexes.",
        "Your body surges with energy as you benefit from effects identical to that of the Haste spell.",
        "Unlike the spell however this ability lasts for 5 minutes.",
        "These effects are physical rather than magical and cannot be dispelled.",
        "Only your body can benefit from this ability due to your years of experiments.",
        "You may use this feature once per long rest.",
      ]),
    },
  },
});
AddSubClass("doctor", "pharmacist", {
  regExpSearch: /^(?=.*pharmacist).*$/i,
  subname: "Pharmacist",
  source: [["Doctor", 7]],
  fullname: "Pharmacist",
  features: {
    subclassfeature3: {
      name: "Potioneer's Kit",
      source: [["Doctor", 7]],
      minlevel: 3,
      description: desc([
        "When you choose this profession at 3rd level your doctor’s bag has been modified to accommodate your specialization.",
        "It functions as normal, but also replaces the need for Alchemist's Supplies, an Herbalism Kit, or a Poisoner’s Kit.",
      ]),
    },
    subclassfeature31: {
      name: "Routine Brewer",
      source: [["Doctor", 7]],
      minlevel: 3,
      description: desc([
        "By 3rd level you have made crafting healing potions a daily part of your life and it takes considerably less time and effort.",
		"Use the chart below to craft potions.",
		"Potion | Crafting Time | Cost",
		"Antitoxin | 1 Hour | 25gp",
		"Potion of Healing | 2 Hours | 25gp",
		"Potion of Greater Healing | 6 Hours | 125gp",
		"Potion of Superior Healing | 12 Hours | 2,500gp",
		"Potion of Supreme Healing | 24 Hours | 25,000gp"
      ]),
    },
    subclassfeature7: {
      name: "Healing Cloud",
      source: [["Doctor", 7]],
      minlevel: 7,
      description: desc([
        "Once you have reached 7th level you have experimented with enough healing potions to discover a new delivery method.",
		"You have the option to use an action to inject a healing potion with a chemical agent which instantly transforms it into a gas.",
		"Instead of consuming the potion you immediately smash the bottle, releasing a mist.", 
		"You and all living creatures adjacent to you benefit from the potions healing."
	  ]),
	  action: ["action", "Healing Cloud"]
	},
	subclassfeature11: {
		name: "Enhanced Elixir",
		source: [["Doctor", 7]],
		minlevel: 11,
		description: desc([
			"By 11th level after countless hours of work you have found a way to increase the potency of your potions of healing.", 
			"Any potion you create that provides healing now utilize d6’s rather than d4’s."
		])
	},
	subclassfeature15: {
		name: "Refined Replication",
		source: [["Doctor",7]],
		minlevel: 15,
		description: desc([
			"At 15th level you have mastered the art of crafting potions you are familiar with, allowing you to focus more on potions you are unfamiliar with.",
			"You take a potion in your possession and attempt to learn its formula by researching its components.",
			"The rarity of the potion determines the time it takes to study, at the end of which you must make a Medicine check.",
			"On a success you gain the ability to craft that potion, however the original potion is destroyed regardless of your success or failure.",
			"Crafting the potion costs half the potions value in materials and a certain amount of time determined by its rarity, listed below.",
			"Your DM decides the potions value.",
			"Rarity | Difficulty | Crafting Time",
			"Common Potion | DC15 | 2 Hours",
			"Uncommon Potion | DC20 | 6 Hours",
			"Rare Potion | DC25 | 12 Hours",
			"Very Rare Potion | DC30 | 24 Hours",
			"Legendary Potion | DC40 | 48 Hours"
		])
	},
	subclassfeature18: {
		name: "Master Alchemist",
		source: [["Doctor",7]],
		minlevel: 18,
		description: desc([
			"At 18th level you gain one of the following features of your choice.",
			"		Quantity Over Quality. Whenever you would create one potion, you instead create two",
			"		Potent Potables. Potions you craft that involve rolling dice now automatically produce the maximum effect.",
			"		Reliable Replicator. You no longer need to make Medicine checks when creating or replicating potions, you simply succeed."
		])

	}
  },
});