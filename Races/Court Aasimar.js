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

RaceList["court aasimar"] = {
    regExpSearch : /^(?=.*court)(?=.*aasimar)/i,
    name : "Court Aasimar",
    sortname : "Aasimar, Seeker",
    source : ["KB:EE", 208],
    plural : "Court Aasimar",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Darkvision", 60]],
    dmgres : ["Necrotic", "Radiant"],
    languageProfs : ["Common", "Celestial", "Elvish"],
    savetxt : {
        text : ["Magic can't put me to sleep"],
        adv_vs : ["charmed"]
    },
    age : "Court Aasimar mature at the same rate as elves and leave up to 1,000 years",
	height : "Court Aasimar range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : "Court Aasimar weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : "Court Aasimar range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : "Court Aasimar weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
    scores : [0, 1, 0, 0, 0, 2],
    scorestxt : "+2 Charisma, +1 Dexterity",
    trait : "Court Aasimar (+2 Charisma, +1 Dexterity)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nGuidance From the Past: Once per short or long rest when I'm 3rd level, I can use an action to transform, I summon misty tendrils that whisper advice to me. For 1 minute or until I end it as a bonus action, I have advantage on all Wisdom checks and saving throws.\nTrance: Court Aasimar don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
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
        "guidance from the past" : {
            name : "Guidance From the Past",
            usages : 1,
            minlevel : 3,
            recovery : "short rest",
            action : [["action", " (start)"], ["bonus action", " (end)"]]
        }
    }
}