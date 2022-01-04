/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    
	Effect:     
	Content:	
	Code by:	rayvenwilk
	Date:		2021-11-18 (sheet 13.0.8)
*/

var iFileName = "Red Mage.js";

SourceList["Lich King"]={
	name : "Lich King",
	abbreviation :"LK",
	group : "Lich King",
};

//first make the sheet know which spells are Red Mage spells
[	// level 0 (cantrips)
	"acid splash", "blade ward", "booming blade", "chill touch", "control flames", "create bonfire", "eldritch blast", "fire bolt", "frostbite", "green flame blade", "guidance", "jolt", "light", "mending", "mold earth", "poison spray", "ray of frost", "resistance", "sacred flame", "shocking grasp", "thunder clap", "toll the dead", "word of radiance",

	// 1st level
	"absorb elements", "bane", "bless", "burning hands", "charm person", "chromatic orb","detect evil and good", "detect magic", "detect poison and disease", "disguise self", "divine favor", "expeditious retreat", "false life", "feather fall", "find familiar", "guiding bolt",  "healing word", "inflict wounds",  "magic missile", "sanctuary", "silent image", "shield of faith", "thunderwave",

	// 2nd level
	"alter self", "arcane lock", "blur", "branding smite", "calm emotions", "cloud of daggers", "continual flame", "darkvision", "dragon's breath", "enhance ability", "find steed", "flaming sphere", "hold person", "lesser restoration", "magic weapon", "maximilian's earthen grasp", "misty step", "prayer of healing", "rope trick", "scorching ray", "shadow blade", "shatter", "silence", "warding bond", "web", "zone of truth",

	// 3rd level
	"beacon of hope", "blinding smite", "blink", "counterspell", "create food and water", "daylight", "dispel magic", "erupting earth", "fireball", "fly", "glyph of warding", "haste", "hypnotic pattern", "leomund's tiny hut", "lightning bolt", "magic circle", "mass healing word", "nondetection", "phantom steed", "protection from energy", "remove curse", "revivify","sleet storm", "summon undead", "tidal wave", "thunder step", "tiny servant", "tongues", "water breathing", "water walk",

	// 4th level
	"arcane eye", "aura of purity", "banishment", "blight", "charm monster", "control water", "death ward", "dimension door", "elemental bane", "find greater steed", "freedom of movement", "greater invisibility", "guardian of faith", "ice storm", "mordenkainen's private sanctum", "otiluke's resilient sphere",  "staggering smite", "storm sphere", "stone skin",

	// 5th level
	"banishing smite", "bigby's hand", "circle of power", "cone of cold", "contact other plane", "dawn", "destructive wave", "dominate person", "far step", "flame strike", "greater restoration", "hold monster", "holy weapon", "mass cure wounds", "steel wind strike", "wall of force", "wall of stone",

].forEach( function (s) {
	if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("red mage") === -1) SpellsList[s].classes.push("red mage");
});
ClassList["red mage"] = {
	regExpSearch : /^(?=.*red)(?=.*mage).*$/i,
	name : "Red Mage",
	primaryAbility : "\n \u2022 Red Mage: Wisdom;",
	abilitySave : 5,
	prereqs : "\n \u2022 Red Mage: Wisdom 13;",
	improvements :  levels.map( function(n) {
		return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
	}),
	die : 8,
	saves : ["Wis", "Dex"],
	skills : ["\n\n" + toUni("Red Mage") + ": Choose two from Acrobatics, Arcana, History, Investigation, Medicine, and Religion."],
	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, false, false, true], //required; the armor proficiencies if this is the first or only class
		[true, false, false, false] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
    weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[false, false, ["dagger","shortbow", "shortsword", "rapier", "whip" ]], //required; the weapon proficiencies if this is the first or only class
		[false, false, ["shortbow", "rapier" ]] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
    equipment : "Red Mage starting equipment:" +
		"\n \u2022 A rapier and a shield -or- two daggers;" +
		"\n \u2022 Padded armor -or- leather armor;" +
		"\n \u2022 an arcane focus -or- a holy symbol -or- a component pouch." +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Style", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : 2,
	spellcastingKnown : {
	    cantrips : [3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    	spells : "list",
    	prepared : true
	},
	spellcastingList : {
		// 0 - 5th level spells from Red Mage spell list.
		class : "red mage",
		level : [0, 5]
	},
	features : {
		"spellcasting" : {
			name : "Spellcasting",
			minlevel : 1,
			description : desc([
				"I can cast prepared Red Mage cantrips and spells, using Wisdom as my spellcasting ability.",
				"I can cast prepared Red Mage spells as rituals as long as they have the ritual tag.",
				"I can use either an arcane focus or a holy symbol as a spellcasting focus"]),
			additional : ["3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"],
		},
        "spellstrike" : {
            name : "Spellstrike",
            minlevel : 2,
            description : "\n   " + "When I hit a creature with a melee weapon attack, I can expend a spell slot to do an additional 2d8 force damage. This damage increases by 1d8 for each spell slot level above 1st to a max of 5d8.",
        },
        "subclassfeature3" : {
			name : "Style",
			minlevel : 3,
			description : "\n   " + "Choose a Red Mage battle Style and put it in the \"Class\" field" + "\n   " + "Choose either Spellblade, Universalist, or Battle Mage",
		},
        "spell combat" : {
            name : "Spell Combat",
            minlevel : 6,
            description : "\n   " + "When I use my action to cast a cantrip, I can make a single weapon attack as a bonus action.",
            action : ["bonus action", ""]
		},
        "doublecast" : {
            name : "Doublecast",
            minlevel : 10,
            recovery : "long rest",
            description : "\n   " + "Once per turn if I cast a spell of 1st level or higher with a casting time of 1 bonus action, I can sacrifice my reaction and also cast a spell of 1st through 3rd level with a casting time of 1 action.",
            action : ["reaction", ""],
            usages : "Wisdom modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
        },
        "martial prowess" : {
            name : "Martial Prowess",
            minlevel : 14,
            action : ["reaction"],
            description : "\n   " + "When a creature attacks me and doesn't have advantage, as a reaction, I can impose disadavantage on the attacker's attack roll.",
            usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2],
            recovery : "short rest",
        },
        "red wizard" : {
            name : "Red Wizard",
            minlevel : 20,
            description : "\n   " + "I can cast a Red Mage spell of 1st through 3rd level that deals damage, and deal maximum damage with that spell. The first time I do so, I suffer no penalty. If I use this feature again before finishing a long rest, I take 2d12 necrotic damage per spell level, immediately after casting. Every time I use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.",
            recovery : "long rest",
            usagescalc : "event.value = '1 + \u221E';"
        },
    }
},
AddSubClass("red mage", "spellblade", {
    regExpSearch :/spellblade/i,
    subname : "Spellblade",
    source : ["Lich King"],
    features : {
        "subclassfeature3" : {
            name : "Bladesong",
            minlevel : 3,
            description : "\n   " + "As a bonus action, I can start a magical bladesong for 1 minute which I can dismiss it at any time. It also automatically stops when I wear a shield, medium or heavy armor, or attack with a two-handed weapon. While the bladesong is active I gain the following benefits:" + "\n    - " + "I add my Wisdom modifier to my AC." + "\n    - " + "My base movement speed increases by 10 feet." + "\n    - " + "I have advantage on Dexterity (Acrobatics) checks." + "\n    - " + "I add my Wisdom modifier to Constitution saves for maintaining concentration on a spell.",
            action : ["bonus action", " (start)"],
            recovery : "short rest",
            usages : 2
        },
        "subclassfeature7" : {
            name : "Reflect",
            minlevel : 7,
            description : "\n   " + "Using my reaction, my Dexterity saves vs. areas of effect negate damage on success and only halve it on failure.",
            action : ["reaction", ""]
        },
        "subclassfeature15" : {
            name : "Teleporting Strike",
            minlevel : 15,
            description : "\n   " + "When I take the Attack action, I can teleport up to 10 feet before each attack.",
            usages : "Wisdom modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            recovery : "long rest"
        },
    }
}),
AddSubClass("red mage", "universalist", {
    regExpSearch :/universalist/i,
    subname : "Universalist",
    source : ["Lich King"],
    features : {
        "subclassfeature3" : {
            name : "Bonus Proficiency",
            minlevel : 3,
            description : "\n   " + "I gain proficiency with medium armor",
            armorProfs : [true, true, false, true]
        },
        "subclassfeature3.1" : {
            name : "Offense or Defense",
            minlevel : 3,
            description : "\n   " + "During a long rest I can choose to take a -2 penalty to either my attack rolls, damage rolls, or my AC. In return I gain a +2 bonus to one of those areas not selected. I can also instead choose to gain a +1 bonus to both areas not selected for penalty. This bonus lasts until the end of my next long rest.",
            recovery : "long rest",
            usages : 1
        },
        "subclassfeature7" : {
            name : "Crimson Sorcery",
            minlevel : 7,
            description : "\n   " + "I can change the damage type of spells of 1st level or higher I cast.  When I cast a spell that deals acid, cold, fire, lightning, poison, or thunder damage, I can change it to any other of those types instead.",
            usages : "Wisdom modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            recovery : "long rest",
        },
        "subclassfeature15" : {
            name : "Versatile Spellstrike",
            minlevel : 15,
            description : "\n   " + "As a bonus action before I attack, I can change the damage type of my Spellstrike ability" + "\n   " + "I can choose either Acid, Cold, Fire, Lightning, Poison, or Thunder.",
        },
    }
}),
AddSubClass("red mage", "battle mage", {
    regExpSearch :/battle mage/i,
    subname : "Battle Mage",
    source : ["Lich King"],
    features : {
        "subclassfeature3" : {
            name : "Bonus Proficiency",
            minlevel : 3,
            description : "\n   " + "I gain proficiency with medium and heavy armor",
            armorProfs : [true, true, true, true]
        },
        "subclassfeature3.1" : {
            name : "Mock",
            minlevel : 3,
            description : "\n   " + "When an ally within 30 ft is being attacked as a reaction I can cry out" + "\n   " + "The enemy must pass a Wis save or my allies within range have advt. on all attacks against it until the end my next turn",
            usages : "Wisdom modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            recovery : "long rest",
            action : ["reaction", ""]
        },
        "subclassfeature7" : {
            name : "Defensive Healer",
            minlevel : 7,
            description : "\n   " + "When I heal a creature with a 1st level or higher spell at 0 hp, attack rolls against them are made at disavt. until the end of their next turn",
        },
        "subclassfeature15" : {
            name : "Blaze of Glory",
            minlevel : 15,
            description : desc([
                "As a reaction when I'm reduced to 0 HP or killed outright, I can do a final heroic act",
                "I move my speed towards my attacker and attack it once in melee with advantage",
                "If the attack hits, it does an extra 3d10 necrotic and extra 3d10 weapon damage",
                "After this, I suffer the consequences of the damage as I would normally do"
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["reaction"],
        },
    }
})