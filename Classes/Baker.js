var iFileName = "The Baker [created by Take Initiative, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["TI:B"] = {
    name : "Take Initiative: The Baker",
    abbreviation : "TI:B",
    group : "Dungeon Masters Guild",
    url : "https://www.dmsguild.com/product/208294/Baker-Class-V02",
    defaultExcluded : true,
    date : "2017/03/26"
};

ClassList["baker"] = {
    name : "Baker",
    regExpSearch : /baker/i,
    source : ["TI:B", 0],
    primaryAbility : "Dexterity and Charisma",
    prereqs : "",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7],
    saves : ["Dex", "Cha"],
    abilitySave : 6,
    skillstxt : {
        primary : "Choose three from Sleight of Hand, Arcana, Investigation, Insight, Survival, and Persuasion"
    },
    armorProfs : {
        primary : [true, false, false, false],
        secondary : [true, false, false, false]
    },
    weaponProfs : {
        primary : [true, false, ["shortsword"]],
        primary : [true, false, ["shortsword"]],
    },
    equipment : "Baker starting equipment:" + 
    "\n \u2022 A greatclub -or- a shortsword;" +
    "\n \u2022 A component pouch -or- an arcane focus;" +
    "\n \u2022 A dungeoneer's pack -or- an explorer's pack;" +
    "\n \u2022 Cook's Utensils and a stone pan;" + 
    "\n \u2022 Leather armour and a belt holding two daggers;",
    subclasses : ["Recipe Books", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    spellcastingFactor : 1,
    spellcastingTable : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[4, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[4, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 3, 1, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 3, 3, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl11
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl12
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl13
		[4, 3, 3, 3, 3, 0, 0, 0, 0], //lvl14
		[4, 3, 3, 3, 3, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 3, 3, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 3, 3, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 3, 3, 2, 0, 0, 0], //lvl18
		[4, 3, 3, 3, 3, 2, 2, 0, 0], //lvl19
		[4, 3, 3, 3, 3, 2, 2, 1, 1] //lvl20
    ],
    spellcastingKnown : {
        cantrips : 0,
        spells : "list",
        prepared : true
    },
    spellcastingList : {
        class : "any",
        level : [0, 9],
        spells : [
            "bless", "burning hands", "charm person", "cure wounds", "disguise self", "fog cloud", "grease", "sleep", "tasha's hideous laughter",
            "aid", "alter self", "blindness/deafness", "calm emotions", "darkness", "enhance ability", "invisibility", "lesser restoration", "see invisibility",
            "suggestion", "warding bond", "aura of vitality", "bestow curse", "conjure animals", "create food and water", "dispel magic", "fireball",
            "fly", "haste", "mass healing word", "remove curse", "slow", "tongues", "aura of life", "banishment", "confusion", "dominate beast", "fire shield",
            "greater invisilbity", "wall of fire", "dispel evil and good", "dominate person", "dream", "flame strike", "geas", "greater restoration", "hold monster",
            "immolation", "mass cure wounds", "blade barrier", "harm", "heal", "heroes' feast", "mass suggestion", "delayed blast fireball", "etherealness",
            "fire storm", "regenerate", "teleport", "antimagic field", "antipathy/sympathy", "dominate monster", "feeblemind", "incendiary cloud",
            "mind blank", "power word stun", "foresight", "mass heal", "power word heal", "power word kill", "time stop", "wish"
        ]
    },
    dustedHandsAbilities : "Dusted Hand Abilities (Baker 1, TI:B 3)" + 
    "\rWeapon Snaring" + desc([
        "\u2022 When a creature I see attacks me with a nonmagical melee or ranged weapon",
        "   I can use my reaction to reduce damage equal to 1d4 + my Dexterity mod",
        "   I also gain the following upgrades as I level up",
        "\u2022 Level 5: The die increases to 1d6 and I reduce damage from magic weapons",
        "\u2022 Level 10: The die increases to 1d8 and I reduce damage from spell attacks",
        "\u2022 Level 15: The die increases to 1d10"]) + 
    "\r\rExtra Abilities (Baker 1, TI:B 4)" + desc([
        "I can cast the following with 1 Dusted Hands Point",
        "\u2022 Level 3: I gain Shield",
        "\u2022 Level 7: I gain Enlarge/Reduce",
        "\u2022 Level 11: I gain Firebolt",
        "\u2022 Level 14 I gain Cure Wounds at 5th level",
        "\u2022 Level 17: I gain Modify Memory"]),
    addDustedHandAbilities : function() {
        AddToNotes(ClassList.baker.dustedHandsAbilities, '');
    },
    removeDustedHandAbilities : function() {
        AddToNotes('', '', ClassList.baker.dustedHandsAbilities);
    },
    features : {
        "infuse magic" : {
            name : "Infuse Magic",
            source : ["TI:B", 3],
            minlevel : 1,
            description : desc([
                "I can use a spell slot to infuse magic into baked goods between long rests",
                "It takes 5 minutes of ritual casting and 30 minutes of baking",
                "Each baked good needs a spell slot equal to the spell's level and lasts until a long rest",
                "I or another person can eat the baked good to gain the spell's bonus",
                "Alternatively, I can throw the baked good in a range equal to the spell's range",
                "I cast my Baker spells using Charisma as my spellcasting Ability"
            ])
        },
        "dusted hands" : {
            name : "Dusted Hands",
            source : ["TI:B", 3],
            minlevel : 1,
            description : desc([
                "I have a number of dusted hand points equal to my Charisma modifier",
                "See the \"Notes\" page for the abilities I unlocked"
            ]),
            usages : "Charisma modifer per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : "long rest",
            eval : "if (classes.known.baker.level >= 1) {try { ClassList.baker.addDustedHandAbilities(); } catch (er) {} };",
            removeeval : "if (!(classes.known.levels >= 1) {try { ClassList.baker.removeDustedHandAbilities(); } catch (er) {} };",
        },
        "sharpened knives" : {
            name : "Sharpened Knives", 
            source : ["TI:B", 4],
            minlevel : 7,
            description : desc([
                "Any dagger I use now deals 1d6 piercing damage"
            ]),
            calcChanges : {
                atkCalc : [ "if (WeaponName === 'dagger') { output.die = output.die.replace('1d4', '1d6'); };", "I can now deal 1d6 piercing damage with my dagger."]
            }
        },
        "enhanced infusion" : {
            name : "Enhanced Infusion",
            source : ["TI:B", 4],
            minlevel : 11,
            description : desc([
                "I can infuse two spells into the same baked good with two spell slots twice per long rest"
            ]),
            usages : 2,
            recovery : "long rest"
        },
        "portable kitchen" : {
            name : "Portable Kitchen",
            source : ["TI:B", 4],
            minlevel : 15,
            description : desc([
                "I can spend one Dusted Hands Point to open a portal to a portable kitchen pocket dimension",
                "This portal lasts 24 hours or until I finish a long rest",
                "Any baked goods from that dimension gain 1d10 + my Charisma mod for damage or healing"
            ])
        },
        "banquet" : {
            name : "Banquet",
            source : ["TI:B", 4],
            minlevel : 18,
            description : desc([
                "I can infuse two spells into as many baked goods as I want"
            ])
        },
        "legendary baker" : {
            name : "Legendary Baker",
            source : ["TI:B", 4],
            minlevel : 20,
            description : desc([
                "My baked goods contain their spells forever",
                "I can keep my Portable Kitchen open for 7 days, even with a long rest"
            ])
        }
    }
}

AddSubClass("baker", "breads", {
    regExpSearch : /breads/i,
    subname : "Breads",
    source : ["TI:B", 4],
    features : {
        "subclassfeature3" : {
            name : "Breadcrumbs",
            source : ["TI:B", 4],
            minlevel : 3,
            description : desc([
                "I can use breadcrumbs to find my way back to somewhere I was before without getting lost"
            ])
        },
        "subclassfeature3.1" : {
            name : "Strong Flour",
            source : ["TI:B", 4],
            minlevel : 3,
            description : desc([
                "I spend 1 Dusted Hands Point to infuse strong flour into one of my bakes",
                "If the infused spell enhances a single target, I double the number of dice used"
            ])
        },
        "subclassfeature9" : {
            name : "Yeast Expertise",
            source : ["TI:B", 4],
            minlevel : 9,
            description : desc([
                "I can spend 1 Dusted Hands Point to become resistant to all damage types for 1 minute"
            ])
        },
        "subclassfeature13" : {
            name : "Strong Kneading",
            source : ["TI:B", 5],
            minlevel : 13,
            description : desc([
                "I gain the \"Athlete\" feat. If I already have this feat, I may choose another"
            ])
        },
        "subclassfeature17" : {
            name : "Fluffy and Airy",
            source : ["TI:B", 5],
            minlevel : 17,
            description : desc([
                "I can imbue two uses of spells into baked breads using only one spell slot"
            ])
        }
    }
});
AddSubClass("baker", "pastries", {
    regExpSearch : /pastries/i,
    subname : "Pastries",
    source : ["TI:B", 5],
    features : {
        "subclassfeature3" : {
            name : "Cold Storage",
            source : ["TI:B", 5],
            minlevel : 3,
            description : desc([
                "I can spend 1 Dusted Hands Point to use a cold pocket dimension ONLY to make pastries",
                "Any spell that provides healing heals the target for an extra 1d4 from the cold dimension"
            ])
        },
        "subclassfeature9" : {
            name : "Hearty-Fillings",
            source : ["TI:B", 5],
            minlevel : 9,
            description : desc([
                "Me or a target are healed for maximum hit points mentioned in the spell twice per long rest",
            ]),
            usages : 2,
            recovery : "long rest"
        },
        "subclassfeature13" : {
            name : "Lucious Aroma",
            source : ["TI:B", 5],
            minlevel : 13,
            description : desc([
                "I can spend 2 Dusted Hands Points to extend the range of a healing spell as a bonus action",
                "A touch range spell becomes a 10ft radius ",
                "Ranged healing spells gain a radius equal to half their range around the baker",
                "Radius healing spells have double the radius"
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature17" : {
            name : "Crumbly Perfection",
            source : ["TI:B", 5],
            minlevel : 17,
            description : desc([
                "I add my Charisma mod + proficiency bonus to a pastry healing spell's dice roll"
            ])
        }
    }
});
AddSubClass("baker", "mouldy", {
    regExpSearch : /mouldy/i,
    subname : "Mouldy",
    source : ["TI:B", 5],
    features : {
        "subclassfeature3" : {
            name : "Disease-Ridden",
            source : ["TI:B", 5],
            minlevel : 3,
            description : desc([
                "When dealing damage for a baked good spell, I deal an additional 1d6 poison dmg",
                "This increases at certain levels"
            ]),
            additional : levels.map(function (n){
                return n < 5 ? 1 : n < 10 ? 2 : n < 16 ? 3 : 4 + "d6 poison damage"
            })
        },
        "subclassfeature9" : {
            name : "Scavenger",
            source : ["TI:B", 5],
            minlevel : 9,
            description : desc([
                "I add my proficiency to my Dusted Hands Points"
            ])
        },
        "subclassfeature13" : {
            name : "Mould and Mildew",
            source : ["TI:B", 5],
            minlevel : 13,
            description : desc([
                "I use an action and 1 Dusted Hands Point to imbue my blade",
                "My weapon deals additional damage equal to my Charisma mod for 1 minute"
            ])
        },
        "subclassfeature17" : {
            name : "Good as New",
            source : ["TI:B", 5],
            minlevel : 17,
            description : desc([
                "When taking my first long rest, my goods are still useable",
                "When I make a new batch, any bake older than 48 hours loses it's imbuded energy"
            ])
        }
    }
});