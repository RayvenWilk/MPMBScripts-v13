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

//talk to DM about damage type
WeaponsList["lightsaber"] = {
	name : "Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*light)(?=.*saber).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, ""],
	range : "Melee",
	description : "Finesse, Versatile (2d6)",
	list : "melee",
	weight : 2,
	monkweapon : true,
}