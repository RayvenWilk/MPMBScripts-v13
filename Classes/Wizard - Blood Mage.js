/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Wizard, called "Blood Mage"
				This subclass has been made by MD
				This code uses the subclass as it was on 2019-05-29
	Code by:	Mechana
	Date:		2019-06-20 (sheet v13)
*/

var iFileName = "Wizard - Blood Mage [Transcribed by Mechana].js";
RequiredSheetVersion(13);

AddSubClass("wizard", "blood mage", {
	regExpSearch : /^((?=.*wizard)(?=.*blood)(?=.*magic)|(?=.*blood)(?=.*(mage|magus))).*$/i,
	subname : "Blood Mage",
	fullname : "Blood Mage",
	source : ["HB", 0],
	features : {
		"subclassfeature2" : {
			name : "Blood Rite",
			source : ["HB", 0],
			minlevel : 2,
			description : desc([
				"I can cast a ritual spell in one minute at the cost of 1d4 per spell level",
				"I can also add +1 to any check from a ritual by taking d4 damage per additional point"
			])
		},
		"subclassfeature2.1" : {
			name : "Blood Ties",
			source : ["HB", 0],
			minlevel : 2,
			description : desc([
				"I can use my bonus action to reduce my hp by a number of d6's equal to my wizard level",
				"My next single target, damaging spell deals extra damage equal to that amount of hp"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""],
			additional : levels.map(function (n, idx) {
                return n < 2 ? "" : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][idx] + "d6";
            })
		},
		"subclassfeature6" : {
			name : "Life Drainer",
			source : ["HB", 0],
			minlevel : 6,
			description : desc([
				"I add the vampiric touch spell to my spell book if it is't there already",
				"I can cast vampiric touch as a ranged spell attack with a range of 30 feet",
				"Whenever I heal hp from damaging another creature with a spell:",
				"- I regain the full amount of damage done instead of half",
				"- The creature has disadvantage on the next saving throw it makes from your spells"
			]),
			spellcastingBonus : [{
				spells : ["vampiric touch"],
				name : "Life Drainer",
				selection : ["vampiric touch"],
				firstCol : "checkbox",
			}],
			spellChanges : {
				"vampiric touch" : {
					range : "30 ft",
					changes : "I can cast vampiric touch with a range of 30 ft instead of touch and I regain the full amount of damage done instead of half."
				},
				"enervation" : {
					changes : "I regain the full amount of damage done instead of half."
				}
			}
		},
		"subclassfeature10" : {
			name : "Sharp Mind",
			source : ["HB", 0],
			minlevel : 10,
			description : desc([
				"When I make a wisdom of intelligence saving throw I can use my reaction to",
				"take d10 damage, and add the damage done to my save"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature14" : {
			name : "Improved Blood Ties",
			source : ["HB", 0],
			minlevel : 14,
			description : desc([
				"When I take damage I can use my reaction to use that damage for my Blood Ties feature",
				"This damage is lost at the end of my next turn"
			]),
			action : ["reaction", ""]
		}
	}
});
