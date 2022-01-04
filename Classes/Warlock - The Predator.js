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

AddSubClass("warlock", "the predator", {
	regExpSearch : /^(?=.*predator)(?=.*warlock).*$/i,
	subname : "the Predator",
	source : ["HW:TotSG", 10],
	spellcastingExtra : ["hunter's mark", "jump", "alter self", "ambush prey", "blink", "slow", "dominate beast", "freedom of movement", "contagion", "mislead"],
	features : {
		subclassfeature1: {
			name : "Bonus Proficiencies",
			source : ["HW:TotSG", 10],
			minlevel: 1,
			description: desc([
				"I gain proficiency with Survival and can double my proficiency bonus in Survival checks."
			]),
			skills : [["Survival", "full"]]
		},
		"subclassfeature1.1" : {
			name : "Form of the Beast",
			source : ["HW:TotSG", 10],
			minlevel : 1,
			description : desc([
				"I can use a bonus action to take on a beastly form",
				"I gain temporary hit points equal to five times my warlock level, to maximum of 50 hit points.",
				"I gain advantage on stealth, perception, and survival checks to track and stalk prey.",
				"I gain a bite (1d6 piercing) and claw (1d4 slashing) attack, and can use my charisma modifier. If I bite with an action, I can claw with my bonus action"
			]),
			weaponOptions : [{
				baseWeapon : "unarmed strike",
				regExpSearch : /^(?=.*beast)(?=.*\bbite?\b).*$/i,
				name : "Beast Bite",
				source : ["HW:TotSG", 10],
				damage : [1, 6, "piercing"],
				ability : 6
			},{
				baseWeapon : "unarmed strike",
				regExpSearch : /^(?=.*beast)(?=.*\bclaws?\b).*$/i,
				name : "Beast Claws",
				source : ["HW:TotSG", 10],
				damage : [1, 6, "piercing"],
				ability : 6
			}],
			weaponsAdd : ["Beast Bite", "Beast Claws"],
			usages : 1,
			recovery : "long rest"
		},
		subclassfeature5 : {
			name : "Beast Form",
			source : ["HW:TotSG", 10],
			minlevel : 5,
			description : desc([
				"Form of the Beast improvements:",
				"I can make two claw attacks as a bonus action after biting with my action.",
				"I can dash as a bonus action."
			]),
			actions : ["bonus action", " (Dash)"]
		},
		subclassfeature6 : {
			name : "Thrill of the Hunt",
			source : ["HW:TotSG", 11],
			minlevel : 6,
			description : desc([
				"I can deal 3d6 extra necrotic damage on a bite, once per turn.",
				"At 10th level, this becomes 5d6 necrotic damage."
			]),
			additional : levels.map(function (n) { return n < 10 ? "3" : n >= 10 ? "5" : "d6 necrotic damage"; })
		},
		subclassfeature10 : {
			name : "Fearsome Presence",
			source : ["HW:TotSG", 11],
			minlevel : 10,
			description : desc([
				"I can make creatures within 30 feet roll a Wisdom save against my spell save.",
				"On a fail, creatures are frightened of me for 1 minute.",
				"They are also restrained until the end of my next turn.",
				"Creatures can repeat their save at the end of each of their turns."
			]),
			usages : 1,
			recovery : "short rest",
			actions : ["action", ""]
		},
		subclassfeature14 : {
			name : "Uncaged Beast",
			source : ["HW:TotSG", 11],
			description : desc([
				"If I take damage from a target within 5 ft, I can use a reaction to bite or claw that target.",
				"When I take damage, I can use a reaction to immediately take the Form of the Beast. I can also include the aforementioned attack."
			]),
			actions : ["reaction", ""]
		}
	}
});

AddWarlockInvocation("Feral Transformation (prereq: 7th level)", {
	name : "Feral Transformation",
	description : desc([
		"I can transform into a Dire Wolf, Giant Spider, or Giant Vulture, like a Wild shape but requiring concentration.",
		"I can remain in that form for 1 hour."
	]),
	usages : 1,
	recovery : "short rest",
	actions : ["action", ""]
})