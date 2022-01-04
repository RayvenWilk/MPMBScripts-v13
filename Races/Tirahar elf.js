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

var iFileName = "Tirahar elf.js";

SourceList["PS:K"] = {
	name : "Plane Shift: Kaladesh",
	abbreviation : "PS:K",
	group : "Plane Shift",
	url : "https://media.wizards.com/2017/downloads/magic/Plane-Shift_Kaladesh.pdf",
	date : "2017/02/16"
};

RaceList["tirahar elf"] = {
	regExpSearch : /^(?!.*half)(?=.*\btirahar\b).*$/i,
	name : "Tirahar",
	sortname : "Elf, Tirahar",
	source : ["PS:K", 21],
	plural : "Tirahar",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponProfs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Tirahar (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
}