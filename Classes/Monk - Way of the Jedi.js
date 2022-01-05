/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    
	Effect:     
	Content:	
	Code by:	rayvenwilk
	Date:		2022-01-05 (sheet 13.0.9)
*/
var iFileName = "Monk - Way of the Jedi v2.4[transcribed by rayvenwilk].js";

SourceList["SD:WotJ"] = {
	name: "SpiketailDrake: Way of the Jedi (v2.4)",
	abbreviation: "SD:WotJ",
	group: "Reddit/r/UnearthedArcana",
	url: "https://drive.google.com/file/d/0B1pdYIcfHauweWdfcFZNaVF4Zjg/view"
};

AddSubClass("monk", "way of the jedi", {
	regExpSearch : /^((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))))(?=.*jedi).*$/i,
	subname : "Way of the Jedi",
	fullname : "Jedi Monk",
	source: ["SD:WotJ", 1],
	spellcastingFactor : 3,
	spellcastingList: {
        class : "any",
		spells : ["friends", "guidance", "mage hand", "mending", "message", "minor illusion", "shocking grasp", "true strike", "absorb elements", "animal friendship", "bane", "bless", "catapult", "charm person", "comprehend languages", "command", "cure wounds", "detect magic", "force push", "force repulse", "heroism", "jump", "lightning blast", "sense emotions", "shield", "aid", "blur", "calm emotions", "darkvision", "detect thoughts", "enhance ability", "enthrall", "hold person", "knock", "lesser restoration", "levitate", "locate object", "magic weapon", "saber throw", "see invisibility", "suggestion", "aura of vitality", "beacon of hope", "call lightning", "clairvoyance", "crusader's mantle", "fear", "force blast", "haste", "hypnotic pattern", "lightning bolt", "nondetection", "plant growth", "protection from energy", "revivify", "sending", "tongues", "vampiric touch", "aura of life", "aura of purity", "compulsion", "confusion", "death ward", "dominate beast", "freedom of movement", "hallucinatory terrain", "locate creature"]
	},
	spellcastingKnown: {
		cantrips: [0, 0, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13],
	},
	features: {
		"subclassfeature3": {
			name: "Spellcasting",
			source: ["SD:WotJ", 1],
			minlevel: 3,
			description: "\n   " + "I can cast known Jedi cantrips/spells, using Wisdom as my spellcasting ability",
			additional: ["", "", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known"]
		},
		"subclassfeature3.1": {
			name: "Lightsaber",
			source: ["SD:WotJ", 2],
			minlevel: 3,
			description: desc([
				"With an 30 min ritual, I make an one-handed melee weapon into a lightsaber (max 2)"
			]),
			additional : "Magic weapon retains magic properties",
			eval : "AddWeapon('Lightsaber');",
			removeeval : "RemoveWeapon('Lightsaber');",
			weapons : [false, false, ["lightsaber"]],
			spellcastingBonus : {
				name : "Mage Hand",
				spells : ["mage hand"],
				selection : ["mage hand"],
				atwill : true,
			}
		},
		"subclassfeature6": {
			name: "Window of Opportunity",
			source: ["SD:WotJ", 2],
			minlevel: 6,
			description: desc([
				"When a creature misses me with a ranged attack or I succeed on a Dex save vs. its spell,",
				"it has disadv. on its next save vs. one of my spells, until the end of my next turn"
			]),
			extraname : "Way of the Jedi 11",
			"bladeweaving": {
				name: "Bladeweaving",
				source: ["SD:WotJ", 2],
				description: " [2 ki points]" + desc([
					"As a bonus action after Attack action with my lightsaber, I can cast a spell (time: 1 act.))"
				]),
				action: ["bonus action", " (after Attack action)"]
			}
		},
		"subclassfeature17": {
			name: "Shatterpoint",
			source: ["SD:WotJ", 2],
			minlevel: 17,
			description: desc([
				"As a bonus action, my next attack on a target in 10 ft crits, ignoring resist./immune"
			]),
			usages: 1,
			recovery: "short rest",
			action: ["bonus action", ""]
		}
	}
}),

