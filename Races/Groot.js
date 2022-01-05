var iFileName = "Wilden Race (Requested by u/Credie13).js";
RequiredSheetVersion(13);

RaceList["wilden, iron oak"] = {
	regExpSearch : /^(?=.*wilden)(?=.*iron)(?=.*oak).*$/i,
	name : "Wilden, Iron Oak",
	source : ["HB", 0],
	plural : "Wildens, Iron Oak",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common", "Sylvan"],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	age : " reach adulthood at 10 and live around 100 years",
	height : " range from 5 to over 6 feet tall.",
	weight : " weigh around 140 lbs.",
	improvements : "Wilden, Iron Oak: +1 Constitution, +2 Wisdom;",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Wilden, Iron Oak (+1 Constitution, +2 Wisdom)\nChlorophyll: I don't need to sleep or eat normal food. Instead, spending 4 hours rooted in soil grants me the same benefit as an 8 hour rest and takes care of hunger. It takes 1 minute for me to spread my roots and I gain tremorsense out to 30 ft. while rooted this way\nOne with Nature: I know the druidcraft cantrip. Once I reach 3rd level, I can cast Goodberry once per day. Once I reach 5th level, I can cast barkskin once per day. Wisdom is my spellcasting ability for these spells.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "One With Nature",
		spells : ["druidcraft", "goodberry", "barkskin"],
		selection : ["druidcraft", "goodberry", "barkskin"],
		prepared : true,
		atwill : true
	}
},

RaceList["wilden, ivy"] = {
	regExpSearch : /^(?=.*wilden)(?=.*ivy).*$/i,
	name : "Wilden, Ivy",
	source : ["HB", 0],
	plural : "Wildens, Ivy",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
		},
	languageProfs : ["Common", "Sylvan"],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	age : " reach adulthood at 10 and live around 100 years",
	height : " range from 5 to over 6 feet tall.",
	weight : " weigh around 140 lbs.",
	improvements : "Wilden, Ivy: +1 Dexterity, +2 Wisdom;",
	scores : [0, 1, 0, 0, 2, 0],
	trait : "Wilden, Ivy (+1 Dexterity, +2 Wisdom)\nChlorophyll: I don't need to sleep or eat normal food. Instead, spending 4 hours rooted in soil grants me the same benefit as an 8 hour rest and takes care of hunger. It takes 1 minute for me to spread my roots and I gain tremorsense out to 30 ft. while rooted this way\nOne with Nature: I know the druidcraft cantrip. Once I reach 3rd level, I can cast Goodberry once per day. Once I reach 5th level, I can cast grasping vine once per day. Wisdom is my spellcasting ability for these spells.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "One With Nature",
		spells : ["druidcraft", "goodberry", "grasping vine"],
		selection : ["druidcraft", "goodberry", "grasping vine"],
		prepared : true,
		atwill : true
	}
}
