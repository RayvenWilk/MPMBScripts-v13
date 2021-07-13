/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Homebrew Spells
	Effect:     
	Content:	
	Code by:	rayvenwilk
	Date:		2021-07-12 (sheet v13)
*/

var iFileName = "Homebrew Syntax - SpellsList.js";

// Spells start
SpellsList["card throw"] = {
	name : "Card Throw",
	source : ["HB"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "atwill",
	description : "Make a ranged attack, roll d6 for dmg - 1: 1d8 fire, 2: 1d8 acid, 3: 1d8 lightning, 4: 1d8 poison, 5: 1d8 cold, 6: 1d8 force.",
	descriptionFull : "Make a ranged attack, roll d6 for dmg - 1: 1d8 fire, 2: 1d8 acid, 3: 1d8 lightning, 4: 1d8 poison, 5: 1d8 cold, 6: 1d8 force. Cards thrown increase by 1 at 5th, 11th, and 17th."
};
