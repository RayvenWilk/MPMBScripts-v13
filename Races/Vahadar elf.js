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

var iFileName = "Vahadar elf.js";

SourceList["PS:K"] = {
	name : "Plane Shift: Kaladesh",
	abbreviation : "PS:K",
	group : "Plane Shift",
	url : "https://media.wizards.com/2017/downloads/magic/Plane-Shift_Kaladesh.pdf",
	date : "2017/02/16"
};

RaceList["vahadar elf"] = { // Includes contributions by SoilentBrad
	regExpSearch : /^(?!.*half)((?=.*\bvahadar\b)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\bcity\b))).*$/i,
	name : "Vahadar",
	sortname : "Elf, Vahadar",
	source : ["PS:K", 21],
	plural : "Vahadar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", 1],
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
	trait : "Vahadar (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, but I still need 8 hours for a long rest.\nCantrip: I know one cantrip of my choice from the druid spell list. Wisdom is my spellcasting ability for it.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Vahadar Cantrip",
		"class" : "druid",
		level : [0, 0],
		firstCol : 'atwill'
	}
}
