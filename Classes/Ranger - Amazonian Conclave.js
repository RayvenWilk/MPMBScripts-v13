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

var iFileName = "Ranger - Amazonian Conclave.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

ClassList.ranger.amazonCompFunc = {
	update : function(rangerLevel, profBonus) {
		var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
		var prefixes = companionFunctions.find('stimfay');
		
		if(prefixes.length > 0) {
			if(rangerLevel >= 11)
			{
				Value(prefixes[0] + 'Comp.Use.AC', 13 + profBonus);
				Value(prefixes[0] + "BlueText.Comp.Use.Attack.1.Damage Die", "2d6");
				Value(prefixes[0] + "BlueText.Comp.Use.Attack.2.Damage Die", "2d6");
				Value(prefixes[0] + "BlueText.Comp.Use.Attack.3.Damage Die", "2d6");
			}
			else
			{
				Value(prefixes[0] + 'Comp.Use.AC', 13);
				Value(prefixes[0] + "BlueText.Comp.Use.Attack.1.Damage Die", "1d6");
				Value(prefixes[0] + "BlueText.Comp.Use.Attack.2.Damage Die", "1d6");
				Value(prefixes[0] + "BlueText.Comp.Use.Attack.3.Damage Die", "1d6");
			}
		}
	}
};

var chakramFeatureDesc = desc(["I can throw my chakram at targets that are not in my line of sight", "As an action I can throw my chakram at a target; on a hit it deals damage & ricochets", "My choice of others within 10 ft make a Dex" + (typePF ? "terity" : "") + " save vs spell DC or also take the damage"]);

