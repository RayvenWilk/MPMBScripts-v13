/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
    Effect:		This script adds a class called "Magus" and it's 2 subclases
                This class was made by u/halo6098 and can be found here: 
                https://www.reddit.com/r/UnearthedArcana/comments/dt1x5u/the_magus_package_v10_a_class_inspired_by/
                and here: https://www.gmbinder.com/share/-Lo3OQlxGsirQmkLl8aE
	Code by:	Seneschal
	Date:		2019-09-29 (sheet v13.0.0beta19)
*/

var iFileName = "The Magus Package [Created by halo6098, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["H:TMG"] = {
    name : "Halo: The Magus Package",
    abbreviation : "H:TMG",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.reddit.com/r/UnearthedArcana/comments/dt1x5u/the_magus_package_v10_a_class_inspired_by/",
    date : "2019/11/07"
}

ClassList["magus"] = {
    regExpSearch : /magus/i,
    name : "Magus",
    source : ["H:TMG", 0],
    primaryAbility : "Intelligence",
    prereqs : "Intelligence 13",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Dex", "Int"],
    skillstxt : {
        primary : "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion.",
        secondary : "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion."
    },
    abilitySave : 4,
    armorProfs : {
        primary : [true, false, false, false],
        secondary : [true, false, false, false]
    },
    weaponProfs : {
        primary : [true, false, ["hand crossbow", "scimitar", "rapier", "shortsword"]],
        secondary : [true, false, ["hand crossbow", "scimitar", "rapier", "shortsword"]]
    },
    equipment : "Magus Starting Equipment:" + 
    "\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;" +
	"\n \u2022 A component pouch -or- an arcane focus;" +
    "\n \u2022 A scholar's pack -or- a dungeoneer's pack;" +
    "\n \u2022 Leather armor, any martial weapon, and two daggers" +
    "\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Arcane Disciple", []],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellcastingFactor : 2,
    abilitySave : 4,
    spellcastingKnown : {
        cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spells : "book",
        prepared : true
    },
    spellcastingList : {
        class : "any",
        level : [0, 5],
        spells : [
            //cantrip
            "blade ward", "fire bolt", "light", "mage hand", "prestidigitation", "ray of frost", "shocking grasp", "sword burst", "thunder tap", "true strike",
            //first level
            "absorb elements", "armor of agathys", "charm person", "cure wounds", "detect magic", "ensnaring strike", "expeditious retreat", "feather fall", "flames of avernus", "hellish rebuke", "ice knife", "ray of sickness", "silent image", "tenser's floating disk", "unseen servant", "witch bolt",
            //second level
            "cloud of daggers", "darkvision", "dragon's breath", "knock", "melf's acid arrow", "misty step", "paralysing Palm", "shadow blade", "suggestion", "touch of enfeeblement",
            //third level
            "blink", "catnap", "counterspell", "dispel magic", "feign death", "haste", "primal chaos", "remove curse", "thunder step", "tiny servant", "tongues", "water breathing",
            //fourth level
            "banishment", "bigby's searing palm", "charm monster", "dimension door", "fire shield", "greater invisibility", "leomund's secret chest", "locate creature",
            //fifth level
            "steel wind strike", "touch of death", "skill empowerment", "dominate person", "creation", "teleportation circle", "cone of cold"
            ]
    },
    features : {
        "fighting style" : {
			name : "Fighting Style",
			source : ["H:TMG", 3],
			minlevel : 1,
            description : desc([
                "Choose a Fighting Style using the \"Choose Feature\" button above"
            ]),
			choices : ["Defense", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"two-weapon fighting" : FightingStyles.two_weapon
        },
        "arcane pool" : {
            name : "Arcane Pool",
            source : ["H:TMG", 3],
            minlevel : 1, 
            description : desc([
                "I gain access to arcane points equal to half my Magus level",
                "As a bonus action, I can expend 1 point to give a nonmagical weapon",
                "I am holding +1 to attack rolls and damage rolls for 1 minute",
                "During this time, it also acts as a spellcasting focus",
                "This bonus changes as I increase in Magus level",
            ]),
            additional : levels.map(function(x){
                return "Bonus: " + ((x < 6 ? 1 : x < 11 ? 2 : x < 16 ? 3 : x < 20 ? 4 : 7));
            }),
            usagescalc : levels.map(function(x){
                return (x < 3 ? 1 : (Math.floor(n/2)))  + Number(What('Cha Mod'));
            })
        },
        "spellcasting" : {
            name : "spellcasting",
            source : ["H:TMG", 3],
            minlevel : 2,
            description : desc([
                ""
            ])
        }
    }
}