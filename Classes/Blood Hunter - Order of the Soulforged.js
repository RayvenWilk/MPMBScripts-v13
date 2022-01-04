var iFileName = "Blood Hunter - Order of the Soulforged[Sceptis's work, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["S:OS"] = {
    name : "Sceptis: Order of the Soulforged",
    abbreviation : "S:OS",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.reddit.com/r/UnearthedArcana/comments/fg0f40/blood_hunter_order_of_the_soulforged_play_a_soul/",
    date : "2020/03/10",
    defaultExcluded : true
};

AddSubClass("blood hunter", "soulforged", {
    regExpSearch : /^(?=.*blood)(?=.*hunter)(?=.*soulforged).*$/i,
    subname : "Order of the Soulforged",
    source : [["S:OS", 1]],
    features : {
        "subclassfeature3" : {
            name : "Forging the Soul",
            source : ["S:OS", 1],
            minlevel : 3,
            description : desc([
                "During a short or long rest, I forge a Soul Weapon in a 1 hour ritual",
                "It must be a nonmagical weapon and within reach during the ritual",
                "I gain the following benefits while I hold the Soul Weapon for the weapon",
                " \u2022 Linked Strength: I use Intelligence for attack and damage rolls",
                " \u2022 Siege Weapon: I deal double damage to objects and structures",
                " \u2022 Forever Bound: I can't be disarmed of soul weapon unless incapacitated",
                " \u2022 Weapon Sense: I gain a bonus to my perception and insight equal to my Int mod (min 1)",
                " \u2022 Rites of Steel: Once per turn, I can reroll hemocraft die and use higher roll",
                "    When I do this, damage type changes to damage type of soul weapon",
                "My item is no longer a Soul Weapon when I die or when I use this feature on another weapon"
            ]),
            addMod : [
                { type: "skill", field: "Perception", mod : "Int", text : "I can add my Intelligence to Perception Checks" },
                { type: "skill", field: "Insight", mod : "Int", text : "I can add my Intelligence to Insight checks" }
            ],
            calcChanges : {
                atkCalc : [
                    function (fields, v) {
						if (/^(?=.*soulforged).*$/i.test(v.WeaponText)) {
                            fields.Mod = 4;
                        };
                    },
                    "If I include the word 'Soulforged' in the name of a weapon, it gets treated as the weapon I imbued to use Intelligence instead of Strength or Dexterity if my Intelligence modifier is higher than the ability it would otherwise use."
                ]
            }
        },
        "subclassfeature3.1" : {
            name : "Sound Soul, Sound Body",
            source : ["S:OS", 1],
            minlevel : 3,
            description : desc([
                "I can add gain temp hp equal to my Intelligence modifier (min 1) as an action"
            ]),
            action : ["action", ""]
        },
        "subclassfeature7" : {
            name : "Improved Bond",
            source : ["S:OS", 1],
            minlevel : 7,
            description : desc([
                "I gain the following benefits while wielding my soulForged Weapon",
                " \u2022 Magical Strikes: My soul weapon counts as magical for negating resistance and immunity",
                " \u2022 Sentient Sentinel: I gain bonus to AC equal to my Int mod (min 1) as a reaction when hit"
            ]),
            calcChanges : {
                atkCalc : [
                    function (fields, v) {
						if ((/^(?=.*soulforged).*$/i).test(v.WeaponText)) {
                            fields.description += "; Counts as Magical";
                        };
                    },
                    "If I include the word 'Soulforged' in the name of a weapon, it counts as magical for the purpose of overcoming resistances and immunity."
                ]
            }
        },
        "subclassfeature11" : {
            name : "Brand of Breaking",
            source : ["S:OS", 1],
            minlevel : 11,
            description : desc([
                "Brand of Castigation ends benefits from magical items target is attuned to or wielding",
                "They also can't add their proficiency bonus to weapon attack rolls"
            ])
        },
        "subclassfeature15" : {
            name : "Blood Curse of Unattuned",
            source : ["S:OS", 1],
            minlevel : 15,
            description : desc([
                "I gain Blood Curse of Unattuned and it doesn't count against blood curses known"
            ]),
            action : ["bonus action", ''],
            toNotesPage : [{
                name : "Blood Curse of Unattuned",
                note : [
                    "As a bonus action, I can end a creature's attunement to a magic item within 30 ft",
                    "\u2022 Amplify: I learn info on item like \"identify\" spell and it can't be attuned until next dawn"
                ],
                page3notes : true,
                popupName : "Blood Curse of Unattuned",
                source : ["S:OS", 1]
            }]
        },
        "subclassfeature18" : {
            name : "Forged as One",
            source : ["S:OS", 1],
            minlevel : 18,
            description : desc([
                "While holding my soul weapon, I gain the following effects",
                " \u2022 I am immune to being charmed, frightened, or surprise",
                " \u2022 I have adv. on saves against blinded, deafened, stunned, or unconscious"
            ])
        }
    }
})