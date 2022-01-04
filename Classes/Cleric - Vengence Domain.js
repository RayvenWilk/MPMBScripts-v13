var iFileName = "Cleric - Vengeance Domain";
RequiredSheetVersion(13);

SourceList["HB"] = {
	name : "/u/Thorondr: Vengeance Domain",
	abbreviation : "T:VD",
};

AddSubClass("cleric", "vengeance domain", {
	regExpSearch : /^(?=.*(cleric|warriorpriest|clergy|acolyte))(?=.*\b(vengeance|wrath)\b).*$/i,
	subname : "Vengeance Domain",
	source : ["T:VD"],
	spellcastingExtra : ["compelled duel", "hellish rebuke", "see invisibility", "zone of truth", "bestow curse", "counterspell", "phantasmal killer", "staggering smite", "hold monster", "immolation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficency",
			source : ["T:VD"],
			minlevel : 1,
			description : "\n   " + "At level 1 you gain proficency with martial weapons and Insight and Intimidation skill",
			skills : "\n\n" + toUni("Cardshark (feat)") + ": Deception and Insight.",
            eval : "AddSkillProf('Ins', true); AddSkillProf('Int', true);",
        	removeeval : "AddSkillProf('Ins', false); AddSkillProf('Int', false);",
            weapon : [false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Divine Retribution",
			source : ["T:VD"],
			minlevel : 1,
			description : desc([
				"Also at level 1, you can psychically rebuke attackers.",
                		"When a creature within 5 feet of you that you can see hits you with an attack",
                		"you can use your reaction to force the creature to make an Int saving throw.",
				"On failed 2d8 dmg, on succes half dmg",
				"You can use this effect once, twice from level 6, thrice from level 12.",
				"You regain all expended uses when you finish a short rest."
			]),
			usages : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3],
			recovery : "short rest",
			action : ["reaction", ""],
			eval : function () { RemoveAction( "reaction", "Divine Retribution"); },
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Marked for Vengeance",
			source : ["T:VD"],
			minlevel : 2,
			description : desc([
				"At 2nd level, you learn how to mark a creature as the target of your vengeance.",
				"With a bonus action, you place a magical mark on a creature within 30 feet of you that you can see.",
				"While marked, the creature takes an additional 1d8 psychic damage from your attacks, spells and Divine Retribution feature.",
				"The mark lasts 1 hour or until you dismiss it (requiring no action) or until the creature dies.",
				"The mark can be extended, 2 hours Wis DC15, from 3 hours every hour Wis DC20.",
				"Only one creature can be marked at a time― if you recast it, the current mark disappears.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once).",
				"You regain all expended uses when you finish a long rest."
			]),
			action : ["bonus action", ""],
			eval : function () { RemoveAction("bonus action", "Channel Divinity: Marked for Vengeance"); }
		},
		"subclassfeature6" : {
			name : "Nowhere to Hide",
			source : ["T:VD"],
			minlevel : 6,
			description : desc([
				"At 6th level, you learn how to locate the target of your vengeance.",
				"After spending 10 minutes in prayer, you learn the location of a creature",
				"that is marked with your Marked for Vengeance ability.",
				"When the targets location is revealed, you are aware of the general direction and distance to the marked target.",
				"When you are within 120 feet of the target, you know its exact location."
			]),
			action : ["action", ""],
		},
		"subclassfeature8" : {
			name : "Swift Retribution",
			source : ["T:VD",],
			minlevel : 8,
			description : desc([
				"At 8th level, when you or an ally that you can see within 30 feet of you,",
				"is hit by an attack from a creature you have marked with your Marked for Vengeance ability,",
				"you can strike them down with the wrath of your deity.",
				"When the creature hits you or your ally,",
				"you can use your reaction to deal 1d8 psychic damage to the target.",
				"At 14th level, this damage increases to 2d8.",
			]),
			action : ["reaction", ""],
		},
		"subclassfeature17" : {
			name : "Vengeful Divinity",
			source : ["T:VD"],
			minlevel : 17,
			description : desc([
				"Starting at 17th level, you are a true bane to your marks.",
				"Once per long rest, while a creature is marked, you can become an Angel of Vengeance.",
				"While transformed, you gain spectral wings (any armor or clothing you're wearing is unaffected),",
				"which grant you a flying speed of 60 feet. While you have your wings deployed and are not in the air,",
				"you can use your wings as a shield if you aren't wielding one already.",
				"You can add half of your Wisdom modifier to your AC (rounded down, with a minimum of +1).",
				"Additionally, while in this form, if a creature you've marked deals damage to you,",
				"you can force them to have disadvantage on their next saving throw",
				"against a spell you cast that deals damage as a bonus action.",
				"This form lasts for 1 hour, and during this time you can freely deploy or hide your wings, requiring no action."
			]),
			action : ["action", "bonus action", ""],
        }
    }
});