// Force Spells
SpellsList["force blast"] = {
	name : "Force Blast",
	classes : [],
	source : ["SD:WotJ", 4],
	ritual : false,
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "30-ft cone",
	components : "S",
	duration : "Instantaneous",
	save : "Str",
	description : "5d8+1d8/SL Force dmg, push 20 ft, prone; save halves & not pushed/prone; unsecured obj moved",
	descriptionFull : "A blast of pure Force-energy erupts from your hands. Each creature in a 30-foot cone originating from you must make a Strength saving throw. On a failed save, a creature takes 5d8 force damage and is pushed 20 feet away from you and knocked prone. On a successful save, the creature takes half as much damage and isn't pushed or knocked prone." + "\n   " + "In addition, unsecured objects that are completely within the area of effect are automatically pushed 20 feet away from you by the spell's effect." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
},
SpellsList["force push"] = {
	name : "Force Push",
	classes : [],
	source : ["SD:WotJ", 4],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Str",
	description : "1 creature save or pushed 20 ft away and knocked prone",
	descriptionFull : "You slam a concussive burst of force at one creature within range. The target must make a Strength saving throw. On a failed save, the target is pushed 20 feet away from you and knocked prone. On a successful save, the creature isn't pushed or knocked prone."
},
SpellsList["force repulse"] = {
	name : "Force Repulse",
	classes : [],
	source : ["SD:WotJ", 4],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "15-ft rad",
	components : "S",
	duration : "Instantaneous",
	save : "Str",
	description : "2d8+1d8/SL Force dmg and pushed 10 ft; save halves & not pushed; unsecured obj move 10 ft",
	descriptionFull : "A 15-foot sphere of pure Force-energy pulses outward from you. Each creature in a 15-foot radius around you must make a Strength saving throw. On a failed save, a creature takes 2d8 force damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed." + "\n   " + "In addition, unsecured objects that are completely within the are of effect are automatically pushed 10 feet away from you by the spell's effect." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
},
SpellsList["lightning blast"] = {
	name : "Lightning Blast",
	classes : [],
	source : ["SD:WotJ", 4],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "15 ft cone",
	components : "S",
	duration : "Instantaneous",
	save : "Dex",
	description : "3d6+1d6/SL Lightning dmg; save halves",
	descriptionFull : "Streams of lightning burst forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 lightning damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
},
SpellsList["saber throw"] = {
	name : "Saber Throw",
	classes : [],
	source : ["SD:WotJ", 5],
	ritual : false,
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30-ft line",
	components : "S,M",
	compMaterial : "A lightsaber",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Radiant dmg; save halves",
	descriptionFull : "You toss your lightsaber, sending it spinning through the air in a line 30 feet long and 5 feet wide in a direction you choose before. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 radiant damage on a failed save, or half as much damage on a successful one. The lightsaber then returns back to your hand." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
},

// add lightsaber weapons
WeaponsList["lightsaber"] = {
	name : "Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*lightsaber).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, "fire"],
	range : "Melee",
	description : "Finesse, Versatile (2d6)",
	list : "melee",
	weight : 2,
	monkweapon : true,
	isAlwaysProf : true,
},
WeaponsList["shoto lightsaber"] = {
	name : "Shoto Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*shoto)(?=.*lightsaber).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 8, "fire"],
	range : "Melee",
	description : "Finesse, Light, Versatile (1d10",
	list : "melee",
	weight : 1.5,
	monkweapon : true,
	isAlwaysProf : true,
},
WeaponsList["double-bladed lightsaber"] = {
	name : "Double-bladed Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*double)(?=.*lightsaber).*$/i,
	type : "Martial",
	ablility : 2,
	abilitytodamage : true,
	damage : [1, 8, "fire"],
	range : "Melee",
	description : "Finesse, Two-Handed",
	list : "melee",
	weight : 4,
	monkweapon : true,
	isAlwaysProf : true,
},
WeaponsList["lightsaber pike"] = {
	name : "Lightsaber Pike",
	source : ["HB"],
	regExpSearch : /^(?=.*lightsaber)(?=.*pike).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, "fire"],
	range : "Melee",
	description : "Finesse, Two-Handed, Reach",
	list : "melee",
	weight : 6,
	monkweapon : true,
	isAlwaysProf : true,
}
