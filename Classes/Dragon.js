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

var iFileName = "Dragon Class.js";

SourceList["Lich King"]={
	name : "Lich King",
	abbreviation :"LK",
	group : "Lich King",
};

ClassList["dragoon"] = {
	regExpSearch : /dragoon/i,
	name : "Dragoon",
	primaryAbility : "Strength",
	abilitySave : 1,
	abilitySaveAlt : 2,
	prereqs : "Strength 13",
	improvements :  levels.map( function(n) {
	    return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
	}),
	die : 10,
	saves : ["Dex", "Str"],
	skills : ["\n\n" + toUni("dragoon") + ": Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival."],
	armor : [
		[true, true, false, true],
		[true, false, false, false]
	],
	weapons : [
		[false, false, ["glaive", "halberd", "javelin", "lance", "pike", "spear", "trident"]],
		[false, false, ["halberd", "javelin", "lance"]],
    ],
	equipment : "dragoon starting equipment:" +
		"\n \u2022 A javelin and a shield -or- a glaive;" +
		"\n \u2022 Scale mail -or- leather armor;" +
		"\n \u2022 an explorer's pack-or- a dungeoneer's pack." +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Paradigm", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
	    "fighting style" : {
			name : "Fighting Style",
			minlevel : 1,
			description : "\n   " + "Choose a Fighting Style for the fighter using the \"Choose Feature\" button above",
			choices : ["Defense", "Dueling", "Great Weapon Fighting", "Protection"],
			"archery" : FightingStyles.archery,
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"protection" : FightingStyles.protection,
		},
        "jump" : {
            name : "Jump",
        	minlevel : 1,
    	    description : "\n   " + "As an action I can jump 20 + prof. mod + str. mod in feet high" + "\n   " + "I can also move up to my Str score in feet (distance subtracted from my movement)" + "\n   " + "I can't Jump in rooms with ceilings lower than 30 feet or while wearing heavy armor",
        	usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
        	recovery : "long rest",
        	action : ["action"],
        },
        "deadly lancer" : {
        	name : "Deadly Lancer",
        	minlevel : 2,
        	action : ["action"],
        	description : "\n   " + "As an action I can make a single weapon attack add extra damage to that attack provided that I use a Jump and I am wielding a dragoon weapon [a glaive, halberd, javelin, lance, pike spear or trident]",
        	additional : levels.map(function (n) {return Math.ceil(n / 2) + "d6";}),
        	calcChanges : {
        	    atkAdd : [
                    function (fields, v) {if (classes.known.dragoon && classes.known.dragoon.level && !v.isSpell && !v.isDC && (v.isDragoonWeapon || (/\dragoon\b/i).test(fields.Description))) {v.sneakAtk = Math.ceil(classes.known.dragoon.level / 2);
    				fields.Description += (fields.Description ? '; ' : '') + 'Sneak attack ' + v.sneakAtk + 'd6';};
			    },
    				"Once per turn, I can Jump and make a single melee weapon attack with a dragoon weapon. If it hits, I can add my deadly lancer damage to the attack."
    			]
            },
        },
        "subclassfeature3" : {
			name : "Paradigm",
			minlevel : 3,
			description : "\n   " + "Choose a Dragoon Paradigm and put it in the \"Class\" field" + "\n   " + "Choose either Valkyrie or Elemental Lancer",
		},			
        "crippling strike" : {
	        name : "Crippling Strike",
	        minlevel : 4,
	        description : "\n   " + "Once per long rest when I use the Attack action, and hit a creature that has limbs with a dragoon weapon I can target either their arms or legs and force them to make a Constitution save. If they fail they have one of the following penalties until the end of my next turn." + "\n   " + "-Arms: The target makes has Disadvantage on all melee attacks, and they  have disadvantage on Strength checks" + "\n   " + "-Legs: The target's movement speed is halved, and they have disadvantage on Dexterity checks",
	        useage: 1,
	        recovery: "long rest"
		},
        "sweeping strike" : {
        	name : "Sweeping Strike",
	        minlevel : 7,
	        description : "\n   " + "Up to 3 Large or smaller creatures must make a Dex save or be knocked prone",				usages : "Strength modifier per ",
	        usagescalc : "event.value = Math.max(1, What('Str Mod'));",
	        recovery : "long rest",
	        action : ["bonus action"]
		},	
        "indomitable" : {
		    name : "Indomitable",
		    minlevel : 9,
		    description : "\n   " + "I can reroll a failed saving throw, but must keep the new result",
		    usages : [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
		    recovery : "long rest"
	    },
        "evasion" : {
		    name : "Evasion",
		    minlevel : 11,
		    description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
		    savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
		},
        "double jump" : {
	        name : "Double Jump",
	        minlevel : 15,
	        description : "\n   " + "At 15th level I gain the Double Jump feature (see notes)",
	        action : ["bonus action"],
            toNotesPage : [{
            	name : "Double Jump",
            	note : [
	                "If I reduce a creature to 0 hp or kill it outright with the attack from Deadly Lancer, I can use a bonus action expend another use of Jump to use Deadly Lancer again."
	            ],
	            page3notes : true
            }]
	    },		
        "swift recovery" : {
	        name : "Swift Recovery",
	        minlevel : 18,
	        description : "\n   " + "At 18th level I gain the Swift Recovery feature (see notes below)",
	        usage:1,
	        recovery: "long rest",
            toNotesPage : [{
	            name : "Swift Recovery",
	            note : [
	                "During a short rest I can instantly regain of up to half of my expended uses of Jump",
                    " I must complete a long rest to regain any more Jumps."
		        ],
	            page3notes : true,
	        }],
        },				
        "perfect lancer" : {
            name : "Perfect Lancer",
	        minlevel : 20,
	        description : "\n   " + "At 20th level I gain the Perfect Lancer feature (see notes below)",
            usage: 1,
            recovery : "long rest",
            toNotesPage : [{
	            name : "Perfect Lancer",
	            note : [
	                "Once per long rest I can maximize the damage of my Deadly Lancer feature"
		        ],
	            page3notes : true,
	        }],	
		}
	}
},

