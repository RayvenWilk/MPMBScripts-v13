var iFileName = "VRGR_pub_Lineages.js";

SourceList.P={
	name : "Van Richten's Guide to Ravenloft: Lineages",
	abbreviation : "VRGR",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/van-richtens-guide-ravenloft",
	date : "2021"
};

RaceList["Reborn"] = {
	regExpSearch : /Reborn/i,
	name : "Reborn",
	source : ["VRGR", 21],
	plural : "Reborn",
	size : 3,
	speed : [30, 20],
	skillstxt : "Choose any two skills",
	languageProfs : ["Common", "+1 from Reborn"],
	vision : "Darkvision 60 ft",
	savetxt : { adv_vs : ["poison", "disease", "death"], text : ["Magic cannot put me to sleep"]},
	dmgres : ["Poison"],
	age : " They do not age from the state they were in when they came back to life and they do not die of old age",
	height : " Depends on the base race",
	weight : " Depends on the base race",
	heightMetric : " Depends on the base race",
	weightMetric : " Depends on the base race",
	improvements : "Reborn: +2 and +1 to any two scores or +1 to any three;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Reborn (+2 and +1 to any two scores or +1 to any three)" + (typePF ? " " : "\n") + "\nAncestral Legacy: You gain two skill proficiencies of your choice.\nDeathless Nature: You have advantage on saves against disease and the poisoned condition as well as resistance to poison damage. Advantage on death saving throws. You do not need to eat, drink, or breathe. You do not need to sleep and magic cannot put you to sleep. You finish a LR in 4 hours if you spend those hours in an inactive, motionless state, during which you retain awareness. \nKnowledge from a Past Life: Can add a 1d6 to a skill check after rolling a number of times equal to prof per LF.",
	features : {
		"Knowledge from a Past Life" : {
			name : "Knowledge from a Past Life",
			minlevel : 1,
			usages : "prof",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		}
	}
};

RaceList["dhampir"] = {
	regExpSearch : /dhampir/i,
	name : "Dhampir",
	source : ["VRGR", 17],
	plural : "Dhampirs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose any two skills",	
	languageProfs : ["Common", "+1 from Dhampir"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Vampiric Bite",
		source : ["VRGR", 17],
		ability: 3,
		damage : [1, 4, "piercing"],
		description : "Uses Constitution, Can be empowered a number of times per LR equal to prof.",
	},
	weaponsAdd : ["Vampiric Bite"],
	vision : "Darkvision 60 ft",
	age : "They mature at roughly the same rate as humans, but do not age further after reaching maturity, and they do not die of old age",
	height : " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Dhampir: +2 and +1 to any two scores or +1 to any three;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Dhampir (+2 and +1 to any two scores or +1 to any three)" + (typePF ? " " : "\n") + "\nAncestral Legacy: You gain two skill proficiencies of your choice.\nVampiric Bite: Your bite is a natural melee weapon dealing 1d4 piercing damage using Constitution with advantage if half health. Can empower the bite if not an undead or construct target a number of times equal to proficiency bonus per LR. See Notes.\nDeathless Nature: You do not need to breath.\nSpider Climb: You have a climbing speed equal to your walking speed. At 3rd level you can move up, down, and across vertical surfaces even along ceilings, while leaving your hands free.",
	features : {
		"vampiric bite" : {
			name : "Empower Bite",
			minlevel : 1,
			usages : "prof",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		}
	}
};


RaceList["Hexblood"] = {
	regExpSearch : /Hexblood/i,
	name : "Hexblood",
	source : ["VRGR", 19],
	plural : "Hexbloods",
	size : 3,
	speed : [30, 20],
	skillstxt : "Choose any two skills",
	languageProfs : ["Common", "+1 from Hexblood"],
	vision : "Darkvision 60 ft",
	age : "They mature at roughly the same rate as humans, but do not age further after reaching maturity, and they do not die of old age.",
	height : "Depends on the origin",
	weight : "Depends on the origin",
	heightMetric : "Depends on origin",
	weightMetric : "Depends on origin",
	improvements : "Hexblood: +2 and +1 to any two scores or +1 to any three;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Hexblood (+2 and +1 to any two scores or +1 to any three)" + (typePF ? " " : "\n") + "\nAncestral Legacy: You gain two skill proficiencies of your choice.\nHex Magic: You can cast Hex and Disguise Self once each per LR and can cast them using spell slots [choice of Wis, Int, or Cha]. \nEerie Token: As a bonus action you can remove a bit of your body as a token, it is imbued with magic until LR then it regrows. Used for: \n      Telepathic Message: As an action can message to the holder of the token within 10 miles containing 25 words or less. \n      Remote Viewing: Can enter a trace (blind & deaf during) for 1 min to see and hear the token's location, token vanishes after.",
features : {
		"hex magic (hex)" : {
			name : "Hex Magic (Hex)",
			limfeaname : "Hex",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Hex Magic",
				spells : ["hex"],
				selection : ["hex"],
				firstCol : 'oncelr'
			}
		},
		"hex magic (disguise self)" : {
			name : "Hex Magic (Disguise Self)",
			limfeaname : "Disguise Self",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Hex Magic",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncelr'
			}
		},
		"eerie token" : {
			name : "Eerie Token",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	},
};

UpdateDropdown("race");