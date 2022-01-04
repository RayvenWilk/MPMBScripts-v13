/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a new subclass for warlocks
				
	Code by:	dbarber96b
	Date:		2021-08-9 (sheet v13.0.0beta16)
*/

var iFileName = "GamemasterPatron.js";
RequiredSheetVersion(13);

SourceList["GMBDB"] = {
	name : "GMBinderDBarber96b",
	abbreviation : ["GMBDB"],
	group : "Dbarber96b",
	url : "https://www.gmbinder.com/share/-MdN8Kx_JYwIkby0V7kG",
	date : "2021/08/09"
};
AddSubClass("warlock", "the gamemaster", {
	regExpSearch : /^(?=.*gamemaster)(?=.*warlock).*$/i,
	subname : "the Gamemaster",
	source : ["GMBDB"],
	spellcastingExtra : ["bane", "dissonant whispers", "detect thoughts", "enhance ability", "clairvoyance", "tiny servant", "confusion", "phantasmal killer", "animate objects", "bigby's hand"],
	features : {
		"subclassfeature1" : {
			name : "Gambler's Tools",
			source : ["GMBDB"],
			minlevel : 1,
			description : "\n   " + "I gain expertise with two gaming sets of my choice, and I can use them as my arcane focus"+ " \n   " + "I also gain proficiency with rapiers",
			toolProfs : [["Gaming sets", 2]],
			weaponProfs : [false, false, ["rapier"]]
		},
   		"subclassfeature1.1" : {
			name : "Siphon Luck",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"As a bonus action, I choose one creature I can see within 60 feet of me and choose one ability score.",
				"Whenever that creature makes an ability check with the chosen ability score, it must roll a d4 and subtract the number rolled from the ability check.",
				"An affected creature remains unlucky until you finish a short or long rest, until you are knocked unconscious, or until you use this feature again.",
				"The d4 becomes a d6 at 6th level, a d8 at 10th level, and a d10 at 14th level."
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "House Advantage",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"As a reaction, If I roll a natural 1, I may reroll the die and take the higher number.",
				"If I roll another 1, it is considered a natural 20."
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Honed Composure",
			source : ["GMBDB"],
			minlevel : 10,
			description : "\n   " + "Any creature under the effect of my Siphon Luck feature has disadvantage on attack rolls against me." + "\n   " + "If an unlucky creature misses me with an attack, I can use my reaction to attempt to frighten that creature." + "\n   " + "That creature must succeed on a Wisdom saving throw against my spell save DC or be frightened until the end of its next turn." + "\n   " + "I now have advantage on saving throws against being frightened or charmed",
			action : ["reaction", " (when attacked)"],
			savetxt : { adv_vs : ["frightened", "charmed"] },
		},
		"subclassfeature14" : {
			name : "Deadly Ultimatum",
			source : ["GMBDB"],
			minlevel : 14,
			description : "\n   " + "As an action, I forbid a creature within 60 ft from a certain action" + "\n   " + "If the creature performs the forbidden action, it must make a Wisdom saving throw against my spell save DC, taking 8d6 psychic damage on a failure." + "\n   " + "If it succeeds, this ends the ultimatum.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddFeatureChoice(ClassList.warlock.features["pact boon"], false, "Pact of the Deck", {
	name : "Pact of the Deck",
	source : ["GMBDB"],
	description : desc([
		"I use a deck of playing cards as my spellcasting focus",
		"The deck can be used in place of material components for spells if there is no cost and the materials are not consumed",
   		"Every time you cast a warlock spell of 1st level or higher draw and discard a number of cards from your pact deck equal to the spell level",
		"If at least two of the cards are aces, you cast the spell without expending a spell slot. If at least one of the cards is a joker, you cast the spell and roll for an effect on the Wild Magic Surge table.",
    		"I can use my deck as throwing cards (darts) and I am proficient with them",
		"They are one-handed, thrown finesse weapons with a range of 30/60 feet",
    		"As a bonus action, I can draw and discard a card from my deck, and make a ranged attack against a target. Its suit and face value determine its effect",
		"If I lose my deck, I can preform an 1 hour ceremony to gain a replacement",
		"This ceremony destroys the previous deck and can be done during a short or long rest"
	]),
  toNotesPage : [{
				name : "Pact Deck Damage Table",
				source : ["GMBDB"],
				popupName : "Pact Deck Damage Table, part 1",
				additional : "Suits",
				note : [
        "Suit  Damage",
					"Clubs Force.",
					"Diamonds Cold.",
					"Hearts Fire.",
					"Spades Slashing.",
          ]
			}, {
				name : "Pact Deck Damage Table",
				source : ["GMBDB"],
				popupName : "Pact Deck Damage Table, part 2",
				additional : "Values",
				note : [
					"Value  Damage",
					"Ace The target is vulnerable to damage type of your choice until the end of your next turn.",
					"2-10 Damage",
					"Jacks The target’s movement is halved until the end of its next turn as small spikes appear at its feet.",
					"Queens Draw and throw another card, choosing any damage type for the attack.",
					"Kings The target must succeed on a Strength saving throw or be knocked prone.",
                    "Jokers Roll on the Wild Magic Surge Table."
          ]
			}]
		});
AddWarlockInvocation("Blind's Up (prereq: level 5 warlock, Pact of the Deck)", {
	name : "Blind's Up",
	description : desc([
		"I can send cards from your pact deck to spin around the head of a creature within 60 feet, like a zoetrope.",
		"The target must make a Wisdom saving throw",
		"On a failed save, they do not notice the movement of any creature they can see, instead perceiving it as the creature moving on the spot",
		"A creature reveals its new position if it attacks the target",
		"The target cannot make an opportunity attack against a creature that moves out of its melee range while the effect is active",
		"The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
	]),
	source : ["GMBDB"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "short rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Blind's Up (prereq: Pact of the Deck)", {
	name : "Blind's Up",
	description : desc([
		"I can attempt to conceal my spellcasting by performing card flourishes",
		"I can make a Charisma (Performance) check to disguise any verbal or somatic components as I cast the spell",
		"This is against the Passive Perception of each of those who I are attempting to deceive",
		"On a success they are unaware that you have cast a spell.",
		"The +5 bonus to card-related checks does not apply to this feature"
	]),
	source : ["GMBDB"],
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
AddWarlockInvocation("Damage Dealer (prereq: level 7 warlock, Pact of the Deck)", {
	name : "Damage Dealer",
	description : desc([
		"When I draw a throwing card of face value three or lower, I may draw another and throw the new card instead.",
		"I then discard both cards"
	]),
	source : ["X", 56],
	prereqeval : function(v) { return classes.known.warlock.level >= 7 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
AddWarlockInvocation("Diviner (prereq: level 5 warlock, Pact of the Deck)", {
	name : "Diviner",
	description : desc([
		"I am able to read my pact deck to predict the actions of your opponents",
		"On your turn in combat, you can slow your movement to 0 feet to take a reading",
		"Draw five cards, and return them in any order to the top of my deck",
		"All opponents have disadvantage on their attacks against me until my next turn."
	]),
	source : ["GMBDB"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "long rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Fresh Hand (prereq: level 7 warlock, Pact of the Deck)", {
	name : "Fresh Hand",
	description : desc([
		"As a bonus action, I can draw a card from my pact deck.",
		"I can regain a spell slot by discarding every card of this suit left in my deck.",
		"If I draw a joker, I do not regain a spell slot, and must shuffle any discarded jokers back into my deck.",
		"I regain the use of this feature after a short rest"
	]),
	source : ["GMBDB"],
	prereqeval : function(v) { return classes.known.warlock.level >= 7 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", ""]
});
AddWarlockInvocation("Suit of Armor (prereq: level 5 warlock, Pact of the Deck)", {
	name : "Suit of Armor",
	description : desc([
		"I am able to surround myself with a protective layer of cards",
		"I can draw and discard a card from my pact deck",
		"For one hour, I gain temporary hit points equal to the face value of the card (1-13) and resistance to the damage type represented by its suit",
		"If I draw a joker, discard it and draw another card - the effect targets the nearest creature to me."
	]),
	source : ["GMBDB"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", ""]
});
AddWarlockInvocation("Swindle (prereq: Pact of the Deck)", {
	name : "Swindle",
	description : desc([
		"I can attempt to sneak a card from your discard pile back into your pact deck",
		"As a bonus action, I make a Sleight of Hand check against DC 10. Every time I attempt this, the DC increases by 5, and resets to 10 after a long rest",
		"On a success, my patron doesn’t notice my con, and I can move a card of your choice from the discard pile to anywhere in your pact deck.",
		"On a failure, you are caught, stunned until the end of your next turn, and your patron compels you to shuffle any jokers in your discard pile back into your pact deck."
	]),
	source : ["GMBDB"],
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
AddWarlockInvocation("Warped Limits (prereq: level 9 warlock, Pact of the Deck)", {
	name : "Warped Limits",
	description : desc([
		"Your spells with a base range of ‘Touch’ can be cast with a range of 60 feet.",
	    "If I draw a joker, discard it and draw another card - the effect targets the nearest creature to me"
	]),
	source : ["GMBDB"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
