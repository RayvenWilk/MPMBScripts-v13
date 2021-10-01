/*	-INFORMATION-
	Subject:	Lightsabers
	Effect:		Add the Lightsabers
	Remarks:	This is to add the weapons Lightsaber, Shoto Lightsaber, Double-bladed Lightsaber and Lightsaber Pike.
				This is also to add the Kyber Crystal Colors as magic items.
				Lightsabers (https://www.dandwiki.com/wiki/Lightsabers_(5e_Equipment)?fbclid=IwAR0m_TbS9ptOy6BxprNwDW3vxfaeXOpFYi_ckogdABUaOEseJKSlksuVI3g)
	Coded by:	rayvenwilk
	Date:		09.22.2021
	Sheet:		v13.0.5 and newer
*/

var iFileName = "Lightsabers(transcribed by rayvenwilk).js";

RequiredSheetVersion("13.0.6");

WeaponsList["lightsaber"] = {
	name : "Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*lightsaber).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, ""],
	range : "Melee",
	description : "Finesse, Versatile (2d6) - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 2,
	monkweapon : true,
},
WeaponsList["shoto lightsaber"] = {
	name : "Shoto Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*shoto)(?=.*lightsaber).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 8, ""],
	range : "Melee",
	description : "Finesse, Light, Versatile (1d10) - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 1.5,
	monkweapon : true,
},
WeaponsList["double-bladed lightsaber"] = {
	name : "Double-bladed Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*double)(?=.*lightsaber).*$/i,
	type : "Martial",
	ablility : 2,
	abilitytodamage : true,
	damage : [1, 8, ""],
	range : "Melee",
	description : "Finesse, Two-Handed - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 4,
	monkweapon : true,
},
WeaponsList["lightsaber pike"] = {
	name : "Lightsaber Pike",
	source : ["HB"],
	regExpSearch : /^(?=.*lightsaber)(?=.*pike).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, ""],
	range : "Melee",
	description : "Finesse, Two-Handed, Reach - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 6,
	monkweapon : true,
},


