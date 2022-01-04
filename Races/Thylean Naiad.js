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

var iFileName = "Thylean Naiad.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};
RaceList["thylean naiad"] = {
	regExpSearch : /^(?=.*thylean)((?=.*(river|lake).*nymph)|(?=.*naiad)).*$/i,
	name : "Thylean Naiad",
	sortname : "Naiad, Thylean",
	source : ["OotD", 317],
	plural : "Thylean Naiads",
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
	trait : "Thylean Naiad (+2 Charisma +1 Wisdom)" + desc([
		"Enthralling Beauty: I am proficient in the Persuasion skill. I can cast the Charm Person spell once per short rest as a 1st-level spell.",
		"Naiad Ancestry: I can hold my breath for an hour. Starting at level 3 I can cast Create or Destroy Water. Starting at level 7 I can cast Control Water. Both spells can be used once per short rest. Charisma is my spellcasting ability for these."
	]),
	spellcastingAbility : 6,
	features : {
		"charm person" : {
			name : "Enthralling Beauty",
			limfeaname : "Charm Person (1 target)",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Enthralling Beauty",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : 'oncesr'
			},
			spellChanges : {
				"charm person" : {
					description : "1 humanoid, save or charmed; advantage on save if I or my allies are fighting it",
					changes : "Using Enthralling Beauty, I cast Charm Person as if I'm using a 1st-level spell slot, affecting 1 humanoid."
				}
			}
		},
		"create or destroy water" : {
			name : "Naiad Ancestry (level 3)",
			limfeaname : "Create or Destroy Water",
			minlevel : 3,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Naiad Ancestry (level 3)",
				spells : ["create or destroy water"],
				selection : ["create or destroy water"],
				firstCol : 'oncesr'
			}
		},
		"control water" : {
			name : "Naiad Ancestry (level 7)",
			limfeaname : "Control Water",
			minlevel : 7,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Naiad Ancestry (level 7)",
				spells : ["control water"],
				selection : ["control water"],
				firstCol : 'oncesr'
			}
		}
	}
}