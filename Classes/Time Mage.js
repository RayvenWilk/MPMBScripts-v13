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

var iFileName = "Time Mage.js";

SourceList["Lich King"]={
	name : "Lich King",
	abbreviation :"LK",
	group : "Lich King",
};

[	// level 0 (cantrips)
	"acid splash", "dancing lights", "fire bolt", "guidance", "light", "mage hand", "mending", "mind sliver", "message", "poison spray", "prestidigitation", "ray of frost", "resistance", "shocking grasp", "spare the dying", "temporal lance", 

	// 1st level
	"absorb elements", "alarm", "burning hands", "catapault", "cause fear", "chromatic orb", "color spray", "comprehend languages", "create or destroy water", "cure wounds", "detect magic", "disguise self", "earth tremor", "expeditious retreat", "false life",  "feather fall", "find familiar", "gear shield", "grease", "ice knife", "identify",  "illusory script", "inflict wounds", "mage armor",  "magic missile", "protection from evil and good", "shield", "silent image", "sleep", "snare", "tasha's caustic bew", "tenser's floating disk", "unseen servant", "zephyr strike",  

	// 2nd level
	"aganzzar's scorcher",  "alter self", "arcane lock", "augury", "blindness/deafness", "blur", "cloud of daggers", "continual flame", "darkness", "detect thoughts", "dust devil", "earthbind", "enhance ability", "flaming sphere", "fortune's favor", "gentle repose", "heat metal", "hold person","immovable object", "invisibility", "knock",  "levitate", "locate object", "magic mouth", "melf's acid arrow", "mind spike", "mirror image", "misty step", "phantasmal force", "ray of enfeeblement", "rope trick", "scorching ray", "see invisibility", "shadow blade", "shatter", "tasha's mind whip", "time step", "warding bond", 

	// 3rd level
	"blink", "catnap", "clairvoyance", "conjure barrage", "counterspell", "create food and water", "daylight", "dispel magic", "elemental weapon", "erupting earth", "feign death", "fireball", "fly", "gaseous form", "gear barrage", "glyph of warding", "haste", "hypnotic pattern", "leomund's tiny hut", "lightning bolt", "magic circle", "melf's minute meteors", "nondetection", "plant growth", "protection from energy", "pulse wave", "sending", "slow", "speak with dead", "stinking cloud", "summon lesser demon", "thunder step", "tongues", "vampiric touch", "water walk", 

	// 4th level
	"banishment", "blight", "confusion", "death ward", "dimension door", "gravity sinkhole", "greater invisibility", "fabricate", "fire shield", "freedom of movement", "hallucinatory terrain", "locate creature", "mordenkainen's faithful hound", "mordenkainen's private sanctum", "polymorph", "stone skin", "storm sphere", "summon construct", "summon elemental", "watery sphere",

	// 5th level
	"animate objects", "awaken", "bigby's hand", "circle of power", "cloudkill", "cone of cold", "conjure elemental",  "contact other plane", "enervation", "far step", "flame strike", "geas", "hold monster", "immolation", "legend lore", "mass cure wounds", "mislead", "modify memory", "planar binding", "rary's telepatchic bond", "scrying", "skill empowerment", "synaptic static", "steel wind strike", "telekniesis", "teleportation circle", "temporal shunt", "wall of time", 

	// 6th level
	"arcane gate", "chain lighting", "circle of death", "contingency", "disintegrate", "drawmij's instant summon", "find the path", "forbiddance", "globe of invulnerability", "gravity fissue", "guards and wards", "mental prison", "planar ally", "programmed illusion", "sunbeam", "time loop", "true seeing", "word of recall", 

	// 7th level
	"crown of stars", "delayed blast fireball", "etherealness", "finger of death", "forcecage", "mordenkainen's magnificent mansion", "mordenkainen's sword", "plane shift", "prismatic spray", "project image","reverse gravity", "sequester", "symbol", "teleport", 

	// 8th level
	"abi-dalzim's horrid wilting", "antimagic field", "antipathy/sympathy", "clone", "control weather", "demiplane", "earthquake", "feeblemind", "incendiary cloud",  "maddening darkness", "maze", "mind blank", "reality break", "telepathy",

	// 9th level
	"astral projection", "blade of disaster", "foresight", "gate", "imprisonment","invulnerability", "prismatic wall", "psychic scream", "ravenous void", "time ravage", "time stop",  
].forEach( function (s) {if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("time mage") === -1) SpellsList[s].classes.push("time mage");
});

