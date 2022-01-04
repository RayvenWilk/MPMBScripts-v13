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

var iFileName = "Sorcerer - Demigod.js";

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};

AddSubClass("sorcerer", "demigod", {
	regExpSearch : /demigod/i,
	subname : "Demigod",
	source : ["OotD", 335],
	fullname : "Demigod",
	features : {
		"subclassfeature1" : {
			name : "Godly Ancestor",
			source : ["OotD", 335],
			minlevel : 1,
			description : desc([
				"I can double my proficiency with Charisma checks when interacting with gods/celestials",
				"Choose a godly heritage using the \"Choose Feature\" button above",
				"I learn spells based on my godly heritage, which I can cast once per short rest"
			]),
			choices : ["Death", "Knowledge", "Life", "Nature", "Light", "Tempest", "Trickery", "War"],
			"death" : {
				name : "Godly Ancestor: Death Domain",
				description : desc([
					"I can cast Bane and Ray of Sickness once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["bane"],
					selection : ["bane"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["ray of sickness"],
					selection : ["ray of sickness"],
					firstCol : 'oncesr'
				}]
			},
			"knowledge" : {
				name : "Godly Ancestor: Knowledge Domain",
				description : desc([
					"I can cast Command and Guiding Bolt once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["command"],
					selection : ["command"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["guiding bolt"],
					selection : ["guiding bolt"],
					firstCol : 'oncesr'
				}]
			},
			"life" : {
				name : "Godly Ancestor: Life Domain",
				description : desc([
					"I can cast Cure Wounds and Bless once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["cure wounds"],
					selection : ["cure wounds"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["bless"],
					selection : ["bless"],
					firstCol : 'oncesr'
				}]
			},
			"nature" : {
				name : "Godly Ancestor: Nature Domain",
				description : desc([
					"I can cast Entangle and Healing Word once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["entangle"],
					selection : ["entangle"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["healing word"],
					selection : ["healing word"],
					firstCol : 'oncesr'
				}]
			},
			"light" : {
				name : "Godly Ancestor: Light Domain",
				description : desc([
					"I can cast Burning Hands and Faerie Fire once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["burning hands"],
					selection : ["burning hands"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["faerie fire"],
					selection : ["faerie fire"],
					firstCol : 'oncesr'
				}]
			},
			"tempest" : {
				name : "Godly Ancestor: Tempest Domain",
				description : desc([
					"I can cast Fog Cloud and Thunderwave once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["fog cloud"],
					selection : ["fog cloud"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["thunderwave"],
					selection : ["thunderwave"],
					firstCol : 'oncesr'
				}]
			},
			"trickery" : {
				name : "Godly Ancestor: Trickery Domain",
				description : desc([
					"I can cast Charm Person and Tasha's Hideous Laughter once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["charm person"],
					selection : ["charm person"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["tasha's hideous laughter"],
					selection : ["tasha's hideous laughter"],
					firstCol : 'oncesr'
				}]
			},
			"war" : {
				name : "Godly Ancestor: War Domain",
				description : desc([
					"I can cast Shield of Faith and Thunderous Smite once per short rest",
					"These do not count against the number spells I can know and require no spell slots"
				]),
				spellcastingBonus : [{
					name : "Godly Ancestor",
					spells : ["shield of faith"],
					selection : ["shield of faith"],
					firstCol : 'oncesr'
				}, {
					name : "Godly Ancestor",
					spells : ["thunderous smite"],
					selection : ["thunderous smite"],
					firstCol : 'oncesr'
				}]
			}
		},
		"subclassfeature1.1" : {
			name : "Inherited Strength",
			source : ["OotD", 336],
			minlevel : 1,
			description : desc([
				"I am proficient with Strength saving throws",
				"I can add Charisma to my melee attack and damage rolls instead of Strength"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && v.isMeleeWeapon && fields.Mod == 1 && Number(What("Cha")) > Number(What("Str"))) {
							fields.Mod = 6;
						}
					},
					'I can use my Charisma modifier instead of Strength for attack and damage rolls for melee weapons.'
				]
			},
			saves : ["Str"]
		},
		"subclassfeature6" : {
			name : "Empowered Magic",
			source : ["OotD", 336],
			minlevel : 6,
			description : desc([
				"When I cast a spell, I can spend 1 sorcery point to increase its level by 1",
				"I cannot increase a spell's level by more than 1"
			])
		},
		"subclassfeature14" : {
			name : "Divine Resistance",
			source : ["OotD", 336],
			minlevel : 14,
			description : desc([
				"When I fail a saving throw, I can choose to succeed instead"
			]),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Ascendant Sorcery",
			source : ["OotD", 336],
			minlevel : 18,
			description : desc([
				"I can increase the level of a spell by more than 1 use using Empowered Magic",
				"I must spend 1 sorcery point for each level I add to the spell"
			])
		}
	}
})