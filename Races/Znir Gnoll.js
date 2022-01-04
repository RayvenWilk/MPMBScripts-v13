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

RaceList["znir gnoll"] = {
    regExpSearch : /^(?=.*znir)(?=.*gnoll)/i,
    name : "Znir Gnoll",
    sortname : "Gnoll, Znir",
    plural : "Znir Gnolls",
    source : ["KB:EE", 211],
    size : 3,
    speed : {
        walk : { spd: 30, enc : 20 }
    },
    languageProfs : ["Gnoll", "Goblin or Common"],
    age : "Znir Gnolls reach adulthood by the age of 5 and live up to 30 years.",
    height : "Znir Gnolls generally stand around 7 to 8 feet in height",
    weight : "Znir Gnolls weigh between 250 and 320 lbs.",
    skillstxt : "Choose from one of the following : Perception, Stealth, or Survival",
    scores : [0, 0, 1, 0, 0, 0],
    weaponOptions : [{
        regExpSearch : /gnoll bite/i,
        name : "Gnoll Bite",
        source : ["KB:EE", 212],
        ability : 1,
        type : "Natural",
        damage : [1, 4, "piercing"],
        range : "Melee",
        list : "melee",
        isAlwaysProf : true,
        abilitytodamage : true
    }],
    scorestxt : "+2 Strength or Dexterity, +1 Constitution",
    traits : "Znir Gnoll (+2 Strength or Dexterity, +1 Constitution)\nBite: I can bite for 1d6 piercing damage instead of using unarmed strikes.\nRampage: As a bonus action when I reduce a creature to 0 HP with a melee attack on my turn, I can move up to half my speed and make a bite attack.",
    features : {
        "rampage" : {
			name : "Rampage",
			minlevel : 1,
            action : ["bonus action",""]
        }
    }
}