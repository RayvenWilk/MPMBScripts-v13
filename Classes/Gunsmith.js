/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
    Effect:		This script adds a class called "Gunsmith" and it's 6 subclasses
                This script also adds its own specifc guns and ammo variatons as well
				This class is made by /u/Rhyzler and can be found here: https://drive.google.com/file/d/1iK0JN6OcqBJhqAGhtBBwFsIF5Y6bqnnt/view
				and here: https://www.reddit.com/r/UnearthedArcana/comments/ca5whu/new_gunsmith_class_finalised_version_the/
	Code by:	Seneschal
	Date:		2019-10-07 (sheet v13.0.0beta19)
*/

var iFileName = "The Gunsmith [created by Rhyzler, transcribed by Seneschal]";
RequiredSheetVersion(13);

SourceList["R:G"] = {
    name : "Rhyzler: Gunsmith",
    abbreviation : "R:G",
    group : "Reddit/r/UnearthedArcana",
    defaultExcluded : true,
    url : "https://www.reddit.com/r/UnearthedArcana/comments/ca5whu/new_gunsmith_class_finalised_version_the/",
    date : "2019/07/07"
};

ClassList["gunsmith"] = {
    regExpSearch : /gunsmith/i,
    name : "Gunsmith",
    source : ["R:G", 0],
    primaryAbility : "Dexterity",
    prereqs : "Dexterity 13",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Dex", "Int"],
    skillstxt : {
       primary :  "Choose two from Acrobatics, Arcana, Athletics, Intimidation, Investigation, Perception and Performance",
    },
    abilitySave : 2,
    armorProfs : {
        primary : [true, true, false, false],
        secondary : [true, true, false, false]
    },
    weaponProfs : {
        primary : [true, false, ["Gunsmith Firearms"]],
        secondary : [true, false, ["Gunsmith Firearms"]]
    },
    toolProfs : {
        primary : [["Tinker's Tools", "Int"], "Smith's Tools"],
        secondary : [["Tinker's Tools", "Int"], "Smith's Tools"]
    },
    equipment : "Gunsmith starting equipment:" +
    "\n \u2022 Scale mail -or- leather armour;" +
	"\n \u2022 A dungeoneer's pack -or- an explorer's pack;" +
	"\n \u2022 A pistol and 20 bullets;" +
    "\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Shooting Style", []],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    features : {
        "gunsmithing" : {
            name : "Gunsmithing",
            source : ["R:G", 2],
            minlevel : 1,
            description : desc([ 
                "I can craft firearms of my own design displayed in the class document",
                "My skill is determined by my Smithing level which increase per gunsmith level",
                "My options are the following:",
                "\u2022 Ammunition, Muskets, Pistols,",
                "\u2022 Revolvers, Shotguns, and wrist Pistols"
            ]),
            additional : levels.map(function(n){
                return "Smithing Level: " + (n < 3 ? 1 : n < 5 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5);
            }),
        },
        "grit" : {
            name : "Grit",
            source : ["R:G", 3],
            minlevel : 2,
            description :  desc([ 
                "I gain grit points per gunsmith level to spend on trick shots",
                "I regain 1 grit point when I roll a 20 on a firearm attack",
                "or kill a creature with CR equal to or greater than my level with a firearm."
            ]),
            usages : [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
            recovery : "long rest"
        },
        "trickshots" : {
            name : "Trick Shots",
            source : ["R:G", 3],
            minlevel : 2,
            description : desc([ 
                "I can perform trick shots with grit points, possibly forcing a save on enemies",
                "I choose two at 2nd level and an additional at 7th, 9th, 13th, 15th, and 20th.",
                "Any save DC is equal to 8 + my proficiency bonus + Dex Mod",
                "Pick trick shots using the \"Choose Features\" button."
            ]),
            additional : levels.map(function(n){
                return n < 2 ? "" : n < 7 ? "2 Trick Shots" : n < 9 ? "3 Trick Shots" : n < 13 ? "4 Trick Shots" : n < 15 ? "5 Trick Shots" : n < 20 ? "6 Trick Shots" : "7 Trick Shots";
            }),
            extraname : "Trick Shots",
            extrachoices : 
            ["bullying shot", "cauterizing shot", "dazing shot", "deadeye shot", "disarming shot", "forceful shot", "fan the hammer", 
            "piercing shot", "pistol whip", "ricocheting shot", "violent shot", "winging shot"],
            "bullying shot" : {
                name : "Bullying Shot",
                source : ["R:G", 3],
                description : desc([ 
                    "I can expend one grit point and fire a weapon to scare my enemies as an action",
                    "All hostile creatures within 30ft of me that can see and hear me make a Wis Save",
                    "On a failure, they are frightened of me for one minute",
                    "A creature can make an additional save at the end of its turn, ending it on a success"
                ]),
                action : ["action", ""]
            },
            "cauterizing shot" : {
                name : "Cauterizing Shot",
                source : ["R:G", 3],
                description : desc([ 
                    "As a bonus action after firing my weapon, I can expend one grit point to",
                    "cauterize a wound, regaining 1d10 + half my gunsmith level hitpoints"
                ]),
                action : ["bonus action", ""]
            },
            "dazing shot" : {
                name : "Dazing Shot",
                source : ["R:G", 3],
                description : desc([ 
                    "I can spend one grit point when making a firearms attack against a creature",
                    "On a hit, they take normal damage and make a Con save or become stunned",
                    "This lasts until the end of my next turn"
                ]),
                action : ["action", " (part of attack)"]
            },
            "deadeye shot" : {
                name : "Deadeye Shot",
                source : ["R:G", 3],
                description : desc([ 
                    "I expend one grit point to get advantage on a firearm attack against a creature"
                ]),
                action : ["action", " (part of attack)"]
            },
            "disarming shot" : {
                name : "Disarming Shot",
                source : ["R:G", 3],
                description : desc([ 
                    "I can expend one grit point to shoot a weapon out of an enemy's hand",
                    "On a hit, the creature takes normal damage and must make a Str save",
                    "On a failure, they drop one held object that is pushed up to 10ft away"
                ]),
                action : ["action", " (part of attack)"]
            },
            "forceful shot" : {
                name : "Forceful Shot",
                source : ["R:G", 3],
                description : desc([ 
                    "I can expend one grit point to force an enemy back",
                    "On a hit, an enemy creature takes normal damage and must make a Str save",
                    "On a failure, they are pushed 15ft away from me"
                ]),
                action : ["action", " (part of attack)"]
            },
            "fan the hammer" : {
                name : "Fan the Hammer",
                source : ["R:G", 3],
                description : desc([ 
                    "I can expend one or more grit points to make additional attacks on a creature",
                    "I make a number of attacks equal to the amount of grit points spent",
                    "Initial attack is made as normal but each additional attack add +2 to misfire"
                ]),
                action : ["action", " (part of attack)"]
            },
            "piercing shot" : {
                name : "Piercing Shot",
                source : ["R:G", 3],
                description : desc([
                    "I can expend a grit point to fire through multiple creatures",
                    "Initial attack adds a +1 to the misfire of the weapon",
                    "On a hit, the creature suffers normal damage",
                    "Within that first range increment, roll disadvantage on attacks",
                    "for every creature in a line after the first creature",
                    "Only the first attack roll can trigger a misfire"
                ]),
                action : ["action", " (part of attack)"]
            },
            "pistol whip" : {
                name : "Pistol Whip",
                source : ["R:G", 3],
                description : desc([
                    "As an action or reaction, I can expend one grit point to make a melee attack",
                    "The firearm has the finesse property and deals 1d8 + Dex bludgeoning dmg on a hit"
                ]),
                action : ["action", " (can also be done as a reaction)"]
            },
            "ricocheting shot" : {
                name : "Ricocheting Shot",
                source : ["R:G", 3],
                description : desc([
                    "I expend one grit point to ignore cover so long as I saw the creature and can ricochet"
                ]),
                action : ["action", " (part of attack)"]
            },
            "violent shot" : {
                name : "Violent Shot",
                source : ["R:G", 3],
                description : desc([
                    "I can expend one or more grit point to deal more damage",
                    "I add +1 to the weapon's misfire for the attack",
                    "On a hit, add a number of weapon dmg die equal to grit points spent"
                ]),
                action : ["action", " (part of attack)"]
            },
            "winging shot" : {
                name : "Winging Shot",
                source : ["R:G", 3],
                description : desc([
                    "I can expend a grit point to topple a a creature",
                    "On a hit, the creature takes normal damage and makes a Str save",
                    "On a failure, they are knocked prone"
                ]),
                action : ["action", " (part of attack)"]
            }
        },
        "subclassfeature3" : {
            name : "Shooting Style",
            source : ["R:G", 3],
            minlevel : 3,
            description : desc([
                "Choose a Shooting Style I strive to emulate and put it in the \"Class\" field",
			    "Choose either Bladebarrel, Grenadier, Marksman, Trophy Hunter, Vaquero, or Spellslinger"
            ])
        },
        "quickdraw" : {
            name : "Quickdraw",
            source : ["R:G", 3],
            minlevel : 7,
            description : desc([
                "I can add my proficiency bonus to my initiative",
                "I can stow one firearm and draw another in a single object interaction on my turn"
            ]),
            addMod : { type : "skill", field : "Init", mod : "prof", text : "I add my prof bonus for initiative" }
        },
        "rapid repair" : {
            name : "Rapid Repair",
            source : ["R:G", 3],
            minlevel : 9,
            description : desc([
                "I can spend a grit point to attempt a repair on a misfired firearm as a bonus action"
            ]),
            action : ["bonus action", ""]
        },
        "lightning reload" : {
            name : "Lightning Reload",
            source : ["R:G", 4],
            minlevel : 13,
            description : desc([
                "I can reload any firearm as a bonus action"
            ]),
            action : ["bonus action", ""]
        },
        "hemorrhaging critical" : {
            name : "Hemorrhaging Critical",
            source : ["R:G", 4],
            minlevel : 18,
            description : desc([
                "When I score a critical hit, the target takes additional damage",
                "They take half of the attack damage at the end of their turn"
            ])
        },
        "trut grit" : {
            name : "True Grit",
            source : ["R:G", 4],
            minlevel: 20,
            description : desc([
                "when I start a turn with less than half max hp and have no grit points",
                "I regain one grit points at the start of that turn",
                "I can pick one trick shot I know and use it without expending a grit point",
                "I can use this trickshot in this manner once per short or long rest"
            ]),
            usages : 1,
            recovery : "short rest"
        }
    }
}

