/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Far East - Forgotten Realms - Decastave Spell
	Effect:     
	Content:	
	Code by:	rayvenwilk
	Date:		2021-09-11 (sheet v13)
*/

var iFileName = "Far East - Forgotten Realms - Decastave Spell.js";

// Spells start
SpellsList["decastave"] = {
	name : "Decastave",
	classes : ["cleric", "druid"],
	source : ["HB"],
	ritual : false,
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "0 ft",
    rangeMetric : "0 km",
	components : "V,S,M",
    compMaterial : "A slender wand of duskwood",
	duration : "1 round",
	firstCol : "checkbox",
	description : "You create a quarterstaff of force, 1d6 force dmg. On crit add 1d8 thunder dmg plus con save (DC 14), fail - perm deaf.",
	descriptionFull : "You conjure into existance a quaterstaff of force, approx. 8ft long & 2in diam. The decastave lasts only so long as you keep it in hand, if you give it to another charater or drop it, it vanishes. (You can cast other spells with somatic components by holding the staff in one hand.) You can use the decastave in combat to strike with a melee attack, dealing 1d6 force damage per hit. Since the decastave is made of force, it affects incorporeal and ethereal creatures normally (provided you can see such creatures). The deastave possesses the thundering weapon ability and deals 1d8 thunder damage on a crit hit. Subjects dealt a crit hit by the decastave much also succeed a constitution save (DC 14) or be defened permanently. Material component: A slender wand of duskwood",
};