ClassList["time mage"] = {
	name : "Time Mage",
	regExpSearch : /^(?=.*time)(?=.*mage).*$/i,
	primaryAbility : "Wisdom",
	abilitySave : 5,
	prereqs : "Wisdom 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Int", "Wis"],
	skillstxt : {
		primary : "Choose two from Arcana, History, Insight, Investigation, Perception, and Religion"
	},
	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, false, false, true], //required; the armor proficiencies if this is the first or only class
		[true, false, false, false] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
	weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[false, false, ["hand crossbow", "shortsword"]], //required; the weapon proficiencies if this is the first or only class
		[false, false, ["shortsword"]] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
	equipment : "Time Mage starting equipment:" +
		"\n \u2022 A shield and a simple weapon -or- a shortsword ;" +
		"\n \u2022 A component pouch -or- an arcane focus;" +
		"\n \u2022 A scholar's pack -or- an explorer's pack;" +
		"\n \u2022A spellbook." +
		"\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Specialization", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells : "book",
		prepared : true
	},
	features : {
		"spellcasting" : {
			name : "Spellcasting",
			minlevel : 1,
			description : "\n   " + "I can cast prepared Time Mage cantrips and spells, using Wisdom as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus, and I can cast all Time Mage spells in my spellbook as rituals if they have the ritual tag.",
			additional : levels.map(function (n, idx) {
				return [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5][idx] + " cantrips known";
			}),
			spellcastingList : {
		// 0 - 9th level spells from Time Mage spell list.
			class : "time mage",
			level : [0, 9],
			},
		},
		"expedious recovery" : {
			name : "Expedious Recovery",
			minlevel : 1,
			description : "\n   " + "Once per day after a short rest, I can recover a number of 5th-level or lower spell slots",
			additional : levels.map(function (n) {
				var lvls = Math.ceil(n / 2);
				return lvls + " level" + (lvls > 1 ? "s" : "") + " of spell slots";
			}),
			usages : 1,
			recovery : "long rest"
		},		
		"rewind the clock" : {
			name : "Rewind the Clock",
			minlevel : 2,
			action: ["reaction"],				
			description : "\n   " + "As long as I don't have disadvantage I can reroll any attack roll, ability check or saving throw once, but must keep the new result.",
			usages : [0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4],
			recovery : "long rest"
		},
		"subclassfeature3" : {
			name : "Specialization",
			minlevel : 3,
			description : "\n   " + "Choose a Time Mage Specialization and put it in the \"Class\" field" + "\n   " + "Choose either Clockwork Mechanist, Relativist, or Eternalist",
		},
		"expertise" : {
			name : "Expertise",
			minlevel : 5,
			description : "\n   " + "At 5th level I can choose two of my skill or tool proficiencies. I double my proficiency bonus for any ability check with those skills. At 15th level I choose another skill or tool proficiency. ",
			skillstxt : "\n\n" + toUni("Expertise (Time Mage 5)") + ": Choose any two skill proficiencies and/or artisan's tools, and one more at 10th level.",
			additional : levels.map(function (n) {
				if (n < 15) return "with two skills";
				return "with three skills";
			}),
			extraname : "Expertise",
			extrachoices : ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival","Tool"],
			extraTimes : levels.map(function (n) { return n < 5 ? 0 : n < 15 ? 2 : 3; }),
			"acrobatics" : {
				name : "Acrobatics Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Acrobatics") !== -1; },
				skills : [["Acrobatics", "only"]]
				},
			"animal handling" : {
				name : "Animal Handling Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Animal Handling") !== -1; },
				skills : [["Animal Handling", "only"]]
			},
			"arcana" : {
				name : "Arcana Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Arcana") !== -1; },
				skills : [["Arcana", "only"]]
			},
			"athletics" : {
				name : "Athletics Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Athletics") !== -1; },
				skills : [["Athletics", "only"]]
			},
			"deception" : {
				name : "Deception Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Deception") !== -1; },
				skills : [["Deception", "only"]]
			},
			"history" : {
				name : "History Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("History") !== -1; },
				skills : [["History", "only"]]
			},
			"insight" : {
				name : "Insight Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Insight") !== -1; },
				skills : [["Insight", "only"]]
			},
			"intimidation" : {
				name : "Intimidation Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Intimidation") !== -1; },
				skills : [["Intimidation", "only"]]
			},
			"investigation" : {
				name : "Investigation Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Investigation") !== -1; },
				skills : [["Investigation", "only"]]
			},
			"medicine" : {
				name : "Medicine Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Medicine") !== -1; },
				skills : [["Medicine", "only"]]
			},
			"nature" : {
				name : "Nature Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Nature") !== -1; },
				skills : [["Nature", "only"]]
			},
			"perception" : {
				name : "Perception Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Perception") !== -1; },
				skills : [["Perception", "only"]]
			},
			"performance" : {
				name : "Performance Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Performance") !== -1; },
				skills : [["Performance", "only"]]
			},
			"persuasion" : {
				name : "Persuasion Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Persuasion") !== -1; },
				skills : [["Persuasion", "only"]]
			},
			"religion" : {
				name : "Religion Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Religion") !== -1; },
				skills : [["Religion", "only"]]
			},
			"sleight of hand" : {
				name : "Sleight of Hand Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Sleight of Hand") !== -1; },
				skills : [["Sleight of Hand", "only"]]
			},
			"stealth" : {
				name : "Stealth Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Stealth") !== -1; },
				skills : [["Stealth", "only"]]
			},
			"survival" : {
				name : "Survival Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Survival") !== -1; },
				skills : [["Survival", "only"]]
			},
			"tool" : {
				name : " Tool Expertise",
				description : "",
				prereqeval : function(v) { return v.skillProfs.indexOf("Tool") !== -1; },
				skills : [["Tool", "only"]]
			},
		},
		"hasted assault" : {
			name : "Hasted Assault",
			minlevel : 7,
			description : "\n   " + "At 7th level I gain the following benefits:" + "\n   " + "I learn the Haste spell if I didn't already know it and add it to my spellbook for free.  It is always prepared and doesn't count against the number of spells I can prepare normally" + "\n   " + "My base walking speed is increased by 10 feet and I always add my Wisdom modifier to initiative rolls.",		
			addMod : { type : "skill", field : "Init", mod : "Wis", text : "I can add my Wisdom modifier to initiative rolls." },
			speed : { walk : {spd : "+10", enc : "+10" } },
			spellcastingBonus : {
			name : "Hasted Assault [Haste]",
			spells : ["haste"], 
			selection : ["haste"],
			firstCol : "atwill"
			}
		},			
		"wisdom of the ages" : {
			name : "Wisdom of the Ages",
			minlevel : 10,
			description : "\n   " + "If I make an ability check where I add my proficiency bonus, I treat rolls of 9 or lower as 10." + "\n   " + "Also whenever I cast the Haste spell, there are no negative consequences when the spell ends.",
		},
		"time lord" : {
			name : "Time Lord",
			minlevel : 18,
			action: ["action", "Spell"],	
			description : "\n   " + "At 18th level I gain the Time Lord feature (see notes below)",
			savetxt : { immune : ["magical aging effects"] }, 
			spellcastingBonus : {
				name : "Time Lord",
			  	spells : ["time stop"],
				firstCol : "atwill",
			  	selection : ["time stop"],
				toNotesPage : [{
					name : "Time Lord",
					note : [
						"I learn the Time Stop spell if I don't already know it and add it to my spellbook for free.",
						"It is always prepared and doesn't count against my normal number of prepared spells.",
						"My natural life span increases by 10 times and I don't suffer from the effects of old age.", 
						"I am immune to magical aging.",
						" Also once per long rest, I can cast one 4th level or lower spell  that I have already cast without using a spell slot."
					],
					page3notes : true,
				}]
			}
		},
		"undo timeline" : {
			name : "Undo Timeline",
			minlevel : 20,
			action: ["action"],
			description : "\n   " + "At 20th level I gain the Undo Timeline Feature (see notes below).",
			recovery : "one month",
			usages : 1,
			toNotesPage : [{
				name : "Undo Time Line",
				note : [
					"I can take 8 creatures of my choice up to 12 hours back in time.",
					"All experience and items gained before are reset and expended spell slots refreshed.",
					"After using this ability, my Strength score drops to 3 and I take 1d10 necrotic damage per spell level each time I cast a non-cantrip spell before I finish a long rest.",
					"This damage beats resistance and immunity.",
					"I can only use this ability once a month."
				],
				page3notes : true,
			}]
		}
	}
},