//Create Gunsmith Subclasses
AddSubClass("gunsmith", "bladebarrel", { //Bladebarrel
    regExpSearch : /bladebarrel/i,
    subname : "Bladebarrel",
    source : ["R:G", 4],
    weaponProfs : {
        primary : [true, false, ["Gunsmith Firearms", "Gunblade"]], 
        secondary : [true, false, ["Gunsmith Firearms", "Gunblade"]]
    },
    features : {
        "subclassfeature3" : {
            name : "Extended Arsenal",
            source : ["R:G", 4],
            minlevel : 3,
            description : desc([
                "I am proficient in using and crafting gunblades, listed in the class document",
                "I am also proficient in martial melee weapons that deal slashing or piercing damage"
            ])
        },
        "subclassfeature6" : {
            name : "Swift Strikes",
            source : ["R:G", 4],
            minlevel : 6,
            description : desc([
                "When I make a melee attack with my gunblade, I can make a firearm attack as a bonus action",
                "I ignore disadvantage on firearm attacks against a creature within 5ft of me"
            ])
        },
        "subclassfeature10" : {
            name : "Backfire",
            source : ["R:G", 4],
            minlevel : 10,
            description : desc([
                "When I hit with a melee attack with my gunblade, I can make my firearm misfire to double",
                "the damage",
                "I must repair my firearm before I can attempt this again each time I use it"
            ])
        },
        "subclassfeature14" : {
            name : "Combat Roll",
            source : ["R:G", 4],
            minlevel : 14,
            description : desc([
                "I can disengage as a bonus action and reload my firearm as part of that action"
            ]),
            action : ["bonus action", "( disengage/reload)"]
        },
        "subclassfeature17" : {
            name : "Debilitating Shots",
            source : ["R:G", 4],
            minlevel : 17,
            description : desc([
                "When a creature fails a save against my trick shot, I gain adv. on all melee attacks",
                "against that creature until the end of my turn"
            ])
        }
    }
});
AddSubClass("gunsmith", "grenadier", { //Grenadier
    regExpSearch : /grenadier/i,
    subname : "Grenadier",
    source : ["R:G", 4],
    weaponProfs : {
        primary : [true, false, ["Gunsmith Firearms", "Grenades"]],
        secondary : [true, false, ["Gunsmith Firearms", "Grenades"]],
    },
    features : {
        "subclassfeature3" : {
            name : "Expanded Arsenal",
            source : ["R:G", 4],
            minlevel : 3,
            description : desc([
                "I am proficient in using and crafting grenades, listed in the class document",
                "The number of live grenades I can have at a time are equal to double my smithing skill"
            ]),
            additional : levels.map(function(n){
                return "Live Grenades: " + ((n < 3 ? 1 : n < 5 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5)*2);
            }),
        },
        "subclassfeature6" : {
            name : "Controlled Blasts",
            source : ["R:G", 4],
            minlevel : 6,
            description : desc([
                "When I make a grenade attack, I can choose a number of creatures equal to my Int mod",
                "(min 1)",
                "Those creatures chosen automatically succeed on their saving throw against the grenade"
            ])
        },
        "subclassfeature10" : {
            name : "Evasion",
            source : ["R:G", 4],
            minlevel : 10,
            description : desc([
                "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure"
            ]),
            savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
        },
        "subclassfeature14" : {
            name : "Fastball Technique",
            source : ["R:G", 4],
            minlevel : 14,
            description : desc([
                "When I use my action to throw a grenade, I can make a firearm attack as a bonus action"
            ]),
            action : ["bonus action", " (as part of grenade throw)"]
        },
        "subclassfeature17" : {
            name : "Shortened Fuse",
            source : ["R:G", 4],
            minlevel : 17,
            description : desc([
                "When I throw a grenade as an action, I can spend a grit point to shoot the grenade",
                "All creatures in the grenade's area of effect make the save with disadvantage"
            ])
        }
    }
});
AddSubClass("gunsmith", "marksman", { //Marksman
    regExpSearch : /marksman/i,
    subname : "Marksman",
    source : ["R:G", 5],
    weaponProfs : {
        primary : [true, false, ["Gunsmith Firearms", "Sniper Rifle"]],
        secondary : [true, false, ["Gunsmith Firearms", "Sniper Rifle"]]
    },
    features : {
        "subclassfeature3" : {
            name : "Expanded Arsenal",
            source : ["R:G", 5],
            minlevel : 3,
            description : desc([
               "I am proficient in using and crafting Sniper Rifles, listed in the class document"
            ]),
        },
        "subclassfeature6" : {
            name : "Marksman's Eye",
            source : ["R:G", 5],
            minlevel : 6,
            description : desc([
                "I can cast Hunter's Mark once per long or short rest at 1st level",
                "My Deadeye Shot trickshot feature extends to every attack I make that turn"
            ]),
            spellcastingBonus : {
                name : "Mark'sman Eye",
                spells : ["hunter's mark"],
                selection : ["hunter's mark"]
            }
        },
        "subclassfeature10" : {
            name : "Steady Breathing",
            source : ["R:G", 5],
            minlevel : 10,
            description : desc([
                "As a bonus action, I can expend one grit point to ignore disadvantage on attacks rolls",
                "against one creature of my choice until the end of my turn",
                "Alternatively, I can end one of the following conditions affecting me:",
                "Blinded, Deafened, Frightened, or Stunned"
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature14" : {
            name : "Unrelenting Aim",
            source : ["R:G", 5],
            minlevel: 14,
            description : desc([
                "Whenever I take a firearm attack, I treat a d20 roll of 7 or lower as an 8",
                "unless it causes a misfire"
            ])
        },
        "subclassfeature17" : {
            name : "Vicious Intent",
            source : ["R:G", 5],
            minlevel : 17,
            description : desc([
                "I roll a critical hit on a roll of a 19 or 20",
                "I regain a grit point on a roll of 19 or 20 on a d20 roll for a firearm attack"
            ])
        }
    }
});
AddSubClass("gunsmith", "trophy hunter", { //Trophy Hunter
    regExpSearch : /trophy hunter/i,
    subname : "Trophy Hunter",
    source : ["R:G", 5],
    features : {
        "subclassfeature3" : {
            name : "Prey Slayer",
            source : ["R:G", 5],
            minlevel : 3,
            skillstxt : "Perception or Survival",
            description : desc([
                "I am proficient in either Perception or Survival",
                "I use the \"Choose Features\" button to choose one creature type from the Monster Manual",
                "I gain advantage on Perception and Survival checks to track a creature of that type"
            ]),
            extraname : "Prey Slayer",
            extrachoices : ["aberrations", "beasts", "celestials", "constructs", "dragons", "elementals", "fey", "fiends", "giants", "monstrosities", "oozes", "plants", "undead", "humanoids"],
            "abberations" : {
                name : "Abberations",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Abberations"
                ])
            },
            "beasts" : {
                name : "Beasts",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Beasts"
                ])
            },
            "celestials" : {
                name : "Celestials",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Celestials"
                ])
            },
            "constructs" : {
                name : "Constructs",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Constructs"
                ])
            },
            "dragons" : {
                name : "Dragons",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Dragons"
                ])
            },
            "elementals" : {
                name : "Elementals",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Elementals"
                ])
            },
            "fey" : {
                name : "Fey",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Fey"
                ])
            },
            "fiends" : {
                name : "Fiends",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Fiends"
                ])
            },
            "giants" : {
                name : "Giants",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Giants"
                ])
            },
            "monstrosities" : {
                name : "Monstrosities",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Monstrosities"
                ])
            },
            "oozes" : {
                name : "Oozes",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Oozes"
                ])
            },
            "plants" : {
                name : "Plants",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Plants"
                ])
            },
            "undead" : {
                name : "Undad",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Undad"
                ])
            },
            "humanoids" : {
                name : "Humanoids",
                source : ["M", 6],
                description : desc([
                    "I gain advantage on Perception and Survival Checks to track Humanoids"
                ])
            },
        },
        "subclassfeature3.1" : {
            name : "Marked for Death",
            source : ["R:G", 5],
            minlevel : 3,
            description : desc([
                "For 1 minute, I can mark a target when I hit them with a firearm attack",
                "I know their exact location, even if they're invisible",
                "This effect ends early if they move more than 60ft away, transition to another plan or I mark another target",
                "I mark a number of creatures equal to my Wisdom modifer per day",
                "At 14th level, I can mark two targets at once. If I mark a third, the effect ends on the first creature"
            ]),
            usages : "Wisdom Modifer Per",
            usagescalc : "event.value = What('Wis Mod');",
            recovery : "long rest"
        },
        "subclassfeature6" : {
            name : "Professional Courtesy",
            source : ["R:G", 5],
            minlevel : 6,
            description : desc([
                "Whenever I hit a mark with a firearm attack, I deal extra weapon damage"
            ]),
            additional : levels.map(function(n){
                return (n < 6 ? "" : n < 10 ? 1 : n < 14 ? 2 : n < 17 ? 3 : 4) + "d4 damage"
            })
        },
        "subclassfeature10" : {
            name : "Expedient Executor",
            source : ["R:G", 5],
            minlevel : 10,
            description : desc([
                "My marks have disadvantage on saving throws against my Trick Shots"
            ])
        },
        "subclassfeature17" : {
            name : "Inescapable Demise",
            source : ["R:G", 5],
            minlevel : 17,
            description : desc([
                "If a marked creature gets more than 60ft away from me, I can spend a grit point as a reaction",
                "I immediately take an additional turn where I can use my spend to move closer and attack them",
                "If my mark is more than 60ft away at the end of that turn, the mark fades",
                "I regain this ability after finishing a short or long rest."
            ]),
            usages : 1,
            recovery : "short rest",
            action : ["reaction", ""]
        }
    }
});
AddSubClass("gunsmith", "vaquero", { //Vaquero
    regExpSearch : /vaquero/i,
    subname : "Vaquero",
    source : ["R:G", 5],
    features : {
        "subclassfeature3" : {
            name : "Bonus Proficiencies",
            source : ["R:G", 5],
            minlevel : 3,
            description : desc([
                "I am proficient in Animal Handling; if already proficient, I gain expertise"
            ]),
            skills : ["Animal Handling"],
            skillstxt : "Proficient in Animal Handling or Expertise if already proficient"
        },
        "subclassfeature3.1" : {
            name : "At Home in the Saddle",
            source : ["R:G", 5],
            minlevel : 3,
            description : desc([
                "I have advantage on saving throws made to avoid falling off my mount",
                "If I fall off my mount no more than 10ft, I land on my feet if not incapacitated",
                "Mounting or dismounting a creature only costs me 5ft of movement rather",
                "than half my speed"
            ])
        },
        "subclassfeature6" : {
            name : "Rider's Bond",
            source : ["R:G", 6],
            minlevel : 6,
            description : desc([
                "If I spend 10 minutes caring for and bonding with a mount, I gain adv. on all Animal Handling",
                "checks with that mount",
                "This lasts until I do something to harm or scare the mount (at the DM's discretion)",
                "I add my proficiency bonus to my mount's AC and any check my mount makes while I see it",
                "I can also mantain control of my mount without the use of my hands"
            ])
        },
        "subclassfeature10" : {
            name : "Herd the Cattle",
            source : ["R:G", 6],
            minlevel : 10,
            description : desc([
                "While mounted, I no longer have disadvantage on firearm attack against creatures",
                "within 5ft of me",
                "I can use firearms for attacks of opportunity when a creature leaves my reach while I'm mounted"
            ])
        },
        "subclassfeature14" : {
            name : "Unmounted Combatant",
            source : ["R:G", 6],
            minlevel : 14,
            description : desc([
                "On my turn while unmounted, I can verbally command my mount to move up to its movement speed",
                "I can use my bonus action to command my mount to take the Dash, Disengage, Dodge,",
                "or Help action",
                "I can forgo one of my attacks in my extra attack feature to command my mount to take",
                "the attack action"
            ])
        },
        "subclassfeature17" : {
            name : "Trusty Steed",
            source : ["R:G", 6],
            minlevel : 17,
            description : desc([
                "A mount under the effects of my Rider's Bond has its max hp increased by half",
                "my max hp rounded down or four times my gunslinger level, whichever is higher",
                "I can also summon my mount from up to 1 mile away with an audible call",
                "If a creature targets my mount and would reduce it to 0 hp,",
                "I can expend a grit point to have it drop to 1 instead"
            ])
        }
    }
});
AddSubClass("gunsmith", "spellslinger", {
    regExpSearch : /spellslinger/i,
    subname : "Spellslinger",
    source : ["R:G", 6],
    abilitySave : 4,
    abilitySaveAlt : 2,
    spellcastingFactor : 3,
    spellcastingTable : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 1, 0, 0, 0, 0, 0] //lvl20
    ],
    spellcastingKnown : {
        cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        spells : [3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
    },
    spellcastingList : {
        class : "any",
        level : [0, 4],
        spells : ["acid splash", "chill touch", "fire bolt", "poison spray", "ray of frost", "thunderclap",
        "burning hands", "chaos bolt-xgte", "chromatic orb", "ensnaring strike", "faerie fire", "hail of thorns",
        "ice knife", "magic missile", "ray of sickness", "thunderwave", "witch bolt", "aganazzar's scorcher",
        "enlarge/reduce", "hold person", "melf's acid arrow", "misty step", "ray of enfeeblement", "scorching ray",
        "snilloc's snowball swarm", "spider climb", "web", "conjure barrage", "elemental weapon", "fireball", "flame arrows",
        "lightning arrow", "lightning bolt", "blight", "fire shield", "vitriolic sphere"]
    },
    features : {
        "subclassfeature3" : {
            name : "Spellcasting",
            source : ["R:G", 6],
            minlevel : 3,
            description : desc([
                "I can cast spells using my intelligence modifier",
                "The DC for any spell saves is equal to 8 + my proficiency bonus + my Int mod",
                "My spell attack modifier is equal to my proficiency bonus + my Int mod",
                "My firearm is my spellcasting focus for any Gunsmith spells"
            ]),
            additonal : levels.map(function(n) {
                return (n < 3 ? "" : n < 9 ? "2 Cantrips;" : "3 Cantrips;") + (n < 3 ? "" : n < 4 ? "3 spells known" : n < 6 ? "4 spells known" : n < 8 ? "5 spells known" : n < 10 ? "6 spells known" : n < 11 ? "7 spells known" : n < 13 ? "8 spells known" : n < 14 ? "9 spells known" : n < 16 ? "10 spells known" : n < 19 ? "11 spells known" : n < 20 ? "12 spells known" : "13 spells known");
            })
        },
        "subclassfeature6" : {
            name : "Arcane Arsenal",
            source : ["R:G", 7],
            minlevel : 6,
            description : desc([
                "Firearm attacks made with my spellcasting focus count as magical for overcoming resistances",
                "and immunity to non-magical damage",
                "When casting spells that require an attack roll, I can use the attack bonus of my focus instead"
            ])
        },
        "subclassfeature10" : {
            name : "Eldritch Afterburn",
            source : ["R:G", 7],
            minlevel : 10,
            description : desc([
                "After casting 1st lvl spell or higher, firearm attacks with my focus deal an extra 1d6 force dmg",
                "this increases per spell slot level after 1st and I gain this bonus whether I hit with the spell",
                "or not"
            ])
        },
        "subclassfeature14" : {
            name : "Homing Rounds",
            source : ["R:G", 7],
            minlevel : 14,
            description : desc([
                "After a creature fails a spell with a save, an attack roll with my focus",
                "adds a +1 to hit per spell slot level until the end of my next turn"
            ])
        },
        "subclassfeature17" : {
            name : "Improved Arcane Arsenal",
            source : ["R:G", 7],
            minlevel : 17,
            description : desc([
                "My focus is magically reloaded whenever I cast a spell of 1st level or higher"
            ])
        }
    }
});

