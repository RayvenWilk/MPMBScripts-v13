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

var iFileName = "Vedalken.js";

SourceList["PS:K"] = {
	name : "Plane Shift: Kaladesh",
	abbreviation : "PS:K",
	group : "Plane Shift",
	url : "https://media.wizards.com/2017/downloads/magic/Plane-Shift_Kaladesh.pdf",
	date : "2017/02/16"
};

RaceList["vedalken-psk"] = { // Includes contributions by SoilentBrad
	regExpSearch : /vedalken/i,
	name : "Vedalken",
	sortname : "Vedalken",
	source : ["PS:K", 24],
	plural : "Vedalken",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Vedalken"],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " reach adulthood around 40 and live up to 500 years",
	height : " range from 6 to 6 1/2 feet tall",
	weight : " weigh less than 200 lb",
	scores : [0, 0, 0, 2, 1, 0],
	trait : "Vedalken (+2 Intelligence, +1 Wisdom)\nVedalken Cunning: I have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\nAether Lore: Whenever I make an Intelligence (History) check related to magic items or aether-powered technological devices, I can add twice my proficiency bonus, instead of any proficiency bonus I normally apply."
}