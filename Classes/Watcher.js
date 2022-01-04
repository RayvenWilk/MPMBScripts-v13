var iFileName = "The Watcher[Created by Ashley Lawrence, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["AL:TW"] = {
    name : "Ashley Lawrence: The Watcher",
    abbreviation: "AL:TW",
    group : "Dungeon Masters Guild",
    url : "https://www.dmsguild.com/product/270236/The-Watcher-Class",
    defaultExcluded : true,
    date : "2019/03/19"
};

ClassList["watcher"] = {
    regExpSearch : /watcher/i,
    name : "Watcher",
    source : ["AL:TW", 0],
    primaryAbility : "Strength and Wisdom",
    prereqs : "Strength 13 or Wisdom 13",
    die : 10,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Wis", "Str"],
    skillstxt : {
        primary : "Choose two from Athletics, Insight, Intimidation, Perception, Religion, and Survival."
    },
    armorProfs : {
        primary : [true, true, true, true],
        secondary : [true, true, false, true]
    },
    weaponProfs : {
        primary : [true, true, false],
        secondary : [true, true, false]
    },
    equipment : "Watcher starting equipment:" +
    "\n \u2022 Hide -or- Chainmail;" +
    "\n \u2022 A martial weapon and shield -or- two martial weapons;" +
    "\n \u2022 A light crossbow and 20 bolts -or- any simple melee weapon;" +
    "\n \u2022 A dungeoneer's pack -or- an explorer's pack;",
    subclasses : ["Astral Calling", []],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    features : {
        "watcher's sight" : {
            name : "Watcher's Sight",
            source : ["AL:TW", 4],
            minlevel : 1,
            description : desc([
                "I perceive into the Ethereal Plane up to 15ft around me",
                "This includes any creature in the Ethereal plane",
                "I can concentrate up to a minute and gain a point of exhaustion once it ends",
                "The duration increases at 3rd, 5th, 9th, 14th, and 19th level",
                "I can see through magical darkness at 9th level and automatically detect",
                "illusions within range at 14th level"
            ]),
            additional : levels.map(function(x){
                return (x < 3 ? 1 : x < 5 ? 2 : x < 9 ? 3 : x < 14 ? 4 : x < 19 ? 5 : 10) + " minutes"
            }),
        },
        "watcher's curse" : {
            name : "Watcher's Curse",
            source : ["AL:TW", 3],
            minlevel : 1,
            description : desc([
                "When I die, I come back after 2d4 hours and gain two points of exhaustion",
                "If I reach six or more exhaustion points, I do not return to life",
                "Limbs do not regrow when I am resurrected and I die if I don't have vital organs"
            ])
        },
        "fighting style" : {
			name : "Fighting Style",
			source : ["AL:TW", 4],
			minlevel : 2,
			description : desc([
                "Choose a Fighting Style using the \"Choose Feature\" button above",
            ]),
			choices : ["Defense", "Dueling", "Great Weapon Fighting", "Protection"],
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"protection" : FightingStyles.protection
        },
        "soul splinter" : {
            name : "Soul Splinter",
            source : ["AL:TW", 4],
            minlevel : 2,
            description : desc([
                "As a bonus action, I lose max hp equal to double my character level",
                "For up to one minute or until I drop my weapon, I deal extra damage",
                "I can put Soul Splinter on multiple weapons at a time, each costing hp",
                "I can let the Splinter wither away with no action"
            ]),
            action : ["bonus action", ""],
            additional : levels.map(function(n){
                return (n < 5 ? "1d4" : n < 9 ? "1d6" : n < 13 ? "1d8" : n < 17 ? "1d10" : "1d12") + " extra damage; " + (n*2) + "HP Lost"
            }),
            extraname : "Elemental Damage",
            extrachoices : ["Necrotic", "Lightning", "Fire", "Cold", "Radiant"],
            "necrotic" : {
                name : "Necrotic",
                source : ["AL:TW", 5],
                description : desc([
                    "My chosen Soul Splinter damage is Necrotic"
                ])
            },
            "lightning" : {
                name : "Lightning",
                source : ["AL:TW", 5],
                description : desc([
                    "My chosen Soul Splinter damage is Lightning"
                ])
            },
            "fire" : {
                name : "Necrotic",
                source : ["AL:TW", 5],
                description : desc([
                    "My chosen Soul Splinter damage is Fire"
                ])
            },
            "cold" : {
                name : "Cold",
                source : ["AL:TW", 5],
                description : desc([
                    "My chosen Soul Splinter damage is Cold"
                ])
            },
            "radiant" : {
                name : "Radiant",
                source : ["AL:TW", 5],
                description : desc([
                    "My chosen Soul Splinter damage is Radiant"
                ])
            }
        },
        "subclassfeature3" : {
            name : "Astral Calling",
            source : ["AL:TW", 5],
            minlevel : 3,
            description : desc([
                "Choose an Astral Calling you strive to emulate and put it in the \"Class\" field",
                "Choose either Harbinger of Death, Herald of Mercy, or Scribe of the Afterlife"
            ])
        },
        "healing essence" : {
            name : "Healing Essence",
            source : ["AL:TW", 5],
            minlevel : 8,
            description : desc([
                "I can expend a revival to cast the \"revivify\" spell without a spell slot or material components"
            ])
        },
        "ward of souls" : {
            name : "Ward of Souls",
            source : ["AL:TW", 5],
            minlevel : 11,
            description : desc([
                "Any ally within 10 ft of me and I have advantage on Wisdom saves and", 
                "are resistant to my chosen splinter element",
                "As an action, I imbue a creature's weapon that is within 5 ft of me",
                "The splinter withers if the creature is more than 60 ft away from me, drops their weapon",
                "or I fall unconscious"
            ])
        },
        "foresight" : {
            name : "Foresight",
            source : ["AL:TW", 5],
            minlevel : 15,
            description : desc([
                "As a reaction, I grant adv. or disadv. to a creature within 60ft",
                "I lose a number of max HP equal to my Soul Splinter die + my Wisdom Modifier",
                "I regain that lost HP on a long rest and can't regain them any other way",
                "I can't be surprised by Ethereal beings and they don't have adv. on attacks rolls against me"
            ])
        },
        "improved foresight" : {
            name : "Improved Foresight",
            source : ["AL:TW", 5],
            minlevel : 18,
            description : desc([
                "I gain blindsight within 60ft and I can perceive the presence of ethereal and invisible beings"
            ])
        }
    }
}

