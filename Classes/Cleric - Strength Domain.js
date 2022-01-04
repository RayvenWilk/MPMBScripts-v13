AddSubClass("cleric", "strength domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(strength|fighting|conflict)\b).*$/i,
	subname : "Strength Domain",
	source : ["UA", 0],
	spellcastingExtra : ["divine favor", "shield of faith", "enhance ability", "protection from poison", "haste", "protection from energy", "dominate beast", "stoneskin", "destructive wave", "insect plague"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["UA", 0],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Acolyte of Strength",
			source : ["UA", 0],
			minlevel : 1,
			description : "\n   " + "I learn a druid cantrip and proficiency with a skill: Animal Handling, Athletics, Nature, Survival",
			skillstxt : "Choose one from Animal Handling, Athletics, Nature, or Survival",
			spellcastingBonus : {
				name : "Acolyte of Strength",
				"class" : "druid",
				level : [0, 0]
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Feat of Strength",
			source : ["UA", 0],
			minlevel : 2,
			description : "\n   " + "When I make an attack roll, ability check, or saving throw using strength, I can add a +10" + "\n   " + "bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Rhonas' Blessing",
			source : ["UA", 0],
			minlevel : 6,
			description : "\n   " + "When a creature within 30 ft makes an attack roll, ability check, or saving throw using" + "\n   " + "strength, I can use my reaction to add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 63],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 damage of the weapon's type";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Avatar of Battle",
			source : ["P", 63],
			minlevel : 17,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
