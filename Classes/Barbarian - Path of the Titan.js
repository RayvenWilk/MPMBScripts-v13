/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Barbarian subclass Path of the Titan
	Effect:     This will add the subclass Path of the Titan as an option for the barbarian
	Content:	Barbarian subclass Path of the Titan found : https://www.gmbinder.com/share/-Mf0UvCijZcQ9U6n657W
	Code by:	rayvenwilk
	Date:		2021-10-18 (sheet 13.0.6)
*/

var iFileName = "Barbarian_PathoftheTitan(transcribed_by_rayvenwilk).js";

//need help with calc for HP, feature 3

AddSubClass("barbarian", "path of the titan", {
    regExpSearch : /^(?=.*titan).*$/i,
    subname : "Path of the Titan",
    fullname : "Titan",
    source : ["HB"],
    features : {
        "subclassfeature3" : {
            name : "Child of the Titans",
            source : ["HB"],
            minlevel : 3,
            description : "\n   " + "I grow 3d4 inches in height and gain that same amount x8 in weight. I also learn to speak, read, and write Giant. And my HP max increases by 3 (+1 each level after 3rd).",
            languageProfs : ["Giant"],
            /*calcChanges : {
                hp : function (totalHD) {
                    return [totalHD + 3, '\n + ' + totalHD + '\xD7 3 from Child of Titans feat (' + (totalHD + 3) + ')', true];
                }
                setAltHP : true,
            }*/
        },
        "subclassfeature3.1" : {
            name : "Rage of the Colossus",
            source : ["HB"],
            minlevel : 3,
            description : "\n   " + "For the duration of my rage, if I am smaller than Large, I become Large along with anything I am wearing unless there is no room to grow. Once on each of my turns, +1d6 damage on a hit.",
        },
        "subclassfeature6" : {
            name : "City Breaker",
            source : ["HB"],
            minlevel : 6,
            description : "\n   " + "While raging, my weapon attacks deal double damage to objects and structures.",
        },
        "subclassfeature6.1" : {
            name : "Fearsome Physique",
            source : ["HB"],
            minlevel : 6,
            description : "\n   " + "I grow 1d4 inches and gain that same amount x8 in weight. Plus, whenever I make a Cha (Intimidation) check, I add my Con mod.",
        },
        "subclassfeature10" : {
            name : "Jotunblood",
            source : ["HB"],
            minlevel : 10,
            description : "\n   " + "My giant heritage manifests, use the \"Choose Feature\" button above for this",
            choices : ["Trollblood", "Hill Giant", "Stone Giant", "Frost Giant", "Fire Giant", "Cloud Giant", "Storm Giant"],
            "trollblood" : {
                name : "TrollBlood",
                description : "I have advantage on saving throws against poison and disease. Additionally, while raging I can spend one Hit Die to heal myself at the start of each of my turns, adding my Con mod. equal to the total (minimum of 1). I cannot use this trait if I have taken acid or fire damage since the beginning of my last turn.",
                savetxt : {
                    adv_vs : ["poison", "disease"],
                }
            },
            "hill giant" : {
                name : "Hill Giant",
                description : "I have advantage on saving throws against poison and disease and I gain proficiency with brewer's supplies or cook's utensils (my choice). Additionally, while raging I have resistance to poison damage and I cannot be knocked prone, shoved or moved against my will.",
                savetxt : {
                    adv_vs : ["poison", "disease"],
                },
                toolProfs : [["brewer's supplies or cook's utensils", 1]],
            },
            "stone giant" : {
                name : "Stone Giant",
                description : "I have advantage on saving throws against being charmed or frightened and I gain proficiency with mason's tools. Additionally, while raging, I gain a bonus to Intelligence, Wisdom and Charisma saving throws equal to my rage damage bonus.",
                savetxt : {
                    adv_vs : ["charmed", "frightened"],
                },
                toolProfs : "mason's tools",
            },
            "frost giant" : {
                name : "Frost Giant",
                description : "I have resistance to cold damage and I gain proficiency with leatherworker's tools. Additionally, while raging I gain temporary hit points equal to my proficiency modifier + my rage damage bonus at the start of each of my turns as I channel icy power to inure myself against pain.",
                dmgres : ["Cold"],
                toolProfs : "leatherworker's tools"
            },
            "fire giant" : {
                name : "Fire Giant",
                description : "I gain resistance to fire damage and proficiency with smith's tools. Additionally, while raging my skin hardens like iron increasing my armor class by an amount equal to my rage damage bonus.",
                dmgres : ["Fire"],
                toolProfs : "smith's tools"
            },
            "cloud giant" : {
                name : "Cloud Giant",
                description : "I gain resistance to psychic damage and proficiency with disguise kits or forgery kits (my choice). Additionally, while raging I have advantage on saving throws against spells and magical effects.",
                dmgres : ["Psychic"],
                toolProfs : [["disguise kit or forgery kit", 1]],
            },
            "storm giant" : {
                name : "Storm Giant",
                description : "I can breathe both air and water, and I gain a swimming speed equal to my walking speed. Additionally, while raging I am resistant to cold, lightning and thunder damage.",
            },
        },
        "subclassfeature10.1" : {
            name : "Might of the Colossus",
            source : ["HB"],
            minlevel : 10,
            description : "\n   " + "The extra damage I deal from the Colossus feature increases to 1d8"
        },
        "subclassfeature14" : {
            name : "Wrath of the Titans",
            source : ["HB"],
            minlevel : 14,
            description : "\n   " + "The damage dealt by the Colossus feature is now 1d10. In addition when I use the feature my size increases to Huge and I gain +5ft range."
       },
    },
})
