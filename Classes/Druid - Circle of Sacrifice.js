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

var iFileName = "Druid - Circle of Sacrifice.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("druid", "circle of sacrifice", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*sacrifice).*$/i,
	subname : "Circle of Sacrifice",
	source : ["OotD", 327],
	features : {
		"subclassfeature2" : {
			name : "Ritual of Sacrifice",
			source : ["OotD", 327],
			minlevel : 2,
			description : desc([
				"I learn the Produce Flame cantrip and I add my Wisdom modifier to the damage roll",
				"When I reduce a creature to 0hp I can choose to Immolate it",
				"Myself and allies within 60ft of the creature gain Bless for 1 min, no concentration"
			]),
			spellcastingBonus : {
				name : "Ritual of Sacrifice",
				spells : ["produce flame"],
				selection : ["produce flame"]
			},
			recovery : "short rest",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.druid && classes.known.druid.level > 5 && v.isSpell && v.WeaponName == 'produce flame') {
							output.extraDmg += What('Wis Mod');
						}
					},
					"My produce flame cantrip has my Wisdom modifier added to its damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("druid") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0 || spellKey !== "produce flame") return;

						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis", true);
					},
					"My produce flame cantrip has my Wisdom modifier added to its damage."
				]
			}
		},
		"subclassfeature6" : {
			name : "Ritual of Mistletoe",
			source : ["OotD", 327],
			minlevel : 6,
			description : desc([
				"I have sprigs of mistletoe represented by a number of d4s equal to my druid level",
				"They turn into d6s at 10th level and d8s at 14th level",
				"I can use a bonus action to expend one sprig for one of the following effects:",
				"\u2022 Divining Ritual - I cast Detect Magic without using a spell slot",
				"\u2022 Healing Ritual - I cast Cure Wounds at 1st-level without using a spell slot",
				"\u2022 Purification Ritual - I cast Purify Food and Drink without using a spell slot",
				"\u2022 Song of the Solstice - I cast Heroism at 1st-level without using a spell slot",
			]),
			usages : levels.map(function(n) {
				return n < 6 ? "" : n + "d" + (n < 10 ? 4 : n < 14 ? 6 : 8) + " per ";
			}),
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Keeper of the Law",
			source : ["OotD", 327],
			minlevel : 10,
			description : desc([
				"I can use a bonus action to mark a creature as a Sacrificial Offering for 1hr",
				"When an ally hits a marked creature I can use a reaction to roll 1 mistletoe die",
				"The rolled number is added as fire damage",
				"I can Immolate a marked creature when it is reduced to 0hp"
			]),
			action : [["bonus action", "Sacrificial Offering"], ["reaction", "Keeper of the Law (Fire damage)"]],
		},
		"subclassfeature14" : {
			name : "Astrological Wisdom",
			source : ["OotD", 327],
			minlevel : 14,
			description : desc([
				"I know the Teleportation Circle spell and always have it prepared",
				"I can spend 8hrs and 12k gp to make a permanent anchor for Teleportation Circle"
			]),
			spellcastingBonus : [{
				name : "Astrological Wisdom (Teleportation Circle)",
				spells : ["teleportation circle"],
				selection : ["teleportation circle"],
				firstCol : 'markedbox'
			}]
		}
	}
})