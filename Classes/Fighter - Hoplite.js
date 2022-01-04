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

var iFileName = "Fighter - Hoplite.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("fighter", "hoplite", {
	regExpSearch : /hoplite/i,
	subname : "Hoplite",
	source : ["OotD", 329],
	fullname : "Hoplite",
	features : {
		"subclassfeature3" : {
			name : "Phalanx (Shield Wall)",
			source : ["OotD", 329],
			minlevel : 3,
			description : desc([
				"As a bonus action I can give myself and allies who see or hear me +2 AC",
				"We only get this bonus if standing next to an ally with a shield",
				"Myself and allies also get an additional +1 AC each, if wielding shields"
			]),
			action : ["bonus action", ""],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Spear Mastery",
			source : ["OotD", 329],
			minlevel : 7,
			description : desc([
				"My melee range with spears, tridents, and javelins is 10ft",
				"Their damage changes from d6 to a d8, and from d8 to a d10 when using two hands",
				"I can use a bonus action to attack with the butt end after attacking with them",
				"This attack uses the same ability as the primary attack and deals 1d4 bludgeon. dmg"
			]),
			weaponOptions : {
				regExpSearch : /^(?=.*(spear|trident|javelin))(?=.*butt)(?=.*end).*$/i,
				name : "Spear Butt End",
				source : ["OotD", 329],
				ability : 1,
				type : "spear butt end",
				damage : [1, 4, "bludgeoning"],
				range : "Melee",
				description : "As bonus action after attacking with a spear, trident, or javelin",
				abilitytodamage : true
			},
			weaponsAdd : ["Spear Butt End"],
			action : ['bonus action', 'Butt End Attack (after attack with spear)'],
			weaponProfs : [false, false, ["spear butt end"]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == 'spear' || v.baseWeaponName == 'javelin' || v.baseWeaponName == 'trident') {
							fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
							fields.Description = fields.Description.replace('versatile (1d8)', 'versatile (1d10)');
							fields.Description += (fields.Description ? ', ' : '') + "reach";
						}
					},
					"With a spear/javelin/trident, I get the following benefits:\n \u2022 melee range is 10ft;\n \u2022 The damage die increases to d8 (versatile d10)."
				]
			}
		},
		"subclassfeature10" : {
			name : "Disciplined Defense",
			source : ["OotD", 329],
			minlevel : 10,
			description : desc([
				"I can use a reaction to intercede when an ally I can see within 5ft is attacked",
				"I can add my proficiency bonus to my ally's AC, until the start of my next turn",
				"To do this I must be wielding a shield"
			])
		},
		"subclassfeature15" : {
			name : "Shield Buster",
			source : ["OotD", 329],
			minlevel : 15,
			description : desc([
				"I score a critical hit with my weapon attacks on a roll of 19 and 20",
				"When I score a critcal hit, I knock the target's shield 10ft away",
				"A target not wielding a shield instead takes an additional 1d6 damage"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && !v.CritChance && classes.known.fighter && classes.known.fighter.level > 14) {
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20, Additional 1d6 on crit if target has no shield';
							v.CritChance = 19;
						}
					},
					"My weapon attacks score a critical on a to hit roll of both 19 and 20."
				]
			}
		},
		"subclassfeature18" : {
			name : "Phalanx Wrecker",
			source : ["OotD", 329],
			minlevel : 18,
			description : desc([
				"I can forgo one attack during the Attack action",
				"If I do, I make melee attacks against any number of creatures within 5ft"
			])
		}
	}
}),
AddFightingStyle(["fighter"], "Hoplite", {
	name : "Hoplite Fighting Style",
	source : ["OotD", 329],
	description : desc([
		"When an ally within 5ft of me is hit with a melee attack, I can counterattack",
		"I can use a reaction to make a melee opportunity attack against the attacker",
		"I can only do this while wielding a shield"
	]),
	action : ["reaction", "Hoplite Counterattack"]
})