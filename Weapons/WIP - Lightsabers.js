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

RequiredSheetVersion("13.0.5");

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

//not sure how to set it up to only select lightsabers
MagicItemsList["kyber crystal (common)"] = {
	name : "Kyber Crystal (common)",
	source : ["HB"],
	type : "weapon",
	rarity : "common",
	description : "I gain a +2 to attack rolls.",
	descriptionFull : "Blue lightsabers are used by jedi who focus on the physical application of the force, most often through righteous combat. You gain a +2 bonus to attack rolls. /nThis crystal is Common.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
	},
}
