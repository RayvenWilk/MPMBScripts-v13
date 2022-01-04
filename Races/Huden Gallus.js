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

RaceList["huden gallus"] = {
	regExpSearch : /^(?=.*gallus)(?=.*(huden)).*$/i,
	name : "Huden Gallus",
	sortname : "Gallus, Huden",
	source : ["HW", 15],
	plural : "Huden Gallus",
	size : 3,
	speed : { walk : { spd : 30, enc: 20 }},
	skills: ["Nature"],
	languageProfs : ["Birdfolk", "Auran (understand only)"],
	weaponprofs : [true, false, []],
	toolProfs : [["brewer's, carpenter's, or smith's tools", 1]],
	age : " reach adulthood at 18 years and live until around 70",
	height : " range from 4 to 5 feet",
	weight : " weigh around 90 lbs",
	improvements : "Huden Gallus: +2 Wisdom and +1 Dexterity.",
	scores : [0, 1, 0, 0, 2, 0],
	trait : "Huden Gallus (+2 Wisdom and +1 Dexterity)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nWing Flap: I can propel myself half my movement speed as part of a jump.\nCommunal: History checks about the history, culture, or community of my race are made with double proficiency bonus.\nSeedspeech. I can communicate simple ideas to plants, and am able to interpret their responses in simple language.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		},
		"wing flap" : {
			name : "Wing Flap",
			minlevel : 1,
			action : ["bonus action",""]
		}
	}
}