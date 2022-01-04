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

var iFileName = "Thylean Nereid.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
};
RaceList["thylean nereid"] = {
	regExpSearch : /^(?=.*thylean)((?=.*(sea|ocean).*nymph)|(?=.*nereid)).*$/i,
	name : "Thylean Nereid",
	sortname : "Nereid, Thylean",
	source : ["OotD", 317],
	plural : "Thylean Nereids",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 40, enc : 30 }
	},
	skills : ["Persuasion"],
	languageProfs : ["Common", "Sylvan"],
	age : " are born in cocoons where they remain for around 100 years before emerging. They can live for as long as 1000 years.",
	height : " range from barely 5 to well over 6 feet tall",
	weight : " weigh around 165 lbs",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall",
	weightMetric : " weigh around 75 kg",
	scorestxt : "+2 Charisma and +1 Wisdom",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Thylean Nereid (+2 Charisma +1 Wisdom)" + desc([
		"Enthralling Beauty: I am proficient in the Persuasion skill. I can cast the Charm Person spell once per short rest as a 1st-level spell.",
		"Nereid Ancestry: I can breathe underwater. Starting at level 3 I can cast Fog Cloud. Starting at level 7 I can cast Water Walk. Both spells can be used once per short rest. Charisma is my spellcasting ability for these."
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
		"fog cloud" : {
			name : "Nereid Ancestry (level 3)",
			limfeaname : "Fog Cloud",
			minlevel : 3,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Nereid Ancestry (level 3)",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
				firstCol : 'oncesr'
			}
		},
		"water walk" : {
			name : "Nereid Ancestry (level 7)",
			limfeaname : "Water Walk",
			minlevel : 7,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Nereid Ancestry (level 7)",
				spells : ["water walk"],
				selection : ["water walk"],
				firstCol : 'oncesr'
			}
		}
	}
}