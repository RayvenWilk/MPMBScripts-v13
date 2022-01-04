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

var iFileName = "Thylean Centaur.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};
RaceList["thylean centaur"] = {
	source : ["OotD", 312],
	regExpSearch : /^((?=.*thylean?)(?=.*centaur)).*$/i,
	name : "Thylean Centaur",
	sortname : "Centaur, Thylean",
	plural : "Thylean Centaurs",
	scores : [2, 0, 0, 0, 1, 0],
	scorestxt : "+2 Strength and +1 Wisdom",
	age : " reach adulthood in their late teens and live less than 100 years",
	size : 3,
	height : " range from 6'6\" to 7 feet in height",
	weight : " weigh between 700 and 900 pounds",
	heightMetric : " range from 1,98 metres to 2,13 metres in height",
	weightMetric : " weigh between 317 and 408 kg",
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Sylvan"],
	features : {
		"mountable" : {
			name : "Mountable",
			minlevel : 1,
			action : ["bonus action", ""]
		}
	},
	trait : "Thylean Centaur (+2 Strength +1 Wisdom)" + (typePF ? "\n" : " ") +
		"Charge: If I move 30 ft straight toward a target and then hit it with a melee attack on the same turn, the target takes an extra 1d6 damage from the first attack." + (typePF ? "\n" : " ") +
		"Mountable: As a bonus action, I can let a Medium bipedal ally within 5ft to ride on my back until the end of my turn at which point they dismount within 5ft. The rider is not considered mounted and does not provoke opportunity attacks." + (typePF ? "\n" : " ") +
		"Quadrapedal Stride: Climbing or maneuvering in tight spaces is considered difficult terrain.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isMeleeWeapon) {
					fields.Description += (fields.Description ? '; ' : '') + '+1d6 damage on first attack after Charging';
				}
			},
			"I do +1d6 damage on the first attack after moving 30ft straight toward a target."
		]
	}
}