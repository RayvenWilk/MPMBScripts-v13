/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Magic Item - Alchemist's Bane - Dagger
	Effect:		Add Alchemist's Bane
	Remarks:	This is to add the magic weapon Alchemist's Bane to the magic weapon and attack lists.
	Coded by :	rayvenwilk
	Date :		09.22.2021
	Sheet:		v13.0.5 and newer
*/

var iFileName = "AlchemistsBane(transcribed by rayvenwilk).js";

MagicItemsList["alchemist's bane"] = {
    name : "Alchemist's Bane",
    source : ["HB"],
    type : "weapon",
    rarity : "uncommon",
    attunement : true,
    description : "When its command word is spoken, the liquid starts to run along the blade, causing it to do an extra d6 of damage determined by rolling a d10. - 1. Acid 2. Cold 3. Fire 4. Force 5. Lightning 6. Necrotic 7. Poison 8. Psychic 9. Radiant 10. Thunder",
    descriptionFull : "This weapon has magical liquid running through the pommel and handle. When its command word is spoken, the liquid starts to run along the blade, causing it to do an extra d6 of damage determined by rolling a d10.\n   1. Acid \n   2. Cold \n   3. Fire \n   4. Force \n   5. Lightning \n   6. Necrotic \n   7. Poison \n   8. Psychic \n   9. Radiant \n   10. Thunder",
    weaponsAdd : ["Alchemist's Bane"],
    weaponOptions : {
        baseWeapon : "dagger",
        regExpSearch : /^(?=.*alchemist's)(?=.*bane).*$/i,
        name : "Alchemist's Bane",
        source : ["HB"],
        description : "extra 1d6 dmg, roll 1d10 for dmg type",

    }
}