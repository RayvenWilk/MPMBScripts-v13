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

AddSubClass("cleric", "community domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(community)).*$/i,
	subname : "Community Domain",
	source : ["HW", 39],
	spellcastingExtra : ["bless", "goodberry", "aid", "heroism", "beacon of hope", "spirit guardians", "banishment", "faithful hound", "mass cure wounds", "rary's telepathic bond"],
	features : {
		"subclassfeature1" : {
			name : "Blessing of the Hearth",
			soruce : ["HW", 39],
			minlevel : 1,
			toolProfs : ["Cook's Utensils"],
			description : desc([
				"I gain proficiency with cook's utensils. I can conjure a hearth during a rest, feeding my companions. If anyone rolls hit dice while resting at my hearth, they can reroll one of their hit dice, taking the higher roll."
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Magnificent Feast",
			source : ["HW", 39],
			minlevel : 2,
			description : desc([
				"By spending 10 minutes, I can create a number of food items equal to my Wisdom modifier. The food will last up to 8 hours or until the end of a rest. When eaten as an action, it provides 2d4 + my cleric level in healing, and removes either the frightened or poisoned condition."
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Community Watch",
			source : ["HW", 39],
			minlevel : 6,
			description : desc([
				"Number of allies equal to my Wisdom modifier within 30 feet can add a d6 to a skill check, saving throw, or attack roll, lasting for a number of rounds equal to my Wisdom modifier. Allies need to see at least one ally to use this."
			])
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["HW", 19],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Paragon of the People",
			source : ["HW", 39],
			minlevel : 17,
			description : "Community watch grants 2d6 to each ally and immunity to fear. Magnificent Feast produces 2x the amount of foodstuffs, which can also remove either a curse or a disease."
		}
	}
})