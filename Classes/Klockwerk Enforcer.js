/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Klockwerk Enforcer" and it's 1 subclass
				This class is made by Kar and  and can be found here: https://docs.google.com/document/d/11igcdW6CDZ8o8nvF5fCjAoq0Dhu7QwRfFb4C4BkpHYU/edit?usp=sharing
	Code by:	Seneschal
	Date:		2019-09-29 (sheet v13.0.0beta19)
*/

var iFileName = "Klockwerk Enforcer [Created by Kar, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["K:KE"] = {
	name : "Kar: Klockwerk Enforcer",
	abbreviation : "K:KE",
	group : "Friendly Bunch Homebrew",
	url : "https://docs.google.com/document/d/11igcdW6CDZ8o8nvF5fCjAoq0Dhu7QwRfFb4C4BkpHYU/edit?usp=sharing",
	date : "2019/05/02"
}

ClassList["klockwerkenforcer"] = {
	regExpSearch : /klockwerk enforcer/i,
	name : "Klockwerk Enforcer",
	source : ["K:KE", 0],
	primaryAbility : "Intelligence",
	die : 10,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Int"],
	skillstxt : "Choose Three from Acrobatics, Arcana, History, Investigation, Nature, Religion, and Sleight of Hand.",
	abilitySave : 4,
	armorProfs : {
		primary : [true, true, false, false],
		secondary : [true, true, false, false]
	},
	weaponProfs : {
		primary : [true, true, false],
		secondary : [true, true, false]
	},
	toolProfs : {
		primary : ["Calligrapher's Tools", "Tinkerer's Tools"],
		secondary : ["Calligrapher's Tools", "Tinkerer's Tools"]
	},
	equipment : "Klockwerk Enforcer starting equipment:" +
	"\n \u2022 A marital weapon and wristbow -or- a martial weapon and an automatic pistol;" +
	"\n \u2022 20 bolts -or- 2 pistol clips;" +
	"\n \u2022 Studded Leather Armor" +
	"\n \u2022 A magically attuned golden pocketwatch that signifies rank and allegiance to the Klockwerk." +
	"\n \u2022 Calligrapher's Tools -or- Tinkerer's Tools" +
	"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	subclasses : ["Klockwerk Archetype", []],
	features : {
		"cartridge capacity" : {
			name : "Cartridge Capacity",
			source : ["K:KE", 3],
			minlevel : 1,
			description : desc([
				"I can enhance my weapon with a Tykriel cartridge, changing the damage type",
				"for my weapon attack, Ticktock Ability, and Token Spells as a bonus action",
				"I start with one magical and one nonmagical cartidge",
				"Nonmagical cartidges are denoated with a *"
			]),
			extraname : "Cartridge Types",
			extrachoices : ["acid", "bludgeoning*", "chronic", "cold", "fire", "force", "lightning", "necrotic",
			"piercing*", "poison", "psychic", "radiant", "slashing*", "thunder"],
			"acid" : {
				name : "Acid",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Acid damage"
				])
			},
			"bludgeoning*" : {
				name : "Bludgeoning*",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be nonmagical Bludgeoning damage"
				])
			},
			"chronic" : {
				name : "Chronic",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Chronic damage"
				])
			},
			"cold" : {
				name : "Cold",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Cold damage"
				])
			},
			"fire" : {
				name : "Fire",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Fire damage"
				])
			},
			"force" : {
				name : "Force",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Force damage"
				])
			},
			"lightning" : {
				name : "Lightning",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Lightning damage"
				])
			},
			"necrotic" : {
				name : "Necrotic",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be necrotic damage"
				])
			},
			"piercing*" : {
				name : "Piercing*",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to nonmagical Piercing damage"
				])
			},
			"poison" : {
				name : "Poison",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Poison damage"
				])
			},
			"psychic" : {
				name : "Psychic",
				source : ["K:KE"],
				description : desc([
					"I can change my damage type to be Psychic damage"
				])
			},
			"radiant" : {
				name : "Radiant",
				source : ["K:KE"],
				description : desc([
					"I can change my damage type to be Radiant damage"
				])
			},
			"slashing*" : {
				name : "Slashing*",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be nonmagical Slashing damage"
				])
			},
			"thunder" : {
				name : "Thunder",
				source : ["K:KE", 4],
				description : desc([
					"I can change my damage type to be Thunder damage"
				])
			}
		},
		"proxy levels" : {
			name : "Proxy Levels",
			source : ["K:KE", 4],
			minlevel : 1,
			description : desc([
				"I gain a Proxy Level at 1st, 10th, and 19th level",
				"I add these to my Tick/Tock ability and Token Spells as needed"
			]),
			additional : levels.map(function(n){
				return "Proxy Level: " + (n < 10 ? 1 : n < 19 ? 2 : 3)
			})
		},
		"token spells" : {
			name : "Token Spells",
			source : ["K:KE", 4],
			minlevel : 1,
			description : desc([
				"I can cast Token Spells by expending token slots",
				"I have a number of token slots equal to half my class level",
				"I know a number of token spells equal to half my class level",
				"I regain all tokens after a short rest"
			]),
			additional : levels.map(function(n){
				return (Math.floor(n/2)) + " Token Slots; " + (Math.floor(n/2)) + " Token Spells Known"
			}),
			usagescalc : levels.map(function(n){
				return (Math.floor(n/2))
			}),
			recovery : "short rest",
			extraname : "Token Spells",
			extrachoices : ["charged blow", "clickout", "disingenuity", "initial timing", "mirror fighting",
			"scarring surfaces", "splitting hydra", "startouch", "tears of the klockwerk", "unwounding"],
			"charged blow" : {
				name : "Charged Blow",
				source : ["K:KE", 6],
				description : desc([
					"As an action, I expend a token slot to charge up an attack",
					"I can use my concenctration to continue the charge up to a minute",
					"This charge is equal to my Proxy Level",
					"When I release this charge, I make a melee attack",
					"This can be a weapon in my hand or an unarmed strike",
					"On a hit, I deal the weapon's damage times my proxy level",
					"All charges are expended whether I hit or miss"
				]),
				action : ["action", " (charge/release)"]
			},
			"clickout" : {
				name : "Clickout",
				source : ["K:KE", 7],
				description : desc([
					"I spend a token slot to sacrifice my action for that turn",
					"I gain a number of bonus actions equal to 1 + my Proxy Level"
				]),
				action : ["action", " (sacrifice)"]
			},
			"disingenuity" : {
				name : "Disingenuity",
				source : ["K:KE", 5],
				description : desc([
					"I expend a token slot as an action to target one person",
					"Every creature that attacks that target gains a -3 to attack and damage rolls",
					"I can expend an action every turn to continue this affect",
					"However, the modifier increases by 1 + my proxy level as well",
					"This continues until concentration stops or the target dies or falls unconscious"
				]),
				action : ["action", " (per turn)"]
			},
			"initial timing" : {
				name : "Initial Timing",
				source : ["K:KE", 7],
				description : desc([
					"I can spend a token slot as an action and add my Proxy level to Init.",
					"I can also do one of the following options during my turn:",
					"  I move forward one person in init. or to the end if I'm at the top",
					"  I use my new init. mod for attack rolls and damages",
					"  I add my init. mod to anyone's saving throw for one turn"
				]),
				action : ["action", ""]
			},
			"mirror fighting" : {
				name : "Mirror Fighting",
				source : ["K:KE", 7],
				description : desc([
					"I can expend a token slot as an action, to dash in a 30 ft line",
					"All creatures in this line must make a Dex save",
					"On a failure, they take my weapon damage",
					"As long as I hold concentration, a mirror copy of me is summoned",
					"It is summoned on my last turn and does the same action",
					"I can summon mirror copies 1 + my Proxy Level number of times",
					"Summoning more past the limit will dispel the older ones"
				]),
				action : ["action", ""]
			},
			"scarring surfaces" : {
				name : "Scarring Surfaces",
				source : ["K:KE", 6],
				description : desc([
					"As an action, I expend a token slot to activate this",
					"On each turn I select 1d4 + int + proxy level 5x5 tiles",
					"Next turn, I release and all creatures in that area make a Dex Save",
					"On a failure, they take a number of d12 equal to my proxy level + int mod",
					"worth of cartridge damage and half as much on a success"
				]),
				action : ["action", ""],
				additional : levels.map(function(n){
					return (n < 10 ? 1 : n < 19 ? 2 : 3) + "d12 + Int Mod damage"
				})
			},
			"splitting hydra" : {
				name : "Splitting Hydra",
				source : ["K:KE", 6],
				description : desc([
					"I can spend a token slot as an action to target creatures within 60ft of me",
					"I roll to hit and gain a number of locks on them equal to 1d6 + int + proxy level",
					"Each creature takes 1d8 + proxy level cartridge damage per lock",
					"If I get maximized locks on a creature, that damage increases to 2d8",
					"The max number of locks depends on the size of creature and on DM"
				]),
				action : ["action", ""]
			},
			"startouch" : {
				name : "Startouch",
				source : ["K:KE", 7],
				description : desc([
					"I can spend a token as an action to heal a creature",
					"I touch a creature that isn't myself or a Klockwerk Enforcer",
					"I spend an action each turn to heal for 1d8 + Int + Proxy Level",
					"This continues until the targetted creature has max hp, falls unconscious",
					"or I fall unconscious",
					"Until one of those conditions is met, a +1 modifier is added to Startouch"
				]),
				action : ["action", ""]
			},
			"tears of the klockwerk" : {
				name : "Tears of the Klockwerk",
				source : ["K:KE", 6],
				description : desc([
					"I expend a token slot to summon 30ft radius of rain",
					"It must be in a 60 ft radius of me",
					"Any non-ally in the spectral rain takes damage equal to",
					"1d6 + Int Mod + Proxy Level damage until I lose concentration",
					"I can also expend an action to do what of the following:",
					"1. Extend radius by 5 x Proxy Level ft",
					"2. Increase damage by 1 + Proxy Level",
					"3. Set 1 + Proxy Level charges for the rain to continue without concen.",
					"4. I can move the rain to any spot visibile within 60 ft of its location"
				]),
				action : ["action", ""]
			},
			"unwounding" : {
				name : "Unwounding",
				source : ["K:KE", 5],
				description : desc([
					"I can spend a token slot as an action on an injured creature",
					"within 40 ft of me",
					"They take 4 x my proxy level cartridge damage per turn",
					"Any resistances they have are negated until unwounding ends"
				]),
				action : ["action", ""]
			}
		},
		"tick/tock" : {
			name : "Tick/tock",
			source : ["K:KE", 5],
			minlevel : 2,
			description : desc([
				"I can summon an orb as a bonus action",
				"Max number of orbs is (klockwerk level + prof)xProxy level",
				"As a bonus action, I fire every orb at a target within",
				"120 feet of me, deal a number of d4 + int mod cartridge damage",
				"equal to the number of orbs I fired at that"
			])
		},
		"subclassfeature3" : {
			name : "Klockwerk Specialization",
			source : ["K:KE", ""],
			minlevel : 3,
			description : desc([
				"Choose a Klockwerk Specialization I strive to emulate and put it in the \"Class\" field",
			])
		},
		"fortuity" : {
			name : "Fortuity",
			source : ["K:KE", 8],
			minlevel : 5,
			description : desc([
				"As long as my Dex is 10 or above, I gain a +1 bonus to AC",
				"I gain an additional +1 per Fortuity secret I learn",
			]),
		},
		"fortuity secrets" : {
			name : "Fortuity Secrets",
			source : ["K:KE", 8],
			minlevel : 6,
			description : desc([
				"I can specialize in 1 ranged or melee ability at 6th, 12th, and 18th level"
			]),
			extraname : "Fortuity Secrets",
			extrachoices : ["tier1-melee", "tier1-ranged", "tier2-melee", "tier2-ranged", "tier3-melee", "tier3-ranged"],
			"tier1-melee" : {
				name : "Tier 1: Melee",
				source : ["K:KE", 8],
				description : desc([
					"Once per round, I impose disadvantage on a melee weapon attack against me"
				]),
				prereqeval : "classes.known.klockwerkenforcer.level >= 6"
			},
			"tier1-ranged" : {
				name : "Tier 1: Ranged",
				source : ["K:KE", 8],
				description : desc([
					"Once per round, I impose disadvantage on a ranged weapon attack against me"
				]),
				prereqeval : "classes.known.klockwerkenforcer.level >= 6"
			},
			"tier2-melee" : {
				name : "Tier 2: Melee",
				source : ["K:KE", 8],
				description : desc([
					"Once per round, I impose a critical failure on a melee weapon attack",
					"The attack must not have been a critical success"
				]),
				prereqeval : "classes.known.klockwerkenforcer.level >= 12"
			},
			"tier2-ranged" : {
				name : "Tier 2: Ranged",
				source : ["K:KE", 8],
				description : desc([
					"Once per round, I impose a critical failure on a ranged weapon attack",
					"The attack must not have been a critical success"
				]),
				prereqeval : "classes.known.klockwerkenforcer.level >= 12"
			},
			"tier3-melee" : {
				name : "Final Fortuity: Melee",
				source : ["K:KE", 8],
				description : desc([
					"Once per round, I impose a critical failure on a melee weapon attack",
					"The attack must not have been a critical success",
					"in addition, I also gain a melee attack of opportunity on the creature"
				]),
				prereqeval : "classes.known.klockwerkenforcer.level >= 18"
			},
			"tier3-ranged" : {
				name : "Final Fortuity: Ranged",
				source : ["K:KE", 8],
				description : desc([
					"Once per round, I impose a critical failure on a ranged weapon attack",
					"The attack must not have been a critical success",
					"in addition, I also gain a ranged attack of opportunity on the creature"
				])
			}
		}
	}
}