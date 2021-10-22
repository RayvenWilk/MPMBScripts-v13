/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	RayvenWilk Homebrew Magic Items
	Effect:		Add the magic items I have created
	Coded by :	rayvenwilk
	Date :		10.20.2021
	Sheet:		v13.0.8 and newer
*/

var iFileName = "HomebrewMagicItems(created by rayvenwilk).js";

SourceList["HB:WHB"] = {
	name : "Wilk's Homebrews",
	abbreviation : "HB:WHB",
	group : "Homebrew",
};

MagicItemsList["bracers of deflection"] = {
    name : "Bracers of Deflection",
    source : ["HB:WHB"],
    type : "wondrous item",
    rarity : "uncommon",
    usages : 5,
    recovery : "short rest",
    action : ["reaction", ""],
    weight : 1,
    description : "When you have been targeted by a ranged weapon you can use 1 charge of the bracers to possibly deflect the attack, roll 1d4 +1 and add the total to your AC for this attack. Bracers have 5 charges, regaining all charges after a short rest.",
    descriptionFull : "While wearing these bracers, when you have been targeted by a ranged weapon you can use 1 charge of the bracers to possibly deflect the attack. As the projectile comes towards you, lift your arm and say the command word. A gust of force is blown away from you in the direction of the projectile, possibly causing the attack to miss. Roll 1d4 +1 and add the total to your AC for this attack. Bracers have 5 charges, regaining all charges after a short rest.",
};

MagicItemsList["bracer of hidden defense"] = {
    name : "Bracer of Hidden Defense",
    source : ["HB:WHB"],
    type : "shield",
    rarity : "uncommon",
    action : ["bonus action", "(show/hide)"],
    weight : 0.5,
    description : "This armband is a +1 buckler that appears and disappears  when the command word is spoken.",
    descriptionFull : "This armband is a +1 buckler that appears and disappears  when the command word is spoken.",
    shieldAdd : ["Bracer of Hidden Defense", 3, 0.5],
}
