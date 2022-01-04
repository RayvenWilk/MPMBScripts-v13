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

var iFileName = "Something[transcribed by rayvenwilk].js";

SourceList["KB:EE"] = {
    name : "Keith Baker: Exploring Eberron",
    abbreviation : "KB:EE",
    group : "Dungeon Master's Guild",
    url : "https://www.dmsguild.com/product/315887/Exploring-Eberron",
    date : "2020/07/30",
    defaultExcluded : true
};

RaceList["aereni elf"] = {
    regExpSearch : /^(?=.*aereni)(?=.*elf)/i,
    name : "Aereni Elf",
    sortname : "Elf, Aereni",
    source : ["KB:EE", 209],
    plural : "Aereni Elves",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 30 }
    },
    languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
    skills : ["Perception"],
    skillstxt : "Choose one skill or tool proficiency granted by my race, class, or background. My proficiency bonus is doubled for any ability check I make using this chosen proficiency.",
    age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
    scores : [0, 2, 0, 0, 0, 0],
    scorestxt : "+2 Dexterity, +1 Intelligence or Wisdom",
    traits : "Aereni Elf (+2 Dexterity, +1 Intelligence or Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nCantrip: I know one cantrip of my choice from the cleric or wizard spell list. Intelligence is my spellcasting ability for wizard spells and Wisdom is for cleric spells.",
	spellcastingBonus : {
		name : "Aereni Elf Cantrip",
		"class" : ["cleric", "wizard"],
		level : [0, 0],
		firstCol : 'atwill'
	}
}