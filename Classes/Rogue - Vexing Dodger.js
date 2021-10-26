/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Vexing Dodger
	Effect:     Add the subclass Vexing Dodger to the Rogue
	Content:	Vexing Dodger by u/Psatch found here: https://www.reddit.com/r/UnearthedArcana/comments/owehqi/vexing_dodger_a_rogue_subclass_that_specializes/
	Code by:	rayvenwilk
	Date:		2021-10-18 (sheet 13.0.7)
*/

var iFileName = "Rogue - Vexing Dodger by u/Psatch(transcribed_by_rayvenwilk).js";

AddSubClass("rogue", "vexing dodger", {
	regExpSearch : /(vexing|annoying)/i,
	subname : "Vexing Dodger",
	fullname : "Vexing Dodger",
	source : ["HB"],
	features : {
		"subclassfeature3" : {
			name : "Duck and Tumble",
			source : ["HB"],
			minlevel : 3,
			description : "\n   I can attempt to tumble through one hostile creature's spece when using Dash, Disengage, or the Dodge action.If successful I can use my Sneak Attack if I'm not at disadv."
		},
		"subclassfeature3.1" : {
			name : "Monster Climber",
			source : ["HB"],
			minlevel : 3,
			description : "\n   I can climb onto another creature one size larger than me causing disadv to attack rolls against me by the creature I've climbed. I no longer treat the space of another creature as difficult terrain."
		},
		"subclassfeature9" : {
			name : "Timberrr!",
			source : ["HB"],
			minlevel : 9,
			description : "\n   When I make a successful Sneak Attack against a creature while climbing, I can jump off causing the creature to make a Str save (8 + prof bonus + Dex mod) or become prone. \n   I can also reduce the amount of fall dmg by 3x CL."
		},
		"subclassfeature13" : {
			name : "Daringly Deft Dodger",
			source : ["HB"],
			minlevel : 13,
			description : "\n   When I make a successful tumble I can choose to climb onto the creature if at least one size larger than me."
		},
		"subclassfeature17" : {
			name : "Giants' Pest",
			source : ["HB"],
			minlevel : 17,
			description : "\n   I can occupy the same space of a creature that is at least one size larger than me. I gain adv on Str(Athletics) and Dex(Acrobatics) checks."
		},
	}
})
