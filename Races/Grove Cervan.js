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

RaceList["grove cervan"] = {
	regExpSearch : /^(?=.*cervan)(?=.*(grove)).*$/i,
	name : "Grove Cervan",
	sortname : "Cervan, Grove",
	source : ["HW", 22],
	plural : "Grove Cervans",
	size : 3,
	speed : {walk : {spd : 35, enc : 25}},
	skillstxt : "Choose one from Athletics, Medicine, Nature, or Survival",
	languageprofs : ["Birdfolk", "Cervan (no writing)"],
	age : " mature around 12, live for 100-150 years.",
	height : " 5 to 6 feet.",
	weight : " 130-180 lbs.",
	improvements : "Grove Cervan: +2 Constitution and +1 Dexterity.",
	scores : [0, 1, 2, 0, 0, 0],
	trait : "Grove Cervan (+2 Constitution and +1 Dexterity)" + (typePF ? " " : "\n") + "Practical: I gain proficiency in Athletics, Medicine, Nature, or Survival.\nSurge of Vigor: If an attack does more than half of my remaining hit points in damage, I regain 1d12 + my Constitution modifier immediately, once per long rest.\nStanding Leap: my long jump is 30 and my high jump is 15 without running start.\nNimble Step: Opportunity attacks made against me are at disadvantage.",
	features : {
		"surge of vigor" : {
			name : "Surge of Vigor",
			usages : 1,
			recovery : "long rest"
		}
	}
}