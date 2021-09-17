
/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Frost Bolt Cantrip by DNDBlue
	Effect:     
	Content:	Weapon cantrips found : https://www.gmbinder.com/share/-Mj4aQyEZcvqnhmpZ9SI?fbclid=IwAR3CGUZP_JFWGpFuzbvuC1PmFOFMPYZHEwa_Escl-EGbrsnHl9WFqI66O7E
                
	Code by:	rayvenwilk
	Date:		2021-09-12 (sheet 13.0.4)
*/

var iFileName = "FrostBoltCantrip_byDNDBlue(coded_by_rayvenwilk).js";

SpellsList["frost bolt"] = {
	name : "Frost Bolt",
	classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : ["HB"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "self",
	components : "S,M*",
	compMaterial : "a ranged weapon that has the ammo property & is worth at least 1sp",
	duration : "1 round",
	description : "create an icicle piece of ammo, on hit target takes weapon dmg & speed is reduced by 10ft. +1d6 Cold dmg @ 5th, 11th, & 17th lvl",
	descriptionCantripDie : "create an icicle piece of ammo, on hit target takes weapon dmg & speed is reduced by 10ft +`CD-1`d6 Cold dmg",
	descriptionFull : desc([
		"You conjure and icicle, which is loaded and shot from the weapon used in this spell's casting. Make a ranged weapon attack against one creature within the weapon's normal range. On a hit, the target suffers the weapon attack's normal effects and then becomes wreathed in frost. The target's speed is reduced by 10ft until hte start of your next turn.",
		"At 5th level, the ranged weapon attack deals an extra 1d6 cold damage to the target on a hit. This damage increases by 1d6 when you reach 11th level (2d6), and 17th level (3d6).",
	]),
}
