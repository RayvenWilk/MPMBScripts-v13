var iFileName = "Artificer Forge Adept.js";

SourceList["KB:EE"] = {
    name : "Keith Baker: Exploring Eberron",
    abbreviation : "KB:EE",
    group : "Dungeon Master's Guild",
    url : "https://www.dmsguild.com/product/315887/Exploring-Eberron",
    date : "2020/07/30",
    defaultExcluded : true
};

AddSubClass("artificer", "forge adept", {
    regExpSearch : /^(?=.*forge)(?=.*adept)/i,
    subname : "Forge Adept",
    spellcastingExtra : ["armor of agathys", "shield of faith", "spiritual weapon", "warding bond", "beacon of hope", "remove curse", "death ward", "fire shield", "banishing smite", "wall of force"],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
        "subclassfeature3" : {
            name : "Battle Ready",
            source : ["KB:EE", 214],
            minlevel : 3,
            toolProfs : ["Smith's Tools"],
            description : desc([
                "When I attack with a magic weapon, I can use Intelligence for attack and damage rolls"
            ]),
            weaponProfs : [false, true, false]
        },
        "subclassfeature3.1" : {
            name : "Ghaal'Shaarat",
            source : ["KB:EE", 214],
            minlevel : 3,
            description : desc([
                "I turn one simple or martial melee weapon into my ghaal'shaarat weapon",
                "My weapon gains a +1 to damage and attack rolls unless the bonus was already higher",
                "This increases to +2 at 8th level and +3 at 13th",
                "If my weapon has the thrown property, it returns to my hand immediately after a ranged attack",
                "The benefits only apply to me until the weapon is destroyed or I imbue a new item"
            ]),
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        "if (classes.known.artificier && classes.known.artificier > 2 && (/ghaal'shaarat/i).test(v.weaponText) { output.extraDmg += 1 && output.extraHit += 1 };",
                        "else if (classes.known.artificier && classes.known.artificier > 7 && (/ghaal'shaarat/i).test(v.weaponText) { output.extraDmg += 2 && output.extraHit += 2 };",
                        "else if (classes.known.artificier && classes.known.artificier > 13 && (/ghaal'shaarat/i).test(v.weaponText) { output.extraDmg += 3 && output.extraHit += 3 };"
                    },
                    "My ghaal'shaarat weapon gains a bonus to hit and damage"
                ],
                atkAdd : [
                    function (fields, v) {
                        if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && fields.Mod > 0 && fields.Mod < 3 && Number(What("Int")) > Number(What(fields.Mod == 1 ? "Str" : "Dex"))) {
                            fields.Mod = 4;
                        }
                    },
                    'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
                ]
            }
        },
        "subclassfeature9" : {
            name : "Runes of War",
            source : ["KB:EE", 214],
            minlevel : 9,
            usages : "Intelligence modifier per ",
            usagescalc : Math.max(1, What('Int Mod')),
            recovery : "long rest",
            action : ["action", ""],
            description : desc([
                "As an action, I activate a 30 ft radius aura that lasts for 1 minute",
                "This ends early if my concentration ends (like a spell)",
                "I choose either acid, cold, fire, lightning, or thunder",
                "Each creature of my choice deals an extra 1d4 damage of that type"
            ])
        },
        "subclassfeature15" : {
            name : "Perfect Weapon",
            source : ["KB:EE", 215],
            minlevel : 15,
            description : desc([
                "I can transfer some of my ghaal'shaarat bonus to my AC when I first attack with it on my turn",
                "For every 1 I reduce my attack and damage bonus by, I add +1 to my AC",
                "This bonus stays in effect until the start of my next turn",
                "Additionally, I gain one of the benefits until the end of my next long rest",
                "\u2022 I am resistant to psychic damage and can't be charmed or frightened",
                "\u2022 I deal an extra 1d6 acid, cold, fire, lightning, or thunder damage with my ghaal'shaarat"
            ])
        }
    }
})
