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

var iFileName = "Something[transcribed by rayvenwilk].js";

SourceList["KB:EE"] = {
    name : "Keith Baker: Exploring Eberron",
    abbreviation : "KB:EE",
    group : "Dungeon Master's Guild",
    url : "https://www.dmsguild.com/product/315887/Exploring-Eberron",
    date : "2020/07/30",
    defaultExcluded : true
};

AddRacialVariant("scourge aasimar", "fernian aasimar", {
    regExpSearch : /^(?=.*fernian)(?=.*aasimar)/i,
    name : "Fernian Aasimar",
    source : ["KB:EE", 209],
    plural : "Fernian Aasimar",
    dmgres : ["Necrotic", "Fire"],
    trait : "Fernian Aasimar (+2 Charisma, +1 Constitution)\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nShroud of Flames: When I use Radiant Consumption, I deal fire damage instead of radiant damage.\nSpirit of Fire: I know the Produce Flames cantrip. Charisma is my spellcasting ability for it.",
    spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Spirit of Fire",
		spells : ["produce flames"],
		selection : ["produce flames"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"radiant consumption (shroud of flames)" : {
			name : "Radiant Consumption (Shroud of Flames)",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) {
				if (n < 3) return ""
				return  Math.ceil(n/2) + "/" + n + " damage";
			}),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
})