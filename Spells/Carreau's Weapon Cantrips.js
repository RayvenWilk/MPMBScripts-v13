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
	Date:		2021-09-12 (sheet 13.0.8)
*/

var iFileName = "CarreausWeaponCantrips_byLeRoiDeCarreau(coded_by_rayvenwilk).js";

SpellsList["frosted arrow"] = {
	name : "Frosted Arrow",
	classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a ranged weapon worth at least 1sp",
	duration : "1 rnd",
	description : "Ranged wea atk with cast; speed reduced 10ft.; +1d8 at CL 5/11/17",
	descriptionCantripDie : "Rng wea atk w/ cast +`CD-1`d8 Cold dmg; speed reduced 10ft.",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and its movement speed is reduced by 10ft. for the duration of the spell.",
		"At Higher Levels. At 5th level, the ranged attack deals an extra 1d8 cold damage to the target on a hit." + AtHigherLevels + "That damage roll increases by 1d8 at 11th level (2d8) and 17th level (3d8).",
	]),
},
SpellsList["shining arrow"] = {
	name : "Shining Arrow",
	classes : ["artificer", "bard", "cleric", "sorcerer", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a ranged weapon worth at least 1sp",
	duration : "Instantaneous",
	description : "Ranged wea atk with cast; can hit crea in line of target w/in 15ft for 0d8+spell mod Radiant dmg.; +1d8 at CL 5/11/17",
	descriptionCantripDie : "Rng wea atk w/ cast +`CD-1`d8 Rad dmg; `CD-1`d8+spellcasting ability modifier Rad dmg to crea in line of target w/in 15ft ",
	descriptionFull : desc([
        	"You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and you can cause the light to pierce through the creature and hit a second creature on a same line and within 15 feet of the first one. The second creature takes radiant damage equal to your spellcasting ability modifier." + AtHigherLevels + "At 5th level, the ranged attack deals an extra 1d8 radiant damage to the target on a hit, and the radiant damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
	])
},
SpellsList["lightning throw"] = {
	name : "Lightning Throw",
	classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1 sp with the Thrown property",
	duration : "Instantaneous",
	description : "Ranged wea atk with cast; wea returns, 0d8+spell mod Lightning dmg to crea w/in 10ft of me; +1d8 at CL 5/11/17",
	descriptionCantripDie : "Rng wea atk w/ cast +`CD-1`d8 Lightning dmg; wea returns, `CD-1`d8 +spellcasting ability modifier Lightning dmg to crea w/in 10ft",
	descriptionFull : desc([ 
		"You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and the weapon returns to your hand, crackling with lightnings, and you can cause the lightnings to leap to an other creature within 10 feet of you. The second creature takes lightning damage equal to your spellcasting ability modifier." + AtHigherLevels + "At 5th level, the ranged attack deals an extra 1d8 lightning damage to the target on a hit, and the lightning damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
	])
},
SpellsList["ravenous throw"] = {
	name : "Ravenous Throw",
	classes : ["artificer", "bard", "cleric", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1 sp with the Thrown property",
	duration : "1 rnd",
	description : "Ranged wea atk with cast; w/in 10ft, next melee hit to same crea 1d6 Necrotic dmg.; +2d6 @ CL 5/11/17",
	descriptionCantripDie : "Rng wea atk w/in 10ft cast +`CD-1`d6 Necrotic dmg; next melee hit to same crea `CD`d6 Necrotic dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a ranged attack with it against a creature that is at least 10 feet from you. On a hit, the target suffers the weapon attack’s normal effects, and a dark energy gnaws the creature's defenses. The next time the creature is hit by a melee weapon attack, it takes extra 1d6 necrotic damage." + AtHigherLevels + "At 5th level, the ranged attack deals an extra 1d6 necrotic damage to the target on a hit, and the necrotic damage from the melee weapon attack increases to 2d6. Both damage rolls increase by 1d6 at 11th level (2d6 & 3d6) and 17th level (3d6 & 4d6).",
	]),
	dynamicDamageBonus : {
		extraDmgGroupsSameType : /(atk .*?necrotic\. dmg.*?)/i
	}
},
SpellsList["acid pike"] = {
	name : "Acid Pike",
	classes : ["artificer", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1 sp with the reach property",
	duration : "1 rnd",
	description : "Melee wea atk with cast; 5ft dia of acid on ground, end turn in area 1d8 Acid dmg.; +2d8 @ CL 5/11/17",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d8 Acid dmg; 5ft dia of acid on ground, end turn in area `CD`d8 Acid dmg.",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a melee attack with it. On a hit, the target suffers the weapon attack’s normal effects, and acid splashes from your weapon and creates a pool of 5 feet diameter on the ground beneath the creature's feet. The pool of acid lasts for the spell's duration, and any creature that end its turn in that pool takes 1d8 acid damage."  + AtHigherLevels + "At 5th level, the melee attack deals an extra 1d8 acid damage to the target on a hit, and the damage a target takes from ending its turn in the acid pool increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 & 3d8) and again at 17th level (3d8 & 4d8).",
	]),
	dynamicDamageBonus : {
		multipleDmgMoments : true,
		extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( crit)/i
	}
},
SpellsList["tormeting pike"] = {
	name : "Tormenting Pike",
	classes : ["artificer", "cleric", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1 sp with the reach property",
	duration : "1 rnd",
	description : "Melee wea atk with cast; 0d8+spell mod psychic dmg 1st time crea atk not you; +2d8 at CL 5/11/17",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d8 Psychic dmg; 1st time crea atk not you `CD-1`d8 +spellcasting ability modifier Psychic dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a melee attack with it. On a hit, the target suffers the weapon attack’s normal effects, and the first time it attacks a creature other than you before the spell ends, it takes psychic damage equal to your spellcasting ability modifier." + AtHigherLevels + "At 5th level, the melee attack deals an extra 1d8 psychic damage to the target on a hit, and the damage the target takes if it attacks a creature other than you increases to 1d8 + your spellcasting modifier. Both damage rolls increase by 1d8 at 11th level (2d8 & 2d8) and again at 17th level (3d8 & 3d8).",
	])
},
SpellsList["poisonous shield"] = {
	name : "Poisonous Shield",
	classes : ["artificer", "druid"],
	source : ["HB"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "S:5-ft rad",
	components : "S,M\u0192",
	compMaterial : "a shield worth at least 1 sp",
	duration : "1 rnd",
	description : "Poisonous spikes grow on your shield each time a crea targets you with a melee atk, it takes Poison dmg equal to your +spell mod; +1d6 at CL 5/11/17",
	descriptionCantripDie : "Your shield grows poisonous spikes, ea time crea targets you w/ melee `CD-1`d6 +spellcasting ability modifier Poison dmg",
	descriptionFull : desc([
		"Poisonous spikes grow all over your shield for the duration of the spell, and every time a creature targets you with a melee attack, it takes poison damage equal to your spellcasting ability modifier." + AtHigherLevels + "At 5th level, the poison damage increases to 1d6 + your spellcasting modifier. That damage roll increases by 1d6 at 11th level (2d6) and again at 17th level (3d6).",
	])
},
SpellsList["resonant shield"] = {
	name : "Resonant Shield",
	classes : ["artificer", "cleric"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "S,M\u0192",
	compMaterial : "a shield worth at least 1 sp",
	duration : "1 rnd",
	description : "Next crea to hit you w/ melee atk, must succeed on a str save, fail 0d8+spell mod Force dmg, pushed 5ft knocked prone; +1d8 at CL 5/11/17",
	descriptionCantripDie : "Next melee atk vs you, crea str save or `CD-1`d8 +spellcasting ability modifier Force dmg & pushed 5ft/knocked prone",
	descriptionFull : desc([
		"You gain the same benefits as if you used the Dodge action. Moreover, the next creature that hits you with a melee attack while this spell is active must succeed on a strength saving throw or take force damage equal to your spellcasting ability modifier, be pushed 5 feet from you, and be knocked prone. Once a creature has hit you, the spell ends (and you no longer benefit from the advantages of the Dodge action)." + AtHigherLevels + "At 5th level, the force damage increases to 1d8 + your spellcasting ability modifier. That damage roll increases again by 1d8 at 11th level (2d8) and once again at 17th level (3d8).",
	])
},
SpellsList["ice strike"] = {
	name : "Ice Strike",
	classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a one handed melee weapon worth at least 1 sp",
	duration : "1 rnd",
	description : "Ice covers melee wea atk with cast; reduce speed by 10ft.; +1d8 at CL 5/11/17",
	descriptionCantripDie : "Ice covers melee wea atk w/ cast; `CD-1`d8 Cold dmg & speed reduced 10ft",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make an attack with it against a creature. A fine layer of ice covers your weapon. On a hit, the target suffers the weapon attack’s normal effects, and its movement speed is reduced by 10 feet until the end of your next turn." + AtHigherLevels + "At 5th level, the attack deals an extra 1d8 cold damage to the target on a hit. That damage roll increases by 1d8 at 11th level (2d8) and 17th level (3d8).",
	])
},
//not working for some reason	
SpellsList["force cleave"] = {
	name : "Force Cleave",
	classes : ["artificer", "bard", "cleric", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a two-handed or versatile melee weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Two-handed melee wea atk with cast; 2d6 if speed is reduced; +2d6 @ CL 5/11/17",
	descriptionCantripDie : "Two-handed melee wea w/ cast +`CD-1`d6 Force dmg; if speed reduced +`CD+1`d6 Force dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and takes an extra 2d6 force damage if its movement speed is currently reduced by any effect (the creature is prone, is in a difficult terrain, or suffers the effects of a spell that reduces its movement speed for instance)." + AtHigherLevels + "At 5th level, the weapon attack deals an extra 1d6 force damage to the target on a hit, and the extra force damage increases to 3d6. Both damage rolls increase by 1d6 at 11th level (2d6 & 4d6) and 17th level (3d6 & 5d6).",
	]),
	dynamicDamageBonus : {
		multipleDmgMoments : true,
		extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( crit)/i
	}
},
SpellsList["light strike"] = {
	name : "Light Strike",
	classes : ["artificer", "cleric", "bard", "warlock"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a one handed melee weapon worth at least 1 sp",
	duration : "1 rnd",
	description : "Melee wea atk with cast; if current HP > 1/2 Max HP 1d6 rad dmg. Wea shines & dim light 5' rad.; +1d6 @ CL 5/11/17",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d6 Radiant dmg, if cur HP> 1/2 max +`CD`d6 Radiant dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and if your current Hit Points are greater than half your Maximum Hit Points, the creature takes an extra 1d6 radiant damage. Moreover, your weapon shines and sheds dim light in a 5-foot radius until the end of your next turn." + AtHigherLevels + "At 5th level, the weapon attack deals an extra 1d6 radiant damage to the target on a hit, and the extra radiant damage increases to 2d6. Both damage rolls increase by 1d6 at 11th level (2d6 & 3d6) and 17th level (3d6 & 4d6).",
	]),
	dynamicDamageBonus : {
		multipleDmgMoments : true,
		extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( crit)/i
	}
},	
SpellsList["corrosive cleave"] = {
	name : "Corrosive Cleave",
	classes : ["artificer", "bard", "druid", "warlock"],
	source : ["HB"],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a two handed or versatile melee weapon wielded with two hands worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee wea atk with cast; 1d6 acid if cur HP < 1/2 max HP; +2d6 @ CL 5/11/17",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d6 Acid dmg; if my cur HP < 1/2 my max HP `CD`d6 Acid dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and if your current Hit Points are lower than half your Maximum Hit Points, the creature takes an extra 1d6 acid damage as a black and corrosive liquid covers your weapon." + AtHigherLevels + "At 5th level, the weapon attack deals an extra 1d6 acid damage to the target on a hit, and the extra acid damage increases to 2d6. Both damage rolls increase by 1d6 at 11th level (2d6 & 3d6) and 17th level (3d6 & 4d6).",
	]),
	dynamicDamageBonus : {
		multipleDmgMoments : true,
		extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( crit)/i
	}
},
//not working for some reason	
SpellsList["venomous sting"] = {
	name : "Venomous Sting",
	classes : ["bard", "druid", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a dart or blowgun worth at least 1 sp",
	duration : "Instantaneous",
	description : "Rng wea atk with cast; 1d8 poison + 2d8 if target already poisoned; +2d8 @ CL 5/11/17",
	descriptionCantripDie : "Rng wea atk w/ cast +`CD`d8 Poison dmg; if target already poisoned +`CD+1`d8 Poison dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and takes an extra 1d8 poison damage. Moreover, if the creature suffers currently from the Poisoned condition, it takes an other 2d8 poison damage." + AtHigherLevels + "At 5th level, the weapon attack extra poison damage increases to 2d8, and the extra poison damage if the creature is Poisoned increases to 3d8. Both damage rolls increase by 1d8 at 11th level (3d8 & 4d8) and 17th level (4d8 & 5d8).",
	]),
	dynamicDamageBonus : {
		multipleDmgMoments : true,
		extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( crit)/i
	}
},
//not working for some reason	
SpellsList["sedative sting"] = {
	name : "Sedative Sting",
	classes : ["artificer", "bard", "druid", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a dart or blowgun worth at least 1 sp",
	duration : "1 rnd",
	description : "Ranged wea atk with cast; + 1d6 Psychic + 2d6 Psychic if raging or con spell at end of their turn; +2d6 @ CL 5/11/17",
	descriptionCantripDie : "Rng wea atk w/ cast +`CD-1`d6 Psychic dmg; if raging/con spell at end of their turn +`CD+1`d6 Psychic dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the weapon attack’s normal effects, and takes an extra 1d6 psychic damage. Moreover, if the creature is raging or concentrating on a spell at the end of its next turn, it takes 2d6 psychic damage." + AtHigherLevels + "At 5th level, the weapon attack extra psychic damage increases to 2d6, and the psychic damage the target takes if it is raging or concentrating increases to 3d6. Both damage rolls increase by 1d6 at 11th level (3d6 & 4d6) and 17th level (4d6 & 5d6).",
	]),
	dynamicDamageBonus : {
		multipleDmgMoments : true,
		extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( crit)/i
	}
},
SpellsList["electrified net"] = {
	name : "Electrified Net",
	classes : ["bard", "druid", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a net worth at least 1 sp",
	duration : "Until the target is freed from the net used in the spell's casting",
	description : "On hit net dmg + target takes 2d8 Lightning dmg each time tries to get free; +1d8 at CL 5/11/17",
	descriptionCantripDie : "On hit net dmg, +`CD+1`d8 Lightning dmg each time tries to get free",
	descriptionFull : desc([
		"You brandish the net used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the attack’s normal effects, and every time it makes an ability check or an attack roll to free himself from the net, it takes 2d8 lightning damage." + AtHigherLevels + "At 5th level, the lightning damage increases to 3d8. That damage roll increases by 1d8 at 11th level (4d8) and 17th level (5d8).",
	])
},
SpellsList["dark net"] = {
	name : "Dark Net",
	classes : ["bard", "cleric", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a net worth at least 1 sp",
	duration : "Until the target is freed from the net used in the spell's casting",
	description : "On hit net dmg + 1st hit each round 0d6+spell mod Necrotic dmg; +1d6 at CL 5/11/17",
	descriptionCantripDie : "On hit, net dmg + `CD-1`d6 Necrotic dmg & 1st hit ea rnd `CD-1`d6 +spellcasting ability modifier Necrotic dmg ",
	descriptionFull : desc([
		"You brandish the net used in the spell’s casting and make an attack with it against a creature. On a hit, the target suffers the attack’s normal effects, and the first time it is hit by an attack each round, it takes an extra necrotic damage equal to your spellcasting modifier as shadowy tentacles sprout from the net and leach the life away from its body." + AtHigherLevels + "At 5th level, the necrotic damage increases to 1d6 + your spellcasting modifier. That damage roll increases by 1d6 at 11th level (2d6) and 17th level (3d6).",
	])
},
SpellsList["burning trap"] = {
	name : "Burning Trap",
	classes : ["artificer", "druid", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components: "S,M\u0192",
	compMaterial : "a hunting trap or bag of caltrops worth at least 1 sp",
	duration : "8 hr",
	description : "Once triggered, trap/caltrop dmg + 1d4 Fire dmg at the start of each turn until free/healed; +1d4 at CL 5/11/17",
	descriptionCantripDie : "Once triggered, trap/caltrop dmg + `CD`d4 Fire dmg at start of ea turn until free/healed",
	descriptionFull : desc([
		"You brandish the hunting trap or a bag of caltrops used in the spell’s casting and set it on the ground within 5 feet of you. The next creature that triggers the trap or walks on the caltrops suffers the normal effects of them, and then takes 1d4 fire damage on the start of each of its turns. The spell ends when the creature is freed from your hunting trap or is healed from the caltrops wounds." + AtHigherLevels + "At 5th level, the fire damage increases to 2d4. That damage roll also increases by 1d4 at 11th level (3d4) and 17th level (4d4).",
	])
},
SpellsList["explosive trap"] = {
	name : "Explosive Trap",
	classes : ["artificer", "druid", "wizard"],
	source : ["HB"],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components: "S,M\u0192",
	compMaterial : "a hunting trap or bag of caltrops worth at least 1 sp",
	duration : "8 hr",
	description : "Once triggered, trap/caltrop dmg + 1d8 Thunder dmg + crea w/in 5ft rad take 1d8 Thunder dmg; +1d8 at CL 5/11/17",
	descriptionCantripDie : "Once triggered, trap/caltrop dmg + `CD`d8 Thunder dmg & crea w/in 5ft rad `CD`d8 Thunder dmg",
	descriptionFull : desc([
		"You brandish the hunting trap or a bag of caltrops used in the spell’s casting and set it on the ground within 5 feet of you. The next creature that triggers the trap or walks on the caltrops suffers the normal effects of them, and takes an extra 1d8 thunder damage. Each other creature within 5 feet of the trap when it is triggered also takes 1d8 thunder damage. The spell then ends." + AtHigherLevels + "At 5th level, the thunder damage increases to 2d8. That damage roll also increases by 1d8 at 11th level (3d8) and 17th level (4d8).",
	])
}
