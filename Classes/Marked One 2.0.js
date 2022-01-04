var iFileName = "The Marked One [Created by Xenomorphy, transcribed by Seneschal].js";
RequiredSheetVersion(13.);

SourceList["X:TMO"] = {
	name : "/u/Xenomorphy000: The Marked One",
	abbreviation : "X:TMO",
	group: "Reddit/r/UnearthedArcana",
	defaultExcluded : true,
	url : "https://www.reddit.com/r/UnearthedArcana/comments/csgn33/marked_one_v23_a_dishonored_inspired_class/",
	date : "2019/08/19"
}

ClassList["themarkedone"] = {
	regExpSearch : /^(?=.*marked)(?=.*one).*$/i,
	name : "Marked One",
	source : ["X:TMO", 0],
	primaryAbility : "Charisma",
	prereqs : "",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Cha"],
	skillstxt : {
		primary : "Choose two from Acrobatics, Athletics, Insight, Intimidation, Investigation, Perception, Sleight of Hand and Stealth."
	},
	armorProfs : {
		primary : [true, false, false, false],
		secondary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["hand crossbow", "rapier", "shortsword"]],
		secondary : [true, false, ["hand crossbow", "rapier", "shortsword"]]
	},
	equipment : "Marked One starting equipment:" +
		"\n \u2022 a rapier -or- a shortsword;" +
		"\n \u2022 hand crossbow and 20 bolts -or- a shortsword;" +
		"\n \u2022 a burglar's pack -or- an explorer's pack;" +
		"\n \u2022 Leather armor and two daggers;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Void Specialization", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"the mark" : {
			name : "The Mark",
			source : ["X:TMO", 3],
			minlevel : 1,
			description : desc([
				"A mark of the void is placed somewhere easily visible on my body",
				"It can't be obscured by anything but light material (bandages, cloth, gloves, etc)",
				"It glows faintly when I use a void power, enough for observers to notice",
				"Every supernatural ability requires somatic components, not verbal or material"
			])
		},
		"void powers" : {
			name : "Void Powers",
			source : ["X:TMO", 3],
			minlevel : 1,
			description : desc([
				"I gain access to a Void Power, a mystical ability that lets me manipulate the world",
				"I start with 1 Void Power and gain more as I level up in this class.",
				"Choose a Void Power using the \"Choose Feature\" button above"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "1 Void Power" : n < 5 ? "2 Void Powers" : n < 10 ? "3 Void Powers" : n < 15 ? "4 Void Powers" : "5 Void Powers";
				}),
			extraname : "Void Power",
			extrachoices : [
				"Bend Time (prereq level 5)", "Blink", "Dark Vision", "Domino", "Doppleganger (prereq level 8)", 
				"Devouring Swarm (prereq level 5)", "Far Reach", "Mesmerize (prereq level 7)", "Possession (prereq level 10)", 
				"Shadow Walk (prereq level 10)", "Windblast (prereq level 5)"
			],
			"bend time (prereq level 5)" : {
				name : "Bend Time",
				description : desc([
					"Spend 4 Void POints to cast Haste on myself"
				]),
				source : ["X:TMO", 9],
				spellcastingBonus : {
					name : "Bend Time",
					spells : ["haste"],
					selection : ["haste"],
					prereqeval : "classes.known.themarkedone.level >= 9"
				},
			},
			"blink" : {
				name : "Blink",
				source : ["X:TMO", 9],
				description : desc([
					"Spend 1 Void Point to cast Misty Step"
				]),
				spellcastingBonus : {
					name : "Blink",
					spells : ["misty step"],
					selection : ["misty step"]
				},
				action : ["bonus action", ""]
			},
			"dark vision" : {
				name : "Dark Vision",
				description : desc([
					"Spend 1 Void Point to Darkvision on self but duration is only 1 minute."
				]),
				source : ["X:TMO", 9],
				spellcastingBonus : {
					name : "Darkvision",
					spells : ["darkvision"],
					selection : ["darkvision"]
				}
			},
			"domino" : {
				name : "Domino",
				description : desc([
					"Spend 3 void points as an action to link two creatures within 60 ft of me, 30 ft of each other.",
					"When one target takes damage, the linked takes half damage."
				]),
				source : ["X:TMO", 9],
				action : ["action", ""]
			},
			"doppleganger (prereq level 8)" : {
				name : "Doppelgänger",
				description : desc([
					"Spend 5 void points to summon a copy of yourself within 30 ft as an action.",
					"It persists for one minute or until it is killed.",
					"It treats your allies as its allies and your enemies as its enemies.",
					"I must concentrate on this ability during the duration."
				]),
				source : ["X:TMO", 9],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 8"
			},
			"devouring swarm (prereq level 5)" : {
				name : "Devouring Swarm",
				description : desc([
					"Spend 2 Void Points to summon a Swarm of Rats within 30ft of me as an action for 10 minutes.",
					"the swarm treats me and my allies as allies and my enemies as enemies."
				]),
				source : ["X:TMO", 10],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 5"
			},
			"far reach" : {
				name : "Far Reach",
				description : desc([
					"Spend 1 Void Point to be pulled to a point within 40ft of me as a bonus action.",
					"If I encounter an obstacle, I stop immediately and fall if I am in midair."
				]),
				source : ["X:TMO", 10],
				action : ["bonus action", ""]
			},
			"mesmerize (prereq level 7)" : {
				name : "Mesmerize",
				description : desc([
					"Spend 6 Void Points to summon a void spirit that enthralls 2 creatures",
					"It appears within 30ft of me and chooses two creatures within 30ft of it",
					"Each creature targeted must make a Wisdom saving throw against your void save DC",
					"On a failure, they are paralyzed for a number of rounds equal to your Cha modifier",
					"or until they are struck. Your allies are not targeted by this creature."
				]),
				source : ["X:TMO", 10],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 7"
			},
			"possession (prereq level 10)" : {
				name : "Possession",
				description : desc([
					"Spend 8 Void Points as an action to move my conscious into a beast and my boyd into the void",
					"A beast I target must roll a Wisdom Saving Throw against my Mark DC",
					"On a failure, I control where the creature moves for a number of rounds equal to",
					"your Cha modifier or until I end it early. The beast can't use any action,",
					"bonus action, or reaction other than to dash and can't communicate if it could."
				]),
				source : ["X:TMO", 10],
				action : ["action", " (begin)"],
				prereqeval : "classes.known.themarkedone.level >= 10"
			},
			"shadow walk (prereq level 10)" : {
				name : "Shadow Walk",
				description : desc([
					"Spend 8 Void Points to turn me and my equipment into a shadow.",
					"I gain the following benefits as a shadow:",
					"\u2022 Advantage on all stealth checks.",
					"\u2022 Unable to do verbal or somatic components.",
					"\u2022 The special Shadow Attack Action.",
					"\u2022 Resistance to bludgeoning, piercing, slashing damage",
					"Once a minute has passed or I have used a shadow attack, the shadow form ends."
				]),
				source : ["X:TMO", 11],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 10",
				weaponOptions : {
					rexExpSearch : /shadow atack/i,
					name : "Shadow Attack",
					source : ["X:TMO", 11],
					list : "themarkedone",
					ability : 2,
					damage : [6, 6, "necrotic"],
					range : "melee",
					abilitytodamage : false
				},
				weaponsAdd : ["Shadow Attack"]
			},
			"windblast (prereq level 5)" : {
				name : "Windblast",
				description : desc([ 
					"Spend 4 Void Points to create 15 ft cone gust of wind",
					"All creatures in cone make a strength saving throw",
					"On failure, 4d6 bludgeoning damage, pushed back 10ft",
					"On success, creatures takes half damage, isn't pushed back",
					"Objects are knocked away and take double damage."
				]),
				source : ["X:TMO", 11],
				action : ["action", ""],
				prereqeval : "classes.known.themarkedone.level >= 5",
				weaponOptions : {
					rexExpSearch : /windblast/i,
					name : "Windblast",
					source : ["X:TMO", 11],
					list : "the marked one",
					damage : [4, 6, "bludgeoning"],
					range : "15 ft cone",
					ability : 6,
					abilitytoDamage : false,
					dc : true
				},
				weaponsAdd : ["windblast"]
			}
		},
		"void points" : {
			name : "Void Points",
			source : ["X:TMO", 4],
			minlevel : 1,
			usages : [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24],
			description : desc([ 
				"I can use Void Points to activate a Void Power",
				"These increase per Marked One level and recharge on a short or long rest",
				"DC for any Void Saves is 8 + Cha modifier + my proficiency"
			]),
			recovery : "short rest"
		},
		"enhanced traversal" : {
			name : "Enhanced Traversal",
			source : ["X:TMO", 4],
			minlevel : 1,
			description : desc([
				"My movement speed is increased by 10 feet",
				"I can reduce fall damage by three times my Marked One class"
			]),
			action : ["reaction", ""],
			additional : levels.map(function (n) {
				return n*3 + " damage reduced";
			}),
			speed : {
				allModes : "+10"
			}
		},
		"enhanced strength" : {
			name : "Enhanced Strength",
			source : ["X:TMO", 4],
			minlevel : 2,
			description : desc([
				"I can make a running high/long jump without moving prior",
				"My high and long jump distance is increased by a number of feet equal to 2 x my Prof mod" 
			]),
		},
		"blood thirst" : {
			name : "Blood Thirst",
			source : ["X:TMO", 4],
			minlevel : 2,
			description : desc([ 
				"After activating a Void Power, I have adv. on my next attack roll."
			])
		},
		"subclassfeature3" : {
			name : "Void Specialization",
			source : ["X:TMO", 4],
			minlevel : 3,
			description : desc([ 
				"Choose a Void Specialization I strive to emulate and put it in the \"Class\" field",
				"Choose either Void Knife or Bone Crafter"
			])
		},
		"void upgrades" : {
			name : "Void Upgrades",
			source : ["X:TMO", 4],
			minlevel : 3,
			description : desc([ 
				"I get enhancements to my void powers as I level up.",
				"Each time I level up, I can learn a new void power and replace one",
				"I would know at my level."
			]),
			additional : levels.map(function (n) {
				return n < 5  ? "1 Void Upgrade" : n < 7 ? "2 Void Powers" : n < 9 ? "3 Void Powers" : n < 11 ? "4 Void Powers" : n < 13 ? "5 Void Powers" : n < 15 ? "6 Void Powers" : n < 17 ? "8 Void Powers" : n < 19 ? "9 Void Powers" : "10 Void Powers";
			}),
			extraname : "Void Upgrades",
			extrachoices : [
				"Lasting Bend Time (Prereq: Bend Time)", "Relativity (Prereq: Bend Time)", "Stop Time (Prereq: Level 17 & Bend Time)",
				"Blink Assault (Prereq: Blink)", "Greater Blink (Prereq: Blink)", "Redirective Blink (Prereq: Blink)", "Greater Dark Vision (Prereq: Dark Vision)",
				"Premonition (Prereq: Dark Vision && Greater Dark Vision)", "Link Three (Prereq: Domino)", "Link Four (Prereq: Domino && Link Three)",
				"Deadly Shade (Prereq: Doppleganger)", "Twin Shades (Prereq: Doppleganger)", "Transposition (Prereq: Doppleganger)",
				"Greater Swarm (Prereq: Devouring Swarm)", "Twin Swarms (Prereq: Devouring Swarm)", "Pull Objects And Creatures (Prereq: Far Reach)",
				"Decelerate (Prereq: Far Reach)", "Lasting Mesmerize (Prereq: Mesmerize)", "Mesmerize Three (Prereq: Mesmerize)", 
				"Mesmerize Four (Prereq: Mesmerize And Mesmerize Three)", "Chain Hosts (Prereq: Possession)", "Humanoid Possession (Prereq: Possession)",
				"Lasting Possession (Prereq: Possession)", "Improved Shadow Attack (Prereq: Shadow Walk)", "Greater Shadow Attack (Prereq: Shadow Walk And Improved Shadow Attack)",
				"Shadow Movement (Prereq: Shadow Walk)", "Greater Windblast (Prereq: Windblast)", "Shockwave (Prereq: Windblast)"
			],
			"lasting bend time (prereq: bend time)" : {
				name : "Lasting Bend Time",
				source : ["X:TMO", 9],
				description : desc([ 
					"Duration for Bend Time haste increased to 10 minutes"
				]),
				prereqeval : "classes.known.themarkedone.level >= 17" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('bend time (prereq level 5)') != -1; 
				}
			},
			"relativity (prereq: bend time)" : {
				name : "Relativity",
				source : ["X:TMO", 9],
				description : desc(["I have advantage on saves to keep concentration on Haste by Bend Time"]),
				prereqeval : "classes.known.themarkedone.level >= 17" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('bend time (prereq level 5)') != -1; 
				}
			},
			"stop time (prereq: level 17 & bend time)" : {
				name : "Stop Time",
				source : ["X:TMO", 9],
				description : desc(["I can pay an extra 6 Void Points to cast Time Stop with Bend Time"]),
				prereqeval : "classes.known.themarkedone.level >= 17" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('bend time (prereq level 5)') != -1
				},
				spellcastingBonus : {
					name : "Stop Time",
					spells : ["time stop"],
					selection : ["time stop"]
				}
			},
			"blink assault (prereq: blink)" : {
				name : "Blink Assault",
				source : ["X:TMO", 9],
				description : desc([
					"Hitting an enemy of my size or smaller with a melee weapon",
					"within a round after blinking also knocks them prone."
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('blink') != -1; 
				}
			},
			"greater blink (prereq: blink)" : {
				name : "Greater Blink",
				source : ["x:TMO", 9],
				description : desc(["Range of Misty Step cast by Blink increases to 60 ft"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('blink') != -1; 
				}
			},
			"redirective blink (prereq: blink)" : {
				name : "Redirective Blink",
				source : ["X:TMO", 9],
				description : desc(["I can use blink in reaction to being attacked or spotted while stealthed"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('blink') != -1; 
				},
				action : ["reaction", ""]
			},
			"greater dark vision (prereq: dark vision)" : {
				name : "Greater Dark vision",
				source : ["X:TMO", 9],
				description : desc([
					"I can spend an extra void point allows me to see living creatures through walls and objects ",
					"This occurs while dark vision is active out to a range of 30 feet."
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('dark vision') != -1; 
				}
			},
			"premonition (prereq: dark vision && greater dark vision)" : {
				name : "Premonition",
				source : ["X:TMO", 9],
				description : desc([
					"While Greater Dark Vision is active, I have advantage on stealth checks and can see the path enemies will take"
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('dark vision') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('greater dark vision (prereq: dark vision)') != -1;
				}
			},
			"link three (prereq: domino)" : {
				name : "Link Three",
				source : ["X:TMO", 9],
				description : desc(["The number of targets I can link increases to 3"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('domino') != -1
				}
			},
			"link four (prereq: domino && link three)" : {
				name : "Link Four",
				source : ["X:TMO", 9],
				description : desc(["The number of targets I can link increases to 4"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('domino') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('link three') != -1;
				}
			},
			"deadly shade (prereq: doppleganger)" : {
				name : "Deadly Shade",
				source : ["X:TMO", 9],
				description :  desc(["My doppleganger can attack twice, instead of once, on each one of it's turns"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('doppleganger (prereq level 8)') != -1
				}
			},
			"twin shades (prereq: doppleganger)" : {
				name : "Twin Shades",
				source : ["X:TMO", 9],
				description :  desc(["I can spend an extra 2 void points to summon two doppelgängers at once"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('doppleganger (prereq level 8)') != -1
				}
			},
			"transposition (prereq: doppleganger)" : {
				name : "Transposition",
				source : ["X:TMO", 10],
				description : desc([ "As a bonus action, I switch places with an existing doppelgänger."]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('doppleganger (prereq level 8)') != -1
				},
				action : ["bonus action", ""]
			},
			"greater swarm (prereq: devouring swarm)" : {
				name : "Greater Swarm",
				source : ["X:TMO", 10],
				description : desc([ "I summon more rats in the swarm, giving it 20 more hitpoints."]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('devouring swarm (prereq level 5)') != -1
				}
			},
			"twin swarms (prereq: devouring swarm)" : {
				name : "Twin Swarm",
				source : ["X:TMO", 10],
				description : desc([ "I can summon two smaller rat swarms, each having half the max hp of the bigger swarm"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('devouring swarm (prereq level 5)') != -1
				}
			},
			"pull objects and creatures (prereq: far reach)" : {
				name : "Pull Objects and Creatures",
				source : ["X:TMO", 10],
				description : desc([
					"I can target objects and creatures one size larger or smaller than me within range",
					"If I do, the target is pulled towards me.",
					"A creature must make a Dex save against my Void Save DC or be pulled next to me and knocked prone on a failure"
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('far reach') != -1
				}
			},
			"decelerate (prereq: far reach)" : {
				name : "Decelerate",
				source : ["X:TMO", 10],
				description : desc([ "I can use far reach as a reaction to grab onto the surface I fell from"]),
				action : ["reaction", ""],
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('far reach') != -1
				}
			},
			"lasting mesmerize (prereq: mesmerize)" : {
				name : "Lasting Mesmerize",
				source : ["X:TMO", 10],
				description : desc([ "Mesmerize lasts a number of rounds equal to double my Cha modifier"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize (prereq level 7)') != -1
				}
			},
			"mesmerize three (prereq: mesmerize)" : {
				name : "Mesmerize Three",
				source : ["X:TMO", 10],
				description :  desc(["Mesmerize can target up to 3 people"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize (prereq level 7)') != -1
				}
			},
			"mesmerize four (prereq: mesmerize and mesmerize three)" : {
				name : "Mesmerize Four",
				source : ["X:TMO", 10],
				description : desc([ "Mesmerize can target up to 4 people"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize (prereq level 7)') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('mesmerize four (prereq: mesmerize and mesmerize three)') != -1;
				}
			},
			"chain hosts (prereq: possession)" : {
				name : "Chain Hosts",
				source : ["X:TMO", 11],
				description : desc([ 
					"I can spend one Void Point when possession ends to switch to another target",
					"The second target must be within 30ft of the first host at the moment of switching"
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession (prereq level 10)') != -1;
				}
			},
			"humanoid possession (prereq: possession)" : {
				name : "Humanoid Possession",
				source : ["X:TMO", 11],
				description : desc([ "I can target humanoids with Possession"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession (prereq level 10)') != -1;
				}
			},
			"lasting possession (prereq: possession)" : {
				name : "Lasting Possession",
				source : ["X:TMO", 11],
				description : desc([ "The possession now lasts a number of rounds equal to double my Cha modifier"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession (prereq level 10)') != -1;
				}
			},
			"improved shadow attack (prereq: shadow walk)" : {
				name : "Improved Shadow Attack",
				source : ["X:TMO", 11],
				description : desc([ "I can use shadow attack twice before my shadow form ends"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk (prereq level 10)') != -1;
				}
			},
			"greater shadow attack (prereq: shadow walk and improved shadow attack)" : {
				name : "Greater Shadow Attack",
				source : ["X:TMO", 11],
				description : desc([ "I can use Shadow Attack three times before my shadow form ends"]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk (prereq level 10)') != -1 && GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('improved shadow attack (prereq: shadow walk)') != -1;
				}
			},
			"shadow movement (prereq: shadow walk)" : {
				name : "Shadow Movement",
				source : ["X:TMO", 11],
				description : desc([ 
					"While in shadow form, I gain the following benefits",
					"I can move through spaces as narrow as 1 inch without squeezing",
					"My movement speed increases by 10ft"
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk(prereq level 10)') != -1;
				}
			},
			"greater windblast (prereq: windblast)" : {
				name : "Greater Windblast",
				source : ["X:TMO", 11],
				description : desc([
					"I can spend an extra 2 Void Points to have Windblast deal an extra",
					"6d6 bludgeoning damage and push an enemy back 20ft on a failure"
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('windblast(prereq level 5)') != -1;
				}
			},
			"shockwave (prereq: windblast)" : {
				name : "Shockwave",
				source : ["X:TMO", 11],
				description : desc([
					"I can use Windblast as a reaction against a ranged attack",
					"It increases my AC by 5 against all ranged attacks until the end of my turn"
				]),
				prereqeval : function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('windblast(prereq level 5)') != -1;
				},
				action : ["reaction", ""],
			}
		},
		"expertise" : {
			name : "Expertise",
			source : ["X:TMO", 4],
			minlevel : 6,
			description : desc(["I can choose two skills to get double my proficiency bonus in"]),
			skillstxt : "Expertise in two skills"
		},
		"deflect" : {
			name : "Deflect",
			source : ["X:TMO", 4],
			minlevel : 7,
			description : desc([ "When a creature attacks me, I can use my reaction to add my proficiency bonus to my AC"]),
			action : ["reaction", ""]
		},
		"void refill" : {
			name : "Void Refill",
			source : ["X:TMO", 4],
			minlevel : 10,
			description : desc([ 
				"As an action, I can regain 4 of my Void Points but must make a DC 10 Con save",
				"On a failure, I take 1 point of exhaustion",
				"After I use this feature once, the DC increases by 5 for each subsequent use",
				"The DC sets after I complete a long rest"
			]),
			action : ["action", ""]
		},
		"evasion" : {
			name : "Evasion",
			source : ["X:TMO", 5],
			minlevel : 11,
			description : desc([
				"My Dexterity saves vs. areas of effect negate damage on success and halve it on failure"
			]),
			savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
		},
		"whispers of the void" : {
			name : "Whispers of the Void",
			source : ["X:TMO", 5],
			minlevel : 14,
			description : desc([
				"I can cast detect thoughts without any verbal or material components",
				"I can use this feature a number of times equal to my Cha modifier",
				"I regain all uses after I finish a long rest"
			]),
			spellcastingBonus : {
				name : "Whispers of the Void",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"]
			},
			action : ["action", ""],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		},
		"improved blood thirst" : {
			name : "Improved Blood Thirst",
			source : ["X:TMO", 5],
			minlevel : 15,
			description : desc([ 
				"In addition to normal Blood Thirst, I get one free attack with a Void Power",
				"This attack also has advantage"
			]),
		},
		"improved void refill" : {
			name : "Improved Void Refill",
			source : ["X:TMO", 5],
			minlevel : 18,
			description : desc([ "The base DC for Void Refill is now 5"])
		},
		"body of the void" : {
			name : "Body of the Void",
			source : ["X:TMO", 5],
			minlevel : 20,
			description : desc([ "My Dex and Cha increase by 2 to a new max of 22"]),
			scores : [0, 2, 0, 0, 0, 2],
			scoresMaximum : [0, 22, 0, 0, 0, 22]
		}
	}
}

AddSubClass("themarkedone", "void knife", {
	regExpSearch : /^(?=.*void)(?=.*knife).*$/i,
	subname : "Void Knife",
	source : ["X:TMO", 5],
	fullname : "Void Knife of the Marked One",
	features : {
		"subclassfeature3" : {
			name : "Death Blow",
			source : ["X:TMO", 5],
			minlevel : 3,
			description : desc([ 
				"If I hit a surprised enemy, I deal damage equal to a number of d6 equal to",
				"double my proficiency mod once per round.",
				"I get proficiency in stealth or one Marked One skill if already proficient."
			]),
			skills : ["Stealth"],
			skillstxt : "Proficiency in stealth; choose one Marked One skill if already proficient",
		},
		"subclassfeature9" : {
			name : "Enhanced Reflexes",
			source : ["X:TMO", 5],
			minlevel : 9,
			description : desc([ "I have adv. on initiative and can use 2 reactions per round"]),
			action : ["reaction", " (2 reactions per round)"]
		},
		"subclassfeature13" : {
			name : "Shadow Kill",
			source : ["X:TMO", 6],
			minlevel : 13,
			description : desc([
				"Killing a surprised enemy turns their body to ash, leaving behind magical equipment.",
				"Their body and soul is sent to the void during this instance."
			]),
		},
		"subclassfeature17" : {
			name : "Void Step",
			source : ["X:TMO", 6],
			minlevel : 17,
			description : desc([
				"As a bonus action, I can step into the void, taking no action to leave as well",
				"While in the void, I can only interact with creatures on that plane and creatures can't see me",
				"This doesn't apply if they have a special ability that allows them to see me such as truesight",
				"I ignore all objects and effects not in the void and can see 60ft into the plane I came from",
				"At the end of my turn, I am taken out of the Void at my current position.",
				"If I am in an object, I am pushed out to the nearest empty space taking 1d10 force dmg per 5 ft",
				"The first creature I attack after coming out of the void counts as surprised.",
			]),
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (begin)"]
		}
	}
});

AddSubClass("themarkedone", "bone crafter", {
	regExpSearch : /^(?=.*bone)(?=.*crafter).*$/i,
	subname : "Bone Crafter",
	source : ["X:TMO", 6],
	fullname : "Bone Crafter of the Marked One",
	features : {
		"subclassfeature3" : {
			name : "Bonecrafting",
			source : ["X:TMO", 6],
			minlevel : 3,
			description : desc([ "During a long rest, I can craft a bonecharm with 15gp of material per trait",
				"I can only use one trait among all the bonecharms I possess",
				"If I already have a bonecharm of novice, adept, or master, a new one turns the old to ash",
				"I am the only one who can benefit from bone charms",
				"They are destroyed and turned to ash if they are off me for an hour",
				"Enhanced versions of each trait aren't unlocked until level 17"
			]),
			extraname : "Bone Traits",
			extrachoices : [
				"Acrobat (Novice)", "Adrenaline Surge (Novice)", "Agile Recovery (Novice)", "Aquatic Nature (Novice)", 
			"Imbue Void (Novice)", "Strong Lungs (Novice)", "Swift Shadow (Novice)", "Swift Stalker (Novice)", 
			"Agile Will (Adept & Prereq: Possession)", "Elemental Resistance (Adept)", "Enduring Allies (Adept & Prereq: Doppleganger)", 
			"Resilient Power (Adept & Prereq: Doppleganger)", "Robust (Adept)", "Shadow Embrace (Adept & Prereq: Shadow Walk)",
			"Spirited (Adept)", "Syngeric Swarm (Adept & Prereq: Devouring Swarm)", "Unsteady Hand (Adept)", "Arcane Bypass (Master)",
			"Falling Star (Master)", "Redirection (Master & Prereq: Windblast & Shockwave)", "Stoneskin (Master)",
			"Void Armor (Master)", "Void Favor (Master)", "Void Rapture (Master & Prereq: Mesmerize)"
		],
			"acrobat (novice)" : {
				name : "Acrobat",
				source : ["X:TMO", 7],
				description : desc([
					"I have a climbing speed equal to my movement speed",
					"If I end my turn on a vertical surface or the ceiling without something to grab onto, I fall"
				]),
				speed : {
					climb : { spd : "walk", enc : 0 }
				}
			},
			"adrenaline surge (novice)" : {
				name : "Adrenaline Surge",
				source : ["X:TMO", 7],
				description : desc([
					"I gain 5 temp hp when I reduce an enemy to 0 hp",
					"\t Enhanced version: For each additional trait I have increase temp hp gained by 5"
				])
			},
			"agile recovery (novice)" : {
				name : "Agile Recovery",
				source : ["X:TMO", 7],
				description : desc([
					"Damage reduction from Enhanced Traversal increases to 5 times marked one level.",
					"\t Enhanced version: Increase multiple for each time this trait is activated to a max of 4"
				]),
				additional : levels.map(function (n) {
					return (n*5) + " damage" + ";" + (n*6) + " damage" + ";" + (n*7) + " damage" + ";" + (n*8) + " damage" + ";" + (n*9) + " damage";
				})
			},
			"aquatic nature (novice)" : {
				name : "Aquatic Nature",
				source : ["X:TMO", 6],
				description : desc([ "I can swimming speed equal to my walking speed"]),
				speed : { swim : { spd : "walk", enc : 0 }}
			},
			"imbue void (novice)" : {
				name : "Imbue Void",
				source : ["X:TMO", 6],
				description : desc([
					"My weapon attacks count as magical for the purpose of overcoming resistances",
					"\t  Enhanced version: +1 bonus to attack and damage per trait"
				])
			},
			"strong lungs (novice)" : {
				name : "Strong Lungs",
				source : ["X:TMO", 6],
				description : desc([ "I can hold my breath for an hour."])
			},
			"swift shadow (novice)" : {
				name : "Swift Shadow",
				source : ["X:TMO,", 6],
				description : desc([ "I can travel at a normal pace while still using stealth"])
			},
			"swift stalker (novice)" : {
				name : "Swift Stalker",
				source : ["X:TMO", 6],
				description : desc([ "I can travel at fast pace without penalty to my passive perception"])
			},
			"agile will (adept & prereq: possession)" : {
				name : "Agile Will",
				source : ["X:TMO", 6],
				description : desc([ "My possession lasts double my cha mod and triple with Lasting Posession"]),
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession (prereq level 10)') != -1
				}
			},
			"elemental resistance (adept)" : {
				name : "Elemental Resistance",
				source : ["X:TMO", 6],
				description : desc([ "I gain resistance to either acid, cold, fire, lightning, or thunder"]),
				savetxt : {text : ["Resistance to choice of either acid, cold, fire, lightning, or thunder"] }
			},
			"enduring allies (adept & prereq: doppleganger)" : {
				name : "Enduring Allies",
				source : ["X:TMO", 6],
				description : desc([ "My doppleganger now lasts for two minutes"]),
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession (prereq level 10)') != -1
				}
			},
			"resilient power (adept & prereq: doppleganger)" : {
				name : "Resilient Power",
				source : ["X:TMO", 6],
				description : desc([ "my doppleganger gets 20 more hitpoints"]),
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('possession (prereq level 10)') != -1
				}
			},
			"robust (adept)" : {
				name : "Robust",
				source : ["X:TMO", 6],
				description : desc([ 
					"Healing potions heal an extra amount equal to my Cha modifier",
					"\t Enhanced Version: For each robust trait, additional healing increased by Cha modifier"
				])
			},
			"shadow embrace (adept & prereq: shadow walk)" : {
				name : "Shadow Embrace",
				source : ["X:TMO", 8],
				description : desc([ "My shadow form lasts for two minutes"]),
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('shadow walk (prereq level 10)') != -1
				}
			},
			"spirited (adept)" : {
				name : "Spirited",
				soruce : ["X:TMO", 8],
				description : desc([ "My void refill grants an extra 2 Void Points when used"])
			},
			"syngeric swarm (adept & prereq: devouring swarm)" : {
				name : "Syngeric Swarm",
				source : ["X:TMO", 8],
				description : desc([ "My rat swarm lasts for twenty minutes"]),
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('devouring swarm (prereq level 5)') != -1
				}
			},
			"unsteady hand (adept)" : {
				name : "Unsteady Hand",
				source : ["X:TMO", 8],
				description : desc([
					"I can cast counterspell at 5th level once per long rest",
					"\t Enhanced Version: For each trait, I get an additional use of Unsteady Hand"
				]),
				spellcastingBonus : {
					name : "Unsteady Hand",
					spells : ["counterspell"],
					selection : ["counterspell"]
				}
			},
			"arcane bypass (master)" : {
				name : "Arcane Bypass",
				source : ["X:TMO", 8],
				description : desc([
					"I advantage on my choice of Str, Dex, Con, Int, Wis, Cha saves",
					"\t Enhanced Version: For each trait, I gain an additional choice"
				])
			},
			"falling star (master)" : {
				name : "Falling Star",
				source : ["X:TMO", 8],
				description : desc([
					"I gain a Void Point for bringing a creature to 0 hp",
					"\t Enhanced Version: For each trait, add an additional Void Point"
				])
			},
			"redirection (master & prereq: windblast & shockwave)" : {
				name : "Redirection",
				source : ["X:TMO", 8],
				description : desc([
					"If a ranged attack misses me with shockwave, I can redirect it",
					"I use the attack roll of the attacker against him, dealing 3d6 weapon damage",
					"\t Enhanced Version: For each trait, add an additional d6"
				]),
				prereqeval : "classes.known.themarkedone.level >= 9" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('windblast (prereq level 5)') != -1
					&& GetFeatureChoice('class', 'themarkedone', 'void upgrades', true).indexOf('shockwave (prereq: windblast)') != -1
				}
			},
			"stoneskin (master)" : {
				name : "Stoneskin",
				source : ["X:TMO", 8],
				description : desc([ "I have resistance to bludgeoning, piercing, and slashing damage"]),
				dmgres : [["Bludgeoning", "Bludgeon."], ["Piercing", "Piercing"], ["Slashing", "Slashing"]],
			},
			"void armor (master)" : {
				name : "Void Armor",
				source : ["X:TMO", 8],
				description : desc([
					"I gain +1 AC",
					"\t Enhanced Version: For each trait, add +1 to AC"
				])
			},
			"void favor (master)" : {
				name : "Void Favor",
				source : ["X:TMO", 8],
				description : desc([
					"10% chance to not spend Void Points when using Void Power",
					"\t Enhanced Version: For each trait, add 2%"
				]),
			},
			"void rapture (master & prereq: mesmerize)" : {
				name : "Void Rapture",
				source : ["X:TMO", 8],
				description : desc([
					"When I cast Mesmerize, I cast 3rd level sleep on each person affected",
					"\t Enhanced Version: For each trait, increase sleep level by 2."
				]),
				prereqeval : "classes.known.themarkedone.level >= 13" && function(v) {
					return GetFeatureChoice('class', 'themarkedone', 'void powers', true).indexOf('mesmerize (prereq level 7)') != -1
				},
				spellcastingBonus : {
					name : "Void Rapture",
					spells : ["sleep"],
					selection : ["sleep"]
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Novice Bonecrafter",
			source : ["X:TMO", 6],
			minlevel : 3,
			description : desc([
				"I can place novice traits on my bonecharm",
				"The max number of traits on a bonecharm I can have is 2"
			])
		},
		"subclassfeature9" : {
			name : "Adept Bonecrafter",
			source : ["X:TMO", 6],
			minlevel : 9,
			description : desc([
				"I can place adept traits on my bonecharm",
				"The max number of traits on a bonecharm I can have is 3"
			])
		},
		"subclassfeature13" : {
			name : "Master Bonecrafter",
			source : ["X:TMO", 6],
			minlevel : 13,
			description : desc([
				"I can place master traits on my bonecharm",
				"The max number of traits on a bone charm I can have is 4"
			])
		},
		"subclassfeature17" : {
			name : "Bone Synergy",
			source : ["X:TMO, 6"],
			minlevel : 17,
			description : desc([
				"I can use the same trait up to 4 times, making it enhanced",
				"I can craft a bonecharm that uses Novice, Adept, and Master traits",
				"I can only have one bonecharm of that type on me at a time"
			])
		}
	}
});