AddSubClass("watcher", "harbinger of death", {
    regExpSearch : /harbinger of death/i,
    subname : "Harbinger of Death",
    source : ["AL:TW", 6],
    features : {
        "subclassfeature3" : {
            name : "Death's Favor",
            source : ["AL:TW", 6],
            minlevel : 3,
            description : desc([
                "I gain 1d4 + my Wisdom mod hp when I kill an enemy with a melee weapon attack",
                "I also immediately make an additional melee weapon attack against an enemy in my reach",
                "The hp increases as I level up"
            ]),
            additional : levels.map(function(n){
                return (n < 7 ? "1d4" : n < 13 ? "2d4" : n < 18 ? "2d6" : "2d10") + " + Wis mod HP"
            })
        },
        "subclassfeature6" : {
            name : "Zealous Strike",
            source : ["AL:TW", 6],
            minlevel : 6,
            description : desc([
                "Adv. on melee weapon attacks during my turn, but attacks vs. me adv. until next turn"
            ])
        },
        "subclassfeature10" : {
            name : "Visage of Death",
            source : ["AL:TW", 6],
            minlevel : 10,
            description : desc([
                "As an action, a target I see within 30ft succeed on Wis save or be frightened for 1 minute",
                "This ends early if they take damage as well",
                "The creature has disadv. against creatures that aren't me and cannot take reactions",
                "I regain a use of it after a short or long rest"
            ]),
            action : ["action", ""],
            recovery : "short rest"
        },
        "subclassfeature14" : {
            name : "Empowered Splinter",
            source : ["AL:TW", 6],
            minlevel : 14,
            description : desc([
                "I roll additional die for Soul Splinter damage"
            ])
        },
        "subclassfeature20" : {
            name : "Ire of Death's Herald",
            source : ["AL:TW", 6],
            minlevel : 20,
            description : desc([
                "For 1 hour I get the following benefits:",
                "\t Resistance to bludgeoning, piercing, and slashing damage",
                "\t I have wings and a flying speed of 60 ft",
                "\t My weapon attack crits on a roll of 19-20",
                "I can use this ability once per long rest"
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
});
AddSubClass("watcher", "herald of mercy", {
    regExpSearch : /herald of mercy/i,
    subname : "Herald of Mercy",
    source : ["AL:TW", 6],
    features : {
        "subclassfeature3" : {
            name : "Overwhelm",
            source : ["AL:TW", 6],
            minlevel : 3,
            description : desc([
                "The first creature I hit must make a Wis save",
                "On a failure, the target can't focus and has disadv. on attacks and saves",
                "If they hit an allied creature I can see, the ally has resistance to the damage",
                "This lasts until the start of my next turn",
                "I can cast augury or clairvoyance twice per day without a spell slot or material component"
            ]),
            spellcastingExtra : ["augury", "clairvoyance"]
        },
        "subclassfeature6" : {
            name : "Soul Support",
            source : ["AL:TW", 6],
            minlevel : 6,
            description : desc([
                "If a creature within 30ft of me takes damage, I reduce it by 3d6 as a reacton",
                "The amount of damage reduced increaes as I level up"
            ]),
            additional : levels.map(function(n){
                return (n < 11 ? 3 : n < 16 ? 4 : n < 20 ? 5 : 6) + "d6 damage"
            }),
            action : ["reaction", ""]
        },
        "subclassfeature10" : {
            name : "Overwhelm",
            source : ["AL:TW", 6],
            minlevel : 10,
            description : desc([
                "If I or a creature within 30ft are hit by a crit, I turn that into a normal hit as reaction",
                "Any effects triggered by the critical hit are canceled",
                "I can use this a number of times equal to my Wis mod per long rest, min 1"
            ]),
            usages : "Wisdom Modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            action : ["reaction", ""],
            recovery : "long rest"
        },
        "subclassfeature14" : {
            name : "Empowered Soul Support",
            source : ["AL:TW", 7],
            minlevel : 14,
            description : desc([
                "When I reduce damage with Soul Support, attacker takes force dmg equal to dmg reduced",
                "Soul Support extends to 60 ft"
            ])
        },
        "subclassfeature20" : {
            name : "Resolve of the Merciful",
            source : ["AL:TW", 7],
            minlevel : 20,
            description : desc([
                "When I use healing essence to revive another creature, I no longer expend my revivals",
                "I can cast Mass Cure Wounds at 6th level without a spell slot or material components",
                "I can target up to 10 creautres with Mass Cure Wounds",
                "I can use this once per long rest"
            ]),
            recovery : "long rest",
            usages : 1,
            spellcastingExtra : ["mass cure wounds"]
        }
    }
});
AddSubClass("watcher", "scribe of the afterlife", {
    regExpSearch : /scribe of the afterlife/i,
    subname : "Scribe of the Afterlife",
    source : ["AL:TW", 7],
    spellcastingFactor : 3,
    spellcastingKnown : {
        cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        spells : [0, 0, 3, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
    },
    spellcastingList : {
        class : "cleric",
        school : ["Evoc", "Necro"],
        levels : [0, 4],
    },
    features : {
        "subclassfeature3" : {
            name : "Spellcasting",
            source : ["AL:TW", 7],
            minlevel : 3,
            description : desc([
                "I can cast known cleric cantrips/spells, using Wisdom as my spellcasting ability",
            ]),
            additional : ["", "", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
            spellcastingBonus : [{
                name : "Spare the Dying Cantrip",
                spells : ["spare the dying"],
                selection : ["spare the dying"]
            }, {
                name : "From any school",
                "class" : "cleric",
                times : [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3]
            }]
        },
        "subclassfeature6" : {
            name : "Infused Casting",
            source : ["AL:TW", 8],
            minlevel : 6,
            description : desc([
                "As a bonus action, I can add soul splinter damage to a spell when I cast a spell"
            ]),
            action : ["bonus action", " (with spell)"],
        },
        "subclassfeature10" : {
            name : "Calculated Attack",
            source : ["AL:TW", 8],
            minlevel : 10,
            description : desc([
                "When I cast a cantrip, I can make a weapon attack as a bonus action"
            ]),
            action : ["bonus action", " (with cantrip)"]
        },
        "subclassfeature14" : {
            name : "Empowered Casting",
            source : ["AL:TW", 8],
            minlevel : 14,
            description : desc([
                "I can reroll any spell attack damage dice and must use the new roll",
                "I can also roll an additional soul splinter damage die on any attack spell",
                "I can use this a number of times equal to my Wis mod (min 1) per long rest"
            ]),
            usages : "Wisdom Modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            recovery : "long rest"
        },
        "subclassfeature20" : {
            name : "Chorus of the Fallen",
            source : ["AL:TW", 8],
            minlevel : 20,
            description : desc([
                "As a bonus action, I give adv. on saves against spell effects and resistance to damage from magical sources",
                "This extends to myself and any ally within 60 ft of me for 2d6 turns once per short rest",
                "As a bonus action, I take max hp damage equal to my Soul Splinter die + my Wis mod",
                "This lets me cast an additional spell of 3rd level or lower",
                "I don't get that lost health back until I finish a long rest"
            ]),
            action : ["bonus action", ""],
            recovery : "short rest"
        }
    }
})