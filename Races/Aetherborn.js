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

var iFileName = "Aetherborn.js";

SourceList["PS:K"] = {
	name : "Plane Shift: Kaladesh",
	abbreviation : "PS:K",
	group : "Plane Shift",
	url : "https://media.wizards.com/2017/downloads/magic/Plane-Shift_Kaladesh.pdf",
	date : "2017/02/16"
};

RaceList["aetherborn"] = { // Includes contributions by SoilentBrad
	regExpSearch : /aetherborn/i,
	name : "Aetherborn",
	sortname : "Aetherborn",
	source : ["PS:K", 17],
	plural : "Aetherborn",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic"],
	skills : ["Intimidation"],
	age : " come into being as adults and live no more than a few years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 100 lb, and get lighter as they age",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	scorestxt : "+2 Charisma, +1 to two others of your choice",
	scores : [0, 0, 0, 0, 0, 2],
	trait : "Aetherborn (+2 Charisma, +1 to two others of your choice)\nBorn of Aether: I have resistance to necrotic damage.\nMenacing: I gain proficiency in the Intimidation skill.",
}