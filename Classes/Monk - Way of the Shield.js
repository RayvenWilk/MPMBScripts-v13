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

var iFileName = "Monk - Way of the Shield.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("monk", "way of the shield", {
	regExpSearch : /^(?=.*shield)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Shield",
	source : ["OotD", 329],
	features : {
		"subclassfeature3" : {
			name : "Aresian Technique",
			source : ["OotD", 329],
			minlevel : 3,
			additional : "proficiency with shields",
			description : desc([
				"Using a shield does not affect Martial Arts, Unarmored Movement, or Unarmored Defense",
				"I can use my shield to catch and hold missiles with Deflect Missiles",
				"Opportunity attacks against me have disadvantage when I'm using a shield"
			]),
			armorProfs : [false, false, false, true]
		},
		"subclassfeature6" : {
			name : "Shield Dancer",
			source : ["OotD", 330],
			minlevel : 6,
			additional : "See third page notes",
			extraname : "Way of the Shield 6",
			"vaulting strike" : {
				name : "Vaulting Strike",
				source : ["OotD", 330],
				additional : "1 ki point",
				description : desc([
					"As a bonus action I can leap up to 15ft in any direction",
					"If using a shield, this leap does not provoke opportunity attacks",
					"If I Attack immediately after, I have advantage on the first attack and it crits on a 19 or 20"
				]),
				action : [["bonus action", ""]]
			},
			"counterattack" : {
				name : "Counterattack",
				source : ["OotD", 330],
				additional : "requires a shield",
				description : desc([
					"If missed with an opportunity attack, I can make a single melee weapon attack",
					"This attack does not interrupt my movement"
				])
			},
			autoSelectExtrachoices : [{
				extrachoice : "vaulting strike"
			}, {
				extrachoice : "counterattack"
			}]
		},
		"subclassfeature11" : {
			name : "Shell of the Dragon Turtle",
			source : ["OotD", 330],
			minlevel : 11,
			additional : "1 ki point; requires a shield",
			description : desc([
				"I can use a reaction, if hit, to gain +3 AC for the hit; lasts until start of my next turn"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature17" : {
			name : "Undaunted Spirit",
			source : ["OotD", 330],
			minlevel : 17,
			description : desc([
				"I have adv. on attacks vs. Huge or larger creatures, they can't frighten/paralyze me"
			])
		}
	}
})