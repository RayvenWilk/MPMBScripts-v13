/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This is the syntax for adding a new class to the sheet
				Note that you will need the syntax for adding a subclass as well if you want the class to have any choices for subclasses
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "Spy Class Redone"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(13); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

ClassList["spy"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /spy/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "my" and "class" in it, disregarding capitalization). If this looks too complicated, just write: /myclass/i

	name : "Spy", //required; the name to use for the class

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	primaryAbility : "\n \u2022 Spy: Dexterity;", //required; the text to display when citing the primary ability of the cla

	prereqs : "\n \u2022 Spy: Charisma 13;", //required; the text to display when citing the prerequisite for the class when multiclassing

	die : 8, //required; the type of hit die the class has (i.e. 10 means d10)

	improvements : [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], //required; the amount of ability score improvements (or feats) at each level. Note that there are 20 entries, one for each level. This example uses the Fighter's progression

	saves : ["Dex", "Cha"], //required; the two save proficiencies.

	skills : ["\n\n" + toUni("Spy") + ": Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Perception, Persuasion, Sleight of Hand, and Stealth.", "\n\n" + toUni("Spy") + ": Choose two from Acrobatics, Athletics, Deception, Insight, Intimidation, Perception, Persuasion, Sleight of Hand, and Stealth."], //required; the text to display for skill proficiencies. Note the \n\n at the start, they are important! The first entry is for when the class is the primary class, the second entry is for when the class is taken later as part of a multiclass

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	toolProfs : { // optional; this is an object with arrays with the tool proficiencies gained. Each entry in an array can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated
		primary : [["Thieves' tools", "Dex"], ["Poison Kit", "Wis"]], // optional; the tool proficiencies gained if the class is the primary class (i.e. taken at 1st level)
		secondary : [["Thieves' tools", "Dex"]] // optional; the tool proficiencies gained if the class is not the primary class (i.e. taken at a later level)
	},

	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, false, false, false], //required; the armor proficiencies if this is the first or only class
		[true, false, false, false] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[true, false, ["hand crossbow", "longsword", "rapier", "shortsword"]], //required; the weapon proficiencies if this is the first or only class
		[true, false, ["hand crossbow"]] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