AddSubClass("dragoon", "elemental lancer", {
    regExpSearch :/elemental lancer/i,
	subname : "Elemental Lancer", 
	source : ["Lich King"], 
    features : {
        "subclassfeature3" : {
	        name : "Elemental Infusion",
	        minlevel : 3,
	        description : "\n   " + "Choose an Infusion type using the \"Choose Feature\" button above" + "\n   " + "The bonus damage of my Deadly Lancer ability permanently becomes either Acid, Cold, Fire, Lightning, or Poison" + "\n   " + "I gain resistance to my chosen damage type",
	        choices : ["Acid Infusion", "Cold Infusion", "Fire Infusion", "Lightning Infusion", "Poison Infusion"],
            "acid infusion" : {
				name : "Acid Infusion",
				description : "\n   " + "I have Infused my Deadly Lancer ability with Acid magic and I am resistant to Acid damage",
				dmgres : ["Acid"],
				dependentChoices : "acid"
			},
			"cold infusion" : {
    			name : "Cold Infusion",
				description : "\n   " + "I have Infused my Deadly Lancer ability with Cold magic and I am resistant to Cold damage",
				dmgres : ["Cold"],
				dependentChoices : "cold"
			},
			"fire infusion" : {
				name : "Fire Infusion",
				description : "\n   " + "I have Infused my Deadly Lancer ability with Fire magic and I am resistant to Fire damage",
				dmgres : ["Fire"],
				dependentChoices : "fire"
			},
			"lightning infusion" : {
				name : "Lightning Infusion",
				description : "\n   " + "I have Infused my Deadly Lancer ability with Lightning magic and I am resistant to Lightning damage",
				dmgres : ["lightning"],
				dependentChoices : "lightning"
			},
			"poison infusion" : {
				name : "Poison Infusion",
				description : "\n   " + "I have Infused my Deadly Lancer ability with Poison magic and I am resistant to Poison damage",
				dmgres : ["poison"],
				dependentChoices : "poison"
			},
    	},
        "subclassfeature6" : {
            name : "Breath of the Primordials",
	        minlevel : 6,
	        description : "\n   " + "I can expend 2 uses of Jump to cast the Dragon's Breath spell at 2nd level on myself without components or spell slots. At 10th level I cast it as a 3rd level spell. At 17th level I cast it as a 4th level spell",
	        recovery : "long rest",
	        usages : 1
	    },
    },
    "subclassfeature17" : {
	    name : "Dragonfire Strike",
        minlevel : 17,
	    description : "\n   " + "When using Deadly Lancer I can expend another Jump to force all creatures within 20 ft. of my target to make a Dex save" + "\n   " + "If they fail they take half of the damage the original target takes",
    },
});

AddSubClass("dragoon", "valkyrie", {
    regExpSearch :/valkyrie/i,
	subname : "Valkyrie", 
	source : ["Lich King"], 
    features : {
        "subclassfeature3" : {
	        name : "Bonus Proficiency",
	        minlevel : 3,
	        description : "\n   " + "I gain proficiency with heavy armor and I can Jump in heavy armor",
	        armorProfs : [true, true, true, true]
		},
        "subclassfeature3.1" : {
            name : "Piercing Heaven",
            minlevel : 3,
            description : "\n   " + "After using Deadly Lancer I can make a single weapon attack as a bonus action. I do not add my Strength modifier to the damage roll or my Deadly Lancer bonus damage.",
            action : ["bonus action", ""]
        },
        "subclassfeature6" : {
            name : "Improved Jump",
            minlevel : 6,
            description : "\n   " + "I can Jump freely indoors, and my base Jump height doubles. When I jump I can move up to 30 ft in any direction, but this is subtracted from my total movement. When I am falling I can use my reaction to reduce my falling damage by 5X my Dragoon level. At 10th level As an action I can expend 2 Jumps and sprout ethereal wings. For 1 minute I have a flying speed equal to my walking speed. ",
            action: ["reaction"],
        },
        "subclassfeature17" : {
            name : "Triple Jump",
            minlevel : 17,
            description : "\n   " + "At 17th level I gain the Triple Jump feature (see notes below)",
            usages : 1,
            recovery : "short rest",
            action : ["reaction", "(after Double Jump)"],
            toNotesPage : [{
                name : "Triple Jump",
                note : [
                    "After using the Double Jump feature, I can use my reaction to expend a Jump and use Deadly Lancer again.",
                    "If the second target was not killed after Double Jump, my 3rd attack must be against that same creature.",
                    "If the second creature was also killed, I can target a 3rd creature within reach."
                ],
                page3notes : true,
            }]
		}
	},
})