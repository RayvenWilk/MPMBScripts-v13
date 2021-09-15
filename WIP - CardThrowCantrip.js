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
	Date:		2021-07-12 (sheet v13.0.6)
*/

var iFileName = "CardThrowCantrip(Cardcaster).js";

// Spells start
SpellsList["card throw"] = {
	name : "Card Throw",
	nameShort : "Card Throw",
	nameAlt : "Card Throw",
	classes : ["cardcaster", "wizard"],
	source : ["HB"],
	ritual : false,
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "atwill",
	description : "range atk, roll d6 for dmg - 1: 1d8 fire, 2: 1d8 acid, 3: 1d8 lightning, 4: 1d8 poison, 5: 1d8 cold, 6: 1d8 force",
	descriptionMetric : "range atk, roll d6 for dmg - 1: 1d8 fire, 2: 1d8 acid, 3: 1d8 lightning, 4: 1d8 poison, 5: 1d8 cold, 6: 1d8 force",
	descriptionFull : desc([
		"Make a ranged attack, on a successful hit roll a d6 for dmg",
		"1 = 1d8 fire damage",
		"2 = 1d8 acid damage",
		"3 = 1d8 lightning damage",
		"4 = 1d8 poison damage",
		"5 = 1d8 cold damage",
		"6 = 1d8 force damage", 
		"At higher levels: Cards thrown increase by 1 at 5th, 11th, and 17th.",
	]),
},
WeaponsList["card throw"] = {
	name : "Card Throw",
	source : ["HB"],
	regExpSearch : /^(?=.*card)(?=.*throw).*$/i,
	type : "Cantrip",
	ability : 6,
	ablilitytodamage : false,
	damage : [1, 8, "'roll'"],
	range : "60 ft",
	list : "spell",
	description : "roll d6 for dmg - 1: 1d8 fire, 2: 1d8 acid, 3: 1d8 lightning, 4: 1d8 poison, 5: 1d8 cold, 6: 1d8 force.",
	},
];
