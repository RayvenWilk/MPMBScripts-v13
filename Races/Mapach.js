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

RaceList["mapach"] = {
	regExpSearch : /^(?=.*mapach).*$/i,
	name : "Mapach",
	source : ["HW", 28],
	plural : "Mapachs",
	size : 3,
	speed : {
		walk : { spd : 30, enc: 20 },
		climb : { spd : 20, enc: 10 }
	},
	languageProfs : ["Birdfolk", "Mapach"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"]},
	dmgres : ["Poison"],
	toolProfs : ["Tinker's Tools"],
	age : " mature at an average pace, reaching adulthood at 15 years and live well past 90",
	height : " range from 4 to 5 feet",
	weight : " weigh around 90-160 lbs",
	improvements : "Mapach: +2 Wisdom and +1 Constitution;",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Mapach (+2 Wisdom and +1 Constitution)" + (typePF ? " " : "\n") + "Expert Climbers: I have a climbing speed of 20 feet.\nScroungecraft: I can construct crude versions of common items from materials around me. 10 minutes to craft a tool or piece of adenturing gear worth 30 gp or less, lasting 1 hour. Can spend 8 hours to make a scroungecrafted item permanent.\nSkulker: advantage on Stealth checks made in dim light and darkness.",
}