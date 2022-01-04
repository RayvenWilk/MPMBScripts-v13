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

var iFileName = "Thylean Aurae.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};
RaceList["thylean aurae"] = {
	source : ["OotD", 317],
	regExpSearch : /^(?=.*thylean)((?=.*(constellation|breeze).*nymph)|(?=.*aurae)).*$/i,
	name : "Thylean Aurae",
	sortname : "Aurae, Thylean",
	plural : "Thylean Aurae",
	scores : [0, 0, 0, 0, 1, 2],
	scorestxt : "+2 Charisma and +1 Wisdom",
	age : " are born in cocoons where they remain for around 100 years before emerging. They can live for as long as a 1000 years.",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skills : ["Persuasion"],
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 60], ["Adv. on Wisdom (Survival) checks when navigating by the stars", 0]],
	height : " range from barely 5 to well over 6 feet tall",
	weight : " weigh around 165 lbs",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall",
	weightMetric : " weigh around 75 kg",
	trait : "Thylean Aurae (+2 Charisma +1 Wisdom)" + desc([
		"Enthralling Beauty: I am proficient in the Persuasion skill. I can cast the Charm Person spell once per short rest as a 1st-level spell.",
		"Aurae Ancestry: I have advantage on Wisdom (Survival) checks when navigating by the stars. Starting at level 3 I can cast Faerie Fire. Starting at level 7 I can cast Levitate. Both spells can be used once per short rest. Charisma is my spellcasting ability for these."
	]),
	spellcastingAbility : 6,
	features : {
		"charm person" : {
			name : "Enthralling Beauty",
			limfeaname : "Charm Person",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Enthralling Beauty",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : 'oncesr'
			}
		},
		"faerie fire" : {
			name : "Aurae Ancestry (level 3)",
			limfeaname : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Aurae Ancestry (level 3)",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncesr'
			}
		},
		"levitate" : {
			name : "Aurae Ancestry (level 7)",
			limfeaname : "Levitate",
			minlevel : 7,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Aurae Ancestry (level 7)",
				spells : ["levitate"],
				selection : ["levitate"],
				firstCol : 'oncesr'
			}
		}
	}
}