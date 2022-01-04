/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). 

  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a new Warlock subclass - the World Squirrel Patron. It also includes the creature statblocks for the altered spells/abilities. They are reskinned and modified versions of the Swarm of Rats, Swarm of Rats (Diseased Variant), Cave Badger, and Tyrannosaurus Rex statblocks. When not added automatically, they can be selected on the companions page.
	
	Code by:	Ratatoskr
	Date:		2021-23-7
*/

var iFileName = "World Squirrel Patron.js";
RequiredSheetVersion(13);

// Define the source
SourceList.RHB = {
    name : "Ratatoskr's Homebrew",
    abbreviation : "RHB",
    group : "Homebrew",
    date : "07/23/2021"
};

//Subclass
AddSubClass("warlock", "the world squirrel", {
	regExpSearch : /^(?=.*world)(?=.*squirrel).*$/i,
	subname : "the World Squirrel",
	source : ["RHB", 0],
	spellcastingExtra : ["jump", "animal friendship", "animal messenger", "summon beast", "plant growth", "blink", "dominate beast", "freedom of movement", "tree stride", "awaken"],
	features : {
		"subclassfeature1" : {
			name : "Squirrel Agility",
			source : ["RHB", 0],
			minlevel : 1,
			description : "\n   " + "You gain the speed and agility of a squirrel. Your speed increases by 5 ft now and another 5 ft at level 10. You also gain a climb speed equal to your walking speed.",
			speed : { climb : { spd : "walk", enc : "walk" } }, 
			additional : levels.map(function (n) {
					if (n < 1) return "";
					var spd = "+" + (n < 10 ? 5 : 10) + " ft";
					return spd;
				}),
				changeeval : function (v) {
					var warlSpd = '+' + (v[1] < 1 ? 0 : v[1] < 10 ? 5 : 10);
					SetProf('speed', warlSpd !== '+0', {allModes : warlSpd}, "Warlock: Squirrel Agility");
				}
		},
		"subclassfeature1.1" : {
			name : "Acorn Pocket",
			source : ["RHB", 0],
			minlevel : 1,
			description : "\n   " + "You gain a personal pocket dimension that can hold up to 10 lbs of items." + "\n   " + "Only you can access this extradimensional space and you can stow or retrieve an item as an action.",
			action : ["action", " (stow/retrieve)"],
		},
		"subclassfeature1.2" : {
			name : "Speech of Yggdrasil",
			source : ["RHB", 0],
			minlevel : 1,
			description : "\n   " + "You can cast Speak with Animals at will, but are only able to communicate with tiny mammals.",
			spellcastingBonus : {
				name : "Speech of Yggdrasil",
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : "atwill",
		},
			spellChanges : {
			"speak with animals" : {
				changes : "When casting this spell, you can only speak with tiny mammals.",
				description : "Speak verbally w/ & understand beasts (tiny mammals only) for duration; limited by their intelligence",
				descriptionFull : "You gain the ability to comprehend and verbally communicate with beasts (tiny mammals only) for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion."
				},
			},
		},
		"subclassfeature1.3" : {
			name : "Scurry for One, Scurry for All",
			source : ["RHB", 0],
			minlevel : 1,
			description : "\n   " + "Your patron alters the nature of your magic so that your scurry can move together." + "\n   " + "If you select one of the following spells from your expanded spell list: Jump, Blink, or Freedom of Movement, the spell can affect one additional target for each spell level above the base (up to 5th level). Blink has a range of Touch for the additional targets.",
		spellChanges : {
			"jump" : {
				description : "1 (+1/SL) creature's jump distance is tripled for the duration",
				changes : "My single target movement spells can be upcast to affect more targets."
			},
			"blink" : {
				description : "50% chance on turn to travel to Ethereal Plane; return to empty space w/i 10 ft next turn (+1 target/SL)",
				range : "Touch",
				changes : "My single target movement spells can be upcast to affect more targets, and Blink has a range of touch for me."
			},
			"freedom of movement" : {
				description : "1(+1/SL) willing crea; magic can't reduce speed, paralyze, restrain; use 5 ft to escape mundane restraints",
				changes : "My single target movement spells can be upcast to affect more targets."
			},
				}
		},
		"subclassfeature3.1" : {
			name : "Pact of the World Squirrel",
			source : ["RHB", 0],
			minlevel : 3,
			description : "\n   " + "Your patron grants you additional bonuses based on your chosen pact. Use the Choose Feature button to select this after choosing your pact.",
			extraname : "Pact of the World Squirrel",
			extrachoices : ["A Hard Nut to Crack (prereq: Pact of the Talisman)", "Knowledge of the World Tree (prereq: Pact of the Tome)","Scratch of the Were-Squirrel (prereq: Pact of the Blade)", "The Scurry Calls for Aid (prereq: Pact of the Chain)"],
			extraTimes : levels.map(function (n) { return 1; }),
				"a hard nut to crack (prereq: pact of the talisman)" : {
					name : "A Hard Nut to Crack",
					description : "\n   " + "As an action, the wearer of your talisman can give themselves temporary hit points equal to 3 times your proficiency bonus. They have a +1 bonus to AC while any of these temp hp remain. This ability can be used a number of times equal to your proficiency bonus divided by two (rounded down) per long rest.",
					source : ["RHB", 0],
					usages : "PB/2 per ",
					additional : ["+1 AC, 6 Temp HP", "+1 AC, 6 Temp HP", "+1 AC, 6 Temp HP", "+1 AC, 6 Temp HP", "+1 AC, 9 Temp HP", "+1 AC, 9 Temp HP", "+1 AC, 9 Temp HP", "+1 AC, 9 Temp HP", "+1 AC, 12 Temp HP", "+1 AC, 12 Temp HP", "+1 AC, 12 Temp HP", "+1 AC, 12 Temp HP", "+1 AC, 15 Temp HP", "+1 AC, 15 Temp HP", "+1 AC, 15 Temp HP", "+1 AC, 15 Temp HP", "+1 AC, 18 Temp HP", "+1 AC, 18 Temp HP", "+1 AC, 18 Temp HP", "+1 AC, 18 Temp HP"],
					usagescalc : "event.value = Math.floor(Number(How('Proficiency Bonus'))/2) ;",
					recovery : "long rest",
					action : [["action", ""]],
					prereqeval : function(v) {
						return GetFeatureChoice('class', 'warlock', 'pact boon').indexOf("pact of the talisman") !== -1;
								}
					},
				"knowledge of the world tree (prereq: pact of the tome)" : {
					name : "Knowledge of the World Tree",
					description : "\n   " + "Two spells are added to your Books of Shadows. You can cast Commune with Nature (5th lvl) and Speak with Plants (3rd lvl) as rituals once per long rest each. To cast them again before resting, you must spend a spell slot of the appropriate level (or higher).",
					source : ["RHB", 0],
					usages : "1",
					additional : "for each spell",
					recovery : "long rest",
					spellcastingBonus : [{
						name : "Knowledge of the World Tree",
						spells : ["commune with nature", "speak with plants"],
						selection : ["commune with nature", "speak with plants"],
						firstCol : "oncelr",
						times : 2
					}],
					prereqeval : function(v) {
						return GetFeatureChoice('class', 'warlock', 'pact boon').indexOf("pact of the tome") !== -1;
								}
					},
				"scratch of the were-squirrel (prereq: pact of the blade)" : {
					name : "Scratch of the Were-Squirrel",
					description : "\n   " + "Your hands grow claws that can be used as simple finesse weapons when your hands are free. When used, these claws count as additional pact weapons for you and are eligible for two-weapon fighting. On a hit, the target takes 1d4 + Dex mod slashing damage *or* makes a Constitution save against being poisoned (your spell DC) until the end of your next turn.",
					source : ["RHB", 0],
					prereqeval : function(v) {
						return GetFeatureChoice('class', 'warlock', 'pact boon').indexOf("pact of the blade") !== -1;
								},
					weaponsAdd : ["Squirrel Claws"],
						weaponOptions : {
						baseWeapon : "unarmed strike",
						regExpSearch : /^(?=.*squirrel)(?=.*claw).*$/i,
						name : "squirrel claws",
						damage : [1, 4, "slashing"],
						description : "Finesse, light; On hit, dmg or target makes Con Save (your spell DC) against being poisoned to end of your next turn.",
				},
					},
				"the scurry calls for aid (prereq: pact of the chain)" : {
					name : "The Scurry Calls for Aid",
					description : "\n   " + "This grants you an additional familiar option for the Pact of the Chain. The familiar is a fey ground squirrel, with its own version of your Acorn Pocket. (Select this via the companion page.)",
					source : ["RHB", 0],
					prereqeval : function(v) {
						return GetFeatureChoice('class', 'warlock', 'pact boon').indexOf("pact of the chain") !== -1;
								}
					},
		},
		"subclassfeature6" : {
			name : "Squirrel Leap",
			source : ["RHB", 0],
			minlevel : 6,
			description : "\n   " + "You can jump up to 10 feet past your normal movement speed and your jump distance increases by 10 feet both horizontally and vertically (5 feet without a running start).",
		},
		"subclassfeature6.1" : {
			name : "Summon the Scurry",
			source : ["RHB", 0],
			minlevel : 6,
			description : "\n   " + "You gain the ability to cast Conjure Animals without using a spell slot. This spell only summons Swarms of Squirrels (up to 8 swarms total). Once you have cast the spell in this manner, you cannot cast it this way again until you have completed a long rest." + "\n   " + "However, you can cast the spell again before then by using a spell slot of 3rd level or higher. If you use a 5th level spell slot, some or all of the swarms may use the Swarm of Fey Squirrels statblock instead.",
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Summon the Scurry",
				spells : ["conjure animals"],
				selection : ["conjure animals"],
				firstCol : "oncelr",
				spellcastingAbility : "class",
		},
			spellChanges : {
			"conjure animals" : {
				changes : "When casting this spell, you can only summon Swarms of Squirrels (up to 8)",
				description : "Summon up to Swarms of Squirrels (CR 1/4); they obey my verbal orders & disappear at 0hp/spell end",
				descriptionFull : "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. You can summon up to 8 creatures, but each must be a Swarm of Squirrels (Swarm of Rats statblock with a 30ft climb speed). Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics." + AtHigherLevels + "If you use a 5th level spell slot, you can still summon up to 8 Swarms of Squirrels, but you may choose to use the Diseased Variant statblock instead."
				},
			},
			creaturesAdd : [["Swarm of Squirrels", true]],
			creatureOptions : [{
				name : "Swarm of Squirrels",
				nameAlt : ["Squirrel Swarm"],
				header : "Summon",
				source : ["RHB", 0],
				size : 3, //Medium
				type : "Fey",
				alignment : "Unaligned",
				ac : 10,
				hp : 24,
				hd : [7, 8],
				speed : "30 ft, climb 30 ft",
				scores : [9, 11, 9, 2, 10, 3],
				senses : "Darkvision 30 ft",
				damage_resistances : "bludgeoning, piercing, slashing",
				condition_immunities : "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
				languages : "Understands all languages spoken by its summoner",
				passivePerception : 10,
				challengeRating : "1/4",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Bite",
					ability : 2,
					damage : [2, 6, "piercing"],
					range : "0 ft, 1 target",
					description : "Reduced to 3 (1d6) dmg if the swarm has at hit points or fewer"
						}],
				traits : [{
					name : "Keen Smell",
					description : "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
					}, {
					name : "Swarm",
					description : "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
						}]
					}]
		},
		"subclassfeature10" : {
			name : "Improved Squirrel Agility",
			source : ["RHB", 0],
			minlevel : 10,
			description : "\n   " + "You gain the ability to move up, down, and across vertical surfaces, and upside down along ceilings, while leaving your hands free.",
		},
		"subclassfeature10.1" : {
			name : "Flying Squirrel Glide",
			source : ["RHB", 0],
			minlevel : 10,
			description : "\n   " + "As a reaction, you can reduce fall damage by 10 times your warlock level.",
			additional : levels.map(function (n) { return n < 11 ? "" : (n*10) + " less falling damage" }),
			action : ["reaction", ""],
		},
		"subclassfeature14" : {
			name : "Wrath of the World Squirrel",
			source : ["RHB", 0],
			minlevel : 14,
			description : "\n   " + "As an action, you can call upon the World Squirrel to aid you in your fight. You summon a Giant Flying Squirrel to an unoccupied space within 30 feet of you, which remains for an hour or until it drops to zero hit points. The squirrel appears wearing an exotic saddle and may be used as a mount." + "\n   " + "This creature acts directly after your turn and follows your commands (no action required). If you are incapacitated or otherwise unable to direct the squirrel, it flies into a rage and tries to destroy your enemies with no thought to its own safety. Once you have summoned a Giant Flying Squirrel in this manner, you cannot do so again until you have taken a long rest.",
			usages : 1,
			recovery : "long rest",
			action : ["action", ""],
			creaturesAdd : [["Giant Flying Squirrel", true]],
			creatureOptions : [{
				name : "Giant Flying Squirrel",
				nameAlt : ["Giant Squirrel"],
				header : "Summon",
				source : ["RHB", 0],
				size : 1, //Huge
				type : "Fey",
				alignment : "Unaligned",
				ac : 13,
				hp : 136,
				hd : [13, 12],
				speed : "50 ft, climb 40 ft, fly 40 ft",
				scores : [16, 16, 19, 6, 12, 9],
				skills : {
					"perception" : 4
					},
				senses : "Darkvision 30 ft",
				damage_resistances : "lightning",
				languages : "All languages spoken by it summoner",
				passivePerception : 14,
				challengeRating : "7",
				proficiencyBonus : 3,
				attacksAction : 1,
				eval : function(prefix, lvl) {
				AddString(prefix + 'Cnote.Left', 'The Giant Flying Squirrel has been sent to your aid by Ratatoskr, the World Squirrel, and remains for one hour or until it drops to zero hit points. The squirrel acts directly after your turn and follows your commands (no action required). If you are incapacitated or otherwise unable to direct the squirrel, it flies into a rage and tries to destroy your enemies with no thought to its own safety. Once you have summoned a Giant Flying Squirrel in this manner, you cannot do so again until you have taken a long rest.', true);
						},
				removeeval : function(prefix, lvl) {
				RemoveString(prefix + 'Cnote.Left', 'The Giant Flying Squirrel has been sent to your aid by Ratatoskr, the World Squirrel, and remains for one hour or until it drops to zero hit points. The squirrel acts directly after your turn and follows your commands (no action required). If you are incapacitated or otherwise unable to direct the squirrel, it flies into a rage and tries to destroy your enemies with no thought to its own safety. Once you have summoned a Giant Flying Squirrel in this manner, you cannot do so again until you have taken a long rest.', true);
						},
				attacks : [{
					name : "Bite",
					ability : 1,
					damage : [4, 12, "piercing"],
					range : "Melee (10 ft)",
					description : "Medium or smaller target is grappled and restrained (escape DC 14); Can't use bite again until grapple ends"
				}, {
					name : "Tail",
					ability : 1,
					damage : [3, 8, "bludgeoning"],
					range : "Melee (10 ft)",
						}],
				traits : [{
					name : "Limited Flight",
					description : "The giant flying squirrel cannot remain aloft. If it is airborne at the end of its turn, it glides safely to the ground below. This movement provokes opportunity attacks unless it chooses to fall instead."
					}, {
					name : "Fit to Ride",
					description : "The Giant Flying Squirrel appears with an exotic saddle and may be used as an intelligent mount."
						}]
					}]
				}
			}
});


