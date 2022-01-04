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

AddSubClass("bard", "dirge singer", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*dirge)(?=.*(singer)).*$/i,
    subname : "College of the Dirge Singer",
    features : {
        "subclassfeature3.bardic inpsiration" : {
            name : "Bardic Inspiration",
            source : [["SRD", 12], ["P", 53]],
            minlevel : 1,
            description : desc([
                "As a bonus action, I give a creature in 60 ft that can hear me an inspiration die (max 1)",
                "For 10 min, the recipient can add it to one ability check, attack roll, or saving throw",
                "This addition can be done after seeing the d20 roll, but before knowing the outcome"
            ]),
            additional : ["d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10"],
            usages : "Charisma modifier per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : levels.map(function (n) {
                return n < 5 ? "long rest" : "short rest";
            }),
            action : ["bonus action", ""],
            eval : function() {
				processActions(false, "Bard: Bardic Inspiration", ClassList.bard.features["subclassfeature2.bardic inspiration"].action, "Bardic Inspiration");
			}
		},
        "subclassfeature3" : {
            name : "Broad Inspiration",
            source : ["KB:EE", 216],
            minlevel : 3,
            description : desc([
                "I learn the guidance cantrip as a bard spell that doesn't count against my cantrip amount",
                "As a bonus action, I can give two people inspiration within 60 feet of me",
                "This uses one of my Bardic Inspiration uses",
                "My bardic inspiration becomes a d8 at 10th level and d10 at 15th level instead"
            ])
        },
        "subclassfeature3.1" : {
            name : "Keeper of History",
            source : ["KB:EE", 216],
            minevel : 3,
            description : desc([
                "I gain proficiency in either History or Performance",
                "if I am proficient in both skills, I gain proficiency in my choice of:",
                "Arcana, Intimdiation, or Deception",
                "Additionally, I choose either History or Performance to gain expertise in"
            ]),
            skillstxt : "History, Performance, or my choice of Arcana, Intimidation, or Deception",
            extrachoices : ["History", "Performance"],
            "history" : {
                name : "History Expertise",
                source : ["KB:BE", 216],
                description : desc([""]),
                skills : [["History", "only"]]
            },
            "performance" : {
                name : "Performance Expertise",
                source : ["KB:BE", 216],
                description : desc([""]),
                skills : [["Performance", "only"]]
            }
        },
        "subclassfeature6" : {
            name : "Commanding Voice",
            source : ["KB:EE", 216],
            minlevel : 6,
            description : desc([
                "As a reaction, I can have a creature with my bardic inspiration die attack again",
                "This creature must use the attack action for me to grant an additional attack",
                "The creature rolls the Bardic Inspiraiton die and attacks the number rolled to damage"
            ]),
            action : ["reaction", ""]
        },
        "subclassfeature14" : {
            name : "Master commander",
            source : ["KB:EE", 216],
            minlevel : 14,
            description : desc([
                "I can use Countercharm as a bonus action",
                "If charmed or frightened, a creature immediately makes a save against the effect",
                "A creature benefiting from Countercharm gains a d4 to an ability check or saving throw"
            ]),
            action : ["bonus action", "Countercharm"]
        }
    }
})