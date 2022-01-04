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

var iFileName = "Bard - College of Epic Poetry.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("bard", "college of epic poetry", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*epic\spoetry).*$/i,
	subname : "College of Epic Poetry",
	source : ["OotD", 323],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features : {
		"subclassfeature3" : {
			name : "Epic Verses",
			source : ["OotD", 323],
			minlevel : 3,
			description : desc([
				"I can add verses to my epic poem as a reaction when I witness major events:",
				"\u2022 Comedy: Someone rolls a 1 on an attack or saving throw",
				"\u2022 Hubris: Someone rolls a 20 on an attack or saving throw",
				"\u2022 Irony: Someone fails a save after using a Bardic Inspiration die",
				"\u2022 Tragedy: Someone is reduced to 0hp by an enemy",
				"\u2022 Some other significant event at the discretion of the DM"
			]),
			action : [["reaction", "Compose Epic Verse"]]
		},
		"subclassfeature3.1" : {
			name : "Inspirational Verses",
			source : ["OotD", 323],
			minlevel : 3,
			description : desc([
				"By adding verses to my epic poem, my Bardic Inspiration has additional effects",
				"See the \"Notes\" page for the table"
			]),
			toNotesPage : [{
				name : "Epic Poem Table",
				source : ["OotD", 323],
				popupName : "College of Epic Poetry's Bardic Inspiration Table",
				additional : "(OotD 323)",
				note : [
					"Required verse counts are based on party size",
					"Poem Rank\tVerse Count\t" + (typePF ? "" : "\t") + "Bardic Inspiration Effect",
					"1\t\t1\u00D7Party Size\tMin. value = 2",
					"2\t\t2\u00D7Party Size\tEpic Courage",
					"3\t\t3\u00D7Party Size\tMin. value = 3",
					"4\t\t4\u00D7Party Size\tEpic Foresight",
					"5\t\t5\u00D7Party Size\tMin. value = 4",
					"6\t\t6\u00D7Party Size\tEpic Determination",
					"7\t\t7\u00D7Party Size\tMin. value = 5",
					"8\t\t8\u00D7Party Size\tEpic Reflexes",
					"9\t\t9\u00D7Party Size\tMin. value = 6",
					"10\t\t10\u00D7Party Size\tEpic Resistance",
					"Improved Rolls: My Bardic Inspiration die have a minimum value based on the above table.",
					"Whenever someone rolls one of my Bardic Inspiration dice, if they roll less than the minimum value for your poem rank, then the result is equal to the minimum value as determined by your poem rank.",
					"Additional Effects: When I give someone Bardic Inspiration, I choose one of the effects that I have unlocked. They gain the benefit of this effect as long as they have my Bardic Inspiration die. The effect is lost when they roll the die.",
					"\u2022 Epic Courage: You gain advantage on saving throws against effects that would frighten you.",
					"\u2022 Epic Determination: You gain advantage on death saving throws.",
					"\u2022 Epic Determination: You gain advantage on death saving throws.",
					"\u2022 Epic Foresight: You cannot be surprised, and your passive Perception increases by +5.",
					"\u2022 Epic Reflexes: You gain advantage on saving throws against spells that affect multiple targets.",
					"\u2022 Epic Resistance: You gain resistance to one damage type (Bard’s choice)."
				]
			}]
		},
		"subclassfeature6" : {
			name : "Armored Poet",
			source : ["OotD", 324],
			minlevel : 6,
			description : desc([
				"I am proficient with medium armor",
				"When I compose a verse about an ally within 5ft, I regain 1 Bardic Inspiration die"
			]),
			armorProfs : [false, true, false, false]
		},
		"subclassfeature14" : {
			name : "Protective Epithets",
			source : ["OotD", 324],
			minlevel : 14,
			description : desc([
				"If someone with Bardic Inspiration drops to 0hp, they can roll the Bardic Inspiration die",
				"They are reduced to the rolled number of HP instead of 0; the die is lost"
			])
		}
	}
})