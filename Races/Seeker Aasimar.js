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

RaceList["seeker aasimar"] = {
    regExpSearch : /^(?=.*seeker)(?=.*aasimar)/i,
    name : "Seeker Aasimar",
    sortname : "Aasimar, Seeker",
    source : ["KB:EE", 208],
    plural : "Seeker Aasimar",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Darkvision", 60]],
    dmgres : ["Necrotic", "Radiant"],
    languageProfs : ["Common", "Celestial"],
    age : "Seeker Aasimar reach adulthood in their late teens and live around 160 years",
	height : "Seeker Aasimar range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : "Seeker Aasimar weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : "Seeker Aasimar range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
    weightMetric : "Seeker Aasimar weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
    scores : [0, 0, 1, 0, 0, 2],
    traits : "Seeker Aasimar (+2 Charisma, +1 Constitution)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nShroud of Life and Death: Once per long rest when I'm 3rd level, I can use an action to transform, summoning a nimbus of crimson blood around me. For 1 minute or until I end it as a bonus action, one creature within 30 ft of me takes damage equal to half my level (rounded up). When I or an ally is reduced to 0 hp but not killed outright, I can use a reaction to reduce them to 0 hit points, ending the transformation early. I shed dim light in a 10 foot radius.",
    spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
    features : {
        "healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
        },
        "shroud of life and death" : {
            name : "Shroud of Life and Death",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
            action : [["action", " (start)"], ["bonus action", " (end)"], ["reaction", " (save ally)"]]
        }
    }
}