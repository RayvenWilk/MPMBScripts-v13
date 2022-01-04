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

var iFileName = "Barbarian - Herculean.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
};

AddSubClass("barbarian", "herculean", {
	regExpSearch : /herculean/i,
	subname : "Herculean Path",
	fullname : "Herculean Path",
	source : [["OotD", 322]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Precocious Wrestler",
			source : [["OotD", 322]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the Athletics skill",
				"I can grapple creatures two sizes larger than me and can grapple as a bonus action",
				"While grappling, I can attack with a two-handed weapon with a single hand"
			]),
			skills : ["Athletics"],
			action : [["bonus action", "Grapple", "Grapple"]]
		},
		"subclassfeature6" : {
			name : "Mighty Marksman",
			source : [["OotD", 322]],
			minlevel : 6,
			description : desc([
				"Heavy weapons do not incur disadvantage due to my size",
				"I can use my Strength modifier instead of Dexterity for longbows",
				"I can add my rage damage to longbow and thrown weapon attacks"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && v.WeaponName == 'longbow' && fields.Mod == 2 && Number(What("Str")) > Number(What("Dex"))) {
							fields.Mod = 1;
						}
					},
					'I can use my Strength modifier instead of Dexterity for the attack and damage rolls for longbows.'
				],
				atkCalc : [
					function (fields, v, output) {
						if ((v.WeaponName == 'longbow' || (/\bthrown\b/i).test(v.WeaponText)) && classes.known.barbarian && classes.known.barbarian.level && (/\brage\b/i).test(v.WeaponText)) {
							output.extraDmg += classes.known.barbarian.level < 9 ? 2 : classes.known.barbarian.level < 16 ? 3 : 4;
						}
					},
					"If I include the word 'Rage' in a longbow or thrown weapon's name or description, the calculation will add my Rage's bonus damage to it."
				]
			}
		},
		"thunderous shot" : {
			name : "Thunderous Shot",
			source : [["OotD", 322]],
			minlevel : 6,
			additional : "DC 8 + Str mod + Prof",
			description : desc(["I can add Thunderwave to a ranged attack, centered on the landing point"]),
			usages : 1,
			recovery : "short rest",
			action : ["action", " (with Attack action)"]
		},
		"subclassfeature10" : {
			name : "Herculean Rage",
			source : [["OotD", 322]],
			minlevel : 10,
			description : desc([
				"At the start of my turn, if raging, rage damage +1, to a max of Strength modifier",
				"While raging I am immune to poison damage and cannot be frightened"
			]),
			savetxt : { immune : ["poison damage (raging)", "frightened (raging)"] }
		},
		"subclassfeature14" : {
			name : "Earthshaker",
			source : [["OotD", 322]],
			minlevel : 14,
			description : desc([
				"As an action, I can cause an earthquake with a radius of 40ft centered on me; see Notes"
			]),
			toNotesPage : [{
				name : "Earthshaker",
				source : ["OotD", 322],
				popupName : "Herculean Earthshaker",
				note: desc(["I can use an action to cause an earthquake with a 40ft radius centered on me",
					"The affected area becomes difficult terrain.",
					"Creatures on the ground in the area make a DC 8 + prof + Str Con save or lose concentration.",
					"At the end of my turn, creatures in the area make a DC 8 + prof + Str Dex save or are knocked prone.",
					"I have advantage on this save.",
					"At the start of subsequent turns I can use a bonus action to continue the earthquake, until the start of my next turn.",
					"I can continue the earthquake for a maximum of 1 minute"])
			}],
			action : [["action", "Earthshaker (start)"], ["bonus action", "Earthshaker (repeat)"]],
			usages : 1,
			recovery : "long rest"
		}
	}
})