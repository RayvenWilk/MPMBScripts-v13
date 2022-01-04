/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a new subclass
				
	Code by:	dbarber96b
	Date:		2021-08-9 (sheet v13.0.0beta16)
*/

var iFileName = "DrifterPatron.js";
RequiredSheetVersion(13);

SourceList["GMBDB"] = {
	name : "GMBinderDBarber96b",
	abbreviation : ["GMBDB"],
	group : "Dbarber96b",
	url : "https://www.gmbinder.com/share/-MezALlhpv89Ezt1QQlz",
	date : "2021/07/21"
};
AddSubClass("warlock", "the drifter", {
	regExpSearch : /^(?=.*drifter)(?=.*warlock).*$/i,
	subname : "the Drifter",
	source : ["GMBDB"],
	spellcastingExtra : ["bane", "bless", "enhance ability", "pass without trace", "blink", "nondetection", "death ward", "freedom of movement", "circle of power", "passwall"],
	features : {
		"subclassfeature1" : {
			name : "Road Less Taken",
			source : ["GMBDB"],
			minlevel : 1,
			description : "\n   " + "As an action, I can cast the augury spell" + "\n   " + "I must be at a crossroads, literally or figuratively to do this",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
    "subclassfeature1.1" : {
			name : "Drifter's Gift",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, as well as longswords, rapiers, and scimitars.",
				"When I finish a long rest, I can imbue one weapon I touch with my will",
				"Until my next long rest, I can use it with Charisma instead of Strength or Dexterity",
				"I have to be proficient with the weapon and it can't have the two-handed property",
				"This benefit also works with every weapon from Pact of the Blade, with no restriction",
			]),
			armorProfs : [false, true, false, false],
			weaponProfs : [false, false, ["longsword", "rapier", "scimitar"]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						var hasPactWeapon = GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade';
						if (What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (v.pactWeapon || v.theWea.pactWeapon || (hasPactWeapon && (/\bpact\b/i).test(v.WeaponText)) || (/^(?=.*hexblade)(?!.*((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b).*$/i).test(v.WeaponText))) {
							fields.Mod = 6;
						};
					},
					"If I include the word 'Drifter' in the name of a weapon that is not two-handed, it gets treated as the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than the ability it would otherwise use. Alternatively, if I have the Pact of the Blade feature, this will also work if I include 'Pact' in the name of a weapon, regardless if it has the two-handed property."
				]
			}
		},
		"subclassfeature6" : {
			name : "Everything's Looking Up",
			source : ["GMBDB"],
			minlevel : 6,
			description : "\n   " + "I have advantage on all Charisma (Persuasion), Charisma (Deception), and Charisma (Performance) checks against any creature of my choice that isn’t hostile toward you " + "\n   " + "I have advantage on Dexterity saving throws against effects such as traps and spells. To gain this benefit, I can't be incapacitated",
		},
		"subclassfeature10" : {
			name : "One Step Ahead",
			source : ["P", 109],
			minlevel : 10,
			description : "\n   " + "I now add my Charisma modifier to initiative rolls and Dexterity saving throws",
		},
		"subclassfeature14" : {
			name : "Closing the Distance",
			source : ["P", 109],
			minlevel : 14,
			description : "\n   " + "As an action, I can perform a 1 minute ritual, and cast the teleport spell, without expending a spell slot" + "\n   " + "The connection with my patron gives me increased accuracy with the spell" + "\n   " + "I must finish a long rest before using this ability again",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