//New Statblock for Warlock Creatures:
CreatureList["fey ground squirrel"] = {
		name : "Fey Ground Squirrel",
		nameAlt : ["Ground Squirrel"],
		source : ["RHB", 0],
		size : 5, //Tiny
		type : "Fey",
		companion : "pact_of_the_chain",
		alignment : "Neutral Good",
		ac : 13 ,
		hp : 13,
		hd : [2, 8],
		speed : "30 ft, burrow 15 ft, climb 30 ft",
		scores : [9, 16, 14, 6, 12, 5],
		damage_resistances : "lightning",
		senses : "Darkvision 30 ft; Tremorsense 60 ft",
		passivePerception : 11,
		languages : "Understands all languages spoken by its summoner",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
					name : "Bite",
					ability : 2,
					damage : [1, 6, "piercing"],
					range : "Melee (5 ft)",
				}, {
					name : "Claws",
					ability : 2,
					damage : [2, 4, "slashing"],
					range : "Melee (5 ft)",
						}],
		traits : [{
			name : "Fey Nature",
			description : "This fey ground squirrel has been sent to act as your familiar by Ratatoskr, the World Squirrel. It is often distracted by acorns, but is a valuable ally in a fight."
				}, {
			name : "Keen Smell",
			description : "The squirrel has advantage on Wisdom (Perception) checks that rely on smell."
		}],
		actions : [{
			name : "Acorn Pocket",
			description : "Possesses a personal pocket dimension capable of holding up to 10 lbs of items. Only the squirrel can open this pocket dimension to retrieve and store items."
		}]
}


CreatureList["swarm of fey squirrels"] = {
				name : "Swarm of Fey Squirrels",
				header : "Summon",
				source : ["RHB", 0],
				size : 3, //Medium
				type : "Fey",
				alignment : "Unaligned",
				ac : 13,
				hp : 24,
				hd : [7, 8],
				speed : "30 ft, burrow 15 ft, climb 30 ft",
				scores : [9, 16, 9, 6, 12, 5],
				senses : "Darkvision 30 ft; Tremorsense 60 ft",
				damage_resistances : "bludgeoning, piercing, slashing, lightning",
				condition_immunities : "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
				languages : "Understands all languages spoken by its summoner",
				passivePerception : 11,
				challengeRating : "1",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Bite",
					ability : 2,
					damage : [4, 4, "piercing"],
					range : "0 ft, 1 target",
					description : "Reduced to 5 (2d4) dmg if the swarm has at hit points or fewer"
					abilitytodamage : false,
						}],
				traits : [{
					name : "Keen Smell:",
					description : "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
					}, {
					name : "Swarm",
					description : "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
						}]
}
	
	/*Homebrewery edit link: https://homebrewery.naturalcrit.com/edit/dmNLIaI8dT2v*/