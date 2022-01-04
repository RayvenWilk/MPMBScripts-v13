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

RaceList["hedge"] = {
	regExpSearch : /^(?=.*hedge).*$/i,
	name : "Hedge",
	source : ["HW", 24],
	plural : "Hedges",
	size : 2,
	speed : {
		walk : {spd : 25, enc: 15},
		burrow : {spd : 15, enc: 10}
	},
	languageProfs : ["Birdfolk", "Hedge"],
	armorOptions : {
		regExpSearch : /^(?=.*spiny)(?=.*quills).*$/i,
		name : "Spiny Quills",
		source : ["HW", 25],
		ac : 14
	},
	age : " mature around 20, live for 120 years.",
	height : " are between 3 and 4 feet tall.",
	weight : " weigh around 70 lbs.",
	improvements : "Hedge: +2 Charisma and +1 Wisdom.",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Hedge (+2 Charisma and +1 Wisdom)" + (typePF ? " " : "\n") + "Natural Burrower: I can burrow through soil but not anything more substantial.\nSpiny Quills: I can't wear armor but can use shields. My AC is 14 + DEX\nCurl Up: I can use my action to curl up. While curled up, I can't move, attack, or cast spells with S components. My AC becomes 19, ignoring DEX. I can still use a shield. A creature that misses me with a melee attack takes 2d4 piercing damage. If I'm hit while curled up, I get knocked prone.\nI can communicate simple ideas with bugs.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Forest Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : 'atwill'
	}],
	features : {
		"animal messenger" : {
			name : "Forest Magic",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Forest Magic",
				spells : ["animal messenger"],
				selection : ["animal messenger"],
				firstCol : 'oncesr'
			}
		},
		"curl up" : {
			name : "Curl Up",
			minlevel : 1,
			actions : ["action", ""]
		}
	}
}