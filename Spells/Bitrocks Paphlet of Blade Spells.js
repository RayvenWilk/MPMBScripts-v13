/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Bitrock's Paphlet of Blade Spells
	Effect:     This script adds 8 homebrew cantrips to enhance melee strikes
	Content:	Bitrock's Paphlet of Blade Spells by u/bhitrock (https://www.reddit.com/r/UnearthedArcana/comments/qo1fky/bitrocks_paphlet_of_blade_spells_a_list_of_8/)	
	Code by:	rayvenwilk
	Date:		2021-11-15 (sheet 13.0.8)
*/

var iFileName = "BitrocksPaphletofBladeSpells_byBitrock[transcribed by rayvenwilk].js";

SourceList["PBS"] = {
	name : "Paphlet of Blade Spells",
	abbreviation : "PBS",
	group : "Homebrew",
	url : "https://www.reddit.com/r/UnearthedArcana/comments/qo1fky/bitrocks_paphlet_of_blade_spells_a_list_of_8/",
};

SpellsList["cleaving blade"] = {
	name : "Cleaving Blade",
	classes : ["warlock", "wizard"],
	source : ["PBS", 1],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1sp",
	duration : "Instanteous",
	description : "Melee wea atk with cast; any crea in 10ft line behind target 1d8 Necrotic dmg. +1d8 CL 5/11/17",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d8 Necr dmg; any crea in 10ft line behind target `CD`d8 Necr dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a melee attack with it against one creature within your reach. On a hit, the target suffers the weapon attack’s normal effects, and you can manifest a wave of dark energy following your attack, instantly damaging anyone it reaches. Any creature standing in a 10 foot line behind your target takes 1d8 necrotic damage."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 necrotic damage to the target on a hit, and the damage the other targets take increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8)."
	])
},
SpellsList["consuming blade"] = {
	name : "Consuming Blade",
	classes : ["artificer", "druid", "warlock"],
	source : ["PBS", 1],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1sp",
	duration : "1 rnd",
	description : "Melee wea atk with cast;",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d4 Acid dmg; target does not scrape off acid, end of turn +`CD`d4 Acid dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a melee attack with it against one creature within your reach. On a hit, the target suffers the weapon attack’s normal effects, and you can cause caustic acid to appear on the target’s wound. Unless they take an action to scrape the acid off themselves, they suffer 1d4 acid damage at the end of their turn."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d4 acid damage to the target on a hit, and the damage the target takes at the end of their turn increases to 2d4. Both damage rolls increase by 1d4 at 11th level (2d4 and 3d4) and again at 17th level (3d4 and 4d4).",
	])
},
SpellsList["judjement strike"] = {
	name : "Judjement Strike",
	classes : ["cleric", "warlock"],
	source : ["PBS", 2],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a weapon worth at least 1cp",
	duration : "1 rnd",
	description : "",
	descriptionCantripDie : "Wea atk w/ cast +`CD-1`d10 Lightning dmg; start of next turn +`CD`d10 Lightning dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a weapon attack with it against one creature within your reach. On a hit, the target suffers the weapon attack’s normal effects, and the spot they stand on is marked for a lightning strike. At the start of your next turn, a bolt of lightning strikes from the sky, dealing 1d10 lightning damage to any creature currently standing on that spot."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d10 lightning damage to the target on a hit, and the damage of the lightning strike increases to 2d10. Both damage rolls increase by 1d10 at 11th level (2d10 and 3d10) and again at 17th level (3d10 and 4d10).",
	])
},
SpellsList["pale-scream blade"] = {
	name : "Pale-scream Blade",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["PBS", 2],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self(5ft rad)",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1sp",
	duration : "1 rnd",
	description : "",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d8 Psychic dmg; targ ends turn w/in 5ft of it's ally +`CD`d8 Psychic dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack’s normal effects, and screaming voices in its head warn it not to trust anyone. If the target ends its turn within 5 feet of a creature allied to it, it takes 1d8 psychic damage."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 psychic damage to the target on a hit, and the damage the target takes for standing next to an ally increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
	])
},
SpellsList["quashing blade"] = {
	name : "Quashing Blade",
	classes : ["bard", "cleric", "sorcerer", "warlock"],
	source : ["PBS", 2],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a melee weapon worth at least 1sp",
	duration : "1 rnd",
	description : "",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d4 Radiant dmg; target ends turn w/in 5ft of your ally +`CD`d4 Radiant dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a melee attack with it against one creature within your reach. On a hit, the target suffers the weapon attack’s normal effects, and small light spears begin to orbitate between it and any of your allies within 5 feet of it. If the target ends its turn within 5 feet of one or more of your allies, it takes 1d4 radiant damage for each one of your allies that is adjacent to it."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d4 radiant damage to the target on a hit, and the damage the target takes from the tiny spears increases to 2d4. Both damage rolls increase by 1d4 at 11th level (2d4 and 3d4) and again at 17th level (3d4 and 4d4).",
	])
},
SpellsList["red-rime blade"] = {
	name : "Red-rime Blade",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : ["PBS", 2],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self(5ft rad)",
	components : "S,M\u0192",
	compMaterial : "a melee weapong worht at least 1sp",
	duration : "1 rnd",
	description : "",
	descriptionCantripDie : "Melee wea atk w/ cast +`CD-1`d6 Cold dmg;target hit before your next turn +`CD`d6 Cold dmg to all w/in 5ft",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack’s normal effects, and you can cause a thin layer of crimson ice to form on the target. If the target creature takes any damage before the start of your next turn, the ice bursts in an explosion of tiny shards, dealing 1d6 cold damage to all creatures within 5 feet of it."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d6 cold damage to the target on a hit, and the damage of the explosion increases to 2d6. Both damage rolls increase by 1d6 at 11th level (2d6 and 3d6) and again at 17th level (3d6 and 4d6).",
	])
},
SpellsList["sickening strike"] = {
	name : "Sickening Strike",
	classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : ["PBS", 2],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a weapon worth at least 1cp",
	duration : "1 rnd",
	description : "",
	descriptionCantripDie : "Wea atk w/ cast +`CD-1`d10 Poison dmg; target ends turn w/in 5ft of you +`CD`d10 Poison dmg",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a weapon attack with it against one creature within your reach. On a hit, the target suffers the weapon attack’s normal effects, and is affected by a venom which damages it when near you. If the target ends its turn within 5 feet of you, it takes 1d10 poison damage."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d10 poison damage to the target on a hit, and the damage the target takes for ending its turn near you increases to 2d10. Both damage rolls increase by 1d10 at 11th level (2d10 and 3d10) and again at 17th level (3d10 and 4d10).",
	])
},
SpellsList["truthful strike"] = {
	name : "Truthful Strike",
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	source : ["PBS", 3],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u0192",
	compMaterial : "a weapon worth at least 1 cp",
	duration : "Instantaneous",
	description : "",
	descriptionCantripDie : "Wea atk w/ cast +`CD-1`d6 Force Dmg; you use your spellcasting modifier for atk & dmg rolls instead of Str or Dex",
	descriptionFull : desc([
		"You brandish the weapon used in the spell’s casting and make a weapon attack with it against one creature within your reach. You can use you spellcasting ability modifier instead of Strength or Dexterity for these attack and damage rolls."
		+ AtHigherLevels + "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d6 force damage to the target on a hit, and the damage increases again at 11th level (2d6) and 17th level (3d6).",
	])
}
