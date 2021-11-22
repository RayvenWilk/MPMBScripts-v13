/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Paladin - Oath of the Raven
	Effect:     Add the subclass Oath of the Raven
	Content:	
	Code by:	rayvenwilk
	Date:		2021-11-18 (sheet 13.0.8)
*/

var iFileName = "Paladin - Oath of the Raven[transcribed by rayvenwilk].js";

SourceList["OGC"] = {
	name : "Open Game Content",
	abbreviation : "OGC",
	group : "Open Game Content",
	url : "https://www.5esrd.com/classes/paladin/paladin-sacred-oaths/oath-of-the-raven/",
};

AddSubClass("paladin", "oath of the raven", {
	regExpSearch : /^((?=.*(\braven\b)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))).*$/i,
	subname : "Oath of the Raven",
	source : ["OGC", 1],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Furtive Aura",
			source : ["OGC", 1],
			minlevel : 3,
			description : "\n   As a bonus action, I make my opponents forget about me until the end of my turn. I do not actually become invisible, but my enemies stop paying attention to me \u0026 I am considered to be hidden (see the Combat chapter).\n   Creatures who can see the invisible can make a Wis save to resist this effect.",
			action : ["bonus action", ""],
			spellcastingExtra : ["bane", "disguise self", "darvision", "branding smite", "haste", "nondetection", "confusion", "hallucinatory terrain", "commune", "teleportation circle"],
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Repel Evil",
			source : ["OGC", 1],
			minlevel : 3,
			description : "\n   As an action, I present my holy symbol \u0026 each enemy humanoid, fey, or fiend of Medium size or less \u0026 of evil alignment that can see me within 30 feet of me must make a Wis save or be frightened of me for 1 minute."
		},
		"subclassfeature3.2" : {
			name : "Shadow Vigilante",
			source : ["OGC", 1],
			minlevel : 3,
			description : "\n   I gain proficiency with the Investigation skill or with the Stealth skill.\n   If I am already proficient in both of these skills, I choose one and my proficiency bonus is doubled for any ability check I make that uses it.",
		},
		"subclassfeature7" : {
			name : "Redirected Strike",
			source : ["OGC", 1],
			minlevel : 7,
			description : "\n   When a creature misses a melee attack against me, I can immediately use my reaction to redirect this attack against another creature of my choice within 5 feet of the initial attacker.\n   The initial attacker rerolls the attack against the designated creature with disadvantage.",
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Exploit Weakness",
			source : ["OGC", 1],
			minlevel : 15,
			description : "I can analyze an opponent’s fighting style by watching it fight for at least two rounds. This requires no action on my part, but I can only analyze one creature at a time.\n   Once the two rounds have elapsed, at the start of each of my subsequent turns, I can choose either to have advantage on my attacks against the analyzed creature or to give it disadvantage on its attacks against me.\n   I can’t use this feature again until I finish a short or long rest.",
			limfeaname : "Exploit Weakness",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature20" : {
			name : "Absolution in Darkness",
			source : ["OGC", 1],
			minlevel : 20,
			description : "As an action I can generate an aura of darkness. For 1 minute, the area within 30 feet of me is heavily obscured. A creature with darkvision can’t see through this darkness, and nonmagical light can’t illuminate it. Me and up to four creatures that I designate can see normally in the darkness.\n   Creatures of evil alignment inside the darkened area have disadvantage on Wis and Cha saves.\n   Once I use this feature, I can’t use it again until I finish a long rest.",
			limfeaname : "Absolution in Darkness",
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature20.1" : {
			name : "Wings",
			source : ["OGC", 1],
			minlevel : 20,
			description : "As a bonus action, I can make black wings sprout from my back, w/ no hindrance from my equipment. I gain a flying speed equal to my walking speed. The wings remain for an hour or until dismissed w/ a bonus action.\n   I can use this feature even if I am wearing armor: though tangible and raven-like, these wings are magical.\n   Once I use this feature, I can’t use it again until I finish a short or long rest.",
			action : ["bonus action", " (1 hr)"],
			limfeaname : "Wings",
			usages : 1,
			recovery : "short rest",
		}
	}
});