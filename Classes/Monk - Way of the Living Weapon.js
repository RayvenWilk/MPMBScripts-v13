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

AddSubClass("monk", "way of the living weapon", {
    regExpSearch : /^(?=.*living)(?=.*weapon)/,
    subname : "Way of the Livig Weapon",
    source : ["KB:EE", 218],
    features : {
        "subclassfeature3" : {
            name : "Martial Discpline",
            source : ["KB:EE", 218],
            minlevel : 3,
            description : desc([
                "Choose a Martial Discipline using the \"Choose Features\" button above"
            ]),
            choices : ["Forged Heart", "Nightmare Shroud", "Traveler's Blade", "Weretouched"],
            "forged heart" : {
                name : "Forged Heart Martial Discipline",
                source : ["KB:EE", 218],
                description : desc([
                    "My unarmed strikes are considered adamantine weapons",
                    "When I hit a creature with an unarmed strike, I can spend 1 ki point to force a Strength save",
                    "On a failure, the creature takes 2d6 damage of the unarmed strike's type",
                    "They are also pushed up to 15 ft away from me",
                    "On a success, they take 1d6 damage and aren't pushed back"
                ]),
                calcChanges : {
                    atkCalc : [
                        function (fields, v, output) {
                            if (v.baseWeaponName == "unarmed strike" && !v.thisWeapon[1] && !(/counts as( a)? adamantine/i).test(fields.Description)) {
								fields.Description += (fields.Description ? '; ' : '') + 'Counts as adamatine weapon';
							};
						},
						"My unarmed strikes count as adamatine weapons."
                    ]
                }
            },
            "nightmare shroud" : {
                name : "Nightmare Shroud Martial Discipline",
                source : ["KB:EE", 219],
                description : desc([
                    "When I hit a creature with an unarmed strike, I can spend 1 ki point to force a Wisdom save",
                    "On a failure, the creature takes 1d6 psychic damage and becomes frightened of me",
                    "This lasts until the end of my next turn",
                    "On a success, the creature is immune to the fear effect of this ability for 24 hours"
                ])
            },
            "traveler's blade" : {
                name : "Traveler's Blade Martial Discpline",
                source : ["KB:EE", 219],
                description : desc([
                    "My reach extends by 5 ft",
                    "At the start of my turn, I can spend up to 4 ki points to extend my reach",
                    "Each ki point extends my reach by 5 ft"
                ])
            },
            "weretouched" : {
                name : "Weretouched Martial Discipline",
                source : ["KB:EE", 219],
                description : desc([
                    "Once per turn, I can spend 1 ki point when I hit a creature with an unarmed strike",
                    "The creature takes 1d4 slashing damage at the end of its turn for 1 minute",
                    "This bleeding efffect ends early if the creature has 1 or more hit point restored",
                    "It also ends when a healer's kit is used or they succed a Wisdom save",
                    "The DC is equal to my ki save DC",
                    "At 6th level, this slashing damage is magical"
                ])
            }
        },
        "subclassfeature3.1" : {
            name : "Mutable Strike",
            source : ["KB:EE", 219],
            minlevel : 3,
            description : desc([
                "When I make an unarmed strike, I can switch between bludgeoning/piercing/slashing damage"
            ])
        },
        "subclassfeature6" : {
            name : "Manifest Blow",
            source : ["KB:EE", 219],
            minlevel : 6,
            description : desc([
                "I choose one of the following damage types when I finish a long rest",
                "bludgeoning, piercing, slashing, cold, lighning, necrotic, psychic, or thunder",
                "The first creature I hit with an unarmed strike on my turn takes damage",
                "If I select bludgeoning, piercing, or slashing, it benefits from Ki-Empowered Strikes",
            ]),
            additional : levels.map(function(n){
                if (n < 6 ? "" : n < 11 ? "1d6 damage" : "2d6 damage");
            })
        },
        "subclassfeature11" : {
            name : "Reflexive Adapation",
            source : ["KB:EE", 219],
            minlevel : 11,
            description : desc([
                "When I make a Strength (Athletics)/Dexterity (Acrobatics) check, I can spend 1 ki point",
                "I can roll an additional d20 after I roll but before I learn the outcome",
                "I choose either d20 for the check, omitting the highest if made with disadvantage",
            ])
        },
        "subclassfeature17" : {
            name : "Perfect Form",
            source : ["KB:EE", 219],
            minlevel : 17,
            description :desc([
                "Choose a Perfect using the \"Choose Features\" button above"
            ]),
            choices : ["Forged Heart", "Nightmare Shroud", "Traveler's Blade", "Weretouched"],
            "forged heart" : {
                name : "Forged Heart Perfect Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I am hit by an attack, I can add my Wisdom modifier to my AC as a reaction",
                    "This includes the triggering attack and lasts until the start of my next turn"
                ]),
                action : ["reaction", ""]
            },
            "nightmare shroud" : {
                name : "Nightmare Shroud Perfect Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I damage a creature with Manifest blows, 3 creatures within 30 feet take damage",
                    "I choose these creatures and they take psychic damage equal to half my monk level"
                ]),
                additional : levels.map(function (n) { return "+" + Math.floor(n/2) + " psychic damage";}),
            },
            "traveler's blade" : {
                name : "Traveler's Blade Perfect Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I deal piercing/slashing damage with an unarmed strike, I deal extra damage",
                    "The creature takes an extra 1d8 poison damage and makes a Constitution save",
                    "The DC is equal to my ki save DC",
                    "On a failure, the creature is poisoned until the end of its next turn"
                ])
            },
            "weretouched" : {
                name : "Weretouched Perform Form",
                source : ["KB:EE", 219],
                description : desc([
                    "When I use Flurry of Blows, I make 3 extra attacks as a bonus action instead of two",
                    "I have advantage on these extra attacks"
                ]),
                action : ["bonus action", " (part of Flurry of Blows)"]
            }
        }
    }
})