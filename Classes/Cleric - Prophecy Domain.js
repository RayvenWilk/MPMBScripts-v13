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

var iFileName = "Cleric - Prophecy Domain.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("cleric", "prophecy domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*prophecy).*$/i,
	subname : "Prophecy Domain",
	source : ["OotD", 324],
	spellcastingExtra : ["detect magic", "identify", "augury", "locate object", "beacon of hope", "clairvoyance", "death ward", "divination", "dream", "scrying"],
	features : {
		"subclassfeature1" : {
			name : "Mindful Senses",
			source : ["OotD", 324],
			minlevel : 1,
			description : desc([
				"I learn the Message cantrip if I don't already know it",
				"I gain proficiency in the Perception skill"
			]),
			spellcastingBonus : {
				name : "Mindful Senses",
				spells : ["message"],
				selection : ["message"]
			},
			skills : ["Perception"]
		},
		"subclassfeature1.1" : {
			name : "Blessing of Foresight",
			source : ["OotD", 324],
			minlevel : 1,
			description : desc([
				"When I cast a divination spell of 1st level or higher, I choose one creature I can see",
				"That creature gains temporary hit points equal to my Wisdom mod + cleric level"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Prophetic Trance",
			source :["OotD", 324],
			minlevel : 2,
			description : desc([
				"I can use an action to enter a trance-like state, which lasts 10 minutes",
				"I roll two d20s and keep the results; each result can only be used once",
				"A result can replace an attack/save/ability check made by me or a creature I can see",
				"I choose to switch them before the dice to be replaced are rolled",
				"I lose any unused results when the trance ends."
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Visions of Danger",
			source : ["OotD", 324],
			minlevel : 6,
			description : desc([
				"I can ready a spell that restores HP without requiring or breaking concentration",
				"When an ally takes damage/fails a save, I can move my speed as a reaction",
				"With that reaction I can also cast a beneficial spell that targets only that ally",
				"That spell must have a casting time of action, bonus action, or reaction"
			]),
			action : ["reaction", " (Movement)"],
			usages : 2,
			recovery : "short rest"
		},
		"subclassfeature8" : {
			name : "Healing Vapors",
			source : [["OotD", 324], ["OotD", 326]],
			minlevel : 8,
			description : desc([
				"I heal creatures my Wisdom mod more when I heal them with a 1st level spell or higher",
				"I can add Fog Cloud at the location of one of the healed creatures"
			]),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Perfect Foresight",
			source : ["OotD", 326],
			minlevel : 17,
			description : desc([
				"When I enter my trance I can choose the result of one dice, between 1 and 19",
				"During my trance I gain 60ft Darkvision and can see invisible things within 10ft"
			]),
			vision : [["Darkvision (trance)", 60], ["See Invisible (trance)", 10]]
		}
	}
})