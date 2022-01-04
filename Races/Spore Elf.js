var iFileName = "Spore Elf [from ms_cyanide, transcribed by IKnights86].js";
RequiredSheetVersion(12.999);

RaceList["spore elf"] = {
		regExpSearch : /^(?=.*spore)(?=.*elf).*$/i,
		name : "Spore elf",
		sortname : "Elf, Spore",
		source : ["HB", 0],
		plural : "Spore elves",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Elvish"],
		vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
    dmgres : ["Poison"],
    skillstxt : "Choose one skill from either Nature or Survival",
		age : " typically claim adulthood around age 100 and can live to be 750 years old",
		height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
		weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
		heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
		weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
		scores : [0, 2, 1, 0, 1, 0],
		trait : "Spore Elf (+2 Dexterity, +1 Constitution, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nSpore Magic: 1st level: Decompose cantrip; 3rd level: Plant Growth (3x/SR); 5th level: Commune with Nature (1x/LR).\nWisdom is my spellcasting ability for these.",
		spellcastingAbility : 5,
		spellcastingBonus : {
			name : "Spore Elf (level 1)",
			spells : ["decompose"],
			selection : ["decompose"],
			firstCol : 'atwill'
		},
    features : {
			"plant growth" : {
				name : "Spore Elf (level 3)",
        limfeaname : "Plant Growth",
				minlevel : 3,
				usages : 3,
				recovery : "short rest",
				spellcastingBonus : {
					name : "Spore Elf (level 3)",
					spells : ["plant growth"],
					selection : ["plant growth"],
					firstCol : "3x/SR"
				}
			},
			"darkness" : {
				name : "Spore Elf (level 5)",
				limfeaname : "Commune",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Spore Elf (level 5)",
					spells : ["commune"],
					selection : ["commune"],
					firstCol : "oncelr"
				}
			}
		}
}
SpellsList["decompose"] = {
  		name : "Decompose",
   		regExpSearch : /^(?=.*decompose).*$/i,
		  source : ["HB", 0],
  		classes : ["cleric"],
    	level : 0,
    	school : "Necro",
    	time : "1 a",
    	range : "touch",
    	components : "V,S",
		  duration : "1 minute",
    	description : "You touch a corpse of a creature which rapidly decomposes. Does not effect ressurection requirements.",
    	descriptionFull : "You reach out and touch the corpse of a creature. Over the next minute, the corpse begins to rapidly decompose, sprouting fungus and moss as it begins to degrade into compost and mulch. An odd-colored flower or two may also spring from the corpse in this time. Applicable requirements for resurrection are unaffected by this decomposition."
};
