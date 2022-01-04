/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Sprite"
				This subclass was been made by M.T. Black, Greg Marks, & James Introcaso
				This code uses the subclass as it is featured in Mirt's Undermountain Survival Guide
	Code by:	Darren
	Date:		2019-04-16 (sheet v13.0.0beta14)
*/

var iFileName = "Sprite [M.T. Black's work, transcribed by Darren].js";
RequiredSheetVersion(13);

SourceList["MUSG:TS"] = {
	name : "Mirt's Undermountain Survival Guide: Sprite",
	abbreviation : "MUSG:TS",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/269024/Mirts-Undermountain-Survival-Guide?src=newest_community&filters=45680",
	date : "2019/03/09" // unsure of exact date of release
};

RaceList["sprite"] = {
	regExpSearch : /sprite/i,
	name : "Sprite",
	source : ["MUSG:TS", 13],
	plural : "Sprites",
	size : 5,
	speed : {
        walk : { spd : 10, enc : 5 },
        fly : { spd : 40, enc : 0 }
	},
	languageProfs : ["Common", "Elvish", "Sylvan"],
    toolProfs : ["Poisoner's kit"],
    weaponprofs : [false, false, ["rapier", "shortbow"]],
    armor : [true, false, false, false],
	age : " a myserious affair. Some are near immortal, others not.",
	height : " stand about 18 inches tall.",
	weight : " weigh around 4 1/2 pounds. (by my own estimation)",
	heightMetric : " stand around 46cm tall",
	weightMetric : " weigh around 2kg. (by my own estimation)",
	improvements : "Sprite: +2 Dexterity, +2 Intelligence, -4 Strength;",
	scores : [-4, 2, 0, 2, 0, 0],
	trait : "Sprite (+2 Dexterity, +2 Intelligence, -4 Strength)\nPoison Arrows: DC10 CON save or poisoned for 1 minute. If save is 5 or lower, target is\nunconscious for 1 min. I can cast Invisibility once per long rest.\nAt 3rd level, I can cast Detect Thoughts once per long rest.\nSprite equipment costs 50% more, is 1/5th the weight, and weapons inflict 1 die lower damage; 1d4 becomes 1.",
	features : {
		"invisibility" : {
			name : "Sprite Magic: Invisibility",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : ["action", ""],
			spellcastingBonus : { 
				name : "Sprite Magic",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true,
			},
		},
		"detect thoughts" : {
			name :  "Sprite Magic: Detect Thoughts",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			action : ["action", ""],
			spellcastingBonus : { 
				name : "Sprite Magic (level 3)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				oncelr : true,
			},
		}
	}
};
