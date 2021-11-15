/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds 8 subraces to the fairy race.
				This is taken from the dandwiki website (https://www.dandwiki.com/wiki/Fairy,_Variant_(5e_Race)_)
	Code by:	rayvenwilk
	Date:		2021-11-15 (sheet v13.0.8)
*/

// weapon calculations are not done - need help with those (arcana and death fairy)

var iFileName = "Variant Fairy Race (transcribed by rayvenwilk).js";

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
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
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
	trait : "Mind Fairy (+1 Dexterity, +1 Charisma, +1 Intellegence)\n Cerebral: I have adv on saves against being stunned & resistance to psychic dmg, but vulnerable to poison dmg.\nInner Focus: I know the Mage Hand & Dancing Lights cantrips.\nTelekinesis Hovering: I remain flying if I am restrained or knocked prone, though I still fall if I am incapacitated.\nStrong-Minded: I am capable of communicating telepathically with other creatures out to a range of 60 feet. I may only form a telepathic link with one creature at a time; if I attempt to telepathically communicate with a creature while already communicating with a different creature, the old link is severed in place of the new one. To be able to communicate telepathically with a creature, it must understand at least one language, and must have an Intelligence score of 4 or higher. If the creature I am  communicating with telepathically ever moves more than 60 feet away from me, the telepathic link is forcefully severed.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Inner Focus",
		times : 2,
		spells : ["mage hand", "dancing lights"],
		selection : ["mage hand", "dancing lights"],
		atwill : true,
	},        
},
RaceList["fire fairy"] = {
	regExpSearch : /^(?=.*\b(fire)\b)(?=.*\b(fairy)\b).*$/i,
	name : "Fire Fairy",
	sortname : "Fairy, Fire",
	source : ["HB"],
	plural : "Fire Fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan", "Ignan"],
	dmgres : ["Fire"],
	savetxt : {
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed"],
	},
	skills : ["Nature"],
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Fire Fairy: +1 Dexterity, +1 Charisma, +1 Constitution;",
	scores : [0, 1, 1, 0, 0, 1],
	trait : "Fire Fairy (+1 Dexterity, +1 Constitution, +1 Charisma) \n Fiery: Crea have disadv to grapple me, I am resistant to fire dmg, but vulnerable to cold dmg. \nBurning Passion: I know the Control Flames & Dancing Lights cantrips. \nHot-Headed: Once per short rest, when I hit with a melee atk, as a bonus action I can add 1d4 fire dmg.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Burning Passion",
		times : 2,
		spells : ["control flames", "dancing lights"],
		selection : ["control flames", "dancing lights"],
		atwill : true,
	},
	features : {
		"hot-headed" : {
			name : "Hot-Headed",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (+1d4 Fire dmg)"]
		}
	}
},
RaceList["flower fairy"] = {
	regExpSearch : /^(?=.*\b(flower)\b)(?=.*\b(fairy)\b).*$/i,
	name : "Flower Fairy",
	sortname : "Fairy, Flower",
	source : ["HB"],
	plural : "Flower Fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan", "Terran"],
	dmgres : ["Poison"],
	savetxt : {
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed", "poison"],
	},
	skills : ["Nature"],
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Flower Fairy: +1 Dexterity, +1 Charisma, +1 Wisdom;",
	scores : [0, 1, 0, 0, 1, 1],
	trait : "Fire Fairy (+1 Dexterity, +1 Wisdom, +1 Charisma) \n Natural: I have adv on saving throws against being poisoned and resistance to Poison dmg, but vulnerable to Acid dmg. \nBountiful Spirit: I know the Druidcraft & Dancing Lights cantrips. \nGood-Natured: As an action, I can cause myself or a creature I touch to gain 1d8 + my Wisdom mod HP. I can use this trait a number of times equal to half my prof bonus (round up) per long rest.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Bountiful Spirit",
		times : 2,
		spells : ["druidcraft", "dancing lights"],
		selection : ["druidcraft", "dancing lights"],
		atwill : true,
	},
	features : {
		"good-natured" : {
			name : "Good-Natured",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = Number(How('Proficiency Bonus'))/2;",
			recovery : "long rest",
			action : ["bonus action", " (+1d8 + Wis HP)"]
		}
	}
},
RaceList["ice fairy"] = {
	regExpSearch : /^(?=.*\b(ice)\b)(?=.*\b(fairy)\b).*$/i,
	name : "Ice Fairy",
	sortname : "Fairy, Ice",
	source : ["HB"],
	plural : "Ice Fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan", "Terran"],
	dmgres : ["cold"],
	savetxt : {
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed", "petrified"],
	},
	skills : ["Nature"],
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Ice Fairy: +1 Dexterity, +1 Charisma, +1 Constitution;",
	scores : [0, 1, 1, 0, 0, 1],
	trait : "Ice Fairy (+1 Dexterity, +1 Constitution, +1 Charisma) \nIcy: I have adv on saving throws against being petrified resistance to Cold dmg, but vulnerable to fire dmg. \nPerfect Freeze: I know the Frostbite & Dancing Lights cantrips. \nCold-Hearted: I am used to frigid temps, I ignore the effects of difficult terrain caused by ice and snow.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Perfect Freeze",
		times : 2,
		spells : ["frostbite", "dancing lights"],
		selection : ["frostbite", "dancing lights"],
		atwill : true,
	}
},
RaceList["light fairy"] = {
	regExpSearch : /^(?=.*\b(light)\b)(?=.*\b(fairy)\b).*$/i,
	name : "Light Fairy",
	sortname : "Fairy, Light",
	source : ["HB"],
	plural : "Light Fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan", "Auran"],
	dmgres : ["Radiant"],
	savetxt : {
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed", "blinded"],
	},
	skills : ["Nature"],
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Light Fairy: +1 Dexterity, +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Light Fairy (+1 Dexterity, +2 Charisma) \nBrilliant: I have adv on saving throws against being blinded and resistance to Radiant dmg, but vulnerable to Necrotic dmg. \nShining Radiance: I know the Light & Dancing Lights cantrips. \nBright-Eyed: I can see in dim light within 60 as if it were bright light, and darkness as if it were dim light, only in shades of gray.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shining Radiance",
		times : 2,
		spells : ["light", "dancing lights"],
		selection : ["light", "dancing lights"],
		atwill : true,
	}
},
RaceList["arcane fairy"] = {
	regExpSearch : /^(?=.*\b(arcane)\b)(?=.*\b(fairy)\b).*$/i,
	name : "Arcane Fairy",
	sortname : "Fairy, Arcane",
	source : ["HB"],
	plural : "Arcane Fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan"],
	savetxt : {
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed"],
	},
	skills : ["Nature"],
	weaponsAdd : ["Projectile Launch"],
	weaponOptions : {
		regExpSearch : /^(?=.*projectile)(?=.*launch).*$/i,
		name : "Projectile Launch",
		source : ["HB"],
        list : "spell",
		ablility : 6,
		type : "AlwaysProf",
		damage : [1, 4, "force"],
		range : "60 ft",
		description : "At 6th level, add Cha mod to dmg",
		abilitytodamage : false,
        useSpellcastingAbility : true,
	},
