var iFileName = "Magical Girl [Created by Freelance GM, transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["FGM:MG"] = {
	name : "Freelance GM: Magical Girl",
	abbreviation : "FGM:MG",
	group : "Giant in the Playground forums",
	defaultExcluded : true,
	url : "http://www.giantitp.com/forums/showthread.php?444516-Base-Class-Magical-Girl-(AKA-quot-Help-me-I-ve-done-something-terrible!-quot-)",
	date : "2015/09/22"
}

ClassList["magicalgirl"] = {
	regExpSearch : /magical girl/i,
	name : "Magical Girl",
	source : ["FGM:MG", 0],
	primaryAbility : "Constiution, Charisma",
	prereqs : "",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Con", "Cha"],
	skillstxt : {
		primary : "Choose two from Acrobatics, Arcana, Insight, Perception, or Persuasion."
	},
	armorProfs : {
		primary : [true, false, false, false],
		secondary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, false],
		secondary : [true, false, false]
	},
	equipment : "Magical Girl starting equipment:" +
	"\n \u2022 Your heirloom (a signet ring -or- an amulet -or- a set of fine clothes -or- a martial weapon;" +
	"\n \u2022 A quarterstaff -or- a dagger;" +
	"\n \u2022 A diplomat's pack -or- a scholar's pack;" +
	"\n \u2022 And a bag of two tomes of lore on subjects of your choice;",
	subclasses : ["Magical Promise", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : "warlock2",
	abilitySave : 6,
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[0, 0, 1, 0, 0, 0, 0, 0, 0], //lvl 8
		[0, 2, 1, 0, 0, 0, 0, 0, 0], //lvl 9
		[0, 2, 1, 0, 0, 0, 0, 0, 0], //lvl10
		[0, 0, 0, 2, 0, 0, 0, 0, 0], //lvl11
		[0, 0, 0, 2, 0, 0, 0, 0, 0], //lvl12
		[0, 0, 0, 2, 0, 0, 0, 0, 0], //lvl13
		[0, 0, 0, 0, 2, 0, 0, 0, 0], //lvl14
		[0, 0, 0, 0, 2, 0, 0, 0, 0], //lvl15
		[0, 0, 0, 0, 2, 0, 0, 0, 0], //lvl16
		[0, 0, 0, 0, 2, 0, 0, 0, 0], //lvl17
		[0, 0, 0, 0, 0, 2, 0, 0, 0], //lvl18
		[0, 0, 0, 0, 0, 2, 0, 0, 0], //lvl19
		[0, 0, 0, 0, 0, 2, 0, 0, 0] //lvl20
	],
	spellcastingKnown : {
		cantrips : 0,
		spells : [0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]
	},
	spellcastingList : {
		class : "any",
		level : [0,5],
		spells : [
		//First Level
		"bless", "charm person", "chromatic orb", "compelled duel", "cure wounds", "divine favor", "expeditous retreat", "fog cloud", "guiding bolt", "healing word", "hex", "magic missile", "shield", "sleep", "searing smite", "thunderous smite", "wrathful smite", 
		//second level
		"darkvision", "gust of wind", "magic weapon", "mirror image", "misty step", "scorching ray", "shatter", "suggestion", "warding bond", 
		//third level
		"blinding smite", "blink", "counterspell", "daylight", "dispel magic", "elemental weapon", "fear", "fireball", "lightning bolt", "revifiy", "sending", 
		//fourth level
		"banishment", "death ward", "dimension door", "freedom of movement", "staggering smite", "wall of fire", 
		//fifth level
		"banishing smite", "cone of cold", "destructive smite", "flame strike", "raise dead", "wall of force"],
	},
	features : {
		"subclassfeature1" : {
			name : "Magical Promise",
			source : ["FGM:MG",3],
			minlevel : 1,
			description : "\n   " + "Choose a Magical Promise you strive to emulate and put it in the \"Class\" field" + 
			"\n   " + "Choose either Promise of Friendship, Retribution, Safety, or Understanding",
		},
		"transformation" : {
			name : "Transformation",
			source : ["FGM:MG", 3],
			minlevel : 1,
			description : "\n   " + "As a bonus action, I undergo a magical transformation" +
			"\n   " + "I can only transform when possessing my heirloom" +
			"\n   " + "I have two transformations and regain them on a short/long rest" +
			"\n   " + "My transformation lasts for one hour or until I am unconscious" +
			"\n   " + "While transformed, I gain the following benefits:" +
			"\n   \u2022 " + "I have an AC of 10 + Dex mod + Cha mod" +
			"\n   \u2022 " + "I am a medium humanoid creature" +
			"\n   \u2022 " + "I can summon one of the following radiant weapons:" +
			"\n     \u2022 " + "Two thrown weapons that return to me after thrown" +
			"\n     \u2022 " + "Nonmagical ammunition weapon with unlimited ammo" +
			"\n     \u2022 " + "Two one-handed weapons or one one-handed weapon and a shield" +
			"\n     \u2022 " + "A two-handed weapon" +
			"\n   \u2022 " + "These weapons deal radiant damage and shed 5ft of bright light" +
			"\n   \u2022 " + "These weapons disappear when they leave my hand" +
			"\n   \u2022 " + "but as an action, I can summon them back" +
			"\n   \u2022 " + "As a bonus action, I can change between the options or dispel them",
			action : ["bonus action", " (begin)"],
			usages : 2,
			recovery : "short rest",
			addarmor : "Unarmored Defense (Cha)"
		},
		"charm casting" :{
			name : "Charm Casting",
			source : ["FGM:MG", 3],
			minlevel : 2,
			description : "\n   " + "I can cast magical girl spells that I know, using Charisma as my spellcasting ability" + 
			"\n   " + "I can use my heirloom as a spellcasting focus" + 
			"\n   " + "I regain these spell slots on a short rest",
			additional : ["","2 spells known", "3 spells known", "3 spells known", "4 spells known", "4 spells known", "5 spells known", "5 spells known", 
			"6 spells known",  "6 spells known", "7 spells known", "7 spells known", "8 spells known", "8 spells known", "9 spells known", "9 spells known", 
			"10 spells known", "10 spells known", "11 spells known", "11 spells known"]
		},
		"fighting style" : {
			name : "Fighting Style",
			source : ["FGM:MG", 3],
			minlevel : 2,
			description : "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices : ["Archery", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
			"archery" : FightingStyles.archery,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"magical charm" : {
			name : "Magical Charm",
			source : ["FGM:MG", 4],
			minlevel : 3,
			description : "\n   " + "Use the \"Choose Feature\" button above to add Magical Charms to the third page",
			additional : levels.map(function (n) {
				return n < 9 ? "Two Magical Charms" : n < 13 ? "Three Magical Charms" : n < 17 ? "Four Magical Charms" : "Five Magical Charms"
			}),
			extraname : "Magical Charm",
			extrachoices : ["awoken familiar", "altered ability", "blinding transformation", "durable form", "enhanced weapons (prereq: promise of safety)",
			"elemental favor", "elemental transformation", "explosive transformation", "extra magic (prereq: promise of understanding)", "fearsome transformation", 
			"finishing move (prereq: 13th level)",  "light step", "lingering magic", "mass appeal(prereq: promise of friendship, 9th level)", "misty transformation",
			"sacrifice (prereq: 9th level)", "summoned armor"],
			"awoken familiar" : {
				name : "Awoken Familiar",
				source : ["FGM:MG", 5],
				description : "\n   " + "I can cast find familiar once per day without material components" +
				"\n   " + "My familiar can cast augury once per short/long rest and divination per long rest at 9th level" +
				"\n   " + "It's Intelligence and Wisdom is equal to 11 + my Cha modifier" +
				"\n   " + "And it knows all languages I know",
				spellcastingBonus : {
					name : "Awoken Familiar",
					spells : ["find familiar"],
					selection : ["find familiar"],
					firstCol : "oncelr"
				}
			},
			"altered ability" : {
				name : "Altered Ability",
				source : ["FGM:MG", 5],
				description : "\n   " + "+2 bonus to an ability score of my choice while transformed to a max of 20" +
				"\n   " + "At 17th level, this charm can increase to a new max of 22",
				
			},
			"blinding transformation" : {
				name : "Blinding Transformation",
				source : ["FGM:MG", 5],
				description : "\n   " + "All creatures within 15ft of me roll a Con save when I transform" +
				"\n   " + "On a failure, they are blinded a number of rounds equal to my Cha modifier" +
				"\n   " + "At the end of their turn, they can roll a new save, ending it on a success"
			},
			"durable form" : {
				name : "Durable Form",
				source : ["FGM:MG", 6],
				description : "\n   " + "When I transform, I gain temp hp equal to 2d4 + Cha mod" +
				"\n   " + "This increases to 3d4 at 9th, 4d4 at 13th, and 5d4 at 17th level",
				additional : levels.map(function (n) { 
					return n < 9 ? "2d4" : (n < 13 ? "3d4" : n < 17 ? "4d4" : "5d4") + "+Cha mod"; 
				})
			},
			"enhanced weapons (prereq: promise of safety)" : {
				name : "Enhanced Weapons",
				source : ["FGM:MG", 6],
				description : "\n   " + "I can choose either one or two of my weapons or my radiant weapon" +
				"\n   " + "to grow oversized and deal an extra 1d8 damage while I am transformed.",
				prereqeval : "(/\\bpromise of safety\\b/).test(classes.known.magicalgirl.subclass)"
			},
			"elemental favor" : {
				name : "Elemental Favor",
				source : ["FGM:MG", 6],
				description : "\n   " + "I can choose acid, cold, fire, lightning, or thunder" + 
				"\n   " + "to gain resistance to. This becomes immunity at 13th level." +
				"\n   " + "In addition, my radiant weapon can deal that chosen damage instead." +
				"\n   " + "If I am the Promise of Understanding, my Radiant Blast can do the same" +
				"\n" + "Note: I must choose a different damage type if I pick this multiple times"
			},
			"elemental transformation" : {
				name : "Elemental Transformation",
				source : ["FGM:MG", 6],
				description : "I can only have one transformation effect" +
				"\n   " + "I can choose acid, cold, fire, or lightning. When I transform" +
				"\n   " + "all creatures within 10ft of me must make a Dex save against my spell DC" +
				"\n   " + "On a failure, they take 4d6 of the chosen type and half on a success" +
				"\n   " + "This increases as I level up.",
				additional : levels.map(function (n) { 
					return n < 9 ? "4d6" : (n < 13 ? "6d6" : n < 17 ? "7d6" : "8d6"); 
				})
			},
			"explosive transformation" : {
				name : "Explosive Transformation",
				source : ["FGM:MG", 6],
				description : "I can only have one transformation effect" +
				"\n   " + "When I transform, all creatures within 10ft of me must make a Con save" +
				"\n   " + "On a failure, they take 2d6 thunder dmg and are pushed back 10ft" +
				"\n   " + "On a success, they take half damage and aren't pushed back" +
				"\n   " + "This increases as I level up",
				additional : levels.map(function (n) { 
					return n < 9 ? "2d6" : (n < 13 ? "4d6" : "7d6"); 
				})
			},
			"extra magic (prereq: promise of understanding)" : {
				name : "Extra Magic",
				source : ["FGM:MG", 6],
				description : "\n   " + "I can learn two spells from any spell list" +
				"\n   " + "The spell must have a casting time of 1 action, bonus action, or reaction" +
				"\n   " + "I learn more at 9th, 13th, and 17th level.",
				additional : levels.map(function (n) { 
					return n < 9 ? "2 extra spells" : n < 13 ? "3 extra spells" : n < 17 ? "4 extra spells" : "5 extra spells"; 
				}),
				spellcastingBonus : [
				{ //for the spells gained at 9th, 13th, 17th
				name : "From any School",
				"class" : "any",
				times : [0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
				level : [1, 5], //lower and higher limit
				}],
				prereqeval : "(/\\bpromise of understanding\\b/).test(classes.known.magicalgirl.subclass)"
			},
			"fearsome transformation" : {
				name : "Fearsome Transformation",
				source : ["FGM:MG", 6],
				description : "\n   " + "All creatures within 10ft of me must make a Wis save when I transform" +
				"\n   " + "On a failure, they are frightened for a number of rounds equal to my Cha modifier" +
				"\n   " + "At the end of their turn, they can roll a new save, ending it on a success"
			},
			"finishing move (prereq: 13th level)" : {
				name : "Finishing Move",
				source : ["FGM:MG", 6],
				description : "\n   " + "Before I roll damage for a weapon or spell attack, I can declare this" +
				"\n   " + "If the creature has 1/4 or less of its max hp, it must roll a Con save" +
				"\n   " + "On a failure, the attack becomes a crit. If the creature is killed, I regain one use" +
				"\n   " + "On a success, they take normal damage.",
				action : ["action", " (part of Attack action)"],
				usage : 1,
				recovery : "long rest",
				prereqeval : "classes.known.magicalgirl.level >= 13"
			},
			"light step" : {
				name : "Light Step",
				source : ["FGM:MG", 6],
				description : "\n   " + "I can cast feather fall at will without expending a spell slot" +
				"\n   " + "While transformed, my jump speed is tripled and at 13th level, I gain a fly" +
				"\n   " + "speed equal to my walking speed while transformed",
				spellcastingBonus : {
					name : "Light Step",
					spells : ["feather fall"],
					selection : ["feather fall"]
				}
			},
			"lingering magic" : {
				name : "Lingering Magic",
				source : ["FGM:MG", 6],
				description : "\n   " + "When my transformation ends, I can still use any unwasted spell slots" +
				"\n   " + "These spell slots last until I take a short rest or transform again"
			},
			"mass appeal(prereq: promise of friendship, 9th level)" : {
				name : "Mass Appeal",
				source : ["FGM:MG", 6],
				description : "\n   " + "I can cast Dominate Person or Geas without expending a spell slot." +
				"\n   " + "I must finish a long rest after it casting it. When I reach 13th level," +
				"\n   " + "I can cast mass suggestion once per long rest while transformed.",
				prereqeval : "(/\\bpromise of friendship\\b/).test(classes.known.magicalgirl.subclass) && classes.known.magicalgirl.level >= 9"
			},
			"misty transformation" : {
				name : "Misty Transformation",
				source : ["FGM:MG", 6],
				description : "I can only have one transformation effect" +
				"\n   " + "When I transform, I summon fog in a 10ft radius that provides 3/4 cover" +
				"\n   " + "It lasts a number of rounds equal to my Cha mod or until dispersed by strong wind"
			},
			"sacrifice (prereq: 9th level)" : {
				name : "Sacrifice",
				source : ["FGM:MG", 6],
				description : "\n   " + "I learn revivify as part of my spells known list" +
				"\n   " + "I can cast it without materials or spell slots by ending my transformation" +
				"\n   " + "If I do, I must expend and roll all my hit dice, taking that much necrotic damage" +
				"\n   " + "and I can't transform again until I finish a long rest.",
				prereqeval : "classes.known.magicalgirl.level >= 9",
				spellcastingBonus : {
					name : "Sacrifice",
					spells : ["revivify"],
					selection : ["revivify"]
				}
			},
			"summoned armor" : {
				name : "Summoned Armor",
				source : ["FGM:MG", 7],
				description : "\n   " + "I can attune to a suit of armor for an hour" +
			"\n   " + "And summon it as radiant armor as part of my transformation" +
			"\n   " + "I must be proficient in the armor/it must be on the same plane"
			}
		},
		"power of friendship" : {
			name : "Power of Friendship",
			source : ["FGM:MG", 4],
			minlevel : 7,
			description : "\n   " + "I am immune to frighten/charm effects when within range of ally" +
			"\n   " + "Additonally, allies have advantage on saving throws against charm/frighten" +
			"\n   " + "when within range of me",
			additional : levels.map(function (n) {
				return n < 18 ? "30ft" : "60ft";
			}),
		},
		"strength of spirit" : {
			name : "Strength of Spirit",
			source : ["FGM:MG", 4],
			minlevel : 15,
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			description : "\n   " + "When making a saving throw other than Cha I can choose" +
			"\n   " + "to make a Cha save. I can do this a number of times equal to my Cha modifier" +
			"\n   " + "and regain all expended uses when finishing a long rest"
		},
		"promise fulfilled" : {
			name : "Promise Fulfilled",
			source : ["FGM:MG", 4],
			minlevel : 20,
			description : "\n   " + "I regain one use of transformation if I have none when rolling intiative"
		}
	}
}

AddSubClass("magicalgirl", "promise of friendship", {
	regExpSearch : /promise of friendship/i,
	subname : "Promise of Friendship",
	source : ["FGM:MG", 4],
	features : {
		"subclassfeature1" : {
			name : "Irrestible",
			source : ["FGM:MG", 4],
			minlevel : 1,
			description : "\n   " + "I add 1/2 of my prof bonus to non-proficient charisma checks" +
			"\n   " + "I have advantage on Performance and Persuasion checks while transformed",
			addMod : {
				type : "skill",
				field : "Cha",
				mod : levels.map(function (n) {
					return n < 9 ? 1 : n < 17 ? 2 : 3;
				})
			},
		},
		"subclassfeature1.1" : {
			name : "Beacon of Inspiration",
			source : ["FGM:MG", 4],
			minlevel : 1,
			description : "\n   " + "When I am transformed, I can use my reaction to add 1d4 to" +
			"\n   " + "one ability check, attack roll, or saving throw an ally makes within 30ft of me",
			action : ["reaction", ""]
		},
		"subclassfeature6" : {
			name : "Inspiring Strike",
			source : ["FGM:MG", 4],
			minlevel : 6,
			description: "\n   " + "I can give up one attack to give an ally advantage during the attack action",
			action : ["action", " (part of attack)"]
		},
		"subclassfeature10" : {
			name : "Improved Inspiration",
			source : ["FGM:MG", 4],
			minlevel : 10,
			description : "\n   " + "I can use Beacon of Inspiration if not transformed" +
			"\n   " + "Additionally, while transformed, the die becomes 1d8 instead of 1d4"
		},
		"subclassfeature14" : {
			name : "Passive Inspiration",
			source : ["FGM:MG", 4],
			minlevel : 14,
			description : "\n   " + "While transformed, creatures within 30ft of me can add 1d4" +
			"\n   " + "to one ability check, attack roll, or saving throw result they make" +
			"\n   " + "before the beginning of my next turn."
		}
	}
});

AddSubClass("magicalgirl", "promise of retribution", {
	regExpSearch : /promise of retribution/i,
	subname : "Promise of Retribution",
	source : ["FGM:MG", 5],
	features :{
		"subclassfeature1" : {
			name : "Negative Energy",
			minlevel : 1,
			source : ["FGM:MG", 5],
			description : "\n   " + "My radiant weapon now deals necrotic damage."
		},
		"subclassfeature1.1" : {
			name : "Retribution",
			minlevel : 1,
			source : ["FGM:MG", 5],
			description : "\n   " + "When a creature damages me, I gain advantage on all attack rolls against them for a minute" +
			"\n   " + "as a reaction."
		},
		"subclassfeature6" : {
			name : "Ferocity",
			minlevel : 6,
			source : ["FGM:MG", 5],
			description : "\n   " + "Once per turn, I can add my Charisma modifier to the damage roll of an attack I make."
		},
		"subclassfeature10" : {
			name : "Bathe in Blood",
			minlevel : 10,
			source : ["FGM:MG", 5],
			description : "\n   " + "When I kill an enemy with Retribution, I get temp hp equal to magical girl level + cha modifier"
		},
		"subclassfeature14" : {
			name : "Unstoppable!",
			minlevel : 14,
			source : ["FGM:MG", 5],
			description : "\n   " + "If I am reduced to 0 hp or killed while transformed, I can attempt a Con save equal to" +
			"\n   " + "5 + the damage taken. On a success, I drop to 1 hp instead."
		}
	}
});

AddSubClass("magicalgirl", "promise of safety", {
	regExpSearch : /promise of safety/i,
	subname : "Promise of Safety",
	source : ["FGM:MG", 4],
	features : {
		"subclassfeature1" : {
			name : "Weapon Training",
			source : ["FGM:MG", 4],
			minlevel : 1,
			description : "\n   " + "I am proficient with martial weapons, medium armor, and shields",
			armorProfs : [true, true, false, true],
			weapons : [true, true, false],
		},
		"subclassfeature6" : {
			name : "Skilled Charger",
			source : ["FGM:MG", 4],
			minlevel : 6,
			description : "\n   " + "If I move 20ft in a straight line before an attack roll" +
			"\n   " + "I have advantage on my next attack roll"
		},
		"subclassfeature10" : {
			name : "One Body, Two Souls",
			source : ["FGM:MG", 5],
			minlevel : 10,
			description : "\n   " + "If I am reduced to 0 hp or killed while transformed, I can end" +
			"\n   " + "my transformation to be reduced to 1 hp instead."
		},
		"subclassfeature14" : {
			name : "Purging Transformation",
			source : ["FGM:MG", 5],
			minlevel : 14,
			description : "\n   " + "I can transform as long as I am conscious, even if unable to take an action" +
			"\n   " + "If I am incapicated, paralyzed, petrified, poisoned, restrained, or stunned" +
			"\n   " + "transforming immediately ends any number of the aforementioned conditions"
		}
	}
});

AddSubClass("magicalgirl", "promise of understanding", {
	regExpSearch : /promise of understanding/i,
	subname : "Promise of Understanding",
	source : ["FGM:MG", 5],
	features : {
		"subclassfeature1" : {
			name : "Radiant Blast",
			source : ["FGM:MG", 5],
			minlevel : 1,
			description : "\n   " + "I can substitute one attack or more for the Radiant Blast attack.",
			weaponAdd : ["Radiant Blast"],
			action : ["action", " (replaces one attack)"]
		},
		"subclassfeature1.1" : {
			name : "Comprehension",
			source : ["FGM:MG", 5],
			minlevel : 1,
			description : "\n   " + "I am proficient in 2 tools, 2 languages, or 1 of each."
		},
		"subclassfeature6" : {
			name : "Radiant Salvo",
			source : ["FGM:MG", 5],
			minlevel : 6,
			description : "\n   " + "If I make two or more Radiant Blast attacks, I can make a third" +
			"\n   " + "as a bonus action.",
			action : ["bonus action", " (part of the attack action)"]
		},
		"subclassfeature10" : {
			name : "Magical Understanding",
			source : ["FGM:MG", 5],
			minlevel : 10,
			description : "\n   " + "I am proficient in Wis saves and have advantages on all saves while transformed",
			saves : ["Wis"]
		},
		"subclassfeature14" : {
			name : "Intense Radiance",
			source : ["FGM:MG", 5],
			minlevel : 14,
			description : "\n   " + "any Radiant damage I deal overcomes resistance to radiant damage"
		}
	}
});

WeaponsList["Radiant Blast"] = {
	regExpSearch : /^(?=.*radiant)(?=.*blast).*$/i,
	name : "Radiant Blast",
	source : ["FGM:MG", 5],
	ability : 6,
	list : "spell",
	type : "natural",
	damage : [1, 8, "radiant"],
	range : "60ft",
	description : "",
	abilitytodamage : true,
};