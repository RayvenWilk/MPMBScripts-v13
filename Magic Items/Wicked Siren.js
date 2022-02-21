var iFileName = "Wicked Siren.js";

RequiredSheetVersion("13.1.0");

MagicItemsList["wicked siren"] = {
    name : "Wicked Siren",
    sortname : "Wicked Siren",
    source : ["HB", 0],
    type : "weapon (crossbow)",
	rarity : "rare",
    attunement : true,
    weight : "18",
    prerequisite : "",
    prereqeval : function(v) {
		return What('Dex') >= 17;;
	},
    description : "Magic Gun with a +2 to attack and damage rolls. Needs a Dexterity Score of 17 to weild. Make a DC 10 Arcana Check to resize the weapon when you put it or remove it from its holster. Uses magical bullets, requiring no reload time. On a crit any creature within a 60-foot line from the target also takes the same damage. Once per long rest, you can cast Bursting Arrow with this weapon.",
    descriptionFull : desc([
        "Magic Gun with a +2 to attack and damage rolls.\nA portal opened up and brought upon an apocalypse. Out of the portal came this weapon. Its origin is unknown.\nNeeds a Dexterity Score of 17 to weild.\n Make a DC 10 Arcana Check to resize the weapon when you put it or remove it from its holster.\nUses magical bullets, requiring no reload time.\nThrough and Through - When you make an attack roll, if you crit on your roll, any enemies in a 60-foot line starting from the target will also take the same damage.\n Once per long rest, you can cast Bursting Arrow with this weapon."
    ]),
    weaponsAdd : ["Wicked Siren"],
    weaponOptions : {
        baseWeapon : "heavy crossbow",
        regExpSearch : /^(?=.*wicked)(?=.*siren).*$/i,
        name : "Wicked Siren",
        source : ["HB", 0],
        damage: [1, 12, "piercing"],
        range: "Ranged, 100/400 ft",
        description : "finesse, heavy",
        modifiers : [2, 2],
        abilitytodamage : true,
        weight : 18,
    },
    usages : 1,
    recovery : "long rest",
    action : ["action", " (Bursting Arrow)"],
    // This will add the spell to your spell list if it is available on the sheet
    /*
    spellcastingBonus : [{
        name : "Bursting Arrow",
        spells : ["bursting arrow"],
        selection : ["bursting arrow"],
        firstCol : "oncelr"
    }]*/
}