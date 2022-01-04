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

var iFileName = "Artificer Forge Adept.js";

SourceList["KB:EE"] = {
    name : "Keith Baker: Exploring Eberron",
    abbreviation : "KB:EE",
    group : "Dungeon Master's Guild",
    url : "https://www.dmsguild.com/product/315887/Exploring-Eberron",
    date : "2020/07/30",
    defaultExcluded : true
};

AddSubClass("artificer", "maverick", {
    regExpSearch : /maverick/i,
    subname : "Maverick",
    features : {
        "subclassfeature3" : {
            name : "Arcane Breakthroughs",
            source : ["KB:EE", 215],
            minlevel : 3,
            description : desc([
                "I can gain a spell list from my choice of bard, cleric, druid, paladin, ranger, sorcerer, warlock, or wizard",
                "I can also prepare a number of additional spells from my breakthrough list when preparing artificer spells",
                "This number of spells and spell list increases as I gain more levels in artificer."
            ]),
            additional : levels.map(function (n) {
                if (n<3) return ""
                return n < 5 ? "1st level spell" : n < 9 ? "1st level spell; 2nd level spell" : n < 13 ? "1st level spell; 2nd level spell; 3rd level spell" : n < 17 ? "1st level spell; 2nd level spell; 3rd level spell; 4th level spell" : "1st level spell; 2nd level spell; 3rd level spell; 4th level spell; 5th level spell"
            }),
            extrachoices : ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"],
            "bard" : {
                name : "Bard",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["bard"]
                }
            },
            "cleric" : {
                name : "Cleric",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["cleric"]
                }
            },
            "druid" : {
                name : "Druid",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["druid"]
                }
            },
            "paladin" : {
                name : "Paladin",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["paladin"]
                }
            },
            "ranger" : {
                name : "Ranger",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["ranger"]
                }
            },
            "sorcerer" : {
                name : "Sorcerer",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["sorcerer"]
                }
            },
            "warlock" : {
                name : "Warlock",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["warlock"]
                }
            },
            "wizard" : {
                name : "Wizard",
                source : ["KB:EE", 215],
                spellcastingBonus : {
                    "class" : ["wizard"]
                }
            }
        },
        "subclassfeature3.1" : {
            name : "Cantrip Specialist",
            source : ["KB:EE", 215],
            minlevel : 3,
            description : desc([
                "I know an additinonal cantrip than what is allowed for my artificer level",
                "When I finish a short rest, I can replace a cantrip with another artificer or breakthrough cantrip",
                "If it is a breakthrough cantrip, this counts as an artitifcer cantrip"
            ]),
            additional : "One extra cantrip"
        },
        "subclassfeature5" : {
            name : "Cantrip Savant",
            source : ["KB:EE", 215],
            minlevel : 5,
            description : desc([
                "I gain a +1 bonus to my attack roll and save DC for artificer spells",
                "This doesn't apply if my spellcasting focus grants a higher bonus",
                "This bonus increases at 9th level and 15th level",
                "As an action, I can replace an artificer cantrip I know with a different cantrip",
                "This can come from my artificer or breakthrough spell list",
                "I can use this action once and regain its use after a long rest"
            ]),
            action : ["action", "Cantrip Swap"],
            usages : 1,
            recovery : "long rest",
            calcChanges : {
                spellCalc : [
                    levels.map(function (type, n) {
                        if (n < 9 && (type == "dc" && type == "attack")) return 1;
                        if (n < 15 && (type == "dc" && type == "attack")) return 2;
                        if (type == "dc" && type == "attack") return 3;
                    })
                ]
            }
        },
        "subclassfeature9" : {
            name : "Superior Breakthroughs",
            source : ["KB:EE", 215],
            minlevel : 9,
            description : desc([
                "I can cast a prepared breakthrough spell two spell slots higher than the current cast",
                "I can use this feature a number of times equal to my Intelligence modifier",
                "I regain all uses after a short or long rest"
            ]),
            usages : "Intelligence modifier per",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "short rest"
        },
        "subclassfeature9.1" : {
            name : "Work in Progress",
            source : ["KB:EE", 215],
            minlevel : 9,
            description : desc([
                "I can replace a prepared artificer spell with any spell from my spell list",
                "This new spell counts as a prepared spell",
                "I can use this feature once and regain its use after a short or long rest"
            ]),
            usages : 1,
            recovery : "short rest",
        },
        "subclassfeature15" : {
            name : "Final Breakthrough",
            source : ["KB:EE", 215],
            minlevel : 15,
            description : desc([
                "I gain 1 extra spell slot of each spell level I can prepare",
                "These spell slots can only be used to cast Breakthrough spells",
            ]),
        }
    }
})
