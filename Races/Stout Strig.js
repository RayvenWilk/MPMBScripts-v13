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

RaceList["stout strig"] = {
	regExpSearch : /^(?=.*strig)(?=.*(stout)).*$/i,
	name : "Stout Strig",
	sortname : "Strig, Stout",
	source : ["HW", 20],
	plural : "Stout Strigs",
	size : 3,
	speed : {walk : {spd : 30, enc : 20}},
	skills : ["Intimidation"],
	weapons : ["Birdfolk Talons"],
	languageprofs : ["Birdfolk", "Auran (can't speak)"],
	vision : [["Darkvision", 60]],
	age : " mature around 15, live to 80.",
	height : " 4 to 5 feet.",
	weight : " around 110 lbs.",
	improvements : "Stout Strig: +2 Strength and +1 Constitution.",
	scores : [2, 0, 1, 0, 0, 0],
	trait : "Stout Strig (+2 Strength and +1 Constitution)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nTalons: My unarmed strikes deal 1d4 piercing damage and I have advantage on Athletics check for climbing.\nPatterned Feathers: I have advantage on Stealth checks to hide in a forest.\nBrawler: When I hit someone with my talons I can grapple them as a bonus action.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"brawler" : {
			name : "Brawler",
			minlevel : 1,
			action : ["bonus action", " (grapple)"]
		}
	}
}