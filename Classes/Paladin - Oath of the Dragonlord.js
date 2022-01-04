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

var iFileName = "Something[transcribed by rayvenwilk].js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

if (!ClassList.artificer) {
	ClassList.paladin.artificerCompFunc = {
		add : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefix = false;
			if (AScompA) {
				for (var a = 1; a < AScompA.length; a++) {
					if (!What(AScompA[a] + 'Comp.Race')) {
						prefix = AScompA[a];
						break;
					}
				}
			}
			if (!prefix) prefix = DoTemplate('AScomp', 'Add');
			Value(prefix + 'Comp.Race', compName);
			var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
			CurrentUpdates.types.push("notes");
			if (!CurrentUpdates.notesChanges) {
				CurrentUpdates.notesChanges = [changeMsg];
			} else {
				CurrentUpdates.notesChanges.push(changeMsg);
			}
			return prefix;
		},
		remove : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			if (!AScompA) return;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					DoTemplate("AScomp", "Remove", AScompA[a], true);
				}
			}
		},
		find : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefixes = [];
			if (!AScompA) return prefixes;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) prefixes.push(AScompA[a]);
			}
			return prefixes;
		}
	}
};

ClassList.paladin.paladinCompFunc = {
	update : function(paladinLevel, dragonType) {
		if(paladinLevel >= 15) {
			var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
			
			companionFunctions.remove(dragonType + ' dragon wyrmling');
			
			var youngDragonName = 'Young ' + dragonType + ' Dragon';
			var prefix          = false;
			var crea            = companionFunctions.find('young ' + dragonType + ' dragon');
			
			if(crea.length > 0) {
				prefix = crea[0];
			}
			else {
				prefix = companionFunctions.add(youngDragonName);
			}
			
			Value(prefix + "Comp.Use.Attack.perAction", 1);
			ReplaceString(prefix + "Comp.Use.Traits", "on Long Rest", false, "5-6", false);
			
			var youngDragonNote = "Young Dragon (Oath of the Dragonlord, OotD 333)" + desc([
				"I can use the " + youngDragonName + " as a mount",
				"While mounted, I gain its damage resistances/immunities, blindsight, darkvision, and passive perception"
			]);
			
			if(paladinLevel == 20) {
				Value(prefix + "Comp.Use.Attack.perAction", 3);
				
				ReplaceString(prefix + "Comp.Use.Traits", "5-6", false, "on Long Rest", false);
				
				youngDragonNote += "\nUnbreakable Bond (Oath of the Dragonlord, OotD 333)" + desc([
					"My " + youngDragonName + " can now use its Multiattack",
					"Its breath weapon now recharges as normal",
					"When it fails a saving throw, I can choose to have it succeed instead"
				]);
			}
			
			Value(prefix + 'Cnote.Left', youngDragonNote);
		}
	},
	capitalize : function(dragonType) {
		return dragonType.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
	}
};

