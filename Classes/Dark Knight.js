var iFileName = "Dark Knight FFXIVxDnD.js";

RequiredSheetVersion("13.0.6");

SourceList["FFXIVxDnD"] = {
	name : "Final Fantasy XIV D&D Compendium",
	abbreviation : "FFXIVxDnD",
	group : "FFXIVxDnD",
};

var DKDarksideDie = function(n) {
	return "1d" + (n < 4 ? 6 : n < 10 ? 8 : n < 16 ? 10 : n < 20 ? 12 : 10);
};

ClassList["dark knight"] = {
	regExpSearch : /^(?=.*dark)(?=.*knight).*$/i,
	name : "Dark Knight",
	source : [["FFXIVxDnD", 60]],
	primaryAbility : "Strength or Charisma",
	prereqs : "Strength 13 or Charisma 13",
	die : 10,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Con", "Cha"],
	skillstxt : {
		primary : "Choose two from Athletics, Arcana, History, Insight,Intimidation, Perception, and Survival.",
		secondary : "Choose one from Athletics, Arcana, History, Insight,Intimidation, Perception, or Survival."
	},
	armorProfs : {
			primary : [true, true, true, true],
			secondary : [true, true, true, true]
		},
		weaponProfs : {
			primary : [true, true],
			secondary : [true, true]
		},
		equipment : "MyClass starting equipment:\n \u2022 Chain mail -or- hide armor;\n \u2022 A martial weapon and a shield -or- two martial weapons;\n \u2022 A short bow and 20 arrows -or- two daggers;\n \u2022 An explorer's pack -or- a dungeoneer's pack.", //required; the text to display when citing the starting equipment
		subclasses : ["Lonely Paths", []],
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		spellcastingAbility : 6,
		features : {
			"well of darkness" : {
				name : "Well of Darkness",
				source : [["FFXIVxDnD", 61]],
				minlevel : 1,
				description : desc([
					"I have a number of these points equal to my Dark Knight level and use them for various features",
					"I recover them after a long rest"
				]),
				usages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
				recovery : "long rest",
			},

			"darkside" : {
				name : "Darkside",
				source : [["FFXIVxDnD", 62]],
				minlevel : 1,
				description : "[1 well of darkness]" + " \n " + "As a bonus action I can deal additional necrotic damage on melee attacks" + " \n " + "This lasts for a number of rounds equal to my charisma modifier",
				additional : levels.map(DKDarksideDie),
				action : [["bonus action", ""]]
			},

			"fighting style" : {
				name : "Fighting Style",
				source : [["FFXIVxDnD", 62]],
				minlevel : 2,
				description : '\n   Choose a Fighting Style using the "Choose Feature" button above',
				choices : ["Archery", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
				"defense" : FightingStyles.defense,
				"dueling" : FightingStyles.dueling,
				"protection" : FightingStyles.protection,
				"great weapon fighting" : FightingStyles.great_weapon,
				"two-weapon fighting" : FightingStyles.two_weapon
			},

			"burning blood" : {
				name : "Burning Blood",
				source : [["FFXIVxDnD", 62]],
				minlevel : 3,
				description : "[1 hit dice]" + "\n   " + "As a bonus action I can recover Well of Darkness points",
				action : [["bonus action", ""]]
			},

			"subclassfeature3" : {
				name : "The Lonely Path",
				source : [["FFXIVxDnD", 62]],
				minlevel : 3,
				description : desc([
					'Choose a Lonely Path you commit to and put it in the "Class" field',
					"Choose either the Blackblood, Abyss Knight, or Dark Magus"
				])
			},

			"the blackest night" : {
				name : "The Blackest Night",
				source : [["FFXIVxDnD", 62]],
				minlevel : 7,
				description : "[1 hit dice]" + "\n   " + "As a bonus action I can give me or an ally within 30 feet temporary hit points equal to the result + my Charisma modifier",
				action : [["bonus action", ""]]
			},

			"fight or flight" : {
				name : "Fight or Flight",
				source : [["FFXIVxDnD", 62]],
				minlevel : 9,
				description : "[2 well of darkness points]" + "\n   " + "I can cast the Cause Fear or Compelled Duel spells.",
				spellcastingExtra : ["fear", "compelled duel"]
			},

			"curse of the abyss" :{
				name : "Curse of the Abyss",
				source : [["FFXIVxDnD", 62]],
				minlevel : 10,
				description: desc([
					"As a bonus action I can curse a creature for a minute, the curse ends if either of us dies or if I'm incapacitated. I gain the following benefits:"
					" \u2022 I gain a bonus to damage rolls against the cursed target. The bonus equals my proficiency bonus.",
					" \u2022 Attack rolls I make against the cursed target are a critical hit on a roll of 19 or 20 on the d20",
					" \u2022 If the cursed target dies, I regain hit points equal to my Dark Knight level + my Charisma modifier (minimum of 1 hit point) and 1 Well of Darkness point."
				]),
				recovery : "long rest",
				usages : 1,
				action : [["bonus action", ""]]
			},

			"abyssal communion" : {
				name : "Abyssal Communion",
				source : [["FFXIVxDnD", 62]],
				minlevel : 13,
				description : "[6 well of darkness points]" + "\n   " + "I can cast Rary's Telepathic Bond.",
				spellcastingExtra : ["rary's telepathic bond"]
			},

			"quietus" :{
				name : "Quietus",
				source : [["FFXIVxDnD", 62]],
				minlevel : 14,
				description: "[2 well of darkness points]" + "\n   " + "As an action I can make a melee weapon attack to all creatures within 10ft. of me." + "\n [1 hit die]" + "\n" + "I can deal additional necrotic damage to all creatures attacked.",
				action : [["action", ""]]
			},

			"dark mind" :{
				name : "Dark Mind",
				source : [["FFXIVxDnD", 63]],
				minlevel : 15,
				description: desc([
					"I gain proficiency with Wisdom saving throws."
					]),
				saves : ["Wis"]
			},

			"stalwart soul" :{
				name : "Stalwart Soul",
				source : [["FFXIVxDnD", 63]],
				minlevel : 18,
				description: desc([
					"At the start of each of my turns, I regain hit points equal to 5 + my Constitution modifier if I have no more than half of my hit points left."
					"I don't gain this benefit if I have 0 hit points."
					]),
			},

			"living dead" :{
				name : "Living Dead",
				source : [["FFXIVxDnD", 63]],
				minlevel : 20,
				description: " [1 hit dice]" + "\n   " + "When I'm reduced to 0 Hit Points but not killed outright, instead of becoming incapacitated, I may expend one hit die and recover hit points equal to the result + your Constitution modifier."
			},
		}
};

AddSubClass("dark knight", "blackblood", {
		regExpSearch : /^(?=.*dark)(?=.*knight)(?=.*blackblood).*$/i,
	subname : "Blackblood",
	source : ["FFXIVxDnD", 63],
	features : {
		"subclassfeature3" : {
			name : "Plunge",
			source : ["FFXIVxDnD", 63],
			minlevel : 3,
			description: "\n   " + "As an action I can move to a space beside a creature within a 15ft. radius and make a melee weapon attack against that creature, dealing an additional damage.",
			action : ["action", ""],
			usages : Str/2,
			additional : ["", "", "2d6 damage", "2d6 damage", "2d6 damage", "3d6 damage", "3d6 damage", "3d6 damage", "3d6 damage", "3d6 damage", "4d6 damage", "4d6 damage", "4d6 damage", "4d6 damage", "4d6 damage", "4d6 damage", "5d6 damage", "5d6 damage", "5d6 damage", "5d6 damage"],
			recovery : "long rest",
		},


		"subclassfeature6" : {
			name : "Piercing Intimidation",
			source : ["FFXIVxDnD", 63],
			minlevel : 6,
			description : "[1 well of darkness point]" + "\n   " + "I add my Darkside bonus die to intimidation checks.",
		},

		"subclassfeature11" : {
			name : "Soul Eater",
			source : ["FFXIVxDnD", 63],
			minlevel : 11,
			description : "\n   " + "Once per turn I can recover hit points equal to half the damage dealt by the Darkside feature",
		},

		"subclassfeature17" : {
			name : "Ravaging Darkness",
			source : ["FFXIVxDnD", 63],
			minlevel : 17,
			description : "\n   " + "I add my Charisma modifier to the bonus damage of the Darkside feature",
			additional : DKDarksideDie + Cha,
		},
	}
});
