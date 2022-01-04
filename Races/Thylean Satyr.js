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

var iFileName = "Thylean Satyr.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
};

RaceList["thylean satyr"] = {
	regExpSearch : /^(?=.*thylean)((?=.*satyr)|(?=.*goat\s*(wo)?man)).*$/i,
	name : "Thylean Satyr",
	sortname : "Satyr, Thylean",
	source : ["OotD", 319],
	plural : "Thylean Satyrs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed", "frightened"]
	},
	languageProfs : ["Common", "Sylvan"],
	toolProfs : [["Musical instrument", 1]],
	age : " mature quickly, reaching adulthood by their early teens. They can live for several centuries.",
	height : " range from 4 to 5 feet tall",
	weight : " weigh between 100 and 150 lbs",
	heightMetric : " range from 1,2 to 1,5 metres tall",
	weightMetric : " weigh between 45 and 68 kg",
	scorestxt : "+2 Dexterity and +1 Charisma",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Thylean Satyr (+2 Dexterity +1 Charisma)" + desc([
		"Memory for Music: I am proficient with an instrument of my choice and I have adv. on Performance checks made with it. I can also memorize and perform any song after hearing it only once.",
		"Enchanting Music: Starting at level 3 I can cast Sleep. Starting at level 7 I can cast Suggestion. Both spells can be used once per long rest. I can cast Minor Illusion. Charisma is my spellcasting ability for these and require an instrument with which I am proficient."
	]),
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Enchanting Music (level 1)",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		firstCol : 'atwill'
	},
	features : {
		"sleep" : {
			name : "Enchanting Music (Level 3)",
			limfeaname : "Sleep",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Enchanting Music (Level 3)",
				spells : ["sleep"],
				selection : ["sleep"],
				firstCol : 'oncelr'
			}
		},
		"suggestion" : {
			name : "Enchanting Music (Level 5)",
			limfeaname : "Suggestion",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Enchanting Music (Level 5)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				firstCol : 'oncelr'
			}
		}
	}
}