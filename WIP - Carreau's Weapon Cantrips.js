/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Carreau's Weapon Cantrips 1 & 2 by LeRoiDeCarreau
	Effect:     
	Content:	Weapon cantrips found : https://www.gmbinder.com/share/-M_VPXt6my8fft7d23ZD?fbclid=IwAR2Yq9g0EfCuWdbXftIqvLO9lS_JLcyFM0SMscnGnTRij4BeE0YByAI2pE4
                and https://www.gmbinder.com/share/-MjDRx2Vb20I1ni47G4T?fbclid=IwAR0J3XJHpBd5GGYUSs8LdBNwlQCWOR06qKRJDHmBwjuO1_-BSabV8sE1qZs
	Code by:	rayvenwilk
	Date:		2021-09-12 (sheet 13.0.4)
*/

var iFileName = "CarreausWeaponCantrips_byLeRoiDeCarreau(coded_by_rayvenwilk).js";

// Spells start
SpellsList["frosted arrow"] = {
	name : "Frosted Arrow",
	nameShort : "Frosted Arrow",
	nameAlt : "Frosted Arrow",
	classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "self",
	components : "S, M",
	compMaterial : "a ranged weapon worth at least 1sp",
	duration : "1 round",
	firstCol : "atwill",
	description : "ranged atk, wea dmg + speed reduced 10'. 5th 1d8 cold dmg, 11th 2d8 cold dmg, 17th 3d8 cold dmg",
	descriptionMetric : "ranged atk, wea dmg + speed reduced 3m. 5th 1d8 cold dmg, 11th 2d8 cold dmg, 17th 3d8 cold dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and its movement speed is reduced by 10ft. for the duration of the spell.",
		"At Higher Levels. At 5th level, the ranged attack deals an extra 1d8 cold damage to the target on a hit. That damage roll increases by 1d8 at 11th level (2d8) and 17th level (3d8).",
	]),
},
SpellsList["shining arrow"] = {
    name : "Shining Arrow",
    nameShort : "Shining Arrow",
    nameAlt : "Shining Arrow",
    classes : ["artificer", "bard", "cleric", "sorcerer", "wizard"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "self",
    components : "S, M",
    compMaterial : "a ranged weapon worth at least 1sp",
    duration : "Instantaneous",
    firstCol : "atwill",
    description : "ranged atk, wea dmg + can hit crea in line of target w/in 15ft for SC mod rad dmg. 5th 1d8 rad dmg, 11th 2d8 rad dmg, 17th 3d8 rad dmg ",
    descriptionMetric : "ranged atk, wea dmg + can hit crea in line of target w/in 5m for SC mod rad dmg. 5th 1d8 rad dmg, 11th 2d8 rad dmg, 17th 3d8 rad dmg",
    descriptionFull : desc([
        "You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and you can cause the light to pierce through the creature and hit a second creature on a same line and within 15 feet of the first one. The second creature takes radiant damage equal to your spellcasting ability modifier.",
        "At Higher Levels. At 5th level, the ranged attack deals an extra 1d8 radiant damage to the target on a hit, and the radiant damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
    ])
},
SpellsList["lightning throw"] = {
    name : "Lightning Throw",
    nameShort : "Lightning Throw",
    nameAlt : "Lightning Throw",
    classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "self",
    components : "S, M",
    compMaterial : "a melee weapon worth at least 1 sp with the Thrown property",
    duration : "Instantaneous",
    firstCol : "atwill",
    description : "ranged atk, on hit - wea dmg, wea returns, sc mod lightning dmg to crea w/in 10ft of me",
    descriptionMetric : "ranged atk, on hit - wea dmg, wea returns, sc mod lightning dmg to crea w/in 3m of me",
    descriptionFull : desc([
        "You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and the weapon returns to your hand, crackling with lightnings, and you can cause the lightnings to leap to an other creature within 10 feet of you. The second creature takes lightning damage equal to your spellcasting ability modifier.",
        "At Higher Levels. At 5th level, the ranged attack deals an extra 1d8 lightning damage to the target on a hit, and the lightning damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
    ])
},
SpellsList["ravenous throw"] = {
    name : "Ravenous Throw",
    nameShort : "Ravenous Throw",
    nameAlt : "Ravenous Throw",
    classes : ["artificer", "bard", "cleric", "sorcerer", "warlock", "wizard"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "Necr",
    time : "1 a",
    range : "self",
    components : "S, M",
    compMaterial : "a melee weapon worth at least 1 sp with the Thrown property",
    duration : "1 round",
    firstCol : "atwill",
    description : "ranged atk w/in 10ft, wea dmg + next melee hit to same crea - 1d6 necrotic dmg. Both dmg rolls increase by 1d6 at 5th, 11th, & 17th",
    descriptionMetric : "ranged atk w/in 3m, wea dmg + next melee hit to same crea - 1d6 necrotic dmg. Both damage rolls increase by 1d6 at 5th, 11th, & 17th",
    descriptionFull : desc([
        "You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature that is at least 10 feet from you. On a hit, the target suffers the weapon attack’s normal effects, and a dark energy gnaws the creature's defenses. The next time the creature is hit by a melee weapon attack, it takes extra 1d6 necrotic damage.",
        "At Higher Levels. At 5th level, the ranged attack deals an extra 1d6 necrotic damage to the target on a hit, and the necrotic damage from the melee weapon attack increases to 2d6. Both damage rolls increase by 1d6 at 11th level (2d6 & 3d6) and 17th level (3d6 & 4d6).",
    ])
},
SpellsList["acid pike"] = {
    name : "Acid Pike",
    nameShort : "Acid Pike",
    nameAlt : "Acid Pike",
    classes : ["artificer", "sorcerer", "warlock", "wizard"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "self",
    components : "S, M",
    compMaterial : "a melee weapon worth at least 1 sp with the reach property",
    duration : "1 round",
    firstCol : "atwill",
    description : "melee atk, on hit, wea dmg + 5ft dia of acid on ground, end turn in area 1d8 acid dmg. Both dmg rolls increase by 1d8 at 5th, 11th, & 17th",
    descriptionMetric : "melee atk, on hit, wea dmg + 5m dia of acid on ground, end turn in area 1d8 acid dmg. Both damage rolls increase by 1d8 at 5th, 11th, & 17th",
    descriptionFull : desc([
        "You brandish the weapon used in the spell’s casting and make a melee attack with it. On a hit, the target suffers the weapon attack’s normal effects, and acid splashes from your weapon and creates a pool of 5 feet diameter on the ground beneath the creature's feet. The pool of acid lasts for the spell's duration, and any creature that end its turn in that pool takes 1d8 acid damage.",
        "At Higher Levels. At 5th level, the melee attack deals an extra 1d8 acid damage to the target on a hit, and the damage a target takes from ending its turn in the acid pool increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 & 3d8) and again at 17th level (3d8 & 4d8).",
    ])
},
SpellsList["tormeting pike"] = {
    name : "Tormenting Pike",
    nameShort : "Tormenting Pike",
    nameAlt : "Tormenting Pike",
    classes : ["artificer", "cleric", "sorcerer", "warlock", "wizard"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "Ench",
    time : "1 a",
    range : "self",
    components : "S, M",
    compMaterial : "a melee weapon worth at least 1 sp with the reach property",
    duration : "1 round",
    firstCol : "atwill",
    description : "melee atk, wea dmg + SC mod psychic dmg 1st time crea atk not you. 5th lvl add SC mod to dmg. Both dmg rolls increase by 1d8 at 5th, 11th, 17th.",
    descriptionMetric : "melee atk, wea dmg + SC mod psychic dmg 1st time crea atk not you. 5th lvl add SC mod to dmg. Both dmg rolls increase by 1d8 at 5th, 11th, 17th.",
    descriptionFull : desc([
        "You brandish the weapon used in the spell’s casting and make a melee attack with it. On a hit, the target suffers the weapon attack’s normal effects, and the first time it attacks a creature other than you before the spell ends, it takes psychic damage equal to your spellcasting ability modifier.",
        "At Higher Levels. At 5th level, the melee attack deals an extra 1d8 psychic damage to the target on a hit, and the damage the target takes if it attacks a creature other than you increases to 1d8 + your spellcasting modifier. Both damage rolls increase by 1d8 at 11th level (2d8 & 2d8) and again at 17th level (3d8 & 3d8).",
    ])
},
SpellsList["poisonous shield"] = {
    name : "Poisonous Shield",
    nameShort : "Poisonous Shield",
    nameAlt : "Poisonous Shield",
    classes : ["artificer", "druid"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "tran",
    time : "1 a",
    range : "self (5' rad)",
    components : "S, M",
    compMaterial : "a shield worth at least 1 sp",
    duration : "1 round",
    firstCol : "atwill",
    description : "poisonous spikes grow all over your shield every time a crea targets you with a melee atk, it takes poison dmg equal to your SC mod",
    descriptionMetric : "poisonous spikes grow all over your shield every time a crea targets you with a melee atk, it takes poison dmg equal to your SC mod",
    descriptionFull : desc([
        "Poisonous spikes grow all over your shield for the duration of the spell, and every time a creature targets you with a melee attack, it takes poison damage equal to your spellcasting ability modifier.",
        "At Higher Levels. At 5th level, the poison damage increases to 1d6 + your spellcasting modifier. That damage roll increases by 1d6 at 11th level (2d6) and again at 17th level (3d6).",
    ])
},
SpellsList["resonant shield"] = {
    name : "Resonant Shield",
    nameShort : "Resonant Shield",
    nameAlt : "Resonant Shield",
    classes : ["artificer", "cleric"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "self (5' rad)",
    components : "S, M",
    compMaterial : "a shield worth at least 1 sp",
    duration : "1 round",
    firstCol : "atwill",
    description : "next crea to hit you w/ melee atk, must succeed on a str save, fail force dmg SC mod, pushed 5' knocked prone. increase by 1d8 at 5th, 11th, & 17th.",
    descriptionMetric : "next crea to hit you w/ melee atk, must succeed on a str save, fail force dmg SC mod, pushed 1.5m knocked prone. increase by 1d8 at 5th, 11th, & 17th.",
    descriptionFull : desc([
        "You gain the same benefits as if you used the Dodge action. Moreover, the next creature that hits you with a melee attack while this spell is active must succeed on a strength saving throw or take force damage equal to your spellcasting ability modifier, be pushed 5 feet from you, and be knocked prone. Once a creature has hit you, the spell ends (and you no longer benefit from the advantages of the Dodge action).",
        "At Higher Levels. At 5th level, the force damage increases to 1d8 + your spellcasting ability modifier. That damage roll increases again by 1d8 at 11th level (2d8) and once again at 17th level (3d8).",
    ])
},
SpellsList["ice strike"] = {
    name : "Ice Strike",
    nameShort : "Ice Strike",
    nameAlt : "Ice Strike",
    classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "tran",
    time : "1 a",
    range : "self",
    components : "S, M",
    compMaterial : "a one handed melee weapon worth at least 1 sp",
    duration : "1 round",
    firstCol : "atwill",
    description : "ice covers weapon, on hit wea dmg + reduce speed by 10'. increase dmg 1d8 at 5th, 11th, & 17th.",
    descriptionMetric : "ice covers weapon, on hit wea dmg + reduce speed by 3m. increase dmg 1d8 at 5th, 11th, & 17th.",
    descriptionFull : desc([
        "You brandish the weapon used in the spell’s casting and make an attack with it against a creature. A fine layer of ice covers your weapon. On a hit, the target suffers the weapon attack’s normal effects, and its movement speed is reduced by 10 feet until the end of your next turn.",
        "At Higher Levels. At 5th level, the attack deals an extra 1d8 cold damage to the target on a hit. That damage roll increases by 1d8 at 11th level (2d8) and 17th level (3d8).",
    ])
},
SpellsList["force cleave"] = {
    name : "Force Cleave",
    nameShort : "Force Cleave",
    nameAlt : "Force Cleave",
    classes : ["artificer", "bard", "cleri", "sorcerer", "warlock", "wizard"],
    source : ["HB"],
    ritual : false,
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "self",
    components : "S, M",
    compMaterial : "a two-handed or versatile melee weapon worth at least 1 sp",
    duration : "Instantaneous",
    firstCol : "atwill",
    description : "two-handed melee atk, on hit wea dmg + 2d6 if speed is reduced. Both dmg increase 1d6 at 5th, 11th, 17th.",
    descriptionMetric : "two-handed melee atk, on hit wea dmg + 2d6 if speed is reduced. Both dmg increase 1d6 at 5th, 11th, 17th.",
    descriptionFull : desc([
        "You brandish the weapon used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and takes an extra 2d6 force damage if its movement speed is currently reduced by any effect (the creature is prone, is in a difficult terrain, or suffers the effects of a spell that reduces its movement speed for instance).",
        "At Higher Levels. At 5th level, the weapon attack deals an extra 1d6 force damage to the target on a hit, and the extra force damage increases to 3d6. Both damage rolls increase by 1d6 at 11th level (2d6 & 4d6) and 17th level (3d6 & 5d6).",
    ])
},
SpellsList["light strike"] = {
	name : "Light Strike",
	nameShort : "Light Strike",
	nameAlt : "Light Strike",
	classes : ["artificer", "cleric", "bard", "warlock"],
	source : ["HB"],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "self",
	components : "S, M",
	compMaterial : "a one handed melee weapon worth at least 1 sp",
	duration : "1 round",
	firstCol : "atwill",
	description : "melee atk against a crea. On hit, wea dmg + if current HP > 1/2 Max HP 1d6 rad dmg. Wea shines & dim light 5' rad. Both dmg increase 1d6 at 5th, 11th, 17th.",
	descriptionMetric : "melee atk against a crea. On hit, wea dmg + if current HP > 1/2 Max HP 1d6 rad dmg. Wea shines & dim light 1.5m rad. Both dmg increase 1d6 at 5th, 11th, 17th.",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and if your current Hit Points are greater than half your Maximum Hit Points, the creature takes an extra 1d6 radiant damage. Moreover, your weapon shines and sheds dim light in a 5-foot radius until the end of your next turn.",
		"At Higher Levels. At 5th level, the weapon attack deals an extra 1d6 radiant damage to the target on a hit, and the extra radiant damage increases to 2d6. Both damage rolls increase by 1d6 at 11th level (2d6 & 3d6) and 17th level (3d6 & 4d6).",
	])
}
	
	