AddSubClass("time mage", "clockwork mechanist", { 
	regExpSearch :/clockwork mechanist/i,
	subname : "Clockwork Mechanist", 
	source : ["Lich King"], 
	features : { 
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			minlevel : 3,
			description : "\n   " + "I have proficiency with tinker's tools.",
			toolProfs : [["tinker's tools", 1]]
		},
		"subclassfeature3.1" : {
			name : "Clockwork Soldier",
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can use tinker's tools to create a clockwork soldier",
				"I determine its appearance; It obeys my commands and it acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can take reactions and move on its turn even if I don't command it",		
				"- It only regains hit points if the Mending cantrip is cast on it, and it regains 2d6 hit points per casting."
			]),
			action : ["bonus action", " (command)"]
		},
		"subclassfeature6" : {
			name : "Mechanical Precision",
			minlevel : 6,
			description : "\n   " + "After I or my clockwork soldier hit with a (non-critical) weapon or spell attack, on my next turn I can choose not to roll. Instead I can choose to use the same roll from my previous turn, while still expending spell slots or resources as normal. Each subsequent turn I forgo my roll requires expending a usage of this ability.",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
		},
		"subclassfeature14" : {
			name : "Pendulum",
			minlevel : 14,
			action: ["action"],				
			description : "\n   " + "One creature I can see within 60 ft. must make a Wisdom save. " + "\n   " + "If it fails, for 1 minute it does not make any d20 rolls for attack rolls, ability checks, or saving throws. Instead it's rolls must follow the sequence of 1, 19, 2, 18, 3, 17, 4, 16, 5, and 15. It can make another save at the end of its turns, but must use the next number in sequence instead of rolling.",
			usage: 1,
			recovery: "long rest",
		},
	}
},

