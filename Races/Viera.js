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

var iFileName = "Viera Race.js";

SourceList["Lich King"]={
	name : "Lich King",
	abbreviation :"LK",
	group : "Lich King",
};

RaceList["viera"] = {
	regExpSearch : /viera/i,
	name : "Viera",
	plural : "Viera",
	size : 3,
	speed : {
	walk : { spd : 30, enc : 20 }},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 60],["Advantage on Wisdom (Perception) checks made to hear or listen"]],
	weaponprofs : [false, false, ["shortbow", "light crossbow", "rapier"]],
	skills : ["Perception",],
	age : " reach adulthood in their late teens and live approximately three times the lifespan of humans.",
	height : " range from 5'6 to over 6 feet tall (5'6\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	improvements : "Viera: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Viera (+2 Dexterity, +1 Wisdom)\nHeightened Senses:\n I have proficiency in the Perception skill and advantage in checks that involve hearing.\n Viera Weapon Training: I have proficiency with the shortbow, longbow, light crossbow, heavy crossbow, rapier and the longsword."
}