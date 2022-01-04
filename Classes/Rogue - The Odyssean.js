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
	Date:		2021-11-18 (sheet 13.0.8)
*/

var iFileName = "Rogue - The Odyssean.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("rogue", "the odyssean", {
	regExpSearch : /^(?=.*the)?(?=.*odyssean).*$/i,
	subname : "The Odyssean",
	source : ["OotD", 335],
	features : {
		"subclassfeature3" : {
			name : "Vagrant Soldier",
			source : ["OotD", 335],
			minlevel : 3,
			description : desc([
				"I gain proficiency with shields",
				"Spears and tridents count as having finesse for me"
			]),
			armorProfs : [false, false, false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if ((v.baseWeaponName == 'spear' || v.baseWeaponName == 'trident') && fields.Proficiency) {
							fields.Description = fields.Description.replace(/versatile/i, 'finesse, versatile ');
						}
					},
					"Spears and tridents count as having finesse for me."
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Clever as the Gods",
			source : ["OotD", 335],
			minlevel : 3,
			description : desc([
				"As a bonus action, I choose a creature to trick",
				"The creature and I make contested Insight (Wis) and Deception checks, respectively",
				"If I win, me and my allies have adv. on attacks vs. the creature until my next turn starts",
				"I cannot use this on the same creature more than once per combat"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Notorious Trickster",
			source : ["OotD", 335],
			minlevel : 9,
			description : desc([
				"Creatures aware of me but can't see me can't make opportunity attacks",
				"When I Sneak Attack a creature, it has disadv. on the concentration saving throw"
			])
		},
		"subclassfeature13" : {
			name : "Tenacious Survivor",
			source : ["OotD", 335],
			minlevel : 13,
			description : desc([
				"I add my Charisma bonus to my initiative rolls",
				"At the start of my turn I can use a bonus action to regain HP equal to my rogue level"
			]),
			addMod : { type : "skill", field : "Init", mod : "max(Cha|0)", text : "I can add my Charisma modifier to initiative rolls." },
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Legendary Cunning",
			source : ["OotD", 335],
			minlevel : 17,
			description : desc([
				"When an ally makes an opportunity attack, I can also attack the same creature",
				"I can make a ranged attack with advantage against the creature"
			])
		}
	}
})