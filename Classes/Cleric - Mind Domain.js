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
};

AddSubClass("cleric", "mind domain", {
    regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*mind).*$/i,
    subname : "Mind Domain",
    source : ["KB:EE", 217],
    spellcastingExtra : ["command", "dissonant whispers", "detect thoughts", "phantasmal force", "enemies abound", "fear", "confusion", "phantasmal killer", "dominate person", "telekinesis"],
    features : {
        "subclassfeature1" : {
            name : "Flash of Insight",
            source : ["KB:EE", 217],
            minlevel : 1,
            description : desc([
                "I can reroll an ability check after I see the result but before it is failure or success",
                "I gain a bonus to this reroll equal to half my cleric level"
            ]),
            additional : levels.map(function (n) { return "+" + Math.floor(n/2);}),
            usages : 2,
            recovery : "short rest"
        },
        "subclassfeature1.1" : {
            name : "Psychic Force",
            minlevel : 1,
            source : ["KB:EE", 217],
            description : desc([
                "When I cast a cantrip that deals radiant damage, it can deal psychic damage instead"
            ])
        },
        "subclassfeature1.2" : {
            name : "Channel Divinity: Psychic Feedback",
            source : ["KB:EE", 217],
            minlevel : 1,
            description : desc([
                "I can impose disadvantage on a creature's Wisdom save within 30 feet as a reaction",
                "I must use this ability before learning the outcome of the roll",
                "If the spell or effect that caused the save isn't mine, I deal psychic damage",
                "The creature takes psychic damage equal to half my cleric level before their save"
            ]),
            additional : levels.map(function (n) { return "+" + Math.floor(n/2);})
        },
        "subclassfeature6" : {
            name : "Gestalt Anchor",
            source : ["KB:EE", 217],
            minlevel : 6,
            description :desc([
                "I grant a +2 bonus to Int, Wis, or Cha saves for me or allies within 10 feet of me",
                "I must be conscious to grant this bonus"
            ])
        },
        "subclassfeature8" : {
            name : "Potent Spellcasting",
            source : ["KB:EE", 217],
            minlevel : 8,
            description : desc([
                "I add my Wisdom modifier to damage I deal with cleric cantrips"
            ])
        },
        "subclassfeature17" : {
            name : "Bend Reality",
            source : ["KB:EE", 217],
            minlevel : 17,
            description : desc([
                "I can replace an ally's failed save with a 20 within 30 feet of me",
                "I can use this feature once and regain all uses after a short or long rest"
            ]),
            usages : 1,
            recovery : "short rest"
        }
    }
})