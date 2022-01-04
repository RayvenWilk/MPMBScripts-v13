var iFileName = "Sauce Slinger [Mindicree's work, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["M:SS"] = {
    name : "Mindicree: Sauce Slinger",
	abbreviation : "M:SS",
    group: "Friendly Bunch Homebrew",
    url : "https://drive.google.com/file/d/19_3Gy9_9hRPwUWf-WmDjE6GA0L2GFqW0/view",
    defaultExcluded : true,
	date : "2020/01/25"
};

ClassList["slinger"] = {
    name : "Sauce Slinger",
    regExpSearch : /sauce slinger/i,
    source : ["M:SS", 0],
    primaryAbility : "Strength and Constitution",
    prereqs : "",
    die : 6,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Str", "Con"],
    abilitySave : 3,
    skillstxt : {
        primary : "Choose two from Investigation, Medicine, Nature, Sleight of Hand, and Survival"
    },
    armorProfs : {
        primary : [true, false, false, false]
    },
    weaponProfs : {
        primary : [true, false, false]
    },
    toolProfs : {
        primary : ["Cook's Utensils"]
    },
    equipment : "Sauce Slinger starting equipment" +
    "\n \u2022 two gallons (16 pints) of two sauces, one gallon each -or- one gallon (8 pints) of one sauce and any simple weapon;" +
    "\n \u2022 leather armor and fine clothes -or- padded armor;" +
    "\n \u2022 20 flasks, cook's utensils, and an explorer's pack;",
    subclasses : ["", []],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    features : {
        "natural food fighter" : {
            name : "Natural Food Fighter",
            source : ["M:SS", 4],
            minlevel : 1,
            description : desc([
                "I gain Sauce Bite, Sauce Breath Weapon, and Sauce Fling as an attack action",
                "I have a Sauce DC equal to 8 + my Proficiency Bonus + my Constitution Modifier",
                "I can do a DC 15 Wisdom (Survival) check to retrieve sauce during or after combat",
                "As a bonus action, I can consume 1 pint of sauce to gain effects for my sauce attack",
                "This effect lasts for a roll of my Consumed Die which increases as I level up"
            ]),
            additional : levels.map(function(n){
                return "Consumed Die: " + (n < 5 ? "d4" : n < 9 ? "d6" : n < 13 ? "d8" : n < 19 ? "d10" : "d12")
            }),
            weaponsAdd : ["Sauce Bite", "Sauce Breath Weapon", "Sauce Fling"],
            action : [
                ["action", " (Replace Attack Action)"],
                ["bonus action", " (Consume Sauce)"]
            ],
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (classes.known.slinger <= 11 && (/^(?=.*sauce).*$/i.test(v.WeaponTextName))) {
                            output.die = "2d4";
                        }
                        else if (classes.known.slinger <= 17 && (/^(?=.*sauce).*$/i.test(v.WeaponTextName))) {
                            output.die = "3d4";
                        }
                        else {
                            output.die = "4d4";
                        };
                    }
                ]
            }
        },
        "saucyboi" : {
            name : "SaucyBoi",
            source : ["M:SS", 4],
            minlevel : 1,
            description : desc([
                "In 1 hour, I can use provided ingredients and Cook Utensils to make 8 pints of Sauce"
            ]),
            extraname : "Sauces",
            extrachoices : ["Catsup", "Mayna", "Malastard", "Welsher", "Zalas"],
            "catsup" : {
                name : "Catsup",
                source : ["M:SS", 6],
                description : desc([
                    "A sauce made with a Tomato Base",
                    "Consumed: Creatures within 5 ft make Wisdom save",
                    "On a faillure, they are fightened for rounds equal to Consumed Die roll",
                    "At 5th level, on a success, they are frightened for 1 round",
                    "Bite: On a successful attack, creature makes Wisdom save",
                    "On a failure, they are frightened for rounds equal to Consumed Die roll",
                    "Breath: My attack and damage rolls rolls gain an additional +2",
                    "Fling: On a successful attack, I add proficiency bonus + 1 to damage"
                ])
            },
            "mayna" : {
                name : "Mayna",
                source : ["M:SS", 6],
                description : desc([
                    "An oily sauce congealed into a white substance",
                    "Consumed: I gain rage from Barbarian class and am enraged",
                    "Bite: On a successful attack, medium or smaller creature is knocked prone",
                    "Breath: On successful attack, medium or smaller creature makes a Con save",
                    "On a failure, they are knocked prone",
                    "Fling: On successful attack, creature makes a Dex save",
                    "They are knocked prone for 1d4 rounds on failure",
                    "At 5th level, on a success, creature is knocked prone for 1 round"
                ])
            },
            "malastard" : {
                name : "Malastard",
                source : ["M:SS", 6],
                description : desc([
                    "A tangy sauce made from an equally tangy seed",
                    "Consumed: Creatures within 5 feet make Con save at the start of their turn",
                    "On a failure, creature takes fire damage equal to Natural Food Fighter die roll",
                    "Bite: On a successful attack, attack deals an extra 1d8 fire damage",
                    "Breath: On a successful attack, attack deals an extra 1d8 fire damage",
                    "Fling: On a successful attack, attack deals an extra 1d8 fire damage",
                    "At the start of creature's turn, creature makes a Dex save to remove sauce",
                    "On a failure, they take an extra 1d8 fire damage"
                ])
            },
            "welsher" : {
                name : "Welsher",
                source : ["M:SS", 6],
                description : desc([
                    "A sweet and sour sauce made from picked vegetables",
                    "Consumed: Adv. on all Constitution, Intelligence, and Wisdom checks and saves",
                    "Bite/Breath: On a successful attack, creature makes a Con save",
                    "On a failure, they take a point of exhaustion up to 3 points max",
                ])
            },
            "zalas" : {
                name : "Zalas",
                source : ["M:SS", 6],
                description : desc([
                    "A spicy sauce made with a variety of peppers",
                    "Consumed: I can cast primal savagery (XGtE)",
                    "Bite: On a successful attack, creature makes a Con save",
                    "On a failure, the creature is paralyzed for 1d4 rounds",
                    "Breath: On a successful attack, creature makes a Con save",
                    "On a failure, the creature is blinded and deafened for 1d4 rounds",
                    "Fling: On a successful attack, creature makes a Con save",
                    "On a failure, the creature is stunned for 1d4 rounds"
                ])
            }
        },
        "detect poison" : {
            name : "Detect Poison",
            source : ["M:SS", 5],
            minlevel : 2,
            description : desc([
                "I automatically succeed any check to detect poison, mold, or rot and adv. vs ingested poisons",
            ]),
            savetxt : {
                adv_vs : ["ingested poison"]
            }
        },
        "favorite sauce" : {
            name : "Favorite Sauce",
            source : ["M:SS", 5],
            minlevel : 3,
            description : desc([
                "I halve time needed to make sauce and add favored sauce bonus to attack and damage"
            ]),
            additional : levels.map(function(n){
                return "Sauces: " + (n < 3 ? "" : n < 6 ? 1 : n < 9 ? 2 : n < 14 ? 3 : 4) + "; Sauce Bonus: +" + (n < 3 ? "" : n < 7 ? 2 : n < 11 ? 3 : n < 15 ? 4 : n < 19 ? 5 : 6);
            })
        },
        "meta sauce" : {
            name : "Meta Sauce",
            source : ["M:SS", 5],
            minlevel : 3,
            description : desc([
                "Each time I make 8 pints sauce, I can add 1 additional property. Check Notes Page"
            ]),
            toNotesPage : [{
                name : "Meta Sauce",
                note : [
                    "Extra Spicy: An extra 1d4 damage + 1d4 per 4 levels of Sauce Slinger above 3rd level",
                    "Extra Thick: Increase consumed time by proficiency bonus",
                    "Extra Creamy: Increase any DC from sauce-related abilities by slinger levels/2)",
                    "Extra Hearty: When consumed, add 1d4 to sauce attack roll + 1d4 at 11th and 19th level",
                    "Extra Veggie: Gain adv. on Wisdom (Perception) checks and Dex saves",
                    "This continues for a number of rounds equal to Consume Die roll + Con mod",
                    "Extra Salty: Increase sauce modifier bonuses by 1, 2 at 11th level, 3 at 19th level"
                ],
                page3notes : true,
                popupName : "Meta Sauce",
                source : ["M:SS", 5]
            }]
        },
        "sauce recovery" : {
            name : "Sauce Recovery",
            source : ["M:SS", 5],
            minlevel : 6,
            description : desc([
                "I have adv. on Wisdom (Survival) checks for recovering sauce during or after combat"
            ])
        },
        "big mouth" : {
            name : "Big Mouth",
            source : ["M:SS", 5],
            minlevel : 7,
            description : desc([
                "I can consume 2 sauces at a time, 3 at 13th level, and 4 at 17th level"
            ])
        },
        "sauce space" : {
            name : "Sauce Space",
            source : ["M:SS", 5],
            minlevel : 11,
            description : desc([
                "I can conjure a unique bag of holding that doesn't count sauce or flask toward carry limit"
            ])
        },
        "magic chef" : {
            name : "Magic Chef",
            source : ["M:SS", 5],
            minlevel : 15,
            description : desc([
                "As a bonus action, I can pick up dirt and turn it into a favored sauce",
                "As an action, I can pick up dirt and turn it into a nonfavored sauce",
                "I no longer need ingredients to make sauce and can cast prestidigitation 3/Day"
            ]),
/*             spellcastingBonus : [{
                name : "Magic Chef",
                spells : ["prestidigitation"],
                selection : ["prestidigitation"],
                firstCol : "3",
                spellcastingAbility : 3,
            }], */
            action : [
                ["bonus action", " (Favored Sauce)"],
                ["action", " (Sauce)"]
            ]
        },
        "master of the sauce" : {
            name : "Master of the Sauce",
            source : ["M:SS", 5],
            minlevel : 18,
            description : desc([
                "I choose an ultra favored sauce from one of my favored sauces",
                "For this sauce's rolls, I gain an additional +4 and make 8 pints in 1/4 the time",
                "I can use up to 3 Meta Sauce traits on the 8 pints of non-Magic Chef sauces"
            ])
        },
        "ancient chef" : {
            name : "Ancient Chef",
            source : ["M:SS", 5],
            minlevel : 20,
            description : desc([
                "Once per long rest, I can make 2 pints of a sauce with all sauce effects in it"
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
}

WeaponsList["saucebite"] = {
    name : "Sauce Bite",
    source : ["M:SS", 4],
    regExpSearch : /sauce bite/i,
    type : "Sauce Slinger",
    list : "Sauce Slinger",
    range : "Melee",
    ability : 1,
    abilitytodamage : true,
    isAlwaysProf : true,
    damage : [1, 4, "piercing"]
};

WeaponsList["saucebreath"] = {
    name : "Sauce Breath Weapon",
    source : ["M:SS", 4],
    regExpSearch : /sauce breath weapon/i,
    type : "Sauce Slinger",
    list : "Sauce Slinger",
    range : "15ft Cone",
    ability : 3,
    dc : true,
    modifiers : [0, "Str"],
    description : "On success, no damage",
    isAlwaysProf : true,
    damage : [1, 4, "poison"]
};

WeaponsList["saucefling"] = {
    name : "Sauce Fling",
    source : ["M:SS", 4],
    regExpSearch : /sauce fling/i,
    type : "Sauce Slinger",
    list : "Sauce Slinger",
    range : "30/60 ft",
    ammo : "Sauce (Pints)",
    ability : 1,
    abilitytodamage : true,
    isAlwaysProf : true,
    damage : [1, 4, "bludgeoning"]
};

AmmoList["sauce"] = {
    name : "Sauce (Pints)",
    source : ["M:SS", 4],
    icon : "Flasks",
    weight : 1,
    invName : "Sauce"
};