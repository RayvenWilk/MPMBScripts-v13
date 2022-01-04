/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for Fighter called "The Mist Sovereign"
                This is taken from r/UnearthedArcana(https://www.reddit.com/r/UnearthedArcana/)
                It can be found here: https://drive.google.com/file/d/18gL_DS83vuwCvs-XEs-_Uwdj6uwMFb5S/view
                and here: https://www.reddit.com/r/UnearthedArcana/comments/dxvtfd/martial_archetype_the_mist_sovereign_make_your/
				This subclass was made by u/Gary91919
	Code by:	Seneschal
	Date:		2019-11-19 (sheet v13.0.0Beta22)
*/

var iFileName = "Fighter - Mist Sovereign [Created by u/Gary91919, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["G:FMS"] = {
    name : "/u/Gary91919: Mist Sovereign Fighter",
    abbreviation : "G:FMS",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.reddit.com/r/UnearthedArcana/comments/dxvtfd/martial_archetype_the_mist_sovereign_make_your/",
    date : "2019/11/19",
    defaultExcluded : true
};

AddSubClass("fighter", "mistsovereign", {
    regExpSearch : /mist sovereign/i,
    subname : "Mist Sovereign",
    source : ["G:FMS", 0],
    features : {
        "subclassfeature3" : {
            name : "Silent Sulker",
            source : ["G:FMS", 1],
            minlevel : 3,
            skills : ["Stealth"],
            description : desc([
                "I am proficiency in Stealth if I wasn't already",
                "It cost no extra movement to move stealthily"
            ])
        },
        "subclassfeature3.1" : {
            name : "Misty Strike",
            source : ["G:FMS", 1],
            minlevel : 3,
            spellcastingBonus : {
                name : "Misy Strike",
                spells : ["misty step"],
                selection : ["misty step"],
                times : 1
            },
            description : desc([
                "I gain the ability to cast the misty step spell",
                "When I cast it, I can melee attack one creature within range of destination",
                "If the attack hits, target has disadv. on their next attack roll",
                "I can use this feature twice per long rest and this increases to three times at 10th",
            ]),
            usages : levels.map(function(n){
                return n < 10 ? 2 : 3;
            }),
            action : ["bonus action", ""],
            recovery : "short rest"
        },
        "subclassfeature7" : {
            name : "Mantle of Fog",
            source : ["G:FMS", 1],
            minlevel : 7,
            additional : levels.map(function(n){
                return "HP: " + n*2;
            }),
            usages : levels.map(function(n){
                return "HP: " + n*2;
            }),
            recovery : "short rest",
            description : desc([
                "Mists surround me, making me lightly obscured",
                "The mists have HP equal to my Fighter level x 2",
                "If I get hit by a weapon attack, the mists take damage",
                "If mist HP is reduced to 0, I take leftover damage",
                "the mist regains all lost HP after a short or long rest"
            ])
        },
        "subclassfeature15" : {
            name : "Cloud-Like Body",
            source : ["G:FMS", 1],
            minlevel : 15,
            description : desc([
                "I no longer trigger attacks of opportunitiy",
                "I cna move through a creature's space without extra movement",
                "Allies  move through my space with no extra movement"
            ])
        },
        "subclassfeature18" : {
            name : "Realm of Smog",
            source : ["G:FMS", 1],
            minlevel : 18,
            description : desc([
                "As an action, I can summon myths in a 30 ft radius centered on me",
                "My movement increases by 20 ft and I am heavily obscured in this area",
                "All hostile creatures lose sense of direction",
                "They take 2d8 poison damage if they start their turn in the mist",
                "My Mantle of Fog current and max hit points are doubled while in this area",
                "I can use this feature once per long rest"
            ]),
            usages : 1,
            action : ["action", ""],
            recovery : "long rest"
        }
    }
});