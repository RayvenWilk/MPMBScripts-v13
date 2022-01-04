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

SourceList.HW = {
	name : "Humblewood",
	abbreviation : "HW",
	group : "Deck of Many",
	url : "https://hitpointpress.com/humblewood/"
};

SourceList["HW:TotSG"] = {
	name : "Humblewood: Tenders of the Scorched Grove",
	abbreviation : "HW:TotSG",
	group : "Deck of Many",
	url : "https://hitpointpress.com/humblewood/"
};

RaceList["vulpin"] = {
	regExpSearch : /vulpin/i,
	name : "Vulpin",
	source : ["HW", 30],
	plural : "Vulpin",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	languageProfs : ["Birdfolk", "Vulpin"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*vulpin)(?=.*\bbite?\b).*$/i,
		name : "Vulpin Bite",
		source : ["HW", 30],
		damage : [1, 6, "piercing"],
		description : "Finesse"
	},
	weaponsAdd : ["Vulpin Bite"],
	vision : [["Darkvision", 60]],
	age : " mature at an average pace, reaching adulthood at 15 years and live well past 90",
	height : " range from 4 and a half to 5 feet",
	weight : " weigh around 90-140 lbs",
	improvements : "Vulpin: +2 Intelligence and +1 Charisma;",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Vulpin (+2 Intelligence and +1 Charisma)" + (typePF ? " " : "\n") + "Bite: I can bite as an unarmed strike, dealing 1d6 piercing damage. Can use STR or DEX.\nBewitching Guile: I can cast charm person at level 1, ambush prey at level 3, and fear at level 5, using Intelligence.",
	abilitysave : 4,
	spellcastingAbility : 4,
	features : {
		"charm person" : {
			name : "Charm Person",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Bewitching Guile)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Bewitching Guile (level 1)",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true
			}
		},
		"ambush prey" : {
			name : "Ambush Prey",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Bewitching Guile)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Bewitching Guile (level 3)",
				spells : ["ambush prey"],
				selection : ["ambush prey"],
				oncelr : true
			}
		},
		"fear" : {
			name : "Fear",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Bewitching Guile)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Bewitching Guile (level 5)",
				spells : ["fear"],
				selection : ["fear"],
				oncelr : true
			}
		}
	}
}