/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds 1 subrace to the fairy race
				This is taken from the dandwiki website (https://www.dandwiki.com/wiki/Fairy,_Variant_(5e_Race)_)
	Code by:	rayvenwilk
	Date:		2021-09-18 (sheet v13.0.6)
*/

var iFileName = "Vairant Fairy Race (transcribed by rayvenwilk).js";
RequiredSheetVersion("13.0.6");

RaceList["mind fairy"] = {
    regExpSearch :  /^(((?=.*\b(mind|psychic)\b)(?=.*\b(fairy)\b))).*$/i,
	name : "Mind fairy",
	sortname : "Fairy, Mind",
	source : [["HB"]],
	plural : "Mind fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan", "Deep Speech"],
	dmgres : ["Psychic"],
	savetxt : {
		text : ["Advantage on saving throws against being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed", "stunned"],
	},
	skills : ["Nature"],
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Mind Fairy: +1 Dexterity, +1 Charisma, +1 Intellegence;",
	scores : [0, 1, 0, 1, 0, 1],
	trait : "Mind Fairy (+1 Dexterity, +1 Charisma, +1 Intellegence)\n Cerebral: I have advantage on saving throws against being stunned and resistance to psychic damage, but vulnerability to poison damage.\nInner Focus: I know the Mage Hand cantrip.\nTelekinesis Hovering: I remain flying if I am restrained or knocked prone, though I still fall if I am incapacitated.\nStrong-Minded: I am capable of communicating telepathically with other creatures out to a range of 60 feet. I may only form a telepathic link with one creature at a time; if I attempt to telepathically communicate with a creature while already communicating with a different creature, the old link is severed in place of the new one. To be able to communicate telepathically with a creature, it must understand at least one language, and must have an Intelligence score of 4 or higher. If the creature I am  communicating with telepathically ever moves more than 60 feet away from me, the telepathic link is forcefully severed.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Inner Focus",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true,
	},        
} 