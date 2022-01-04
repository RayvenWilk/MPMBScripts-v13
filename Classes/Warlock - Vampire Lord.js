/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark or the Import button in the "Extra Features" Javascript Window.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass and Spells
	Effect:		This script adds a subclass for the Warlock, the "Vampire Lord" Patron
			This is taken from the DMs Guild website (https://www.dmsguild.com/product/251979/The-Vampire-Lord-Warlock-Patron)
			This subclass is made by Matthew Cumbo
	Code by:	Matthew Cumbo
	Date:		2021-12-16 (sheet v13.0.4)
			Please support the creator of this content (Matthew Cumbo) and download their materials 
			from the DMs Guild website: https://www.dmsguild.com/browse.php?author=Matthew%20Cumbo
*/

var iFileName = "Matthew Cumbo - Vampire Lord Warlock Patron.js";
RequiredSheetVersion("13.0.4");

// Define the source
SourceList.MCVLW={
	name : "Matthew Cumbo: Vampire Lord (Warlock Patron)",
	abbreviation : "MC:VLW",
	group : "Dungeon Master's Guild",
	url : "https://www.dmsguild.com/product/251979/The-Vampire-Lord-Warlock-Patron",
	date : "2021/12/15"
};

// Warlock Subclass
AddSubClass("warlock", "the vampire lord", {
	regExpSearch : /^(?=.*vampire)(?=.*warlock).*$/i,
	subname : "the Vampire Lord",
	source : ["MCVLW", 1],
	spellcastingExtra : ["false life", "bane", "sleep", "ray of sickness", "blindness/deafness", "inflict wounds", "blight", "bestow curse", "geas", "harm"],
	features : {
		"subclassfeature1" : {
			name : "Vampiric Bloodline",
            source : ["MC:VLW", 1],
			minlevel : 1,
			description : "\n   " + "When a creature touches my blood, they must make a Constitution save" + "\n   " + "If failed, they take 1d6 Necrotic Damage, half as much if successful. " + "\n   " + "If a creature ingests the blood instead, they take more damage and become poisoned on a failed save.",
            additional : levels.map(function (n) {
                if (n < 5) {
                    return "Contact: DC 8, 1d6 Necrotic damage. Ingestion: DC 12, 2d6 Necrotic damage.";
                }
                else if (n <10)
                {
                    return "Contact: DC 11, 1d6 Necrotic damage. Ingestion: DC 15, 2d6 Necrotic damage.";
                }
                else if (n <15)
                {
                    return "Contact: DC 14, 1d6 Necrotic damage. Ingestion: DC 18, 2d6 Necrotic damage.";
                }
                else
                {
                    return "Contact: DC 16, 1d6 Necrotic damage. Ingestion: DC 20, 2d6 Necrotic damage.";
                }
            })
		},
		"subclassfeature6" : {
			name : "Bat's Wings",
			source : ["MCVLW", 1],
			minlevel : 6,
			description : "\n   " + "As an action, I can summon wings, gaining 45 feet Flight Speed for 1 minute. " + "\n   " + "While flying, I can lunge at 60 feet Flight Speed and make a melee attack with +2 to my attack and damage rolls. " + "\n   " + "Once I lunge, my wings dissipate into thin air." + "\n   "+ "If Vampiric Protection is used, Bat's Wings becomes 1x per long rest.",
			action : [["action", " (summon)"], ["bonus action", " (dismiss)"]],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Vampiric Protection",
			source : ["MCVLW", 2],
			minlevel : 10,
			description : desc([
                "As a bonus action while Bat's Wings is active, I can land and curl down my wings around me, turning them to stone. " + "\n   " + "To use this ability, I sacrifice half my current Hit Points, rounded down. When I dismiss this ability, my Bat's Wings are dismissed." + "\n   " + "While active:",
                "\u2022 I gain +5 AC. Each creature within 30 feet of me must succeed on a Constitution save or take 3d7 Necrotic damage, half as much on a successful save.",
                "\u2022 On each of my following turns, as an action, I can maintain this form.",
                "\u2022 Each creature that starts its turn in this area, or move into it during their turn, they must succeed on a Constitution save or take 2d6 Necrotic damage, half as much on a successful save.",
                "\u2022 Undead and constructs are not affected by this ability.",
                "\u2022 I have disadvantage on abilities or attacks that require me to see the target.",
                "\u2022 I automatically failed Dexterity saves.",
                "\u2022 Bat's Wings can be used again after a long rest if this ability is used."
            ]),
			action : [["bonus action", " (activate)"], ["action", " (maintain)"]],
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Leech",
			source : ["MCVLW", 2],
			minlevel : 14,
			description : "\n   " + "Leech spell is added to my Mystic Arcanum",
			spellcastingBonus : {
				name : "Mystic Arcanum (7) - Leech",
				spells : ["leech"],
				selection : ["leech"],
				firstCol : "oncelr"
			},
			toNotesPage : [{
				name : "Leech Spell",
				page3notes : true,
				note : "\n Upon casting this spell, choose Hit Points or an Ability when casting Leech. If you choose Hit Points, the target must make a Constitution saving throw, taking 8d10 Necrotic Damage on a failed save, or half as much damage on a successful one; you also gain the same amount as Temporary Hit Points. This happens Instantaneously." + "\n   " + "If you choose an Ability, the target must make a saving throw of the selected Ability, taking 4d10 Necrotic Damage on a failed save, or half as much damage on a successful one. Furthermore, on a failed save, the target gets disadvantage on saving throws of the chosen Ability, while you gain advantage on the same Ability. You can maintain this effect if you hold Concentration, up to 10 minutes."
			}]
		}
	}
});

// Add Warlock Invocation
AddWarlockInvocation("Improved Charm Person (prereq: Vampire Lord patron, Charm Person spell)", {
	name : "Improved Charm Person",
	description : "\n   " + "When I cast Charm Person while me or my companions are fighting the target, it does not" + "\n   " + " have advantage on its Wisdom saving throw.",
	source : ["MCVLW", 1],
	submenu : "[improves Charm Person]",
	prereqeval : "classes.known.warlock.subclass == 'warlock-the vampire lord' && (isSpellUsed('charm person', true))",
	spellChanges : {
        "charm person" : {
            description : "1+1/SL humanoids, each max 30 ft apart, save or charmed",
            changes : "Using Improved Charm Person, my target does not have advantage on their saving throw if me or my companions are fighting them."
        }
    },
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellKey == "charm person") {
					spellObj.description = "1+1/SL humanoids, each max 30 ft apart, save or charmed";
					return true;
				};
			},
			"Using Improved Charm Person, my target does not have advantage on their saving throw if me or my companions are fighting them."
		]
	}
});

// Add spells that are not in the SRD
SpellsList["leech"] = {
	name : "Leech",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["MCVLW", 2],
	level : 7,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Special",
    save : "Con",
	description : "HP(Insta):8d10 Necro; save halves. OR Ability(Conc 10m): 4d10 Necro; save halves. Check pg3 for details.",
	descriptionFull : "Upon casting this spell, choose Hit Points or an Ability when casting Leech. If you choose Hit Points, the target must make a Constitution saving throw, taking 8d10 Necrotic Damage on a failed save, or half as much damage on a successful one; you also gain the same amount as Temporary Hit Points. This happens Instantaneously." + "\n   " + "If you choose an Ability, the target must make a saving throw of the selected Ability, taking 4d10 Necrotic Damage on a failed save, or half as much damage on a successful one. Furthermore, on a failed save, the target gets disadvantage on saving throws of the chosen Ability, while you gain advantage on the same Ability. You can maintain this effect if you hold Concentration, up to 10 minutes."
};