//Create New Gunsmith Weapons
WeaponsList["musket-g"] = {
    regExpSearch : /musket (gunsmith)/i,
    name : "Musket (Gunsmith)",
    source : ["R:G", 8],
    list : "gunsmith",
    ability : 2,
    type : "Gunsmith Firearms",
    damage : [1, 12, "piercing"],
    range : "120/480 ft",
    description : "Two-Handed, Reload 1, Misfire 2",
    abilitytodamage : true,
    weight : 10,
    ammo : "Standard Musket Bullets"
};
WeaponsList["pistol-g"] = {
    regExpSearch : /pistol (gunsmith)/i,
    name : "Pistol (Gunsmith)",
    source : ["R:G", 8],
    list : "gunsmith",
    ability : 2,
    type : "Gunsmith Firearms",
    damage : [1, 8, "piercing"],
    range : "60/240 ft",
    description : "Light, Reload 4, Misfire 1",
    abilitytodamage : true,
    weight : 3,
    ammo : "Standard Pistol Bullets"
};
WeaponsList["gunblade"] = {
    regExpSearch : /gunblade/i,
    name : "Gunblade",
    source : ["R:G", 8],
    list : "gunsmith",
    ability : 2,
    type : "Gunblade",
    damage : [1, 8, "piercing"],
    range : "60/240 ft",
    description : "Bladed (shortsword), Reload 4, Misfire 1",
    abilitytodamage : true,
    weight : 5,
    ammo : "Standard Pistol Bullets"
};
WeaponsList["revolver-g"] = {
    regExpSearch : /revolver (gunsmith)/i,
    name : "Revolver (Gunsmith)",
    source : ["R:G", 8],
    list : "gunsmith",
    ability : 2,
    type : "Gunsmith Firearms",
    damage : [1, 10, "piercing"],
    range : "80/320 ft",
    description : "Reload 6, Misfire 2",
    abilitytodamage : true,
    weight : 5,
    ammo : "Standard Revolver Bullets"
};
WeaponsList["shotgun-g"] = {
    regExpSearch : /shotgun (gunsmith)/i,
    name : "Shotgun (Gunsmith)",
    source : ["R:G", 8],
    list : "gunsmith",
    damage : [2, 8, "piercing"],
    type : "Gunsmith Firearms",
    ability : 2,
    range : "15/60 ft",
    description : "Two-handed, Reload 1, Misfire 2",
    weight : 10,
    abilitytodamage : true,
    ammo : "Standard Shotgun Bullets"
};
WeaponsList["sniperrifle-g"] = {
    regExpSearch : /sniper rifle/i,
    name : "Sniper Rifle",
    source : ["R:G", 8],
    list : "gunsmith",
    ability : 2,
    type : "Sniper Rifle",
    damage : [2, 10, "piercing"],
    range : "200/800 ft",
    description : "Two-Handed, Reload 1, Misfire 3",
    abilitytodamage : true,
    weight : 10,
    ammo : "Standard Sniper Rifle Bullets"
};
WeaponsList["wristpistol-g"] = {
    regExpSearch : /wrist pistol (gunsmith)/i,
    name : "Wrist Pistol (Gunsmith)",
    source : ["R:G", 8],
    list : "gunsmith",
    ability : 2,
    type : "Gunsmith Firearms",
    damage : [1, 6, "piercing"],
    range : "40/160 ft",
    description : "Light, Hidden, Reload 1, Misfire 1",
    abilitytodamage : true,
    weight : 1,
    ammo : "Standard Wrist Pistol Bullets",
};
WeaponsList["flasbanggrenade"] = {
    regExpSearch : /flashbang/i,
    name : "Flashbang",
    source : ["R:G", 10],
    list : "gunsmith",
    ability : 4,
    type : "Grenades",
    damage : ["", "", ""],
    range : "'Dex'*10",
    description : "Con save in 10ft radius; On fail, blind and deaf, 1 min",
    abilitytodamage : false,
    dc : true,
    weight : "",
    ammo : "Flashbang Grenades"
};
WeaponsList["fraggrenade"] = {
    regExpSearch : /frag grenade/i,
    name : "Frag Grenade",
    source : ["R:G:", 10],
    list : "gunsmith",
    ability : 4,
    type : "Grenades",
    damage : [6, 8, "piercing"],
    range : "'Dex'*10",
    description : "Dex save in 15ft radius; on success, half damage",
    abilitytodamage : false,
    dc : true,
    weight : "",
    ammo : "Frag Grenades"
};
WeaponsList["molotovcocktail"] = {
    regExpSearch : /molotov cocktail/i,
    name : "Molotov Cocktail",
    source : ["R:G", 10],
    list : "gunsmith",
    ability : 4,
    type : "Grenades",
    damage : [3, 10, "fire"],
    range : "'Dex'*10",
    description : "Dex save in 10ft radius; on success, half damage; ground burns for int mod rounds, dealing 1d6 to any who start turn or move into",
    abilitytodamage : false,
    dc : true,
    weight : "",
    ammo : "Molotov Cocktails"
};
WeaponsList["smokegrenade"] = {
    regExpSearch : /smoke grenade/i,
    name : "Smoke Grenade",
    source : ["R:G", 10],
    list : "gunsmith",
    ability : 4,
    type : "Grenades",
    damage : ["", "", ""],
    range : "'Dex'*10",
    description : "30ft radius cloud of smoke, area heavily obscured for 1 min; moderate wind clears in 4 rounds; strong wind in 1 round",
    abilitytodamage : false,
    dc : true,
    weight : "",
    ammo : "Smoke Grenades"
};
WeaponsList["tanglefootgrenade"] = {
    regExpSearch : /tanglefoot grenade/i,
    name : "Tanglefoot Grenade",
    source : ["R:G", 10],
    list : "gunsmith",
    ability : 4,
    type : "Grenades",
    damage : ["", "", ""],
    range : "'Dex'*10",
    description : "Dex save in 5ft radius; On fail, restrained; Strength save at end of turns to break free; area becomes difficult terrain",
    abilitytodamage : false,
    dc : true,
    weight : "",
    ammo : "Tanglefoot Grenades"
};