AddSubClass("paladin", "oath of the dragonlord", {
	regExpSearch : /^(((?=.*dragon(lord)?)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of the Dragonlord",
	source : ["OotD", 330],
	features : {
		"subclassfeature3" : {
			name : "Pseudodragon Familiar",
			additional : "See third page notes",
			source : ["OotD", 330],
			minlevel : 3,
			spellcastingExtra : ["hunter's mark", "find familiar", "gust of wind", "levitate", "fly", "haste", "freedom of movement", "stoneskin", "hold monster", "telepathic bond"],
			spellChanges : {
				"find familiar" : {
					description : "I summon a pseudodragon that can smell dragon eggs within 1 mile. Otherwise follows normal rules.",
					changes : "I can only summon a pseudodragon with the Find Familiar spell."
				}
			},
			extraname : "Oath of the Dragonlord 3",
			"pseudodragon familiar" : {
				name : "Pseudodragon Familiar",
				source : ["OotD", 330],
				description : desc([
					"My familiar's main purpose is to locate a dragon egg",
					"It can smell dragons eggs if they are within 1 mile",
					"If it hasn't found one by 6th level it spends 3d6 looking for one",
					"After which it with returns with a brass, bronze, copper, or silver egg (my choice)",
					"It will search for another egg if mine is not lost or destroyed deliberately",
					"If deliberately lost or destroyed it will not find another egg for me"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "pseudodragon familiar" }]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Dragon's Wrath",
			additional : "DC 14",
			source : ["OotD", 330],
			minlevel : 3,
			description : desc([
				"As an action I can make each creature of my choice within 60ft make a Wisdom save",
				"On a failure they are frightened for 1min; repeat saves at end of their turn to end it"
				]),
			action : ["action", ""]
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Scorn the Unworthy",
			source : ["OotD", 330],
			minlevel : 3,
			description : desc([
				"As an action I can make Large and smaller enemies within 30ft make a Charisma save",
				"On a failure, they are knocked prone and lose concentration"
			]),
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Dragonlord's Bond",
			source : ["OotD", 333],
			minlevel : 7,
			description : desc([
				"I can cast Bond of the Dragonlords without requiring material components",
				"I can cast Dirge of the Dragonlords without requiring material components"
			]),
			spellChanges : {
				"bond of the dragonlords" : {
					compMaterial : "",
					changes : "Using Dragonlord's Bond, I can cast Bond of the Dragonlords without requiring material components."
				},
				"dirge of the dragonlords" : {
					compMaterial : "",
					changes : "Using Dragonlord's Bond, I can cast Dirge of the Dragonlords without requiring material components."
				}
			}
		},
		"subclassfeature7.1" : {
			name : "Dragon Type",
			source : ["OotD", 333],
			minlevel : 7,
			description : desc([
				"My dragon egg hatches; See third page notes"
			]),
			choices : ["Brass", "Bronze", "Copper", "Silver"],
			"brass" : {
				name : "Brass Dragon",
				description : desc(["My dragon egg hatches into a Brass Dragon Wyrmling; See third page notes"]),
				eval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.add("Brass Dragon Wyrmling");
				},
				removeeval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.remove("Brass Dragon Wyrmling");
					companionFunctions.remove("Young Brass Dragon");
				}
			},
			"bronze" : {
				name : "Bronze Dragon",
				description : desc(["My dragon egg hatches into a Bronze Dragon Wyrmling; See third page notes"]),
				eval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.add("Bronze Dragon Wyrmling");
				},
				removeeval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.remove("Bronze Dragon Wyrmling");
					companionFunctions.remove("Young Bronze Dragon");
				}
			},
			"copper" : {
				name : "Copper Dragon",
				description : desc(["My dragon egg hatches into a Copper Dragon Wyrmling; See third page notes"]),
				eval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.add("Copper Dragon Wyrmling");
				},
				removeeval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.remove("Copper Dragon Wyrmling");
					companionFunctions.remove("Young Copper Dragon");
				}
			},
			"silver" : {
				name : "Silver Dragon",
				description : desc(["My dragon egg hatches into a Silver Dragon Wyrmling; See third page notes"]),
				eval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.add("Silver Dragon Wyrmling");
				},
				removeeval : function () {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.remove("Silver Dragon Wyrmling");
					companionFunctions.remove("Young Silver Dragon");
				}
			},
			extraname : "Oath of the Dragonlord 7",
			"dragonlord's bond" : {
				name : "Dragonlord's Bond",
				source : ["OotD", 330],
				description : desc([
					"My dragon egg hatches into a wyrmling with HP equal to 40 + twice my Paladin level",
					"It also adds my proficiency bonus to its saving throws",
					"I must cast Bond of the Dragonlords within 24h of it hatching to bond with it",
					"If it hasn't found one by 6th level it spends 3d6 looking for one",
					"After which it with returns with a brass, bronze, copper, or silver egg (my choice)",
					"It will search for another egg if mine is not lost or destroyed deliberately",
					"If deliberately lost or destroyed it will not find another egg for me"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "dragonlord's bond" }]
		},
		"subclassfeature15" : {
			name : "Young Dragon",
			source : ["OotD", 333],
			minlevel : 15,
			additional : "See third page notes",
			description : desc([
				"My wyrmling grows into a young dragon"
			]),
			extraname : "Oath of the Dragonlord 15",
			"young dragon" : {
				name : "Young Dragon",
				source : ["OotD", 333],
				description : desc([
					"My dragon egg grows into a young dragon and can be used as a mount",
					"While mounted on a dragon I gain its damage resistances and immunities",
					"I also gain its blindsight, darkvision, and passive perception if better than mine"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "young dragon" }],
			eval : function () {
				var dragonType = GetFeatureChoice("classes", "paladin", "subclassfeature7.1", false);
				
				if(dragonType) {
					ClassList.paladin.paladinCompFunc.update(15, ClassList.paladin.paladinCompFunc.capitalize(dragonType));
				}
			},
			removeeval : function () {
				var dragonType = GetFeatureChoice("classes", "paladin", "subclassfeature7.1", false);
				
				if(dragonType) {
					var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.paladin.artificerCompFunc;
					companionFunctions.remove('Young ' + dragonType + ' Dragon');
					companionFunctions.add(ClassList.paladin.paladinCompFunc.capitalize(dragonType) + ' Dragon Wyrmling');
				}
			}
		},
		"subclassfeature20" : {
			name : "Unbreakable Bond",
			source : ["OotD", 333],
			minlevel : 20,
			additional : "See third page notes",
			description : desc([
				"My dragon's attack and breath are no longer restricted by Bond of the Dragonlords"
			]),
			extraname : "Oath of the Dragonlord 20",
			"unbreakable bond" : {
				name : "Unbreakable Bond",
				source : ["OotD", 333],
				description : desc([
					"My dragon can now use its multiattack and its breath recharges normally",
					"If my dragon fails a save, I can choose for it to succeed; recharges after we long rest"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "unbreakable bond" }],
			eval : function () {
				var dragonType = GetFeatureChoice("classes", "paladin", "subclassfeature7.1", false);
				
				if(dragonType) {
					ClassList.paladin.paladinCompFunc.update(20, classes.paladin.paladinCompFunc.capitalize(dragonType));
				}
			},
			removeeval : function () {
				var dragonType = GetFeatureChoice("classes", "paladin", "subclassfeature7.1", false);
				
				if(dragonType) {
					ClassList.paladin.paladinCompFunc.update(classes.known.paladin.level, ClassList.paladin.paladinCompFunc.capitalize(dragonType));
				}
			}
		}
	}
})