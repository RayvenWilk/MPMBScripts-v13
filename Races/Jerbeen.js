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

RaceList["jerbeen"] = {
	regExpSearch : /^(?=.*hedge).*$/i,
	name : "Jerbeen",
	source : ["HW", 27],
	plural : "Jerbeens",
	size : 2,
	speed : {walk : {spd : 30, enc : 20}},
	languageProfs : ["Birdfolk", "Jerbeen"],
	age : " mature around 5 years and live for 40",
	height : " stand between 2 and 3 feet tall",
	weight : " weigh between 20-40 lbs.",
	improvements: "Jerbeen: +2 Dexterity and +1 Charisma",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Jerbeen (+2 Dexterity and +1 Charisma)" + (typePF ? " " : "\n") + "Standing Leap: My long jump is 30 feet and high jump is 15 feet, without running start.\nNimbleness: I can move through the space of a creature a larger size than me.\nTake Heart: I have advantage on STR saves and saves against frighten if I have a non-frightened and non-incapacitated ally I can see or hear within 5 feet.\nTeam Tactics: I can use the Help action as a bonus action.",
	features : {
		"team tactics" : {
			name : "Help",
			actions : ["bonus action", ""]
		}
	}
}