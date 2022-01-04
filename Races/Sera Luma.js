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

RaceList["sera luma"] = {
	regExpSearch : /^(?=.*luma)(?=.*(sera)).*$/i,
	name : "Sera Luma",
	sortname : "Luma, Sera",
	source : ["HW", 17],
	plural : "Sera Lumas",
	size : 2,
	speed : {walk : {spd : 25, enc: 15}},
	skills : ["Performance"],
	languageProfs : ["Birdfolk", "Auran (can't speak)"],
	age : " reach adulthood around 20, live until 70.",
	height : " around 3 feet tall.",
	weight : " around 30 lbs.",
	improvements : "Sera Luma: +2 Charisma and +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Sera Luma (+2 Charisma and +1 Wisdom)" + (typePF ? " " : "\n") + "Glide: I can slow my fall at 60 feet per round, so long as I don't carry heavy weapons, heavy armor, or a shield.\nWing Flap: I can propel myself half my movement speed as part of a jump.\nFated: Once per Long Rest I can reroll any attack, skill check, or saving throw before the outcome is known.\nSongbird: I can cast Charm Person while performing, not requiring somatic components.",
	abilitysave : 6,
	spellcastingAbility : 6,
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
		},
		"charm person" : {
			name : "Charm Person",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "(Songbird)",
			spellcastingBonus : {
				name : "Songbird",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true
			}
		}
	},
	spellcastingBonus : {
		name : "Touched",
		"class" : "sorcerer",
		level : [0, 0],
		firstcol : 'atwill'
	}
}