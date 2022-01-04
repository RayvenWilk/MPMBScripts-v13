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

var iFileName = "Something[transcribed by rayvenwilk].js";

SourceList["KB:EE"] = {
    name : "Keith Baker: Exploring Eberron",
    abbreviation : "KB:EE",
    group : "Dungeon Master's Guild",
    url : "https://www.dmsguild.com/product/315887/Exploring-Eberron",
    date : "2020/07/30",
    defaultExcluded : true
};

RaceList["dhakaani bugbear"] = {
    regExpSearch : /^(?=.*dhakaani)(?=.*bugbear)/i,
    name : "Dhakaani Bugbear",
    sortname : "Bugbear, Dhakaani",
    plural : "Dhakaani Bugbears",
    source : ["KB:EE", 211],
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    vision : [["Darkvision", 60]],
    savetxt : {
        adv_vs : ["frightened"]
    },
    age : " rearch adulthood at age 16 and live up to 80 years",
	height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
	weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
    weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
    scores : [2, 0, 0, 0, 0, 0],
    carryingCapacity : 2,
    scorestxt : "+2 Strength, +1 Dexterity or Constitution",
    trait : "Dhakaani Bugbear (+2 Strength, +1 Dexterity or Constituion)\nPowerful Build: I count as one size larger for my carrying capacity, push, drag, and lift.\nLong-limbed: When I make a melee attack on my turn, your reach for it is 5 ft greater than normal.\nStand by the Strong: When an ally within 30 ft I can see fails a saving throw against being frightened, I can use my reaction to allow it to reroll the save."
}