//Create GearList for Bullets
//Musket Bullets
GearList["standardmusketbullet"] = {
    infoname : "   Standard Musket Bullets (20) [5gp]",
    name : "Musket Bullets, Standard",
    amount : 20,
    weight : "",
    source : ["R:G", 9]
};
GearList["armourpiercingmusketbullet"] = {
    infoname : "   Armour Piercing Musket Bullets (20) [10gp]",
    name : "Musket Bullets, Armour Piercing",
    amount : 20,
    weight : "",
    source : ["R:G", 9]
};
GearList["hollowtipmusketbullet"] = {
    infoname : "   Hollow Tip Musket Bullets (10) [40gp]",
    name : "Musket Bullets, Hollow Tip",
    amount : 10,
    weight : "",
    source : ["R:G", 9]
};
GearList["tracermusketbullet"] = {
    infoname : "   Tracer Musket Bullets (10) [20gp]",
    name : "Musket Bullets, Tracer",
    amount : 10,
    weight : "",
    source : ["R:G", 9]
};
//Pistol Bullets
GearList["standardpistolbullet"] = {
    infoname : "   Standard Pistol Bullets (20) [4gp]",
    name : "Pistol Bullets, Standard",
    amount : 20,
    weight : "",
    source : ["R:G", 9]
};
GearList["armourpiercingpistolbullet"] = {
    infoname : "   Armour Piercing Pistol Bullets (20) [8gp]",
    name : "Pistol Bullets, Armour Piercing",
    amount : 20,
    weight : "",
    source : ["R:G", 9]
};
GearList["hollowtippistolbullet"] = {
    infoname : "   Hollow Tip Pistol Bullets (10) [32gp]",
    name : "Pistol Bullets, Hollow Tip",
    amount : 10,
    weight : "",
    source : ["R:G", 9]
};
GearList["tracermusketbullet"] = {
    infoname : "   Tracer Pistol Bullets (10) [16gp]",
    name : "Pistol Bullets, Tracer",
    amount : 10,
    weight : "",
    source : ["R:G", 9]
};
//Revolver Bullets
GearList["standardrevolverbullet"] = {
    infoname : "   Standard Revolver Bullets (20) [4gp]",
    name : "Revolver Bullets, Standard",
    amount : 20,
    weight : "",
    source : ["R:G", 9]
};
GearList["armourpiercingrevolverbullet"] = {
    infoname : "   Armour Piercing Revolver Bullets (20) [8gp]",
    name : "Revolver Bullets, Armour Piercing",
    amount : 20,
    weight : "",
    source : ["R:G", 9]
};
GearList["hollowtiprevolverbullet"] = {
    infoname : "   Hollow Tip Revolver Bullets (10) [32gp]",
    name : "Revolver Bullets, Hollow Tip",
    amount : 10,
    weight : "",
    source : ["R:G", 9]
};
GearList["tracerrevolverbullet"] = {
    infoname : "   Tracer Revolver Bullets (10) [16gp]",
    name : "Revolver Bullets, Tracer",
    amount : 10,
    weight : "",
    source : ["R:G", 9]
};
//Shotgun Bullets
GearList["standardshotgunbullet"] = {
    infoname : "   Standard Shotgun Bullets (5) [5gp]",
    name : "Shotgun Bullets, Standard",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
GearList["armourpiercingshotgunbullet"] = {
    infoname : "   Armour Piercing Shotgun Bullets (5) [10gp]",
    name : "Shotgun Bullets, Armour Piercing",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
GearList["hollowtipshotgunbullet"] = {
    infoname : "   Hollow Tip Shotgun Bullets (5) [40gp]",
    name : "Shotgun Bullets, Hollow Tip",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
GearList["tracershotgunbullet"] = {
    infoname : "   Tracer Shotgun Bullets (5) [20gp]",
    name : "Shotgun Bullets, Tracer",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
//Sniper Rifle Bullets
GearList["standardsniperriflebullet"] = {
    infoname : "   Standard Sniper Rifle Bullets (5) [10gp]",
    name : "Sniper Rifle Bullets, Standard",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
GearList["armourpiercingsniperriflebullet"] = {
    infoname : "   Armour Piercing Sniper Rifle Bullets (5) [20gp]",
    name : "Sniper Rifle Bullets, Armour Piercing",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
GearList["hollowtipsniperriflebullet"] = {
    infoname : "   Hollow Tip Sniper Rifle Bullets (5) [80gp]",
    name : "Sniper Rifle Bullets, Hollow Tip",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
GearList["tracersniperriflebullet"] = {
    infoname : "   Tracer Sniper Rifle Bullets (5) [20gp]",
    name : "Sniper Rifle Bullets, Tracer",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
//Wrist Pistol Bullets
GearList["standardwristpistolbullet"] = {
    infoname : "   Standard Wrist Pistol Bullets (20) [2gp]",
    name : "Wrist Pistol Bullets, Standard",
    amount : 20,
    weight : "",
    source : ["R:G", 9]
};
GearList["armourpiercingwristpistolbullet"] = {
    infoname : "   Armour Piercing Wrist Pistol Bullets (10) [4gp]",
    name : "Wrist Pistol Bullets, Armour Piercing",
    amount : 10,
    weight : "",
    source : ["R:G", 9]
};
GearList["hollowtipwristpistolbullet"] = {
    infoname : "   Hollow Tip Wrist Pistol Bullets (5) [16gp]",
    name : "Wrist Pistol Bullets, Hollow Tip",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};
GearList["tracerwristpistolbullet"] = {
    infoname : "   Tracer Wrist Pistol Bullets (5) [8gp]",
    name : "Wrist Pistol Bullets, Tracer",
    amount : 5,
    weight : "",
    source : ["R:G", 9]
};

//Create Ammo for new bullets
//Standard Bullets
AmmoList["standardmusketbullet"] = {
    name : "Standard Musket Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Musket Bullets, Standard"
};
AmmoList["standardpistolbullet"] = {
    name : "Standard Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Pistol Bullets, Standard"
};
AmmoList["standardrevolverbullet"] = {
    name : "Standard Revolver Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Revolver Bullets, Standard"
};
AmmoList["standardshotgunbullet"] = {
    name : "Standard Shotgun Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Shotgun Bullets, Standard"
};
AmmoList["standardsniperriflebullet"] = {
    name : "Standard Sniper Rifle Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Sniper Rifle Bullets, Standard"
};
AmmoList["standardwristpistolbullet"] = {
    name : "Standard Wrist Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Wrist Pistol Bullets, Standard"
};
//AP Bullets
AmmoList["armourpiercingmusketbullet"] = {
    name : "Armour Piercing Musket Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Musket Bullets, Armour Piercing"
};
AmmoList["armourpiercingpistolbullet"] = {
    name : "Armour Piercing Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Pistol Bullets, Armour Piercing"
};
AmmoList["armourpiercingrevolverbullet"] = {
    name : "Armour Piercing Revolver Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Revolver Bullets, Armour Piercing"
};
AmmoList["armourpiercingshotgunbullet"] = {
    name : "Armour Piercing Shotgun Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Shotgun Bullets, Armour Piercing"
};
AmmoList["armourpiercingsniperriflebullet"] = {
    name : "Armour Piercing Sniper Rifle Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Sniper Rifle Bullets, Armour Piercing"
};
AmmoList["armourpiercingwristpistolbullet"] = {
    name : "Armour Piercing Wrist Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Wrist Pistol Bullets, Armour Piercing"
};
//Hollow Tip Bullets
AmmoList["hollowtipmusketbullet"] = {
    name : "Hollow Tip Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Musket Bullets, Hollow Tip"
};
AmmoList["hollowtippistolbullet"] = {
    name : "Hollow Tip Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Pistol Bullets, Hollow Tip"
};
AmmoList["hollowtiprevolverbullet"] = {
    name : "Hollow Tip Revolver Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Revolver Bullets, Hollow Tip"
};
AmmoList["hollowtipshotgunbullet"] = {
    name : "Hollow Tip Shotgun Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Shotgun Bullets, Hollow Tip"
};
AmmoList["hollowtipsniperriflebullet"] = {
    name : "Hollow Tip Sniper Rifle Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Sniper Rifle Bullets, Hollow Tip"
}
AmmoList["hollowtipwristpistolbullet"] = {
    name : "Hollow Tip Wrist Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Wrist Pistol Bullets, Hollow Tip"
};
//Tracer Bullets
AmmoList["tracermusketbullet"] = {
    name : "Tracer Musket Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Musket Bullets, Tracer"
};
AmmoList["tracerpistolbullet"] = {
    name : "Tracer Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Pistol Bullets, Tracer"
};
AmmoList["tracerrevolverbullet"] = {
    name : "Tracer Revolver Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Revolver Bullets, Tracer"
};
AmmoList["tracershotgunbullet"] = {
    name : "Tracer Shotgun Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Shotgun Bullets, Tracer"
};
AmmoList["tracersniperriflebullet"] = {
    name : "Tracer Sniper Rifle Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Sniper Rifle Bullets, Tracer"
};
AmmoList["tracerwristpistolbullet"] = {
    name : "Tracer Wrist Pistol Bullets",
    source : ["R:G", 9],
    weight : "",
    icon : "Bullets",
	checks : [".Bullet"],
    display : 50,
    invName : "Wrist Pistol Bullets, Tracer"
};

//Create GearList for Grenades
GearList["flashbanggrenade"] = {
    infoname : "Flashbang Grenade [20gp]",
    name : "Grenade, Flashbang",
    amount : 1,
    weight : "",
    source : ["R:G", 10]
};
GearList["fraggrenade"] = {
    infoname : "Frag Grenade [30gp]",
    name : "Grenade, Frag",
    amount : 1,
    weight : "",
    source : ["R:G", 10]
};
GearList["molotovcocktail"] = {
    infoname : "Molotov Cocktail [20gp]",
    name : "Molotov Cocktail",
    amount : 1,
    weight : "",
    source : ["R:G", 10]
};
GearList["smokegrenade"] = {
    infoname : "Smoke Grenade [15gp]",
    name : "Grenade, Smoke",
    amount : 1,
    weight : "",
    source : ["R:G", 10]
};
GearList["tanglefootgrenade"] = {
    infoname : "Tanglefoot Grenade [20gp]",
    name : "Grenade, Tanglefoot",
    amount : 1,
    weight : "",
    source : ["R:G", 10]
};

//Create AmmoList for Grenades
AmmoList["flashbanggrenade"] = {
    name : "Flashbang Grenades",
    source : ["R:G", 10],
    weight : "",
    icon : "Flasks",
	checks : [".Top", ".Base"],
    display : 20,
    invName : "Grenade, Flashbang",
    alternatives : ["Flash Bang Grenades", "Light Grenades", "Holy Hand Grenade", "Flash Grenade"]
};
AmmoList["fraggrenade"] = {
    name : "Frag Grenades",
    source : ["R:G", 10],
    weight : "",
    icon : "Flasks",
	checks : [".Top", ".Base"],
    display : 20,
    invName : "Grenade, Frag"
};
AmmoList["molotovcocktail"] = {
    name : "Flashbang Grenades",
    source : ["R:G", 10],
    weight : "",
    icon : "Flasks",
	checks : [".Top", ".Base"],
    display : 20,
    invName : "Molotov Cocktail"
};
AmmoList["smokegrenade"] = {
    name : "Smoke Grenades",
    source : ["R:G", 10],
    weight : "",
    icon : "Flasks",
	checks : [".Top", ".Base"],
    display : 20,
    invName : "Grenade, Smoke"
};
AmmoList["tanglefootgrenade"] = {
    name : "Tanglefoot Grenades",
    source : ["R:G", 10],
    weight : "",
    icon : "Flasks",
	checks : [".Top", ".Base"],
    display : 20,
    invName : "Grenade, Tanglefoot"
};
//create variant features for Acria
AddFeatureChoice(ClassList.gunsmith.features.grit, true, "Expanded Grit Rules", {
    name : "Expanded Grit Rules",
    source : ["SPH", 0],
    description : desc([
        "If I roll a 20 on an attack roll, I regain 1 Grit Point up to my max Grit Points",
        "This expands to 19 to 20 at 5th level and 18 to 20 at 10th level"
    ])
}, "Grit Enhancement");
AddFeatureChoice(ClassList.gunsmith.features.trickshots, true, "Trick Shot Versatility", {
    name : "Trick Shot Versality",
    source : ["SPH", 0],
    description : desc([
        "After a long rest, I can swap a trick shot I know"
    ])
}, "Trick Shot Enhancement");