var theAmazonianSubclass = {
	regExpSearch : /^(?=.*amazon(ian)?)(?=.*conclave).*$/i,
	subname : "Amazonian Conclave",
	source : ["OotD", 333],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Amazonian Magic",
			source : ["OotD", 333],
			minlevel : 3,
			description : desc([
				"I get bonus spells known, which do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["command", "find steed", "haste", "confusion", "mislead"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.1" : {
			name : "Stimfay Companion",
			source : ["OotD", 333],
			minlevel : 3,
			additional : "See \"Notes\" page",
			description : desc(["I construct a stimfay, a clockwork bird of prey, to aid me in battle; See \"Notes\" page"]),
			toNotesPage : [{
				name : "Stimfay Companion",
				source : ["OotD", 333],
				popupName : "Stimfay Companion",
				page3notes : false,
				note : desc(["I can order my stimfay to scout a 1 mile radius in 10 mins if there's open sky",
					"It understands any languages I speak; Only I understand its clicks and squaks",
					"It obeys my commands, acts on my initiative, and acts on its own if I am KOd",
					"It regains lost HP after a long rest; I can fully repair it in 8 hrs if destroyed"
				])
			}],
			eval : function () {
				var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
				companionFunctions.add("Stimfay");
				ClassList.ranger.amazonCompFunc.update(3, ProficiencyBonusList[classes.totallevel - 1]);
			},
			removeeval : function () {
				var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
				companionFunctions.remove("Stimfay");
			}
		},
		"subclassfeature3.2" : {
			name : "Amazonian Battlecry",
			source : ["OotD", 333],
			minlevel : 3,
			usages : "Wis" + (typePF ? "dom" : "") + " modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			description : desc(["I enter a frenzy by shouting a battlecry; See page 3"]),
			extraname : "Amazonian Conclave 3",
			"amazonian battlecry" : {
				name : "Amazonian Battlecry",
				source : ["OotD", 333],
				description : desc(["I can use a bonus action to gain the following benefits:",
					"\u2022 I have advantage on attacks against my favored enemies",
					"\u2022 I am resistant to bludgeoning, piercing, and slashing damage",
					"\u2022 I have advantage on saving throws against being frightened or paralyzed",
					"These benefits end after 1 min, I take damage, or I am knocked unconscious"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "amazonian battlecry" }],
			action : ["bonus action", ""],
			recovery : "long rest"
		},
		"subclassfeature5" : {
			name : "Bracer Reflection",
			source : ["OotD", 334],
			minlevel : 5,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			description : desc([
				"When attacked, I can use a reaction to gain +5 AC until the start of my next turn"
			]),
			action : ["reaction", ""],
			recovery : "short rest"
		},
		"subclassfeature7" : {
			name : "Chakram Technique",
			source : ["OotD", 334],
			minlevel : 7,
			extraname : "Amazonian Conclave 7",
			description : chakramFeatureDesc,
			"chakram technique" : {
				name : "Chakram Technique",
				source : ["OotD", 334],
				description : chakramFeatureDesc
			},
			action : ["action", "Ricochet Chakram"]
		},
		"subclassfeature11" : {
			name : "Improved Falconry",
			source : ["OotD", 334],
			minlevel : 11,
			additional : "Stimfay improves; See \"Notes\"" + (typePF ? " page" : ""),
			action : ["reaction", "Stimfay Intercept"],
			toNotesPage : [{
				name : "Improved Falconry",
				source : ["OotD", 334],
				popupName : "Improved Falconry",
				page3notes : false,
				note : desc(["When damaged, I can use a reaction to have my stimfay intercept the damage",
					"It takes the damage instead; It must be functional, ready, and within 60 ft of me",
					"My stimfay gains more HP and AC and its attacks are magical",
					"The damage of Talons/Pinion Storm/Piercing Screech increases"
				]),
			}],
			eval : function () {
				ClassList.ranger.amazonCompFunc.update(11, ProficiencyBonusList[classes.totallevel - 1]);
			},
			removeeval : function (lvlA) {
				ClassList.ranger.amazonCompFunc.update(lvlA[1], ProficiencyBonusList[classes.totallevel - 1]);
			},
			changeeval : function(lvlA) {
				ClassList.ranger.amazonCompFunc.update(lvlA[1], ProficiencyBonusList[classes.totallevel - 1]);
			}
		},
		"subclassfeature15" : {
			name : "Pressure Points",
			source : ["OotD", 334],
			minlevel : 15,
			description : desc(["I can attack my opponents' pressure points, leaving them paralyzed; See page 3"]),
			extraname : "Amazonian Conclave 15",
			"pressure points" : {
				name : "Pressure Points",
				source : ["OotD", 334],
				description : desc(["I can use a bonus action to make a special melee attack against a creature",
					"On a hit, the creature makes a Constitution save vs. my spell DC",
					"On a failure, it is paralyzed for 1 min, repeating the save at the end of its turns to end",
					"I can use a bonus action and touch it to reverse the effect"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "pressure points" }],
			action : [["bonus action", ""], ["bonus action", "Reverse Pressure Point"]],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "short rest"
		}
	}
};

AddSubClass("ranger", "amazonian conclave", theAmazonianSubclass);

if (ClassList["rangerua"]) { // add them to the Revised Ranger as well, if it is defined
	var theAmazonianConclaveSubclass = newObj(theAmazonianSubclass);
	theAmazonianConclaveSubclass.subname = "Amazonian Conclave";
	theAmazonianConclaveSubclass.regExpSearch = /^(?=.*amazon(ian)?)(?=.*conclave).*$/i;
	delete theAmazonianConclaveSubclass.fullname;

	var chakramTechExtra = {
		name : theAmazonianConclaveSubclass.features.subclassfeature7.name,
		source : theAmazonianConclaveSubclass.features.subclassfeature7.source,
		description : theAmazonianConclaveSubclass.features.subclassfeature7.description
	};
	
	theAmazonianConclaveSubclass.features.subclassfeature7.description            = "";
	theAmazonianConclaveSubclass.features.subclassfeature7.additional             = "See 3rd page";
	theAmazonianConclaveSubclass.features.subclassfeature7.autoSelectExtrachoices = [{ extrachoice : "chakram technique" }];
	
	AddSubClass("rangerua", "amazonian conclave", theAmazonianConclaveSubclass);
}