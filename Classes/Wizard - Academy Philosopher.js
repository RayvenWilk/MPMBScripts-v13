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

var iFileName = "Wizard - Academy Philosopher.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("wizard", "academy philosopher", {
	regExpSearch : /^(?=.*academy)?(?=.*philosopher).*$/i,
	subname : "Academy Philosopher",
	fullname : "Academy Philosopher",
	source : ["OotD", 338],
	features : {
		"subclassfeature2" :{
			name : "Philosophical School",
			source : ["OotD", 338],
			minlevel : 2,
			description : desc([
				"Choose a philosophical school using the \"Choose Feature\" button above",
				"I can choose another at 5th level if I first pick the Eclecticism school"
			]),
			additional : "See \"Notes\" page",
			extraname : "Philosophical School",
			extrachoices : ["Cynicism", "Eclecticism", "Empiricism", "Epicureanism", "Stoicism", "Sophism", "Hedonism", "Skepticism"],
			extraTimes : levels.map(function (n) { return n < 2 ? 0 : n < 5 ? 1 : 2; }),
			"cynicism" : {
				name : "Cynicism",
				source : ["OotD", 338],
				description : desc([
					"The gold and time required to copy spells into my spellbook is halved",
					"I can spend 10 mins to locate material spell components totalling no more than 50g"
				]),
				prereqeval : function(v) {
					var eclecticismSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).indexOf("eclecticism") >= 0;
					var thisSchool          = "cynicism";
					var schoolsSelected     = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length;
					
					return (classes.known.wizard.level >= 2 && schoolsSelected == 0) || (classes.known.wizard.level >= 5 && eclecticismSelected && schoolsSelected < 2);
				}
			},
			"eclecticism" : {
				name : "Eclecticism",
				source : ["OotD", 338],
				description : desc([
					"I learn a language of my choice",
					"At 5th level I can choose another philosophical school"
				]),
				languageProfs : [1],
				prereqeval : function(v) {
					var otherSchoolSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length > 0;

					return classes.known.wizard.level >= 2 && !otherSchoolSelected;
				}
			},
			"empiricism" : {
				name : "Empiricism",
				source : ["OotD", 338],
				description : desc([
					"I gain proficiency in the Perception skill",
					"I can cast Identify or Detect Magic once, without using a spell slot per rest"
				]),
				spellcastingBonus : [{
					name : "Philosophical School",
					spells : ["identify"],
					selection : ["identify"],
					firstCol : 'oncesr'
				}, {
					name : "Philosophical School",
					spells : ["detect magic"],
					selection : ["detect magic"],
					firstCol : 'oncesr'
				}],
				prereqeval : function(v) {
					var eclecticismSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).indexOf("eclecticism") >= 0;
					var thisSchool          = "empiricism";
					var schoolsSelected     = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length;
					
					return (classes.known.wizard.level >= 2 && schoolsSelected == 0) || (classes.known.wizard.level >= 5 && eclecticismSelected && schoolsSelected < 2);
				}
			},
			"epicureanism" : {
				name : "Epicureanism",
				source : ["OotD", 338],
				description : desc([
					"When attacked, I can use my reaction to impose disadvantage on the attack"
				]),
				action : ["reaction", ""],
				usages : "Intelligence modifier per ",
				recovery : "short rest",
				usagescalc : "event.value = Math.max(1, What('Int Mod'));",
				prereqeval : function(v) {
					var eclecticismSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).indexOf("eclecticism") >= 0;
					var thisSchool          = "epicureanism";
					var schoolsSelected     = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length;
					
					return (classes.known.wizard.level >= 2 && schoolsSelected == 0) || (classes.known.wizard.level >= 5 && eclecticismSelected && schoolsSelected < 2);
				}
			},
			"stoicism" : {
				name : "Stoicism",
				source : ["OotD", 338],
				description : desc([
					"When reduced to 0 HP, I can use a 1st-level spell slot or higher to be reduced to 1 HP"
				]),
				usages : 1,
				recovery : "short rest",
				prereqeval : function(v) {
					var eclecticismSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).indexOf("eclecticism") >= 0;
					var thisSchool          = "stoicism";
					var schoolsSelected     = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length;
					
					return (classes.known.wizard.level >= 2 && schoolsSelected == 0) || (classes.known.wizard.level >= 5 && eclecticismSelected && schoolsSelected < 2);
				}
			},
			"sophism" : {
				name : "Sophism",
				source : ["OotD", 338],
				description : desc([
					"I gain proficiency and expertise with the Persuasion skill",
					"I also gain the Friends cantrip"
				]),
				skills : [["Persuasion", "full"]],
				spellcastingBonus : {
					name : "Philosophical School",
					spells : ["friends"],
					selection : ["friends"],
					firstCol : 'atwill'
				},
				prereqeval : function(v) {
					var eclecticismSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).indexOf("eclecticism") >= 0;
					var thisSchool          = "sophism";
					var schoolsSelected     = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length;
					
					return (classes.known.wizard.level >= 2 && schoolsSelected == 0) || (classes.known.wizard.level >= 5 && eclecticismSelected && schoolsSelected < 2);
				}
			},
			"hedonism" : {
				name : "Hedonism",
				source : ["OotD", 338],
				description : desc([
					"When I gain HP from a spell/ability, I can add twice my wizard level to the HP restored"
				]),
				additional : levels.map(function (n) { return n * 2 + " HP"; }),
				usages : 1,
				recovery : "short rest",
				prereqeval : function(v) {
					var eclecticismSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).indexOf("eclecticism") >= 0;
					var thisSchool          = "hedonism";
					var schoolsSelected     = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length;
					
					return (classes.known.wizard.level >= 2 && schoolsSelected == 0) || (classes.known.wizard.level >= 5 && eclecticismSelected && schoolsSelected < 2);
				}
			},
			"skepticism" : {
				name : "Skepticism",
				source : ["OotD", 339],
				description : desc([
					"I have advantage on checks to detect visual illusions and saves imposed by them",
					"I have advantage on spells and effects that would charm me"
				]),
				vision : "Adv. to detect visual illusions",
				savetxt : {
					text : ["Adv. on saves from visual illusions"],
					adv_vs : ["charmed"]
				},
				prereqeval : function(v) {
					var eclecticismSelected = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).indexOf("eclecticism") >= 0;
					var thisSchool          = "skepticism";
					var schoolsSelected     = GetFeatureChoice("classes", "wizard", "subclassfeature2", true).length;
					
					return (classes.known.wizard.level >= 2 && schoolsSelected == 0) || (classes.known.wizard.level >= 5 && eclecticismSelected && schoolsSelected < 2);
				}
			}
		},
		"subclassfeature6" : {
			name : "Mathematical Principles",
			source : ["OotD", 339],
			minlevel : 6,
			description : desc([
				"When I cast a spell on creatures I see, I can protect Int modifier number of them",
				"The creatures automatically succeed on their saving throws vs. the spell",
				"They take no damage if they would normally take half damage on a successful save",
				"I can also increase/decrease the radius of a spell by 5 ft"
			])
		},
		"subclassfeature10" : {
			name : "Metaphysical Principles",
			source : ["OotD", 339],
			minlevel : 10,
			description : desc([
				"When a creature I see casts a spell with 1 target, I can change the target",
				"To do so I must use my reaction and pick a new legal target for the spell"
			]),
			recovery : "short rest",
			usages : 1,
			action : ["reaction", " (redirect spell)"]
		},
		"subclassfeature14" : {
			name : "Magical Paradox",
			source : ["OotD", 339],
			minlevel : 14,
			description : desc([
				"If I would lose concentration, I can choose to maintain concentration instead",
				"I can only do so if I am not incapacitated"
			]),
			usages : "Int modifier per ",
			recovery : "long rest",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));"
		}
	}
})