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

var iFileName = "Thylean Siren.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
};

RaceList["thylean siren"] = {
	regExpSearch : /^(?=.*thylean)(?=.*siren).*$/i,
	name : "Thylean Siren",
	sortname : "Siren, Thylean",
	source : ["OotD", 320],
	plural : "Thylean Sirens",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
	},
	languageProfs : ["Common", "Celestial"],
	age : " reach adulthood in their late teens and live less than 500 years",
	height : " range from barely 5 to just under 6 feet tall and have a wingspan of around 6 ft",
	weight : " weigh around 165 lb",
	heightMetric : " range from barely 1,5 to just under 1,8 metres tall and have a wingspan of around 1,8 metres",
	weightMetric : " weigh around 75 kg",
	scorestxt : "+2 Charisma and +1 Dexterity",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Thylean Siren (+2 Charisma +1 Dexterity)" + (typePF ? "\n" : " ") +
		"Enthralling Voice: I have adv. on Performance and Persuasion checks that rely on my voice. I can also hold my breath for 1 hour. " +
		"Wavering Emotion: After a short or long rest I choose joyful or sad. If sad, I can't fly but gain Songs of Sorrow. If joyful, I can fly but lose Songs of Sorrow. " +
		"Flight: I can fly when joyful and not wearing medium or heavy armor. " +
		"Songs of Sorrow: 1st level: Charm Person; 3rd level: Enthrall; 5th level: Hold Person. These can be used once per short rest. Charisma is my spellcasting ability for these and require my targets to hear me.",
	spellcastingAbility : 6,
	features : {
		"charm person" : {
			name : "Songs of Sorrow (Level 1)",
			limfeaname : "Charm Person (1 target)",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Songs of Sorrow (Level 1)",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : 'oncesr'
			},
			spellChanges : {
				"charm person" : {
					description : "1 humanoid, save or charmed; advantage on save if I or my allies are fighting it",
					changes : "Using Songs of Sorrow, I cast Charm Person as if I'm using a 1st-level spell slot, affecting 1 humanoid. The target must be able to hear me."
				}
			}
		},
		"enthrall" : {
			name : "Songs of Sorrow (Level 3)",
			limfeaname : "Enthrall",
			minlevel : 3,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Songs of Sorrow (Level 3)",
				spells : ["enthrall"],
				selection : ["enthrall"],
				firstCol : 'oncesr'
			}
		},
		"hold person" : {
			name : "Songs of Sorrow (Level 5)",
			limfeaname : "Hold Person",
			minlevel : 5,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Enchanting Music (Level 5)",
				spells : ["hold person"],
				selection : ["hold person"],
				firstCol : 'oncesr'
			}
		}
	}
}