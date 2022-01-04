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

var iFileName = "Warlock - Patron of the Fates.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("warlock", "the fates", {
	regExpSearch : /^(?=.*warlock)(?=.*fates?).*$/i,
	subname : "the Fates",
	source : ["OotD", 336],
	spellcastingExtra : ["detect evil and good", "identify", "levitate", "see invisibility", "clairvoyance", "call lightning", "arcane eye", "divination", "planar binding", "geas"],
	features : {
		"subclassfeature1" : {
			name : "Fate's Bidding",
			source : ["OotD", 336],
			minlevel : 1,
			description : desc([
				"After a rest, I can cast a divination spell without expending a spell slot",
				"If I do, I gain temporary HP equal to my warlock level (min 1 HP)",
				"I must choose a spell I can normally cast and must have the necessary materials"
			])
		},
		"subclassfeature6" : {
			name : "Fate's Foretelling",
			source : ["OotD", 336],
			minlevel : 6,
			description : desc(["After a rest, I roll a d20 and keep the result to be used before my next rest",
				"A result can replace an attack/save/ability check made by me or a creature I can see",
				"I choose to switch them before the dice to be replaced are rolled"
			])
		},
		"subclassfeature10" : {
			name : "Fate's Demands",
			source : ["OotD", 336],
			minlevel : 10,
			description : desc([
				"When I reduce a creature to 0 HP, I regain one expended spell slot"
			]),
			usages : 2,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Inescapable Fate",
			source : ["OotD", 338],
			minlevel : 14,
			description : desc([
				"I can use an action to force a creature I can see to make a Wisdom save",
				"The creature has disadvantage on the save if it is unaware of me",
				"If it fails, I choose another creature I can see; the 1st moves towards the 2nd for 1 min",
				"The 1st creature must be within 5ft of the 2nd creature, at the start of its turn",
				"If it isn't, it takes 2d10 psychic damage and uses its turn to move towards the 2nd",
				"Ends if I or either creature is reduced to 0 HP or knocked unconscious"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
})