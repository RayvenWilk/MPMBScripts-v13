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

AddSubClass("fighter", "scofflaw", {
	regExpSearch : /^(?=.*scofflaw).*$/i,
	subname : "Scofflaw",
	source : ["HW", 41],
	fullname : "Scofflaw",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["HW", 41],
			minlevel : 3,
			description : desc([
				"I gain proficiency in one of the following skills: Deception, Insight, Intimidation, Sleight of Hand, Stealth, or Thieves' Cant"
			]),
			skillstxt : "Deception, Insight, Intimidation, Sleight of Hand, Stealth, or Thieves' Cant"
		},
		"subclassfeature3.1" : {
			name : "Intimidating Banter",
			source : ["HW", 41],
			minlevel : 3,
			description : desc([
				"I can make use Strength of Dexterity to make Charisma checks while in combat."
			])
		},
		"subclassfeature3.2" : {
			name : "Brutal Brawler",
			source : ["HW", 41],
			minlevel : 3,
			description : desc([
				"When I hit someone with an improvised weapon, I can use a bonus action to break it over their head, dealing maximum damage."
			]),
			weaponprofs : [true, true, "improvised weaopns"],
			actions : ["bonus action", " (break object)"]
		},
		"subclassfeature7" : {
			name : "Misdirection",
			source : ["HW", 42],
			minlevel : 7,
			description : desc([
				"I can use a bonus action to misdirect, forcing an INT save on a creature within 5 feet of me. On a fail, they must spend their reaction to attack a creature of my choice within 5 feet of them."
			]),
			acitons : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Blindside",
			source : ["HW", 41],
			minlevel : 10,
			description : desc([
				"Once per rest, I can apply extra damage on a hit. At level 18, I regain my use of this feature if I start combat without it."
			]),
			usages : 1,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 15 ? "5" : n < 18 ? "7" : n > 18 ? "9" : "d6 damage"; })
		},
		"subclassfeature15" : {
			name : "Infamy",
			source : ["HW", 42],
			minlevel : 15,
			description : desc([
				"As part of my attack, I can force a creature within 30 feet to make a Wisdom save or be frightened of me for 1 minute, repeating the save at the end of each of their turns. If they know of my deeds, they make the save at disadvantage."
			])
		},
		"subclassfeature18" : {
			name : "Two For Flinching",
			source : ["HW", 42],
			minlevel : 18,
			description : desc([
				"If I hit a target that I have misdirected this turn or is afflicted by a condition, I can make one additional attack against that opponent once per turn."
			])
		}
	}
})