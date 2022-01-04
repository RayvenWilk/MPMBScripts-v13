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

AddRacialVariant("fallen aasimar", "mabaran aasimar", {
    regExpSearch : /^(?=.*mabaran)(?=.*aasimar)/i,
    name : "Mabaran Aasimar",
    source : ["KB:EE", 209],
    plural : "Mabaran Aasimar",
    trait : "Mabaran Aasimar (+2 Charisma, +1 Constitution)\nConsuming Touch: Once per long rest as an action, I make a melee spell attack against a creature I can touch. The target takes necrotic damage equal to my level and I regain hit points equal to half the damage dealt (rounded up). Charisma is my spellcasting ability for this trait.\nHerald of Doom: I know the Toll The Dead cantrip. Charisma is my spellcasting modifier for this spell.",
    spellcastingAbility : 6,
    spellcastingBonus : {
		name : "Herald of Doom",
		spells : ["toll the dead-xgte"],
		selection : ["toll the dead-xgte"],
		firstCol : 'atwill'
	},
	features : {
		"consuming touch" : {
            name : "Consuming Touch",
            minlevel : 1,
            additional : levels.map(function (n) {
                if (n < 3 ) return ""
                return n + " damage;" + Math.ceil(n/2) + "/" + n + " hp"
            })
        }
	}
})