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

RaceList["kindled corvum"] = {
	regExpSearch : /^(?=.*corvum)(?=.*(kindled)).*$/i,
	name : "Kindled Corvum",
	sortname : "Corvum, Kindled",
	source : ["HW", 12],
	plural : "Kindled Corvums",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	skillstxt : "Choose one from Arcana, History, Nature, or Religion.",
	weaponsAdd : ["Birdfolk Talons"],
	age : " reach adulthood at 18 years and live until around 70",
	height : " range from 4 and a half to 5 feet",
	weight : " weigh around 100 lbs",
	improvements : "Kindled Corvum: +2 Intelligence and +1 Charisma.",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Kindled Corvum (+2 Intelligence and +1 Charisma)" + (typePF ? " " : "\n") + "Talons: I can unarmed strike for 1d4 piercing damage, and have advantage on Athletics to climb.\nLearned: I have proficiency in Arcana, History, Nature, or Religion.\nAppraising Eye: I can spend an action to determine magical properties, activation, and estimate market price of any item, once per short rest.\nConvincing: I have proficiency in Deception or Persuasion, with advantage to convince people on topics related to the skill I got from the Learned trait.\nSharp Mind: I learn an additional language, a tool proficiency, and perfect memory on everything I have seen or heard in the past month.",
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