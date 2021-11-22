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
	Date:		2021-11-22 (sheet 13.0.8)
*/

var iFileName = "Paladin - Oath of the Raven[transcribed by rayvenwilk].js";

SourceList["OGC"] = {
	name : "Open Game Content",
	abbreviation : "OGC",
	group : "Open Game Content",
	url : "https://www.5esrd.com/classes/paladin/paladin-sacred-oaths/oath-of-the-raven/",
};

AddSubClass("paladin", "oath of the raven", {
	regExpSearch : /^(((?=.*(raven|bird|flight|nature|fey))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*dark)(?=.*knight))|(?=.*avenger)).*$/i,
	subname : "Oath of the Raven",
	source : ["OGC", 1],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Furtive Aura",
			source : ["OGC", 1],
			minlevel : 3,
			description : "\n   As a bonus action, I make my opponents forget about me until the end of my turn. I am considered to be hidden (see the Combat chapter).\n   Creatures who can see the invisible can make a Wis save to resist this effect.",
			
			additional : "also see notes page",
			toNotesPage : [{
				name : "Furtive Aura", // feature name or whatever you want
				source : ["OGC"],
				popupName : "Furtive Aura Features", // feature name or whatever you want
				page3notes : true,
				note : desc([
					"paragraph 1", 
					"paragraph 2", // this will start at the beginning of the next line
				
			action : ["bonus action", ""],
			spellcastingExtra : ["bane", "disguise self", "darvision", "branding smite", "haste", "nondetection", "confusion", "hallucinatory terrain", "commune", "teleportation circle"],
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Repel Evil",
			source : ["OGC", 1],
			minlevel : 3,
			description : "\n   As an action, I present my holy symbol \u0026 each enemy humanoid, fey, or fiend of Med size or less \u0026 of evil alignment that can see me w/in 30 feet of me must make a Wis save or be frightened of me for 1 minute."
		},
		"subclassfeature3.2" : {
			name : "Shadow Vigilante",
			source : ["OGC", 1],
			minlevel : 3,
			description : "\n   I gain prof w/ either Investigation or Stealth.\n   If already proficient, I can double my proficiency bonus on ability checks for one.",
		},
		"subclassfeature7" : {
			name : "Redirected Strike",
			source : ["OGC", 1],
			minlevel : 7,
			description : "\n   When a crea misses a melee atk vs me, I can use my reaction to redirect it against another of my choice w/in 5 ft of the attacker.\n   The attacker rerolls against the designated crea w/ disadv.",
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Exploit Weakness",
			source : ["OGC", 1],
			minlevel : 15,
			description : "I can analyze an opponent’s fighting style,this requires no action on my part, but only one crea.\n   After two rnd, at the start of each subsequent turn, I can choose either have adv on my atk or give it disadv on its atk vs me.\n   I can’t use this feature again until I finish a short/long rest.",
			limfeaname : "Exploit Weakness",
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature20" : {
			name : "Absolution in Darkness",
			source : ["OGC", 1],
			minlevel : 20,
			description : "As an action I can generate an aura of darkness. For 1 min, the area w/in 30 ft of me is obscured. A crea w/ darkvision can’t see through this, \u0026 nonmagical light can’t illuminate it. Me \u0026 up to four crea that I designate can see normally.\n   Crea of evil alignment in range have disadv on Wis \u0026 Cha saves.\n   Once I use this feature, I can’t use it again until I finish a long rest.",
			limfeaname : "Absolution in Darkness",
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature20.1" : {
			name : "Wings",
			source : ["OGC", 1],
			minlevel : 20,
			description : "As a bonus action, I can make black, magical, raven like wings sprout from my back, w/ no hindrance from my equip. I gain a flying speed equal to my walking speed. The wings remain for an hour or until dismissed w/ a bonus action.\n   Once I use this feature, I can’t use it again until I finish a short/long rest.",
			action : [
				["bonus action", " (activate)"],
				["bonus action", " (deactivate)"]
			],
			limfeaname : "Wings",
			usages : 1,
			recovery : "short rest",
		}
	}
});
