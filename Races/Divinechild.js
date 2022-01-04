var iFileName = "demigods73021.js";
RequiredSheetVersion(13);
// This file adds the content from the GMBDB to MPMB's Character Record Sheet

// Define the source
SourceList["GMBDB"] = {
	name : "GMBinderDBarber96b",
	abbreviation : ["GMBDB"],
	group : "Dbarber96b",
	url : "https://www.gmbinder.com/share/-Mf4WqjU3tb8hObvek2u",
	date : "2021/07/29"
};
RaceList["arcana demigod"] = {
		regExpSearch : /^(?=.*arcana)(?=.*demigod|divine).*$/i,
		name : "Arcana Demigod",
		sortname : "Demigod, Arcana",
		source : ["GMBDB"],
		plural : "Arcana Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
        },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 0, 2, 0, 1],
		trait : "Arcana Demigod (+2 Intelligence, +1 Charisma)\n\nMagic Initiate:\n   I know one cantrip from the wizard spell list.\n   At 3rd level, I can choose a 2nd-level spell from the wizard spell list, and cast it once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Animate Objects once per long rest.\n   Intelligence is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility : 4,
		spellcastingBonus : {
			name : "Magic Initiate Cantrip",
			"class" : "wizard",
			level : [0, 0],
			firstCol : 'atwill'
		},
		features : {
			"initiate spell" : {
				name : "Magic Initiate (level 3)",
				"class" : "wizard",
				level : [1, 1],
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Magic Initiate (level 3)",
					"class" : "wizard",
					level : [1, 1],
					firstCol : "oncelr"
				}
			},
			"animate object" : {
				name : "Arcane Initiate (level 5)",
				limfeaname : "Animate Object",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Magic Initiate (level 5)",
					spells : ["animate object"],
					selection : ["animate object"],
					firstCol : "oncelr"
				}
			}
		}
	}
};
RaceList["death demigod"] = {
		regExpSearch : /^(?=.*death)(?=.*demigod|divine).*$/i,
		name : "Death Demigod",
		sortname : "Demigod, Death",
		source : ["GMBDB"],
		plural : "Death Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 2, 1, 0, 0],
		trait : "Death Demigod (+2 Constitution, +1 Intelligence)\n\nDeath Magic:\n   I know the Toll the Dead cantrip.\n   At 3rd level, I can cast the False Life spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Ray of Enfeeblement once per long rest.\n   Wisdom is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :4,
		spellcastingBonus : {
			name : "Death Magic (level 1)",
			spells : ["toll the dead"],
			selection : ["toll the dead"],
			firstCol : 'atwill'
		},
		features : {
			"false life" : {
				name : "Death Magic (level 3)",
				limfeaname : "False Life",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Death Magic (level 3)",
					spells : ["false life"],
					selection : ["false life"],
					firstCol : "oncelr"
				}
			},
			"ray of enfeeblement" : {
				name : "Death Magic (level 5)",
				limfeaname : "Ray of Enfeeblement",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Death Magic (level 5)",
					spells : ["ray of enfeeblement"],
					selection : ["ray of enfeeblement"],
					firstCol : "oncelr"
				}
			}
		}
	}
};
RaceList["forge demigod"] = {
		regExpSearch : /^(?=.*forge)(?=.*demigod|divine).*$/i,
		name : "Forge Demigod",
		sortname : "Demigod, Forge",
		source : ["GMBDB"],
		plural : "Forge Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 1, 2, 0, 0],
		trait : "Forge Demigod (+2 Intelligence, +1 Constitution)\n\nForge Magic:\n   I know the Mending cantrip.\n   At 3rd level, I can cast the Heat Metal spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Create or Destroy Water once per long rest.\n   Intelligence is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :4,
		spellcastingBonus : {
			name : "Forge Magic (level 1)",
			spells : ["mending"],
			selection : ["mending"],
			firstCol : 'atwill'
		},
		"heat metal" : {
				name : "Forge Magic (level 3)",
				limfeaname : "Heat Metal",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Forge Magic (level 3)",
					spells : ["heat metal"],
					selection : ["heat metal"],
					firstCol : "oncelr"
				}
			},
			"create or destroy water" : {
				name : "Forge Magic (level 5)",
				limfeaname : "Create or Destroy Water",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Forge Magic (level 5)",
					spells : ["create or destroy water"],
					selection : ["create or destroy water"],
					firstCol : "oncelr"
				}
			}
		}
	};