MagicItemsList["kyber crystal weapon"] = {
	name : "Kyber Crystal",
	source : ["HB"],
	type : "weapon (lightsaber)",
	magicItemTable : "L",
	prerequisite : "Requires attunement by a dwarf",
	description : "A light saber may only have 1 crystal. Each kind of crystal has a different cost and effect. Force point cost reductions assume the user has levels in the Jedi/Sith class.",
	descriptionFull : "A light saber may only have 1 crystal. Each kind of crystal has a different cost and effect. Force point cost reductions assume the user has levels in the Jedi/Sith class.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /lightsaber/i;
                  return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		},
	},
    choices : ["Green", "Light Blue", "Dark Blue", "Yellow", "Orange", "Bronze", "Red", "Purple", "White", "Black"],
    "green" : {
        name : "Green  Lightsaber",
        rarity : "common",
        description : "All light side force powers you use have their force cost reduced by -2 points.",
        descriptionFull : "Green lightsabers are used primarily by those who seek to understand the mysteries of the force, and fight the dark side at its heart. All light side force powers you use have their force cost reduced by -2 points. This crystal is Common.",
        weaponOptions : {
            baseWeapon : "lightsaber",
            regExpSearch : /^(?=.*green)(?=.*lightsaber).*$/i,
            name : "Green",
			prefixOrSuffix : "suffix",
            source : ["HB"],
            description : "-2 light force cost.",
        },
    },
    "light blue" : {
        name : "Light Blue Lightsaber",
        rarity : "common",
        description : "You gain a +2 bonus to attack rolls.",
        descriptionFull : "Blue lightsabers are used by jedi who focus on the physical application of the force, most often through righteous combat. You gain a +2 bonus to attack rolls. This crystal is Common.",
        weaponOptions : {
            baseWeapon : "lightsaber",
            regExpSearch : /^(?=.*light)(?=.*blue)(?=.*lightsaber).*$/i,
            name : "Light Blue",
			prefixOrSuffix : "suffix",
            source : ["HB"],
            description : " +2 to hit",
            modifiers : [2, 0]
        },
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*light blue).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2 to hit';
					}
				},
				'If I include the words "Light Blue" in the name of a lightsaber, it will be treated as the magic weapon Light Blue Lightsaber. It has +2 to hit.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/light blue/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1];
					}
				}, ''
			]
		}
    },
    "dark blue" : {
        name : "Dark Blue Lightsaber",
        rarity : "common",
        description : "You gain a +2 bonus to all damage rolls.",
        descriptionFull : "A variant of the traditional blue lightsaber, dark blue lightsaber users focus on outright damage output, rather than the acrobatics of typical lightsaber combat. You gain a +2 bonus to all damage rolls. This crystal is Common.",
        weaponOptions : {
            baseWeapon : "lightsaber",
            regExpSearch : /^(?=.*dark)(?=.*blue)(?=.*lightsaber).*$/i,
            name : "Dark Blue",
			prefixOrSuffix : "suffix",
            source : ["HB"],
            description : "+2 to damage",
            modifiers : [0, 2]
        },
    },
	"yellow" : {
		name : "Yellow Lightsaber",
		rarity : "uncommon",
		description : "You gain a +1 bonus to attack rolls, and all light side force powers you use have their force cost reduced by -1 points.",
		descriptionFull : "Yellow crystals are primarily used by jedi balanced between the physical and mental applications of the force. You gain a +1 bonus to attack rolls, and all light side force powers you use have their force cost reduced by -1 points. This crystal is Uncommon.",
		weaponOptions : {
			baseWeapon : "lightsaber",
			regExpSearch : /^(?=.*yellow)(?=.*lightsaber).*$/i,
			name : "Yellow",
			prefixOrSuffix : "suffix",
			source : ["HB"],
			description : "+1 to hit, -1 light force cost",
			modifiers : [1, 0]
		},
	},
	"orange" : {
		name : "Orange Lightsaber",
		rarity : "uncommon",
		description : "You gain a +1 bonus to damage rolls, and all light side force powers you use have their force cost reduced by -1 points.",
		descriptionFull : "Orange crystals are also used by jedi balanced between the physical and mental applications of the force, but with a more straight forward combat style. You gain a +1 bonus to damage rolls, and all light side force powers you use have their force cost reduced by -1 points. This crystal is Uncommon.",
		weaponOptions : {
			baseWeapon : "lightsaber",
			regExpSearch : /^(?=.*orange)(?=.*lightsaber).*$/i,
			name : "Orange",
			prefixOrSuffix : "suffix",
			source : ["HB"],
			description : "+1 to damage, -1 light force cost",
			modifiers : [0, 1]	
		},
	},
	"bronze" : {
		name : "Bronze Lightsaber",
		rarity : "uncommon",
		description : "You gain a +1 bonus to attack and damage rolls.",
		descriptionFull : "Bronze crystals are used by jedi of great might and valor. You gain a +1 bonus to attack and damage rolls. This crystal is Uncommon.",
		weaponOptions : {
			baseWeapon : "lightsaber",
			regExpSearch : /^(?=.*bronze)(?=.*lightsaber).*$/i,
			name : "Bronze",
			prefixOrSuffix : "suffix",
			source : ["HB"],
			description : "+1 to hit & damage",
			modifiers : [1, 1]
		},
	},
	"red" : {
		name : "Red Lightsaber",
		rarity : "rare",
		description : "All dark side force powers you use have their force cost reduced by -2 points. This crystal can only be created by meditating with another crystal for 1 hour.",
		descriptionFull : "A red kyber crystal has been bled by a sith, cementing them in the dark side. All dark side force powers you use have their force cost reduced by -2 points. This crystal can only be created by meditating with another crystal for 1 hour. This crystal is Uncommon.",
		weaponOptions : {
			baseWeapon : "lightsaber",
			regExpSearch : /^(?=.*red)(?=.*lightsaber).*$/i,
			name : "Red",
			prefixOrSuffix : "suffix",
			source : ["HB"],
			description : "+1 to hit & damage",
			modifiers : [1, 1]
		},
	},
	"purple" : {
		name : "Purple Lightsaber",
		rarity : "rare",
		description : "Often signifying that a jedi has previously, or potentially actively with moderation, dealt with the dark side. You gain a -2 cost in force points to all force powers.",
		descriptionFull : "A purple lightsaber crystal is a complete oddity, often signifying that a jedi has previously, or potentially actively with moderation, dealt with the dark side. You gain a -2 cost in force points to all force powers. This crystal is Rare.",
		weaponOptions : {
			baseWeapon : "lightsaber",
			regExpSearch : /^(?=.*purple)(?=.*lightsaber).*$/i,
			name : "Purple",
			prefixOrSuffix : "suffix",
			source : ["HB"],
			description : "-2 all force cost",
		},
	},
	"white" : {
		name : "White Lightsaber",
		rarity : "rare",
		description : "You gain a +2 bonus to attack and damage rolls.",
		descriptionFull : "Are just as much, if not more of an oddity, as purple crystals. You gain a +2 bonus to attack and damage rolls. This crystal is Rare.",
		weaponOptions : {
			baseWeapon : "lightsaber",
			regExpSearch : /^(?=.*white)(?=.*lightsaber).*$/i,
			name : "White",
			prefixOrSuffix : "suffix",
			source : ["HB"],
			description : "+2 to attack & damage",
			modifiers : [2, 2]
		},
	},
	"black" : {
		name : "Black Lightsaber",
		rarity : "legendary",
		description : "Lost to the depths of the jedi archives, legend states that there is only one of these blades in existence. While wielding a lightsaber with a black kyber crystal, you gain a +2 to AC.",
		descriptionFull : "Constructed by the first Mandalorian to be inducted into the Jedi Order, this 'Darksaber' embodies the user's pride, but not necessarily their darkness. Lost to the depths of the jedi archives, legend states that there is only one of these blades in existence. While wielding a lightsaber with a black kyber crystal, you gain a +2 to AC. This crystal is Legendary.",
		weaponOptions : {
			baseWeapon : "lightsaber",
			regExpSearch : /^(?=.*black)(?=.*lightsaber).*$/i,
			name : "Black",
			prefixOrSuffix : "suffix",
			source : ["HB"],
			description : "+2 to AC",
			extraAC : [{
				mod : 2,
				name : "Black Kyber Crystal",
			}],
		},
	},
}