equipment : "Spy starting equipment:\n \u2022 fine clothes -or- leather armor, a revolver -or- an hand crossbow, and 40 bullets;\n \u2022 A butterfly knife -or- a rapier;\n \u2022 A light crossbow and 20 bolts;\n \u2022 A dungeoneer's pack -or- an explorer's pack.\n\nAlternatively, choose 8d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", //required; the text to display when citing the starting equipment
	subclasses : ["", [""]], //required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList. //Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList, the sheet will throw an error as soon as you make a character with levels in this class
	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here! The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!

	prestigeClassPrereq : 0, //optional; if you include this attribute, the sheet will consider the class a prestige class // You can make this attribute a number, which represents the levels the character must have before being able to gain the prestige class. Alternatively, you can make this attribute a string, which can be evaluated with eval() and returns either true (prereqs met) or false (prereqs not met).

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //required; the amount of attacks at each level. Note that there are 20 entries, one for each level.

	abilitySave : 4, //optional, but required for a spellcaster; the ability score to use for the Ability Saving Throws. Remove this line if your class has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)

	abilitySaveAlt : 2,//optional; if the class offers a choice between two ability scores to be used to determine the DC, you can put that secondary one here (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)

	spellcastingFactor : 0, //required for a spellcaster; the speed with which spell progression works type 1 for full spellcasting (Cleric), 2 for half spellcasting (Paladin), and 3 for one-third spellcasting (Arcane Trickster). This can be any positive number other than 0. Remove this line if your class has no spellcasting. If your character uses the Warlock way of spellcasting, write "warlock1" here. The 1 indicates the spell progression factor. You can change it to a 2 or 3 to have half or one-third spell progression (or to any other factor you like).
		// You can also have this refer to a Spell Slot progression you define yourself, as a separate variable (see "Homebrew Syntax - SpellTable.js"). In order to do this the name of that variable and the spellcastingFactor must match. Using the name "purplemancer" for example would mean that here you put [spellcastingFactor : "purplemancer1"] (the 1 is the factor, this can be any positive number other than 0) while for the variable containing the table you use "purplemancerSpellTable". Note that the name is all lower case!


	spellcastingKnown : { //Optional; Denotes the amount and type of spells the class has access to

		cantrips : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to cantrips. The numbers reflect the amount of cantrips known

		spells : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to spells. The numbers reflect the amount of spells known. For a class that doesn't know spells, but prepares them from a list, you should put "list" here. For a class that uses a spellbook, you should put "book" here.

		prepared : false, //Optional; This indicates that the class has to prepare spells like a cleric/druid/paladin/wizard

	},

	spellcastingList : { //Optional; Only needed if the class doesn't have its own spell list. This object denotes what spells the class has access to. All things in this object constrain the selection of spells that will be available. The contstraints are cumulative.

		class : "wizard", //Required; The name of the class from whose spell list the spells come from. This can be "any" if the spells are not limited by a spell list of just one class. The entry has to match the name of the class in the SpellsList

		school : ["Evoc", "Abjur"], //Optional; An array of abbreviations of spell school names (see SpellsList). These have to be in an array, even if it is just one value. Each entry has to match the name of the spell school in the SpellsList

		level : [0, 4], //Optional; The lower and upper limit of spell levels that the class has access to.

		ritual : false, //Optional; Denotes if only ritual (true) or only non-ritual (false) spells should be included in the list

		spells : ["light", "mending"], //Optional; If a "spells" array is present, all other objects will be ignored and only this list of spells will populate the list of available spells. each entry has to match the name of the spell in the SpellsList

		notspells : ["antipathy/sympathy", "tsunami"], //Optional; Any spells listed in this array will be excluded from the list
	},

	spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "dispel magic", "magic circle", "arcane eye", "leomund's secret chest", "planar binding", "teleportation circle"], //Optional; An array of spells that are added to the spell list from which the class can choose. If the class prepares spells, than this list of spells are always considered prepared. Each entry has to match the name of the entry of the spell in the SpellsList exactly
	//You can also have the list be added to the known spells of a class by making the 101th entry in the array read "AddToKnown" (i.e. spellcastingExtra[100] = "AddToKnown");

	features : { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want

		"resourceful" : { //note the use of lower case characters
			name : "Resourceful", //required; the name of the class feature
			source : ["HB", 0], //required; the source of the class feature
			minlevel : 1, //required; the level at which the feature is gained
			description : "You always have a way with things. Be it due to natural talent or a quick grasp of how things tick, your natural resourcefulness works mostly for your advantage. At the levels 1, 5, 9 an 13, you may choose to be proficient at any bonus skill, weapon, armor or tool. If you are already proficient at it, you may add 2 points.", //required; the text to put in the "Class Features" field
			choices : ["armor", "skill", "tool"], //optional; choices the feature offers, if any.
			choicesNotInMenu : false, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"armor" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Armor Proficiency", //required;
				description : "You get proficient with medium armor",//required;
			},

			"skill" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Choose a proficiency with a Skill",
				description : "You can choose a bonus skill to get proficient at.",
			},

			"tool" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Tool Proficiency",
				description : "I can become proficient with any tool of my choice.",

				}
			},

		"resourceful 2" : { //note the use of lower case characters
			name : "Resourceful 2", //required; the name of the class feature
			source : ["HB", 0], //required; the source of the class feature
			minlevel : 5, //required; the level at which the feature is gained
			description : "Resourceful but 2.", //required; the text to put in the "Class Features" field
			choices : ["armor", "skill", "tool"], //optional; choices the feature offers, if any.
			choicesNotInMenu : false, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"armor" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Armor Proficiency", //required;
				description : "You get proficient with an armor of your choosing", //required;
			},

			"skill" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Become proficient with a Skill",
				description : "You can choose a bonus skill to get proficient at.",
			},

			"tool" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Tool proficiency",
				description : "I can become proficient with any tool of my choice.",
				
				}
			},
 
		"resourceful 3" : { //note the use of lower case characters
			name : "Resourceful 3", //required; the name of the class feature
			source : ["HB", 0], //required; the source of the class feature
			minlevel : 9, //required; the level at which the feature is gained
			description : "Resourceful but 3.", //required; the text to put in the "Class Features" field
			choices : ["armor", "skill", "tool"], //optional; choices the feature offers, if any.
			choicesNotInMenu : false, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"armor" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Armor Proficiency", //required;
				description : "You get proficient with an armor of your choosing", //required;
			},

			"skill" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Become proficient with a Skill",
				description : "You can choose a bonus skill to get proficient at.",
			},

			"tool" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Tool proficiency",
				description : "I can become proficient with any tool of my choice.",
				
				}
			},	
		"resourceful 4" : { //note the use of lower case characters
			name : "Resourceful 4", //required; the name of the class feature
			source : ["HB", 0], //required; the source of the class feature
			minlevel : 13, //required; the level at which the feature is gained
			description : "\n   " + "Resourceful but 4.", //required; the text to put in the "Class Features" field
			choices : ["armor", "skill", "tool"], //optional; choices the feature offers, if any.
			choicesNotInMenu : false, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"armor" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Armor Proficiency", //required;
				description : "You get proficient with an armor of your choosing.", //required;
			},

			"skill" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Become proficient with a Skill",
				description : "You can choose a bonus skill to get proficient at.",
			},

			"tool" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Tool proficiency",
				description : "I can become proficient with any tool of my choice.",
				}
			},

		"flanking mastery" : {
			name : "Flanking Mastery",
			source : ["HB", 0],
			minlevel : 1,
			description : "A master of striking occupied opponents. Attacks done against enemies you have Advantage against will receive additional damage equal to 1d6 (Increased by level). If there are any (non-incapacitated) allies within melee range of the unit being attacked, you don't require Advantage to activate this.",
			additional : ["1d6", "1d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "6d6", "6d6", "6d6", "6d6", "8d6"],
			action : ["action", ""],
		
		},
			
		"sleeve draw" : {
			name : "Sleeve Draw",
			source : ["HB", 0],
			minlevel : 5,
			description : "You're capable of swapping weapons with a flick of a wrist. Swapping from a Revolver to a Dagger-type weapon (and vice versa) costs no Action, once per round.",
			usages : 1,
			recovery : "round",
			action : ["bonus action", ""],
		},
		
		"invisibility watch" : {
			name : "Invisibility Watch",
			source : ["HB", 0],
			minlevel : 2,
			description : "This tool allows you, as an Action, to cast Invisibility on yourself and your equipment for a maximum of 3 rounds before the tool's power runs out and the user is forced out of invisibility. It recharges when not in use. The recharge time is equal to the amount of time the user spent while cloaked, for a max of 3 rounds. While invisible, you cannot take any offensive action. If you are touched, you become visible to anyone within line of sight with a passive Perception above 12.",
			usages : 3,
			recovery : "passive",
			action : ["action", ""],
		},
		
		"electro sapper" : {
			name : "Electro Sapper",
			source: ["HB", 0],
			minlevel : 6,
			description : "It allows you, as a Bonus Action, to lay a device that damages and disables Constructs, Devices and Powered Traps (Magic or not). This effect lasts indefinitely, or until the device is removed.",
			action : ["bonus action", ""],
				
		},
		
		"disguise kit" : {
			name : "Disguise Kit",
			source : ["HB", ""],
			minlevel : 10,
			description : "It allows you to cast Disguise Self as an Action, but also allow your illusion to be tangible for contact purposes, and your voice to become equal to the person or creature you are disguised as. Enemies can detect through your disguise with an Investigation check. Obviously, dealing direct damage to enemies or taking any direct damage will end the spell. Note that you cannot disguise as large or colossal-sized things, nor tiny.",
			action : ["action", ""],
			
		},
		
		"dead ringer" : {
			name : "Dead Ringer",
			source : ["HB", 0],
			minlevel : 14,
			description : "It allows you to feign your death. As a reaction, you can activate this tool, which casts Greater Invisibility and Haste on you for 6 rounds or until deactivated, while a tangible illusion of your dead body falls in your place. Any damage you take is also halved. If the damage would have killed you, you'll be left at 1 HP. This device can only be activated once per Long Rest.",
			usages : 1,
			recovery : "long rest",
			action : ["reaction", ""],
			
		},
		
		"backstab" : {
			name : "Backstab",
			source : ["HB", 0],
			minlevel : 3,
			description : "Beginning at 3rd level, striking unaware targets has become fortuitous for you. Attacking an enemy with Daggers (or similar weaponry) while behind their back will automatically become a critical hit, but this only happens once per target. Backstabbing surprised enemies, or enemies that did not take a turn yet will also have them making a Constitution save throw, or inflict Paralyzed on them.",
			weapons : [false, false, ["butterfly knife", "dagger", "conniver's kunai", "the big earner", "the spy-cycle", "your eternal reward"]],
		
		},
		
		"hurried sabotage" : {
			name : "Hurried Sabotage",
			source : ["HB", 0],
			minlevel : 7,
			description : "You can perform, as a Bonus Action, an extra ranged attack with Advantage against a sapped unit if you have a Revolver on your hand, and if it hits, there is a chance based on Dexterity save throw (DC12) that both the Sapper and the construct being sabotaged will be destroyed.",
			action : ["bonus action", ""],
			
		},
		
		"rewired sabotage" : {
			name : "Rewired Sabotage",
			source : ["HB", 0],
			minlevel : 7,
			description : "By spending either Two Full Actions or One Action and One Bonus Action without moving, on a sapped enemy, you may attempt to convert them to your party's side with an Intelligence save throw (DC12). On success, you will retrieve the Sapper deployed and the converted constructs will fight for you for two rounds, then shut down/get destroyed afterwards. Otherwise, your sapper is destroyed but they fight for one round before shutting down/getting destroyed.",
			action : ["action", "bonus action"],
		
		},
		
		"butterfly effect" : {
			name : "Butterfly Effect",
			source : ["HB", ""],
			minlevel : 9,
			description : "This is your lucky day. You can visit your Black Marketeer contact. He can offer to trade your current weapons, at your own choice, for others.",
		
		},
		
		"impersonation" : {
			name : "Impersonation",
			source : ["HB", 0],
			minlevel : 11,
			description : "A good acting can net you into a lot of newer opportunities for a fight. While disguised as the enemy, you can attempt to act in two ways to gain their trust. If both Acts are done flawlessly, your next Backstab will Surprise all enemies in the fight, and Fear the target.",
			choices  : ["Offensive Acting", "Defensive Acting"],
			choicesNotInMenu : false,
			"offensive acting" : {
				name : "Offensive Acting",
				description : "Attack an ally and beat their AC. The attack will not damage them. Offensive Acting will lower sentient enemies' morale, nullifying any shields granted by Charisma and giving your allies Advantage on Charisma-based checks.",
			
			},
			
			"defensive acting" : {
				name : "Defensive Acting",
				description : "You may attempt to throw yourself in front of a nearby enemy to protect them from an attack. If you beat a Dexterity save of DC15, you will take no damage, otherwise damage taken is halved. Defensive Acting will make sentient enemies not suspect you or give them disadvantage on Investigation checks against you.",
			
			},
		},
		
		"infiltration tool upgrades" : {
			name : "Infiltration tool upgrades",
			source : ["HB", 0],
			minlevel : 14,
			description : "You've survived this far. The underworld of crime's well-aware of your clout and importance, so from time to time, a few new visitors will reclaim each one of your tools and come back with an upgrade for them. ",
		
		},
		
		"trickstab" : {
			name : "Trickstab",
			source : ["HB", 0],
			minlevel : 15,
			description : "A master of an advanced, acrobatic way of attacking your foes in the middle of their momentum. You can take a Reaction for when enemies get into your melee range to move behind them and score a free Backstab.",
			action : ["reaction", ""],
		
		},
		
		"headshot" : {
			name : "Headshot",
			source : ["HB", 0],
			minlevel : 15,
			description : "Aim right between the eyes. You can take an Action to aim down at the enemy's head. The next attack, if it hits, will be a critical hit. If you are using Ambassador, damage will be doubled and turned from physical to magical.",
			action : ["action", ""],
		
		},
		
		"collector's edition" : {
			name : "Collector's Edition",
			source : ["HB", 0],
			minlevel : 18,
			description : "Remember that Black Marketeer of yours? The same guy who's now close to becoming a millionaire? You have enough credit with him now to buy his whole arsenal. And that you did. Fancy, enchanted blades and guns make their way to you whenever you give time to appreciate your now complete collection. Once per Long Rest you're able to swap Daggers and Revolvers from 'Butterfly Effect', but only have one of each kind at a time.",
			usages : 1,
			recovery : "long rest",
			
		},

		"perfectionism" : {
			name : "Perfectionism", 
			source : ["HB", 0],
			minlevel : 20,
			description : "You've reached the point where you're the sole inspiration for all Spies everywhere. Perfection is within reach but not even that is enough to satisfy your immense ego. At this point, you're a double or triple agent for everything and everyone. Espionage, murdering or information dealing is like a walk in the park. You gain bonus proficiency on all Charisma-based skills, Stealth and Sleight of Hand.",
			"backstab" : {
				name : "Enhanced Backstab",
				description : "Backstab deals a bonus 50% of the target's maximum HP as damage. If it did not take a turn yet, the bonus is doubled.",
			},
			"disengage" : {
				name : "Disengage",
				description : "Disengage will allow you to intently become Invisible if so you desire and disengage in battle.",
			},	
			
			"trickstab" : {
				name : "Trickstab",
				description : "Trickstab can be performed as a Bonus Action.",
				action : ["bonus action", ""],
				
			},
		},
			
		"subclassfeature3" : { //You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. The level of this feature should match the level the class needs to select a subclass. Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.
			name : "Spy's Path",
			source : ["HB", 0],
			minlevel : 3,
			description : "Choose a Main Path you strive to emulate and put it in the \"Class\" field" + "Choose either Asassin, Style, Deceitor or Gunspy",
			
			
		},

	},
}