RaceList["grave demigod"] = {
		regExpSearch : /^(?=.*grave)(?=.*demigod|divine).*$/i,
		name : "Grave Demigod",
		sortname : "Demigod, Grave",
		source : ["GMBDB"],
		plural : "Grave Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [1, 0, 2, 0, 0, 0],
		trait : "Grave Demigod (+2 Constitution, +1 Strength)\n\nGrave Magic:\n   I know the Spare the Dying cantrip.\n   At 3rd level, I can cast the Protection From Evil and Good spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Gentle Repose once per long rest.\n   Intelligence is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :5,
		spellcastingBonus : {
			name : "Grave Magic (level 1)",
			spells : ["spare the dying"],
			selection : ["spare the dying"],
			firstCol : 'atwill'
		},
		features : {
			"protection from evil and good" : {
				name : "Grave Magic (level 3)",
				limfeaname : "Protection From Evil and Good",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Grave Magic (level 3)",
					spells : ["protection from evil and good"],
					selection : ["protection from evil and good"],
					firstCol : "oncelr"
				}
			},
			"gentle repose" : {
				name : "Grave Magic (level 5)",
				limfeaname : "Gentle Repose",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Grave Magic (level 5)",
					spells : ["gentle repose"],
					selection : ["gentle repose"],
					firstCol : "oncelr"
				}
			}
		}
	}
};    
RaceList["life demigod"] = {
		regExpSearch : /^(?=.*life)(?=.*demigod|divine).*$/i,
		name : "Life Demigod",
		sortname : "Demigod, Life",
		source : ["GMBDB"],
		plural : "Life Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 2, 0, 1, 0],
		trait : "Life Demigod (+2 Constitution, +1 Wisdom)\n\nLife Magic:\n   I know the Guidance cantrip.\n   At 3rd level, I can cast the Healing Word spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Prayer of Healing once per long rest.\n   Wisdom is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :5,
		spellcastingBonus : {
			name : "Life Magic (level 1)",
			spells : ["guidance"],
			selection : ["guidance"],
			firstCol : 'atwill'
		},
		features : {
			"healing word" : {
				name : "Life Magic (level 3)",
				limfeaname : "Healing Word",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Life Magic (level 3)",
					spells : ["healing word"],
					selection : ["healing word"],
					firstCol : "oncelr"
				}
			},
		"prayer of healing" : {
				name : "Life Magic (level 5)",
				limfeaname : "Prayer of Healing",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Life Magic (level 5)",
					spells : ["prayer of healing"],
					selection : ["prayer of healing"],
					firstCol : "oncelr"
				}
			}
		}
	}
};    
RaceList["light demigod"] = {
		regExpSearch : /^(?=.*light)(?=.*demigod|divine).*$/i,
		name : "Light Demigod",
		sortname : "Demigod, Light",
		source : ["GMBDB"],
		plural : "Light Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 1, 0, 0, 0, 2],
		trait : "Light Demigod (+2 Charisma, +1 Dexterity)\n\nLight Magic:\n   I know the Spare the Dying cantrip.\n   At 3rd level, I can cast the Protection From Evil and Good spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Gentle Repose once per long rest.\n   Intelligence is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :6,
		spellcastingBonus : {
			name : "Light Magic (level 1)",
			spells : ["sacred flame"],
			selection : ["sacred flame"],
			firstCol : 'atwill'
		},
		features : {
			"scorching ray" : {
				name : "Light Magic (level 3)",
				limfeaname : "Scorching Ray",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Light Magic (level 3)",
					spells : ["scorching ray"],
					selection : ["scorching ray"],
					firstCol : "oncelr"
				}
			},
			"spirit guardians" : {
				name : "Light Magic (level 5)",
				limfeaname : "Spirit Guardians",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Light Magic (level 5)",
					spells : ["create or destroy water"],
					selection : ["create or destroy water"],
					firstCol : "oncelr"
				}
			}
		}
	}
};    
RaceList["knowledge demigod"] = {
		regExpSearch : /^(?=.*knowledge|lore)(?=.*demigod|divine).*$/i,
		name : "Knowledge Demigod",
		sortname : "Demigod, Knowledge",
		source : ["GMBDB"],
		plural : "Knowledge Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 0, 2, 1, 0],
		trait : "Knowledge Demigod (+2 Intelligence, +1 Wisdom)\n\nLore Magic:\n   I know the Message cantrip.\n   At 3rd level, I can cast the Identify spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Legend Lore once per long rest.\n   Intelligence is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :4,
		spellcastingBonus : {
		name : "Lore Magic (level 1)",
			spells : ["message"],
			selection : ["message"],
			firstCol : 'atwill'
	},
	features : {
		"Identify" : {
				name : "Lore Magic (level 3)",
				limfeaname : "Identify",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Lore Magic (level 3)",
					spells : ["identify"],
					selection : ["identify"],
					firstCol : "oncelr"
			}
		},
		"Legend Lore" : {
				name : "Lore Magic (level 5)",
				limfeaname : "Legend Lore",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Lore Magic (level 5)",
					spells : ["legend lore"],
					selection : ["legend lore"],
					firstCol : "oncelr"
			   }
			}
		}
	}
};    
RaceList["nature demigod"] = {
		regExpSearch : /^(?=.*nature)(?=.*demigod|divine).*$/i,
		name : "Nature Demigod",
		sortname : "Demigod, Nature",
		source : ["GMBDB"],
		plural : "Nature Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 0, 1, 2, 0],
		trait : "Nature Demigod (+2 Widom, +1 Intelligence)\n\nNature Magic:\n   I know the Druidcraft cantrip.\n   At 3rd level, I can cast the Speak with Animals spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Spike Growth once per long rest.\n   Wisdom is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :5,
		spellcastingBonus : {
		name : "Nature Magic (level 1)",
			spells : ["druidcraft"],
			selection : ["druidcraft"],
			firstCol : 'atwill'
	},
	features : {
		"speak with animals" : {
				name : "Nature Magic (level 3)",
				limfeaname : "Speak with Animals",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Nature Magic (level 3)",
					spells : ["speak with animals"],
					selection : ["speak with animals"],
					firstCol : "oncelr"
		},
		"spike growth" : {
				name : "Nature Magic (level 5)",
				limfeaname : "Spike Growth",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Nature Magic (level 5)",
					spells : ["spike growth"],
					selection : ["spike growth"],
					firstCol : "oncelr"
                    }
                }
			}
		}
	}
};    
RaceList["tempest demigod"] = {
		regExpSearch : /^(?=.*tempest|storm)(?=.*demigod|divine).*$/i,
		name : "Tempest Demigod",
		sortname : "Demigod, Tempest",
		source : ["GMBDB"],
		plural : "Tempest Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [1, 2, 0, 0, 0, 0],
		trait : "Tempest Demigod (+2 Dexterity, +1 Strength)\n\nTempest Magic:\n   I know the Shocking Grasp cantrip.\n   At 3rd level, I can cast the Thunderwave spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Shatter once per long rest.\n   Wisdom is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :5,
		spellcastingBonus : {
		name : "Tempest Magic (level 1)",
			spells : ["shocking grasp"],
			selection : ["shocking grasp"],
			firstCol : 'atwill'
	},
	features : {
		"thunderwave" : {
				name : "Tempest Magic (level 3)",
				limfeaname : "Thunderwave",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Tempest Magic (level 3)",
					spells : ["thunderwave"],
					selection : ["thunderwave"],
					firstCol : "oncelr"
				}
		},
		"shatter" : {
				name : "Tempest Magic (level 5)",
				limfeaname : "Shatter",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Tempest Magic (level 5)",
					spells : ["shatter"],
					selection : ["shatter"],
					firstCol : "oncelr"
                }
			}
		}
	}
};
RaceList["twilight demigod"] = {
		regExpSearch : /^(?=.*twilight)(?=.*demigod|divine).*$/i,
		name : "Twilight Demigod",
		sortname : "Demigod, Twilight",
		source : ["GMBDB"],
		plural : "Twilight Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 1, 0, 0,2],
		trait : "Twilight Demigod (+2 Charisma, +1 Constitution)\n\nTwilight Magic:\n   I know the Resistance cantrip.\n   At 3rd level, I can cast the Moon Beam spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Aura of Vitality once per long rest.\n   Charisma is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :6,
		spellcastingBonus : {
		name : "Twilight Magic (level 1)",
			spells : ["resistance"],
			selection : ["resistance"],
			firstCol : 'atwill'
	},
	"moon beam" : {
				name : "Twilight Magic (level 3)",
				limfeaname : "Moon Beam",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Twilight Magic (level 3)",
					spells : ["moon beam"],
					selection : ["moon beam"],
					firstCol : "oncelr"
				}
		},
		"aura of vitality" : {
				name : "Twilight Magic (level 5)",
				limfeaname : "Aura of Vitality",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Twilight Magic (level 5)",
					spells : ["aura of vitality"],
					selection : ["aura of vitality"],
					firstCol : "oncelr"
			}
		}
	}
};
RaceList["trickery demigod"] = {
		regExpSearch : /^(?=.*trickery)(?=.*demigod|divine).*$/i,
		name : "Trickery Demigod",
		sortname : "Demigod, Trickery",
		source : ["GMBDB"],
		plural : "Trickery Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 0, 1, 0,2],
		trait : "Trickery Demigod (+2 Charisma, +1 Intelligence)\n\nTrickster's Magic:\n   I know the Vicious Mockery cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Mirror Image once per long rest.\n   Charisma is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :6,
		spellcastingBonus : {
		name : "Trickster's Magic (level 1)",
			spells : ["vicious mockery"],
			selection : ["vicious mockery"],
			firstCol : 'atwill'
	},
	"disguise self" : {
				name : "Trickster's Magic (level 3)",
				limfeaname : "Disguise Self",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Trickster's Magic (level 3)",
					spells : ["disguise self"],
					selection : ["disguise self"],
					firstCol : "oncelr"
				}
		},
		"mirror image" : {
				name : "Trickster's Magic (level 5)",
				limfeaname : "Mirror Image",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Trickster's Magic (level 5)",
					spells : ["mirror image"],
					selection : ["mirror image"],
					firstCol : "oncelr"
			}
		}
	}
};
RaceList["war demigod"] = {
		regExpSearch : /^(?=.*war)(?=.*demigod|divine).*$/i,
		name : "War Demigod",
		sortname : "Demigod, War",
		source : ["GMBDB"],
		plural : "War Demigods",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Celestial"],
		savetxt : {
			text : ["Magic can't put me to sleep", "I cannont be aged magically"],
			adv_vs : ["charmed", "frightened", "Int/Wis/Cha saves vs. magic"]
            },
		age : " reach adulthood by 18 and live for as long as their godly parent sustains them",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [2, 0, 1, 0, 0, 0],
		trait : "War Demigod (+2 Strength, +1 Constitution)\n\nWar Magic:\n   I know the Sword Burst cantrip.\n   At 3rd level, I can cast the Compelled Duel spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Magic Weapon once per long rest.\n   Wisdom is my spellcasting ability for these spells.\n   Fated: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. I cannot use this ability again until I complete a long rest.\n   Divine Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. \nPartial Magic Resistance: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		calcChanges : {
			hp : function (totalHD) { return [totalHD, "Divine Toughness"]; },
		spellcastingAbility :5,
		spellcastingBonus : {
		name : "War Magic (level 1)",
			spells : ["sword burst"],
			selection : ["sword burst"],
			firstCol : 'atwill'
	},
	"compelled duel" : {
				name : "War Magic (level 3)",
				limfeaname : "Compelled Duel",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "War Magic (level 3)",
					spells : ["compelled duel"],
					selection : ["compelled duel"],
					firstCol : "oncelr"
				}
		},
		"magic weapon" : {
				name : "War Magic (level 5)",
				limfeaname : "Magic Waepon",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "War Magic (level 5)",
					spells : ["magic weapon"],
					selection : ["magic weapon"],
					firstCol : "oncelr"
			}
		}
	}
};
