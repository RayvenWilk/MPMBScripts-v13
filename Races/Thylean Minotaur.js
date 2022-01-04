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

var iFileName = "Thylean Minotaur.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};
RaceList["thylean minotaur"] = {
	source : ["OotD", 315],
	regExpSearch : /^(?=.*thylean?)(?=.*(minotaur|bull\s*(wo)?man)).*$/i,
	name : "Thylean Minotaur",
	sortname : "Minotaur, Thylean",
	plural : "Thylean Minotaurs",
	scores : [2, 0, 1, 0, 0, 0],
	scorestxt : "+2 Strength and +1 Constitution",
	age : " reach adulthood in their late teens and live less than 100 years",
	size : 3,
	height : " range from 6 to 8 feet in height",
	weight : " weigh between 200 and 400 pounds",
	heightMetric : " range from 1,8 metres to 2,4 metres in height",
	weightMetric : " weigh between 90 and 181 kg",
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Abyssal"],
	vision : [["Darkvision", 60], ["Keen Snout", 0], ["Colorblind (gray/red)", 0], ["Adv. on rolls to solve maze-like puzzles", 0]],
	savetxt : {
		text : ["Automatically succeed on saving throws against the Maze and Hypnotic Pattern spells"]
	},
	trait : "Thylean Minotaur (+2 Strength +1 Constitution)" + desc([
		"Keen Snout: I have advantage on Wisdom (Perception) checks relying on smell. I can detect strong odors up to six miles away.",
		"Labyrinthine Vision: Advantage on rolls to solve maze-like puzzles.",
		"Cursed Transformation: At 5th level I can transform into a Bull using a bonus action. At 9th level I turn into a Dire Bull. Automatically triggered by prolonged exposure to bright reds.",
	]),
	features : {
		"cursed transformation" : {
			name : "Cursed Transformation",
			minlevel : 5,
			tooltip: " Cursed Transformation",
			action : ["bonus action", ""],
			usages: 1,
			recovery : "long rest"
		}
	}
}