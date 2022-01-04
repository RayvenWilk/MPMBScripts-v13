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

RaceList["swift strig"] = {
	regExpSearch : /^(?=.*strig)(?=.*(swift)).*$/i,
	name : "Swift Strig",
	sortname : "Strig, Swift",
	source : ["HW", 20],
	plural : "Swift Strigs",
	size : 3,
	speed : {walk : {spd : 35, enc : 25}},
	skills : ["Survival"],
	weapons : ["Birdfolk Talons"],
	languageprofs : ["Birdfolk", "Auran (can't speak)"],
	vision : [["Darkvision", 60]],
	age : " mature around 15, live to 80.",
	height : " 4 to 5 feet.",
	weight : " around 110 lbs.",
	improvements : "Swift Strig: +2 Strength and +1 Dexterity.",
	scores : [2, 1, 0, 0, 0, 0],
	trait : "Swift Strig (+2 Strength and +1 Dexterity)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nTalons: My unarmed strikes deal 1d4 piercing damage and I have advantage on Athletics check for climbing.\nPatterned Feathers: I have advantage on Stealth checks to hide in a forest.",
	features : {
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : ["reaction", " (falling)"]
		}
	}
};

WeaponsList["birdfolk talons"] = {
	baseWeapon : "unarmed strike",
	regExpSearch : /^(?=.*(\bbirdfolk?\b))(?=.*\btalons?\b).*$/i,
	name : "Birdfolk Talons",
	soruce : ["HW", 12],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "piercing"]
}