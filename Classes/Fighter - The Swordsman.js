/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass to the Fighter class called the Swordsman
				This subclass is made by Seneschal
	Code by:	Seneschal
	Date:		2019-09-27 (sheet v13.0.0beta19)
*/

var iFileName = "Swordsman Fighter [Created by and transcribed by Seneschal].js";
RequiredSheetVersion(13.);

SourceList["S:TSMA"] = {
	name : "Seneschal: The Swordsman Martial Archetype",
	abbreviation : "S:TSMA",
	group: "Friendly Bunch Homebrew",
	date : "2019/09/27",
	defaultExcluded : true
};

AddSubClass("fighter", "swordsman", {
	regExpSearch : /swordsman/i,
	subName : "swordsman",
	source : ["S:TSMA", 0],
	fullname : "Figher (Swordsman)",
	subname : "Swordsman",
	defaultExcluded : true,
	abilitySave : 2,
	ablitySaveAlt : 5,
	features : {
		"subclassfeature3" : {
			name : "Blinkstep",
			source : ["S:TSMA", 0],
			minlevel : 3,
			usages : [0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, "Unlimited", "Unlimited"],
			description : "\n    " + "As an action, I can move in a line up to my movement speed." +
			"\n    " + "However, I can only do this if I have a one handed sword weapon." +
			"\n    " + "I make an attack action on all enemy creatures in that line." + 
			"\n    " + "The number of attack increases with each extra attack feature in the fight class.",
			action : [["action", ""]],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Weapon Connection",
			source : ["S:TSMA", 0],
			minlevel : 3,
			description : "\n    " + "As an bonus action, I can summon my swordsman weapon"
			+ "\n    " + "back to me as long as it is on the same plane of existence as me.",
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Stances",
			source : ["S:TSMA", 0],
			minlevel : 7,
			description : "\n    " + "I can now activate stances, each having an indepedent action type.",
			"The Acrobat" : {
				name : "The Acrobat",
				source : ["S:TSMA", 0],
				minlevel : 7,
				description : "\n   " + "Stay light on your free as you face down your enemy." +
				"\n    " + "As a bonus action, you have advantage on all Dexterity ability rolls and saving throws" +
				"\n    " + "but disadvantage on all Strength ability rolls and saving throws while this is active.",
				action : [["bonus action", ""]]
			},
			"The Berserker" : {
				name : "The Berserker",
				source : ["S:TSMA", 0],
				minlevel : 7,
				description : "\n    " + "All that matters is the blood being spilt." +
				"\n    " + "It doesn't matter if its you or your opponent, someone must die!" +
				"\n    " + "When this is activated as a bonus action, you have advantage on your attack rolls" +
				"\n    " + "However, all attack rolls on you have advantage as well.",
				action : [["bonus action", ""]]
			},
			"The Brute" : {
				name : "The Brute",
				source : ["S:TSMA", 0],
				minlevel : 7,
				description : "\n    " + "Use your strength to your advantage." +
				"\n    " + "As a bonus action, you have advantage on any strength based ability roll or saving throw" +
				"\n    " + "but have disadvantage on any dexterity based ability roll or saving throw.",
				action : [["bonus action", ""]]
			},
			"The Dancer" : {
				name : "The Dancer",
				source : ["S:TSMA", 0],
				minlevel : 7,
				description : "\n    " + "As a reaction, you can roll acrobatics to dodge an opponent's attack," +
				"\n    " + "moving 5 feet to their left or right should you match or beat their attack roll.",
				action : [["reaction action", ""]]
			},
			"The Defender" : {
				name : "The Defender",
				source : ["S:TSMA", 0],
				minlevel : 7,
				description : "\n    " + "As a reaction, you can ready your weapon to defend yourself," +
				"\n    " + "adding your proficiency bonus to your AC when an enemy targets you with a weapon attack.",
				action : [["reaction", ""]]
			},
			"The Shield" : {
				name : "The Shield",
				source : ["S:TSMA", 0],
				minlevel : 7,
				description : "\n    " + "As a reaction, you can impose disadvantage on a " +
				"\n    " + "creature that makes a melee attack on an ally within 5 feet of you." +
				"\n    " + "However, all ranged attacks have advantage on you since you focused on melee defense.",
				action : [["reaction", ""]]
			},
			toNotesPage : [{
				name : "Stances",
				note : "\n" + "\u2022 The Acrobat" + 
				"\n    " + "Stay light on your free as you face down your enemy." +
				"\n    " + "As a bonus action, you have advantage on all Dexterity ability rolls and saving throws" +
				"\n    " + "but disadvantage on all Strength ability rolls and saving throws while this is active." +
				"\n" + "\u2022 The Berserker" + 
				"\n    " + "All that matters is the blood being spilt." +
				"\n    " + "It doesn't matter if its you or your opponent, someone must die!" +
				"\n    " + "When this is activated as a bonus action, you have advantage on your attack rolls" +
				"\n    " + "However, all attack rolls on you have advantage as well." +
				"\n" + "\u2022 The Brute" +
				"\n    " + "Use your strength to your advantage." +
				"\n    " + "As a bonus action, you have advantage on any strength based ability roll or saving throw" +
				"\n    " + "but have disadvantage on any dexterity based ability roll or saving throw." +
				"\n" + "\u2022 The Dancer" +
				"\n    " + "As a reaction, you can roll acrobatics to dodge an opponent's attack," +
				"\n    " + "moving 5 feet to their left or right should you match or beat their attack roll." +
				"\n" + "\u2022 The Defender" +
				"\n    " + "As a reaction, you can ready your weapon to defend yourself," +
				"\n    " + "adding your proficiency bonus to your AC when an enemy targets you with a weapon attack." +
				"\n" + "\u2022 The Shield" +
				"\n    " + "As a reaction, you can impose disadvantage on a " +
				"\n    " + "creature that makes a melee attack on an ally within 5 feet of you." +
				"\n    " + "However, all ranged attacks have advantage on you since you focused on melee defense.",
				page3notes : true,
				popupName : "Swordsman Stances",
				source : ["S:TSMA", 0]
			}]
		},
		"subclassfeature10" : {
			name : "Weakpoints",
			source : ["S:TSMA", 0],
			minlevel : 10,
			description : "\n    " + "Before making an attack roll, you can take a -5 penalty to hit." +
			"\n    " + "If you land an attack, that attack deals extra damage.",
			additional : levels.map(function (n) {
				return n < 10 ? "" : "+" + (n < 15 ? 2 : 3) + "d8";
			})
		},
		"subclassfeature15" : {
			name : "Flashstep",
			source : ["S:TSMA", 0],
			minlevel : 15,
			description : "\n    " + "Your movement speed for Blinkstep is equal to taking" +
			"\n    " + "the dash action. In addition, you can move in any direction with" +
			"\n    " + "Blinkstep, even if it isn't a straight line."
		},
		"subclassfeature18" : {
			name : "Final Step",
			source : ["S:TSMA", 0],
			minlevel : 18,
			description : "\n    " + "As an action, initiate a Blinkstep against a creature." +
			"\n    " + "Should you hit, you deal a massive amount of damage against the creature." +
			"\n    " + "This can only be done once per short or long rest.",
			additional : "10d8",
			usages : 1,
			action : [["action", ""]],
			recovery : "long rest"
		}
	}
});