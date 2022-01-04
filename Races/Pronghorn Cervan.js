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

RaceList["pronghorn cervan"] = {
	regExpSearch : /^(?=.*cervan)(?=.*(pronghorn)).*$/i,
	name : "Pronghorn Cervan",
	sortname : "Cervan, Pronghorn",
	source : ["HW", 22],
	plural : "Pronghorn Cervans",
	size : 3,
	speed : {walk : {spd : 30, enc : 20}},
	skillstxt : "Choose one from Athletics, Medicine, Nature, or Survival",
	languageprofs : ["Birdfolk", "Cervan (no writing)"],
	weapons : ["Antlers"],
	age : " mature around 12, live for 100-150 years.",
	height : " close to 7 feet.",
	weight : " over 200 lbs.",
	improvements : "Pronghorn Cervan: +2 Constitution and +1 Strength.",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Pronghorn Cervan (+2 Constitution and +1 Strength)" + (typePF ? " " : "\n") + "Practical: I gain proficiency in Athletics, Medicine, Nature, or Survival.\nSurge of Vigor: If an attack does more than half of my remaining hit points in damage, I regain 1d12 + my Constitution modifier immediately, once per long rest.\nRobust Build: My carrying capacity is doubled, as is the weight I can push, drag, or lift.\nAntlers: I can gore with my antlers. I can also charge as a bonus action if I spend 20 feet in a straight line, doing 1d6 extra damage. If the target is Large or smaller, they make a Strength save DC 8 + Strength + proficiency or are pushed 10 feet back.",
	features : {
		"surge of vigor" : {
			name : "Surge of Vigor",
			usages : 1,
			recovery : "long rest"
		},
		"charge" : {
			name : "Charge",
			actions : ["bonus action", ""]
		}
	},
	carryingCapacity : 2
},

WeaponsList["antlers"] = {
	regExpSearch : /^(?=.*\bantlers?\b).*$/i,
	name : "Antlers",
	source : ["HW", 23],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	dc : true,
	monkweapon : true
}