AddSubClass("time mage","relativist", { 
	regExpSearch :/relativist/i,
	subname : "Relativist", 
	source : ["Lich King"], 
	features : { 
		"subclassfeature3" : {
			name : "Time Dilation",
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can bend time for 1 minute. While doing so I gain the following benefits:" + "\n    - " + "I gave advantage on melee attacks" + "\n    - " + "My base movement speed increases by 10 feet" + "\n    - " + "Enemies have disadvantage on melee attacks against me" + "\n    " + "This effect ends early if I take damage or am incapacitated",
			action : ["bonus action", " (start)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Fold Space",
			minlevel : 6,
			action : "bonus action",
			description : "\n   " + "As a bonus action I can teleport up to 60 ft. to an open space I can see"+ "\n   " + "All creatures I choose within 5 ft. of where I appear take 2X my Wis mod force damage",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "short rest",	
		},
		"subclassfeature14" : {
			name : "Gravity Well",
			minlevel : 14,
			description : "\n   " + "I summon a tiny black sphere at a point within 100 ft"+ "\n   " + "All creatures within a 30 foot radius of the sphere must make a Str save."+ "\n   " + "Fail: pulled 10 feet in the direction of the sphere and take 10d6 + Wis mod force damage"+ "\n   " + "Success: not pulled and only half damage",
			usages : 1,
			recovery : "long rest",
			action : ["action"] 
		},
	}
}),
AddSubClass("time mage", "eternalist", { 
	regExpSearch :/eternalist/i,
	subname : "Eternalist", 
	source : ["Lich King"],
	features : { 
		"subclassfeature3" : {
			name : "Temporal Gleaning",
			minlevel : 3,
			description : "\n   " + "I gain proficiency with the History skill and I learn the Guidance cantrip.",
			skills : ["History"],
			spellcastingBonus : {
				name : "Temporal Gleaning",
				spells : ["guidance"],
				selection : ["guidance"],
				firstCol : "atwill",
			}
		},
		"subclassfeature6" : {
			name : "Reactionary Seer",
			minlevel : 6,
			description : "\n   " + "When I would be hit by a spell with an attack roll, as a reaction I can expend a spell slot of equal level to force the enemy to re-roll their spell attack" + "\n   " + "If the spell is 3rd level or lower they must also make a Wis save" + "\n   " + "If they fail, the new roll is at disadvantage.",
			action : ["reaction",""]	
		},
		"subclassfeature14" : {
			name : "Temporal Anomaly",
			minlevel : 14,
			action: ["bonus action"],				
			description : "\n   " + "As a bonus action I summon a copy of myself from the future that acts immediately after me." + "\n   " + "At the start of the next round my future self and I both disappear." + "\n   " + "At the start of the next round after disappearing,  I reappear, at my original place in the Iniative order and mark off all resources both my duplicate and I used during the first round." + "\n   " + "If my original self died in the first round, I reappear in my previous space dead.",
		}
	}
}))