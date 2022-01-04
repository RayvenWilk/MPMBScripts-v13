/*  -INFORMATION-
	Subject:    	Subclass
	Effect:     	This script adds a subclass for the monk, called the "Way of the Ascendant Dragon"
		    	      This is a subclass made in the "Unearthed Arcana 2020: Subclasses Part 5" article, taken from https://media.wizards.com/2020/dnd/downloads/UA2020_102620_Subclasses05.pdf
	Code by:	WondrousLittleWizard
	Date:		2020-28-10 (sheet v13.0.0beta32)
*/

var iFileName = "AscendantDragonMonkSubclass.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:SP5"] = {
	name : "Unearthed Arcana: Subclasses Part 5",
	abbreviation : "UA:SP5",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_102620_Subclasses05.pdf",
	date : "2020/25/10",
};

AddSubClass("monk", "ascendant dragon", {
	regExpSearch : /^(?=.*(monk|dragon))(?=.*ascendant).*$/i,
	subname : "Way of the Ascendant Dragon",
	source : ["UA:SP5", 1],
	features : {
		"subclassfeature3" : {
			name : "Draconic Disciple",
			source : ["UA:SP5", 1],
			minlevel : 3,
			description : desc([
				"I channel draconic ki and gain benefits",
				"When I hit with an unarmed strike, I can change the damage type",
				"I can change the damage to acid, cold, fire, lightning, or poison",
				"If I fail an Intimidation or Persuasion check, I can use my reaction to reroll the check",
				"Once this succeeds, I can't use it again until the end of a long rest",
			]),
			languageProfs : ["Draconic"],
			action : ["reaction", " (reroll check)"],
			usages : 1,
			recovery : "long rest",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.monk && classes.known.monk.level && v.baseWeaponName == "unarmed strike") {
							fields.Description += (fields.Description ? '; ' : '') + "Can change damage type to acid, cold, fire, lightning, or poison";
						};
					},
					"I can change the damage on unarmed strikes to acid, cold, fire, lightning or poison"
				],
			}
		},
		"subclassfeature3.1" : {
			name : "Breath of the Dragon",
			source : ["UA:SP5", 1],
			minlevel : 3,
			description : desc([
				"When I take the attack action, I can choose to make one attack deal elemental damage",
				"I can choose to make a 20-foot cone or 30-foot long line (5-ft wide)",
				"Creatures within the area must succeed a Dex save or take damage, half on save",
				"I can choose the damage to be acid, cold, fire, lightning, or poison",
				"I can use this a number of times equal to my proficiency bonus, or use 1 ki point",
			]),
			additional : ["", "", "2d4", "2d4", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d8", "3d8", "3d8", "3d8", "3d8", "3d8", "3d10", "3d10", "3d10", "3d10"],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery : "long rest",
		},
		"subclassfeature6" : {
			name : "Wings Unfurled",
			source : ["UA:SP5", 2],
			minlevel : 6,
			description : desc([
				"When I use my Step of the Wind, I gain a fly speed equal to my walking speed",
				"I can use this a number of times equal to my proficiency bonus, or use",
				"1 additional ki point when using Step of the Wind",
			]),
		},
		"subclassfeature11" : {
			name : "Aspect of the Wyrm",
			source : ["UA:SP5", 2],
			minlevel : 11,
			description : desc([
				"I can create an aura of energy to protect myself and my allies",
				"For 1 minute, allies and I within 30 feet of me have damage resistance",
				"I can choose resistance to acid, cold, fire, lightning, or poison",
				"Additionally, if one of us is attacked, we can deal elemental damage in return",
				"The damage equals one roll of my Martial Arts die and of the type of damage resistance I chose",
				"I can use this once per long rest or if I use 4 ki points",
			]),
			additional : ["", "", "", "", "", "", "", "", "", "", "1d8", "1d8", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10"],
			action : [["bonus action", " (activate)"], ["reaction", " (retaliate)"]],
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature17" : {
			name : "Ascendant Aspect",
			source : ["UA:SP5", 2],
			minlevel : 17,
			description : desc([
				"I gain benefits from my draconic ki",
				"I gain blindsight out of 30 ft, and can see anything not behind total cover",
				"I can see invisible creatures unless they successfully hide from me",
				"When I deal damage with my Breath of the Dragon, energy clings to target",
				"At the start of its turns, the creature takes damage equal to one Martial Arts die roll",
				"It can repeat its save at the end of its turns, ending the effect on a success",
				"When I use Aspect of the Wyrm, creatures I choose within the aura take damage",
				"The damage equals 4d10 acid, cold, fire, lightning, or poison damage",
			]),
			vision : [["blindsight", 30]],
		}
	}
});