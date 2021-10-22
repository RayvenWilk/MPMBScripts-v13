/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Inventor Spells by Kibbles Tasty
	Effect:     
	Content:	
	Code by:	rayvenwilk
	Date:		2021-10-19 (sheet 13.0.8)
*/

var iFileName = "InventorSpells_byKibblesTasty(transcribed_by_rayvenwilk).js";

SpellsList["arcane ablation"] = {
    name : "Arcane Ablation",
    classes : ["artificer", "shaman", "sorcerer", "warlock", "witch", "wizard"],
    source : ["HB"],
    level : 1,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    components : "V,S",
    duration : "1 hr",
    description : "Imbue worn item, +4 temp HP. used -1 from prev total added (4 is now 3)",
    descriptionFull : "You touch a piece of worn armor or clothing and imbue it with magic. The creature wearing this imbued item gains 4 temporary hit points for the duration. When these temporary hit points are exhausted, at the start of the creature's next turn it will gain hit points equal to 1 hit point less than the previous amount gained from this spell (for example, from 4 to 3), until no temporary hit points would be gained and the spell ends." + AtHigherLevels + "The initial temporary hit points increases by 1 for each slot level above 1st.",
},
SpellsList["arcane weapon"] = {
    name : "Arcane Weapon",
    classes : ["artificer", "shaman", "sorcerer", "warlock", "witch", "wizard"],
    source : ["HB"],
    level : 1,
    school : "Trans",
    time : "bonus",
    range : "Touch",
    components : "V,S",
    duration : "1 hr",
    description : "Wea counts as magical & Force dmg. If range wea, no longer consumes ammo or reloaded.",
    descriptionFull : "You touch a weapon and imbue it with magic. For the duration the weapon counts as a magical weapon and any damage dealt by it is Force damage. When casting this one as a weapon with the ammunition property, it no longer consumes ammunition when fired, and does not need to be reloaded." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd or 4th level, the duration becomes 8 hours. When you use a spell slot of 5th level or higher, the duration becomes 24 hours.",
},
SpellsList["bond item"] = {
    name : "Bond Item",
    classes : ["artificer", "cleric", "druid", "shaman", "sorcerer", "warlock", "witch", "wizard"],
    source : ["HB"],
    level : 1,
    school : "Conj",
    time : "1 min",
    range : "Touch",
    components : "V,S",
    duration : "8 hrs",
    description : "Form link with item <100lbs, w/ bonus a recall to hand. If held, crea Cha save (adv. if hold >1min)",
    descriptionFull : "You touch an item weighing no more than 100 pounds and form a link between you and it. Until the spell ends, you can recall it to your hand as a bonus action. \nIf another creature is holding or wearing the item when you try to recall it, they make a Charisma saving throw to retain possession of the item, and if they succeed, the spell fails. They make this save with advantage if they have had possession of the item for more than 1 minute.",
}