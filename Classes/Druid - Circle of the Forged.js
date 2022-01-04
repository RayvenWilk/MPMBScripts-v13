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

var iFileName = "Artificer Forge Adept.js";

SourceList["KB:EE"] = {
    name : "Keith Baker: Exploring Eberron",
    abbreviation : "KB:EE",
    group : "Dungeon Master's Guild",
    url : "https://www.dmsguild.com/product/315887/Exploring-Eberron",
    date : "2020/07/30",
    defaultExcluded : true
};

AddSubClass("druid", "circle of the forged", {
    regExpSearch : /^(?=.*(druid|shaman))((?=.*\forged\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
    subname : "Circle of the Forged",
    source : ["KB:EE", 217],
    features : {
        "subclassfeature2.wild shape" : {
			name : "Wild Shape",
			source : ["KB:EE", 217],
			minlevel : 2,
			description : desc([
				"As an action, I assume the shape of a beast I have seen before with these rules:",
				" \u2022 I gain all its game statistics except Intelligence, Wisdom, or Charisma",
				" \u2022 I get its skill/saving throw prof. while keeping my own, using whichever is higher",
				" \u2022 I assume the beast's HP and HD; I get mine back when I revert back",
				" \u2022 I can't cast spells in beast form, but transforming doesn't break concentration",
				" \u2022 I retain features from class, race, etc., but I don't retain special senses",
				" \u2022 I can choose whether equipment falls to the ground, merges, or stays worn",
				" \u2022 I revert if out of time or unconscious; if KOd by damage, excess damage carries over"
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map(function (n) {
				if (n < 2) return "";
				var cr = Math.max(1, Math.floor(n/3));
				var hr = Math.floor(n/2);
				var restr = n < 4 ? ", no fly/swim" : n < 8 ? ", no fly" : "";
				return "CR " + cr + restr + "; " + hr + (restr.length ? " h" : " hours");
			}),
			eval : function() {
				processActions(false, "Druid: Wild Shape", ClassList.druid.features["subclassfeature2.wild shape"].action, "Wild Shape");
			}
		},
        "subclassfeature2.1" : {
            name : "Skin of Steel",
            source : ["KB:EE", 218],
            minlevel : 2,
            description : desc([
                "While transformed by Wild Shape, I gain the following benefits",
                " \u2022 +2 bonus to AC",
                " \u2022 Advantage on saves against poisoned",
                " \u2022 Resistance to poison damage",
                " \u2022 I don't need to eat, drink or breathe",
                " \u2022 I am immune to disease",
                " \u2022 I don't need to sleep and can't be put to sleep by magic"
            ]),
            dmgres : [["poison", "poison (in Wild Shape)"]],
            savetxt : {
                text : ["I don't need to eat, drink, sleep, or breathe; I can't be put to sleep by magic"],
                immune : ["disease"],
                adv_vs : ["poisoned"]
            }
        },
        "subclassfeature6" : {
            name : "Elemental Fury",
            source : ["KB:EE", 218],
            minlevel : 6,
            description : desc([
                "When I use Wild Shape, I choose between acid, cold, fire, or lightning",
                "When I hit with a melee attack for the first time, I can expend a spell slot to do +1d6 damage",
                "This increases by +1d6 for each spell slot level above 1st",
                "The damage types and effects are detailed in \"Page 3 Notes\""
            ]),
            toNotesPage : [{
                name : "Acid Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC",
                    "On a failure, their AC is reduced by half my Wisdom modifier (min 1)",
                    "At the start of its turn for the next minute, it makes another save",
                    "On a success, the effect ends"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Acid)"
            },{
                name : "Cold Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC for 1 min",
                    "On a failure, their movement speed is reduced to 0",
                    "They also have disadvantage on Strength and Dexterity saves",
                    "On a success, the effect ends"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Cold)"
            },{
                name : "Fire Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC for 1 min",
                    "On a failure, they take fire damage equal to half my Wisdom modifier (min 1)",
                    "On a success, the effect ends",
                    "A creature within 5 ft can use an action to douse the flames",
                    "Any effect that would douse flames (submerged in water) ends the effect as well"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Fire)"
            },{
                name : "Lightning Elemental Fury",
                source : ["KB:EE", 218],
                note : [
                    "A creature I hit makes a Constitution save against my Druid spell DC",
                    "On a failure, they lose their reaction until the start of their next turn",
                    "The first attack it makes on its turn is made with disadvantage",
                    "On a success, the effect ends"
                ],
                page3Notes : true,
                popupName : "Elemental Fury (Lightning)"
            }]
        },
        "subclassfeature10" : {
            name : "Adamantine Hide",
            source : ["KB:EE", 218],
            minlevel : 10,
            description : desc([
                "While transformed by Wild Shape, I am resistant to nonmagical bludgeoning/piercing/slashing",
                "I can Wild Shape as a reaction when I take damage and the damage is applied to my beast form"
            ]),
            action : ["reaction", " (when taking damage)"],
            dmgres : [["Nonmagical Bludgeoning", "Nonmagic Bludgeon. (Wild Shape)"], ["Nonmagical Piercing", "Nonmagic Piercing (Wild Shape)"], ["Nonmagical Slashing", "Nonmagic Slashing (Wild Shape)"]],
        },
        "subclassfeature14" : {
            name : "Constructed Perfection",
            source : ["KB:EE", 218],
            minlevel : 14,
            description : desc([
                "While transformed by Wild Shape, I am immunne to the following conditions:",
                "Charmed, Frightened, Paralyzed, Petrified, Poisoned",
                "I am also immune to poison damage while in beast form"
            ]),
            savetxt : {
                immune : ["charmed", "frightened", "paralyzed", "petrified", "poisoned", "poison damaged"]
            }
        }
    }
})