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

var iFileName = "Something[transcribed by rayvenwilk].js";

SourceList.HW = {
	name : "Humblewood",
	abbreviation : "HW",
	group : "Deck of Many",
	url : "https://hitpointpress.com/humblewood/"
};

SourceList["HW:TotSG"] = {
	name : "Humblewood: Tenders of the Scorched Grove",
	abbreviation : "HW:TotSG",
	group : "Deck of Many",
	url : "https://hitpointpress.com/humblewood/"
};

AddSubClass("cleric", "night domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(night)).*$/i,
	subname : "Night Domain",
	source : ["HW", 40],
	spellcastingExtra : ["sleep", "veil of dusk", "darkness", "moonbeam", "nondetection", "globe of twilight", "divination", "stellar bodies", "dream", "seeming"],
	features : {
		subclassfeature1: {
			name: "Eyes of Twilight",
			source: ["HW", 40],
			minlevel: 1,
			description: "\n   I gain 60 ft darkvision",
			vision: [["Darkvision (magical darkness)", 120]]
		},
		"subclassfeature1.1" : {
			name : "Ward of Shadows",
			source : ["HW", 40],
			description : desc([
				"When a creature I can see within 30 ft attacks me, I can impose disadvantage on the attack roll, so long as the creature can be blinded."
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			action : ["reaction", ""],
			recovery : "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Invocation of Night",
			source : ["HW", 40],
			description : desc([
				"I can extinguish all magical and nonmagical light within 30 feet. Each enemy within 30 feet makes a Constitution save or is blinded for a number of rounds equal to my cleric level. They repeat the save at the end of their turns."
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Improved Ward",
			source : ["HW", 41],
			description : desc(["I can use Ward of Shadow to protect another creature within 30 feet of me."])
		},
		"subclassfeature8" : {
			name : "Eye of Twilight improvement",
			source : ["HW", 40],
			description : desc(["I have darkvision out to 120 feet, that works in both magical and nonmagical darkness."]),
			vision : [["Darkvision", 120]]
		},
		"subclassfeature8.1" : {
			name : "Veil of Dreams",
			source : ["HW", 41],
			description : desc([
				"I can add my Cleric level to the dice rolled for the Sleep spell. I can choose the order in which creatures are affected by the Sleep spell. If the first creature is unaffected, the spell will instead skip this creature. A creature under my Sleep spell can only be woken until the start of my next turn."
			])
		},
		"subclassfeature17" : {
			name : "Eye of Twilight improvement",
			source : ["HW", 41],
			description : desc([
				"Once per day I can give myself truesight out to 120 feet for a number of minutes equal to my Wisdom modifier. It only functions in magical or nonmagical darkness."
			]),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature17.1" : {
			name : "Creature of the Night",
			source : ["HW", 41],
			description : desc([
				"For 1 minute, I emit magical darkness in a 30 foot radius, and lightly obscuring shadows for another 50 feet. Only light produced by a 9th level spell or similar can negate the darkness. Enemies in the darkness are blinded and frightened as long as they are in it."
			]),
			usages : 1,
			recovery : "long rest",
			actions : [["action", " (activate)"], ["action", " (deactivate)"]]
		}
	}
})