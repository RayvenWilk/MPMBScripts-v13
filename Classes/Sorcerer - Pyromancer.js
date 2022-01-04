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

var iFileName = "Sorcerer - Pyromancer.js";

SourceList["PS:K"] = {
	name : "Plane Shift: Kaladesh",
	abbreviation : "PS:K",
	group : "Plane Shift",
	url : "https://media.wizards.com/2017/downloads/magic/Plane-Shift_Kaladesh.pdf",
	date : "2017/02/16"
};

AddSubClass("sorcerer", "pyromancer", { // Includes contributions by userZynx_name
	regExpSearch : /pyromanc(er|y)/i,
	subname : "Pyromancy",
	source : ["PS:K", 9],
	fullname : "Pyromancer",
	features : {
		"subclassfeature1" : {
			name : "Heart of Fire",
			source : ["PS:K", 9],
			minlevel : 1,
			description : desc([
				"When I start casting a spell (not cantrip) that deals fire damage, flames erupt from me",
				"Chosen creatures within 10 ft that I can see take half my sorcerer level in fire damage"
			]),
			additional : levels.map( function(n) { return (n > 1 ? Math.floor(n/2) : 1) + " fire damage"; })
		},
		"subclassfeature6" : {
			name : "Fire in the Veins",
			source : ["PS:K", 9],
			minlevel : 6,
			description : "\n   " + "I have resistance to fire damage and spells I cast ignore resistance to fire damage",
			dmgres : ["Fire"]
		},
		"subclassfeature14" : {
			name : "Pyromancer's Fury",
			source : ["PS:K", 9],
			minlevel : 14,
			description : desc([
				"As a reaction when hit by a melee attack, I can deal fire damage to the attacker",
				"The damage is equal to my sorcerer level and ignores resistance to fire damage"
			]),
			action : ["reaction", ""],
			additional : levels.map( function(n) { return n < 14 ? "" : n + " fire damage"; })
		},
		"subclassfeature18" : {
			name : "Fiery Soul",
			source : ["PS:K", 9],
			minlevel : 18,
			description : desc([
				"I have immunity to fire damage",
				"Any spell or effect I create treats immunity to fire damage as resistance to fire damage"
			]),
			savetxt : { immune : ["fire"] }
		}
	}
})