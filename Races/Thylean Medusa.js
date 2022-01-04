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

var iFileName = "Thylean Medusa.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};
RaceList["thylean medusa"] = {
	source : ["OotD", 313],
	regExpSearch : /^((?=.*thylean?)(?=.*medusa)).*$/i,
	name : "Thylean Medusa",
	sortname : "Medusa, Thylean",
	plural : "Thylean Medusae",
	scores : [0, 2, 0, 1, 0, 0],
	scorestxt : "+2 Dexterity and +1 Intelligence",
	age : " are not born - they are made. When a humanoid is afflicted by the curse of the medusa, they gradually transform into a snake-haired monstrosity. Once transformed they may live for a 1000 years",
	size : 3,
	height : " range from barely 5 to well over 6 feet tall",
	weight : " weigh around 165 lbs",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall",
	weightMetric : " weigh around 75 kg",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	features : {
		"petrifying gaze" : {
			name : "Petrifying Gaze",
			minlevel : 5,
			action : ["action", ""]
		},
		"paralyze" : {
			name : "Paralyze (after Petrifying Gaze)",
			minlevel : 5,
			action : "bonus action"
		}
	},
	weaponOptions : {
		regExpSearch : /^((?=.*snake?)(?=.*hair)).*$/i,
		name : "Snake Hair",
		source : ["OotD", 314],
		ability : 2,
		type : "Natural",
		damage : [1, 6, "piercing"],
		range : "Melee",
		abilitytodamage : true,
		description : "DC 12 Constitution save - failure poisoned until start of my next turn"
	},
	weaponsAdd : ["Snake Hair"],
	savetxt : {
		text : ["Adv. on saving throws against spells and abilities that inflict the poisoned condition."]
	},
	trait : "Thylean Medusa (+2 Dexterity +1 Intelligence)" + desc([
		"Cursed: I was turned into a Medusa by a curse, which can only be broken by a Wish spell. When broken, I revert to my original race.",
		"Snake Hair: I can make a melee weapon attack with my snake hair dealing 1d6 piercing damage. When hit, the target must succeed on a DC 12 Con saving throw or be poisoned until the start of my next turn.",
		"Petrifying Gaze: Starting at 5th level I can force a creature within 30ft that can see my eyes to make a Con saving throw. On a failure they're paralyzed until the end of their next turn. See Notes."
	]),
	toNotesPage : [{
		name : "Thylean Medusa Features",
		source : ["OotD", 314],
		popupName : "Thylean Medua Petrifying Gaze Feature",
		page3notes : true,
		note: "\n  \u2022 Petrifying Gaze (OotD 314) " + desc(["Starting at 5th level, you can use your action to force a creature within 30 feet that can see your eyes to make a DC 8 Constitution saving throw. On a failure, the creature is paralyzed until the end of its next turn. On your turn, you can use your bonus action to force the same creature to repeat this saving throw with disadvantage. Each time it fails, it is paralyzed again until the end of its next turn. When a creature is paralyzed in this way for the third time in a span of 10 minutes, it is instantly petrified.",
			"Starting at 10th level, the DC for this saving throw increases to 10. At 15th level, the DC increases to 12. At 20th level, the DC increases to 14."])
	}]
}