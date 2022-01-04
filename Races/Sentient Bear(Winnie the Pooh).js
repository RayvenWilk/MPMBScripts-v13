var iFileName = "Playable Bear.js";
RequiredSheetVersion("13.0.8");
// Bear.js

RaceList["bear"] = {
	regExpSearch : /bear/i,
	name : "Sentient Bear",
	source : ["HB"],
	plural : "Sentient Bears",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60], ["Keen Senses", 0]],
	savetxt : { text : ["Adv. on Perception Checks"] },
	age : " rearch adulthood at age 15 and live up to 50 years",
	height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
	weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
	weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
	advantages : [["Perception", true]],
	scores : [1, 0, 2, 0, 0, 0],
	weaponOptions : [{
		regExpSearch : /bear bite/i,
		name : "Bear Bite",
		ability : 1,
		type : "Natural",
		damage : [1, 4, "piercing"],
		range : "Melee",
		abilitytodamage : true
	}, {
		regExpSearch : /bear claws/i,
		name : "Bear Claws",
		ability : 1,
		type : "Natural",
		damage : [1, 4, "slashing"],
		range : "Melee",
		abilitytodamage : true
	}],
	weaponsAdd : ["Bear Bite", "Bear Claws"],
	armorOptions : {
		regExpSearch : /beefy/i,
        	name : "Beefy",
		ac : "8+Con",
		dex : -10,
	},
	armorAdd : "Beefy",
	
}

AddRacialVariant("bear", "small", {
	regExpSearch : /small/i,
	size: 4,
	advantages : [["Perception", true]],
	trait : "Small Sentient Bear (+2 Constitution, +1 Strength) + \nNatural Weapons: I gain a Bite and Claw attack. \nLack of Opposable Fingers: I am unable to wield weapons or shields.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
carryingCapacity : 1
});

AddRacialVariant("bear", "normal", {
	regExpSearch : /normal/i,
	size: 3,
	advantages : [["Perception", true]],
	trait : "Normal Sentient Bear (+2 Constitution, +1 Strength) + \nNatural Weapons: I gain a Bite and Claw attack. \nLack of Opposable Fingers: I am unable to wield weapons or shields.\nPowerful Build: I count as one size larger for my carrying capacity, push, drag, and lift.",
carryingCapacity : 1
});
