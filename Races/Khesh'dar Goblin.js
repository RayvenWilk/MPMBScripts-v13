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

RaceList["khesh'dar goblin"] = {
    regExpSearch : /^(?=.*artisan)(?=.*goblin)/i,
    name : "Khesh'dar Goblin",
    sortname : "Goblin, Khesh'dar",
    plural : "Khesh'dar Goblins",
    source : ["KB:EE", 211],
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    toolProfs : [["Artisan's Tools", 1]],
    vision : [["Darkvision", 60]],
    age : " rearch adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
    scores : [0, 2, 0, 2, 0, 0],
    scorestxt : "+2 Dexterity, +2 Intelligence",
    trait : "Khesh'dar Goblin (+2 Dexterity, +2 Intelligence)\nNaturally Stealthy: I can attempt to hide even when I am obscured only by a creature that is at least one size larger than me.\nThe Silent Arts: I am proficient in stealth. I add double my proficiency bonus for any ability checks I make using that skill."
}