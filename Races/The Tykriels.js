var iFileName = "Tykriel [Created by Kar, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["K:T"] = { //Object name; This is the way the source is called upon, so the way you would enter it as the "Source" in any other of the JavaScript Syntax. Note that this is case sensitive! //Also note that this has to be an unique value. Look at the default sources in the "Complete SourceList.js" file
	name : "Kar's Tykriel", //Required; The name of the source as written in full. This will be used in the tooltips/mouseover text.
	abbreviation : "K:T", //Required; The abbreviation of the source. This can only be letters and a colon! This will be used to refer to the source in the form fields //Note that this doesn't have to be the same as the way the source is called upon, but it can be for convenience
	group : "Friendly Bunch Homebrew", //Optional; Adding this will make the sheet put the source into a group when using the "Sources" function where you can include/exclude sources. // The default options for this are "Unearthed Arcana", "Official Sources", "Official Sources (small)", and "default". // If you enter "default", the source can't be excluded using the "Sources" function
	defaultExcluded : true,
	date : "2019/09/24", //Optional; the date of the resource, written as year/month/day
};
RaceList["northern tykriel"] = {
	regExpSearch : /^(?=.*northern)(?=.*tykriel).*$/i,
	name : "Northern Tykriel",
	sortname : "Tykriel, Northern",
	source : [["K:T", 0]],
	plural : "Northern Tykriel",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	toolProfs : ["Tinker's Tools"],
	languageProfs : ["Common", "Tykriel, Dwarvish, or Gnomish"],
	dmgres : ["Cold"],
	weaponprofs : [false, false, ["Light Crossbows", "Heavy Crossbows", "Hand Crossbows"]],
	skills : ["Perception"],
	vision : [["Darkvision", 60]],
	age : " mature by their late teens and live to around 200 years.",
	height : " range from 5 to over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh around 138 lb (120 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (162 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	trait : "Northern Tykriel (+2 Intelligence, +1 Strength)\n Tools of the Tykriel: Proficient in Tinkerer's Tools, Light Crossbow, Hand Crossbow, Heavy Crossbow, and Perception.\n Claws and Talons: I use my talons to deal 1d4 slashing damage and my talons have the finesse property\n Birds of a Feather: Can't digest eggs or any bird based products\n Surface Dweller: Resistant to Cold damage\n Nothern Leverage: Once per long rest as a free action, I add extra damage to my attack equal to my strength modifier.",
	improvements : "Northern Tykriel: +2 Intelligence, +1 Strength",
	scores : [1, 0, 0, 2, 0, 0],
	features : {
		"northern leverage" : {
			name : "Northern Leverage",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			additional : "+" + Math.max(1, What('Str Mod')) + " damage"
		}
	}
}

RaceList["southern tykriel"]={
	regExpSearch : /^(?=.*southern)(?=.*tykriel).*$/i,
	name : "Southern Tykriel",
	sortname : "Tykriel, Southern",
	source : [["K:T", 0]],
	plural : "Southern Tykriel",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 },
	},
	toolProfs : ["Tinker's Tools"],
	languageProfs : ["Common", "Tykriel, Dwarvish, or Gnomish"],
	dmgres : ["Fire"],
	weaponprofs : [false, false, ["Light Crossbows", "Heavy Crossbows", "Hand Crossbows"]],
	skills : ["Perception"],
	age : " mature by their late teens and live to around 200 years.",
	height : " range from 5 to over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh around 138 lb (120 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (162 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	trait : "Southern Tykriel (+2 Intellgience, +1 Dexterity)\n Tools of the Tykriel: Proficient in Tinkerer's Tools, Light Crossbow, Hand Crossbow, Heavy Crossbow, and Perception.\n Claws and Talons: I use my talons to deal 1d4 slashing damage and my talons have the finesse property\n Birds of a Feather: Can't digest eggs or any bird based products\n Underground Dweller: Resistant to Fire damage",
	improvements : "Southern Tykriel: +2 Intellgience, +1 Dexterity",
	scores : [0, 1, 0, 2, 0, 0]
}

RaceList["royal tykriel"]={
	regExpSearch : /^(?=.*royal)(?=.*tykriel).*$/i,
	name : "Royal Tykriel",
	sortname : "Tykriel, Royal",
	source : [["K:T", 0]],
	plural : "Royal Tykriel",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	toolProfs : ["Tinker's Tools"],
	languageProfs : ["Common", "Tykriel, Dwarvish, or Gnomish"],
	dmgres : ["Lightning"],
	weaponprofs : [false, false, ["Light Crossbows", "Heavy Crossbows", "Hand Crossbows"]],
	skills : ["Perception"],
	toolProfs : ["Tool Proficiency", 1],
	age : " mature by their late teens and live to around 200 years.",
	height : " range from 5 to over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh around 138 lb (120 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (162 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	trait : "Royal Tykriel (+2 Intellgience, +1 Constitution)\n Tools of the Tykriel: Proficient in Tinkerer's Tools, Light Crossbow, Hand Crossbow, Heavy Crossbow, and Perception.\n Claws and Talons: I use my talons to deal 1d4 slashing damage and my talons have the finesse property\n Birds of a Feather: Can't digest eggs or any bird based products\n Lightning Hide: Resistant to Lightning damage and can't eat durians\n Biological Conduit: I can cast the shocking grasp cantrip and my spellcasting ability is Intelligence.",
	improvements : "Royal Tykriel: +2 Intellgience, +1 Constitution",
	scores : [0, 0, 1, 2, 0, 0],
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Biological Conduit",
		spells : ["shocking grasp"],
		selection : ["shocking grasp"]
	}

}