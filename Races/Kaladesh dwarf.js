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

var iFileName = "Kaladesh dwarf.js";

SourceList["PS:K"] = {
	name : "Plane Shift: Kaladesh",
	abbreviation : "PS:K",
	group : "Plane Shift",
	url : "https://media.wizards.com/2017/downloads/magic/Plane-Shift_Kaladesh.pdf",
	date : "2017/02/16"
};

RaceList["kaladesh dwarf"] = { // Includes contributions by SoilentBrad
	regExpSearch : /^(?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\bkaladesh\b).*$/i,
	name : "Kaladesh dwarf",
	sortname : "Dwarf, Kaladesh",
	source : ["PS:K", 19],
	plural : "Kaladesh dwarves",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	toolProfs : [["Artisan's tools", 2]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight : " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric : " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Kaladesh Dwarf (+2 Constitution, +1 Wisdom)\nArtisan's Expertise: I have proficiency and expertise with two artisan's tools of my choice.\n   Whenever I make an Intelligence (History) check related to the origin of any architectural construction, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.\nDwarven Toughness: My hit point maximum increases by 1 for every level I have.",
	calcChanges : {
		hp : function (totalHD) { return [totalHD, "Dwarven Toughness"]; }
	}
}