// 6th level add cha mod to Projectile Launch atk - calc	
/*	calcChanges : {
		atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Cha mod added to damage';
						}
					},
					"I add my Charisma modifier to my melee weapon damage."
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon) {
							output.extraDmg += Number(What("Cha Mod"));
						};
					}
				]
	}*/
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Arcane Fairy: +1 Dexterity, +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Arcane Fairy (+1 Dexterity, +2 Charisma) \nMagical: Once per short rest I can choose to make a saving throw with adv. \nArcane Talent: I know the Prestidigitation & Dancing Lights cantrips. \nMagically-Inclined: I can launch projectiles made from condensed magic.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Arcane Talent",
		times : 2,
		spells : ["prestidigitation", "dancing lights"],
		selection : ["prestidigitation", "dancing lights"],
		atwill : true,
	}
},
RaceList["death fairy"] = {
	regExpSearch : /^(?=.*\b(death)\b)(?=.*\b(fairy)\b).*$/i,
	name : "Death Fairy",
	sortname : "Fairy, Death",
	source : ["HB"],
	plural : "Death Fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan", "Terran"],
	dmgres : ["necrotic"],
	savetxt : {
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed", "frightened"],
	},
	skills : ["Nature"],
	weaponsAdd : ["Sensation of Death"],
	weaponOptions : {
		regExpSearch : /^(?=.*sensation)(?=.*death).*$/i,
		name : "Sensation of Death",
		source : ["HB"],
        list : "spell",
		ablility : 4,
		type : "AlwaysProf",
		damage : [1, 6, "necrotic"],
		range : "Melee",
		description : "At 6th level, add Int mod to dmg",
		abilitytodamage : false,
        useSpellcastingAbility : true,
	},
// 6th level add cha mod to Sensation of Death atk - calc	
/*	calcChanges : {
		atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Int mod added to damage';
						}
					},
					"I add my Intelligence modifier to my melee weapon damage."
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon) {
							output.extraDmg += Number(What("Int Mod"));
						};
					}
				]
	}*/
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Death Fairy: +1 Dexterity, +1 Charisma, +1 Intelligence;",
	scores : [0, 1, 0, 1, 0, 1],
	trait : "Death Fairy (+1 Dexterity, +1 Intelligence, +1 Charisma) \nDeathly: I have adv on saving throws against being frightened & resistance to Necrotic dmg, but vulnerable to Radiant dmg. \nDeath's Mercy: I know the Spare the Dying & Dancing Lights cantrips. \nBone-Chilling: I can try to impose the sansation of death upon another creature.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Death's Mercy",
		times : 2,
		spells : ["spare the dying", "dancing lights"],
		selection : ["spare the dying", "dancing lights"],
		atwill : true,
	}
},
RaceList["storm fairy"] = {
	regExpSearch : /^(?=.*\b(storm)\b)(?=.*\b(fairy)\b).*$/i,
	name : "Storm Fairy",
	sortname : "Fairy, Storm",
	source : ["HB"],
	plural : "Storm Fairies",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 20 },
		fly : { spd : 30, enc : 25 },
	},
	languageProfs : ["Common", "Sylvan"],
	dmgres : ["Lightning"],
	savetxt : {
		text : ["Adv. on being charmed", "Magic can't put me to sleep"],
		adv_vs : ["charmed", "paralyzed"],
	},
	skills : ["Nature"],
	age : "spawn at maturity, exist for as long as their source of nature remains",
	height : " are between 2  and 4 feet tall (2'\" + 2d10\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Storm Fairy: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Storm Fairy (+1 Dexterity, +2 Charisma) \Stormy: I have adv on saving throws against being paralyzed and resistance to Lightning dmg, but vulnerable to Force dmg. \nShocking Zeal: I know the Shocking Grasp & Dancing Lights cantrips. \nElectric Core: I can cast Absorb Elements once per short rest when targeted with Lightning dmg.",
	limfeaname : "Electric Core (absorb elements)",
	usages : 1,
	recovery : "long rest",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Shocking Zeal",
		times : 2,
		spells : ["shocking grasp", "dancing lights"],
		selection : ["shocking grasp", "dancing lights"],
		atwill : true
	},{
		name : "Electric Core",
		spells : ["absorb elements"],
		selection : ["absorb elements"],
		firstCol : "oncelr"

	}],
}
