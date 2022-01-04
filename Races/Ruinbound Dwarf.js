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

RaceList["ruinbound dwarf"] = {
    regExpSearch : /^(?=.*ruinbound)(?=.*dwarf)/i,
    name : "Ruinbound Dwarf",
    sortname : "Dwarf, Ruinbound",
    source : ["KB:EE", 210],
    plural : "Ruinbound Dwarves",
    scores : [0, 0, 2, 0, 0, 1],
    scorestxt : "+2 Constiution, +1 Charisma",
    size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
    dmgres : ["Poison"],
    toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
    weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	trait : "Ruinbound Dwarf (+1 Charisma, +2 Constitution)\nStonecunning: Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.\nPersonal Symbiont: I choose acid splash, guidance (self only), infestation, light, mage hand, poison spray, or ray of frost. I must show my symbiont fully to cast the cantrip and can switch to a different cantrip when I finish a long rest.\nSymbiont Mastery: I can attune to one magic item that has the Symbiotic Nature property without using an attunement slot. I can end an attunement to a Symbiotic Nature magic item when I finish a long rest.",
    spellcastingBonus : {
        spells : ["acid splash", "guidance", "infestation", "light", "mage hand", "poison spray", "ray of frost"],
        name : "Personal Symbiont",
        selection : ["acid splash", "guidance", "infestation-xgte", "light", "mage hand", "poison spray", "ray of frost"],
        spellcastingAbility : 6,
    }
}