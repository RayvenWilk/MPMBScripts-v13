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

RaceList["maran raptor"] = {
	regExpSearch : /^(?=.*raptor)(?=.*(maran)).*$/i,
	name : "Maran Raptor",
	sortname : "Raptor, Maran",
	source : ["HW", 18],
	plural : "Maran Raptors",
	size : 2,
	speed : {
		walk : {spd : 25, enc : 15},
		swim : {spd : 25, enc : 15}
	},
	skills : ["Perception"],
	weaponsAdd : ["Birdfolk Talons"],
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	weaponprofs : [false, false, ["longbow", "shortbow", "spear"]],
	age : " reach maturity around 20, living over 100 years.",
	height : " less than 4 feet tall.",
	weight : " around 35 lbs.",
	improvements : "Maran Raptor: +2 Dexterity and +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Maran Raptor (+2 Dexterity and +1 Intelligence)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nTalons: My unarmed strikes deal 1d4 piercing damage and I have advantage on Athletics check for climbing.\nWoodland Hunter: I turn 3/4 cover into half cover and half cover into no cover.\nHunter's Training: Longbows are not heavy weapons for me.\nPatient: I have advantage on an attack roll or ability check made as part of a readied action.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		}
	}
}