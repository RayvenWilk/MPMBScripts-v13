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

RaceList["guide hobgoblin"] = {
    regExpSearch : /^(?=.*guide)(?=.*hobgoblin)/i,
    name : "Guide Hobgoblin",
    sortname : "Hobgoblin, Guide",
    source : ["KB:EE", 209],
    plural : "Guide Hobgoblins",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Goblin"],
    vision : [["Darkvision", 60]],
    savetxt : {
        adv_vs : ["charmed"]
    },
    vision : [["Darkvision", 60]],
    skillstxt : "Choose two from History, Medicine, Performance, or Persuasion",
    age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
    weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
    scores : [0, 0, 2, 0, 0, 0],
    scorestxt : "+2 Constitution, +1 Intelligence or Wisdom",
    trait : "Guide Hobgoblin (+2 Constitution, +1 Intelligence or Wisdom)\nLead By Example: Once per short or long rest if I fail an ability check, I gain a bonus to the roll equal to the number of allies I see with 30 feet up to a max of +5.",
    features : {
        "lead by example" : {
            name : "Lead by Example",
            minlevel : 1,
            recovery : "short rest",
            usages : 1,
        }
    }
}