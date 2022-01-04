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

RaceList["dusk corvum"] = {
	regExpSearch : /^(?=.*corvum)(?=.*(dusk)).*$/i,
	name : "Dusk Corvum",
	sortname : "Corvum, Dusk",
	source : ["HW", 12],
	plural : "Dusk Corvums",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	skillstxt : "Choose one from Arcana, History, Nature, or Religion.",
	weaponsAdd : ["Birdfolk Talons"],
	age : " reach adulthood at 18 years and live until around 70",
	height : " range from 4 and a half to 5 feet",
	weight : " weigh around 100 lbs",
	improvements : "Dusk Corvum: +2 Intelligence and +1 Dexterity.",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Dusk Corvum (+2 Intelligence and +1 Dexterity)" + (typePF ? " " : "\n") + "Talons: I can unarmed strike for 1d4 piercing damage, and have advantage on Athletics to climb.\nLearned: I have proficiency in Arcana, History, Nature, or Religion.\nAppraising Eye: I can spend an action to determine magical properties, activation, and estimate market price of any item, once per short rest.\nSkulker: I have advantage on Stealth checks in dim light or darkness.\nStreet Smarts: I have proficiency in the Insight skill.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"appraising eye" : {
			name : "Appraising Eye",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["action", ""],
		}
	}
}