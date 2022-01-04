/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class, called "The Savant" and its 5 subclasses
				This class has been made and published by reddit's /u/laserllama.
				For more information, see here: https://www.gmbinder.com/share/-M0ZVK6ndhFyImQPF_aJ
				This script uses the version of the 10th of October 2021, version 4.4.1
	Code by:	HisMessengerDAB, hohouyj, & MorePurpleMoreBetter
	Date:		2021-10-10 (sheet v13.0.8)

	If you like this class, take a look at other content of this creator:
	https://www.gmbinder.com/profile/laserllama 

	I'm a little concerned that the code grammar may not be correct and that some of the descriptions have too many words per line. 
*/

var iFileName = "The Savant [laserllamas's work, transcribed by HisMessengerDAB].js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used.

RequiredSheetVersion(13); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SourceList["GMB:LL-S"] = {
	name : "The Savant",
	abbreviation : "GMB:LL-S",
	group : "GM Binder",
	url : "https://www.gmbinder.com/share/-M0ZVK6ndhFyImQPF_aJ",
	date : "2021/10/10"
};

ClassList["savant"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /savant/i, //required;

	name : "Savant", //required; the name to use for the class

	source : ["GMB:LL-S", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	primaryAbility : "Intelligence", //required; the text to display when citing the primary ability of the class

	prereqs : "Intelligence 13", //required; the text to display when citing the prerequisite for the class when multiclassing

	die : 8, //required; the type of hit die the class has (i.e. 10 means d10)

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

	saves : ["Int", "Wis"], //required; the two save proficiencies.

	skillstxt : { //required; the text to display for skill proficiencies.
		primary : "Choose two from Arcana, History, Insight, Investigation, Medicine, Nature, Persuasion, or Religion",
		secondary : "Choose one from Arcana, History, Insight, Investigation, Medicine, Nature, Persuasion, or Religion"
	},
	toolProfs : {// optional; this is an object with arrays with the tool proficiencies gained. Each entry in an array can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated
		primary : [["Artisan's tools", 1]], // optional; the tool proficiencies gained if the class is the primary class (i.e. taken at 1st level)
		secondary : [["Artisan's tools", 1]] // optional; the tool proficiencies gained if the class is not the primary class (i.e. taken at a later level)
	},
	armorProfs : { //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		primary : [true, false, false, false],
		secondary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["hand crossbow", "shortsword"]], //required; the weapon proficiencies if this is the first or only class
		secondary : [true, false, []], //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	},
	equipment : "Savant starting equipment:" +
		"\n \u2022two simple weapons of your choice -or- a shortsword;" +
  		"\n \u2022light crossbow and 20 bolts -or- two daggers;" +
		"\n \u2022one set of artisan's tools of your choice;" +
        "\n \u2022leather armor and a scholar's pack;" + //required; the text to display when citing the starting equipment
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",

	subclasses : ["Academic Discipline", []], 
	// options: ["archaeologist", "naturalist", "physician", "seeker", "tactician"]], 
	//required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList. //Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList, the sheet will throw an error as soon as you make a character with levels in this class
	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here! The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //required; the amount of attacks at each level. Note that there are 20 entries, one for each level.

	features : { //required;  the class features.

		"adroit analysis" : { //note the use of lower case characters
			// **note**: I have a feeling that this class may need the most work, formula wise, mechanically speaking.
			name : "Adroit Analysis", //required; the name of the class feature
			source : ["GMB:LL-S", 2], //required; the source of the class feature
			minlevel : 1, //required; the level at which the feature is gained
			description : desc([
				"As bonus action, I mark a creature I can see within 60ft. Effect lasts 1 min or until another creature marked.",
				"Can use Int for attack and damage rolls against marked creature.",
				"If I hit marked creature with attack, or observe it for 1 min, I learn one of these:",
				"its Armor Class, movement speed, one ability score, its max HP, or creature type.",
				"I have advantage on any Int or Wis checks I make to analyze the creature.",
				"I can also do any Int or Wis based skill ability checks I am proficient in as a bonus action."
            ]), //required; the text to put in the "Class Features" field
			action : ["bonus action", ""],
			calcChanges : {
				// **note** It feels like there's a formula missing here but I'm not sure what it is or if even these old formulas are correct
				atkAdd : [
					function (fields, v) {
						if (classes.known.savant && classes.known.savant.level && !v.isSpell && !v.isDC) {
							fields.Description += (fields.Description ? '; ' : '') + 'Androit Analysis: can use Int vs. marked target';
						};
					},
				]
			}
		},

		"perfect recall" : {
			name : "Perfect Recall",
			source : ["GMB:LL-S", 2],
			minlevel : 2,
			description : desc([
				"If I spend at least 1 minute observing and committing something to memory,",
				"I can recall any information about my observations without an ability check."
            ]),
		},

		"unarmored defense" : {
			name : "Unarmored Defense",
			source : ["GMB:LL-S", 2],
			minlevel : 1,
			description : "\n   " + "While not wearing armor and not wielding a shield,\n   my Armor Class is equal to 10 + Dexterity modifier + Intelligence modifier.",
			addarmor : "Unarmored Defense (Int)", //optional; a string of the name of the armour that is literally put in the Armor Description field when the class feature is applicable, and removed if not. 
			// **question**: Should this be "Unarmored Defense (Int + Dex)" or maybe something entirely different?
		},

		"expert student" : { 
			// **question**: could this feature be automated? Would we be able to let the list of things known go up and down dynamically as needed?
			name : "Expert Student",
			source : ["GMB:LL-S", 2],
			minlevel : 2,
			description : desc([
				"Each time I finish a long rest, I can choose to learn one additional language,",
				"or gain proficiency with one tool, skill, or weapon of my choice,",
				"as long as there's an example to learn from, e.g., a willing teacher with that proficiency,",
				"a manual, or a book in a different language.",
				"Can only gain one proficiency or language for this feature per LR.",
				"I can learn a total number of extra languages and proficiencies through this, equal to my Int mod (min 1).", 
				"When I choose to learn another language or proficiency while at max.,", 
				"I must choose one learned this way to forget, and immediately lose any skill or knowledge of it.",
				"At 7th level of this class, can learn a new one at end of short or long rest."
				]),
			usages : "Intelligence modifier per",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : levels.map(function (n) {
				return n < 7 ? "long rest" : "short rest";
			}),
		},

		"unyielding mind" : {
			name : "Unyielding Mind (UM)",
			source : ["GMB:LL-S", 3],
			minlevel : 2,
            description : desc([
				"When I make an Intelligence, Wisdom, or Charisma check or saving throw,",
				"I can use roll a bonus die and add it to the result.",
				"Use this feature after you roll, but before you know whether you succeed or fail.",
				"I can use this feature a number of times equal to my Int mod (min 1).",
				"All expended uses reset when finishing a short or long rest."
                ]), 
            additional : levels.map(function (n) {
                return (n < 10 ? "1d6" : n < 15 ? "1d8": n < 20 ? "1d10" : "1d12")
            }), 
			// **question**: would this be considered a free action? If so, how would it be listed under the action category?
			// **question**: also, is there a formula to automatically track how many UM dice I have left over until they reset?	
			usages : "Intelligence modifier per",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "short rest",
			action : ["reaction", ""], //optional; adds the name of this feature to the bonus action list when chosen. The options are "action", "bonus action", and "reaction"
			savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Unyielding Mind"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
			},
		},

		
		"subclassfeature3" : { //You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. The level of this feature should match the level the class needs to select a subclass. Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.
			name : "Academic Discipline",
			source : ["GMB:LL-S", 3],
			minlevel : 3,
			description : "\n   " + "Choose your Academic Discipline and put it in the \"Class\" field" + "\n   " + "Choose between Archaeologist, Naturalist, Philosopher, Physician, Seeker, or Tactician.",
		},

		"accelerated reflexes" : {
			name : "Accelerated Reflexes",
			source : ["GMB:LL-S", 3],
			minlevel : 5,
			description : desc([
				"I can take additional reaction(s) per round.",
				"A single effect can only trigger one of my reactions.",
				"Also, when I roll initiative, I can take the Ready action before anyone acts,",
				"so long as I'm not surprised."
			]),
            additional: levels.map(function(n,idx) {
                return [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2][idx]+" additional reactions";
            }),
        },

		"potent observation":{
            name:"Potent Observation",
			source : ["GMB:LL-S", 3],
			minlevel : 5,
            description : desc([
				"When I, or a creature that I can see, hits the target of my Adroit Analysis with an attack,",
				"I can use my reaction to increase the damage dealt by the attack.",
                ]),
            additional : levels.map(function (n) {return (n < 11 ? "1d10 damage" : "2d10 damage")}),
            action : ["reaction",""]
        },
		
		"keen awareness" : {
			name : "Keen Awareness",
			source : ["GMB:LL-S", 3],
			minlevel : 7,
			description : desc([
				"I cannot be surprised unless I am incapacitated.",
				"Additionally, when rolling initiative, I can expend a use of Unyielding Mind and add the result to my roll."
				// **question**: is there a formula to automatically track how many Unyielding Mind dice I have left?
				// **question**: is there a formula that could be used to automatically mark that I can't be surprised while incapacitated?
				// **question**: is there a formula I can use to automatically add the result of a UM dice roll to my initiative roll?
			])
		},

		"expert educator":{
            name:"Expert Educator",
			source : ["GMB:LL-S", 3],
			minlevel : 9,
            description : desc([
				"After a long rest, choose one skill, tool, or weapon proficiency or language I know.",
				"A number of creatures equal to my Int mod (min 1) that can hear me gain it.",
				"This benefit lasts until the end of my next long rest.",
				]),
			usages : "Intelligence modifier per",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recover : "long rest"
		},

		"flawless observation":{
            name:"Flawless Observation",
			source : ["GMB:LL-S", 3],
			minlevel : 11,
            description : desc([
				// **note** No idea if this is correct at all or not, formula-wise
				"Can use Potent Observation reaction even if the target of the attack is not marked by my Adroit Analysis.",
				"Potent Observation also gains bonus damage equal to my Int mod (min 1)."
                ]),
			additional : ["Intelligence modifier bonus damage"],
			eval : "RemoveAction(\"reaction\", \"Potent Observation\"); AddAction(\"reaction\", \"Flawless Observation\", \"Savant\")", //eval is custom code that is run when the feature is added. It is used here, because the "Potent Observation" reaction is removed, and replaced by the "Flawless Observation" reaction. If you instead just want to add a reaction for "Flawless Observation", use the action object (i.e. action : ["bonus action", ""],)
			removeeval : "RemoveAction(\"reaction\", \"Flawless Observation\"); AddAction(\"reaction\", \"Potent Observation\", \"Savant\")", //removeeval is custom code that is run when the feature is removed. Here the "Flawless Observation" reaction is removed and replaced by the "Potent Observation" reaction.
        },

		"unyielding will":{
            name:"Unyielding Will",
			source : ["GMB:LL-S", 3],
			minlevel : 14,
            description : desc([
				"If I fail a saving throw against being charmed, frightened, or stunned,",
				"I can expend a use of Unyielding Mind to succeed instead.",
                ]),
            usages : 1, 
			// **note**": I feel that this usages field should be something along the lines of "Int Mod" instead of just "1", but I have no idea.
			//optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level. It is recommended to use a numerical value, but if you use a string, include " per " at the end, like "1d10 per "
			recovery : "short rest",
            savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Unyielding Will"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
			},
        },

		"profound insight":{
            name:"Profound Insight",
			source : ["GMB:LL-S", 3],
			minlevel : 18,
            description : desc([
				"The target of my Adroit Analysis has disadvantage on any attack targeting me,",
				"and I have advantage on any saving throws it forces me to make."
                ])
        },

		"undisputed genius":{
            name:"Undisputed Genius",
			source : ["GMB:LL-S", 3],
			minlevel : 20,
            description : desc([
                "My Int and Wis scores increase by 4. My maximum for those scores is now 24."
				]),
			scores : [0,0,0,4,4,0],
			scoresMaximum : [0,0,0,24,24,0]
        }
	}
};

// **note** The two subclasses currently here were written up by hohouy, whom I've used their original work to update this sheet with. I'm sure there's some stuff that's missing in addition to the things that need to be updated. I have not had a chance to double check the work yet. Everything before this line is my best guess at how things should go but I'm open to suggestions on how to improve them. Anything below here will be checked later. The subclass I am truly interested in having checked is the "Physician" as I am starting a campaign in the next few days and want to make sure that, if nothing else, it is correct and will work. I will get the rest of the other subclasses transcribed later, as long as the two here already are correct. 

AddSubClass( // this is the function you will be calling to add the variant

	"savant", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"archaeologist", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*archaeologist).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Archaeologist", //required; the name of the subclass

		source : ["GMB:LL-S", 4], //required; the source and the page number.

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Archaeologist", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "Savant (Archaeologist)"

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. 

			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Student of History",
				source : ["GMB:LL-S", 4],
				minlevel : 3,
				description : desc([
					"When you mark a creature as the target of your Adroit Analysis,",
					"you learn of either one language spoken by the creature, or of one of its special senses."
				]),
				languageProfs : [2],
				addMod : [
					{
						type : "skill",
						field : "History",
						mod : "Prof",
						text : "your proficiency bonus is doubled for History Checks"
					},
					{
						type : "skill",
						field : "Investigation",
						mod : "Prof",
						text : "your proficiency bonus is doubled for Investigation Checks"
					}
				], 
				skillstxt : "\n\n" + toUni("Archaeologist (Student of History)") + ": you gain proficiency in the History and Investigation skill, your proficiency bonus is doubled for any ability check you make with those skills; if already proficient, choose another skill of your choice from the savant skill list.",
				skills : ["History", "Investigation"],
			},
			"subclassfeature6" : {
				name : "Daring Determination",
				source : ["GMB:LL-S", 4],
				minlevel : 6,
				description : desc([
					"Can use Unyielding Mind for Dexterity checks and saving throws.",
					"1 minute examine object, can ascertain:",
					"approx monetary worth; civilization of origin; approx age.",
					"If the item has any innate magical properties, you learn of them",
					"as if you had cast the identify spell on the object.",
				]),
				savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Unyielding Mind(Dex)"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
				},
			},

			"subclassfeature7" : {
				name : "Dungeoneer",
				source : ["GMB:LL-S", 4],
				minlevel : 7,
				description : desc([
					"My Adroit Analysis target has disadv. on opportunity attacks against me.",
					"My saves vs. traps negate damage on success and halve it on failure"
				]),
				savetxt : { text : ["save vs. traps: fail \u2015 half dmg, success \u2015 no dmg"] }
			},
			"subclassfeature13" : {
				name : "Lore Master",
				source : ["GMB:LL-S", 4],
				minlevel : 13,
				description : desc([
					"If you observe a place or object for at least one minute,",
					"you can recall information about it as if you had cast the legend lore spell.",
					"You can attune to 1 magic item that you don't meet the alignment, class, or race requirements for.",
					"This item counts towards your max attuned items."
				]),
				usages : 1,
				recovery : "short rest",
			},
			"subclassfeature17" : {
				name : "Lore Master",
				source : ["GMB:LL-S", 4],
				minlevel : 17,
				description : desc([
					"You are resistant to all damage from spells and other magical effects."
				]),
				dmgres : ["spells","magical effects"]
			},
		}
	}
);

AddSubClass( // this is the function you will be calling to add the variant

	"savant", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"physician", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*physician).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Physician", //required; the name of the subclass

		source : ["GMB:LL-S", 6], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Physician", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		//abilitySave : 6, //overwrites the abilitySave that was defined in the ClassList
		//abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		//spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList
		
		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Student of Medicine",
				source : ["GMB:LL-S", 6],
				minlevel : 3,
				description : desc([
					"My studies allow me to use Medicine as an Intelligence-based skill.",
					"Gain prof in medicine and Herbalism kit, prof bonus is doubled for checks with those skills",
					"When I mark a creature with Adroit Analysis, I learn the creature's current hit points."
				]),
				addMod : [
					{
						type : "skill",
						field : "Medicine",
						mod : "Prof",
						text : "your proficiency bonus is doubled for Medicine Checks"
					},
					{
						type : "skill",
						field : "Too", // **note** is this correct? Wouldn't it be maybe tool or herb kit or something?
						mod : "Prof",
						text : "your proficiency bonus is doubled for Herbalism kit Checks"
					}
				], 
				skillstxt : "\n\n" + toUni("Physican (Student of Medicine)") + ": you gain proficiency in the Medicine skill and with the herbalism kit and your proficiency bonus is doubled for any ability check you make with those skills; if already proficient, choose another skill of your choice from the savant skill list.",
				skills : ["Medicine", "Too"],
				toolProfs : [["Herbalism kit", "Int"]],
				eval : 	function(){
						CurrentScriptFiles['Medicine (Int)'] = "/SkillsList.abilityScores[SkillsList.abbreviations.indexOf('Med')] = 'Int'; SkillsList.abilityScoresByAS[SkillsList.abbreviationsByAS.indexOf('Med')] = 'Int';/"
						SkillsList.abilityScores[SkillsList.abbreviations.indexOf('Med')] = 'Int';
						SkillsList.abilityScoresByAS[SkillsList.abbreviationsByAS.indexOf('Med')] = 'Int';
						SetRichTextFields(false, true);
					},
				removeeval : function(){
					delete CurrentScriptFiles['Medicine (Int)'];
					SkillsList.abilityScores[SkillsList.abbreviations.indexOf('Med')] = 'Wis';
					SkillsList.abilityScoresByAS[SkillsList.abbreviationsByAS.indexOf('Med')] = 'Wis';
					SetRichTextFields(false, true);
					}
			},
			"subclassfeature3.1" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
			name : "Combat Medic",
			source : ["GMB:LL-S", 6],
			minlevel : 3,
			description : desc([
				"I can use an action on my turn to do one of the following:",
				"Adrenaline Jolt; Dress Wounds; Healing Surge; Rending Strike; Stabilize.",
				"Details on the above actions can be found on the notes page"
				]),
			eval : function() {
				combtMedicActionsStr = 
					"Combat Medic Actions:"
					+"\n\u25C6 Adrenaline Jolt\nA creature I touch can immediately repeat a saving throw to end one of the following conditions affecting it: blinded, charmed, deafened, frightened, or poisoned, adding my Int mod (min. 1) to their roll."
					+"\n\u25C6 Dress Wounds\nI touch a creature and expend a use of Unyielding Mind, granting them temporary hit points equal to my Unyieldng Mind roll + my Int mod."
					+"\n\u25C6 Healing Surge\nA creature I touch can expend 1 of their Hit Dice to regain hit points equal to their Hit Die roll + their Con mod + my Int mod."
					+"\n\u25C6 Rending Strike\nMake a weapon attack. On hit, target takes normal damage of my attack and its movement is reduced by a number of feet equal to 5 times my Int mod until the start of my next turn."
					+"\n\u25C6 Stabilize\nI touch a living creature that has 0 hit points, automatically stabilizing them. The target can then choose to expend 1 of their Hit Dice to regain hit points equal to the maximum value of the Hit Die + their Con mod."
				
				AddString('Extra.Notes', combtMedicActionsStr, true);
				show3rdPageNotes();
				},
			removeeval : function() {
				combtMedicActionsStr = 
				"Combat Medic Actions:"
				+"\n\u25C6 Adrenaline Jolt\nA creature I touch can immediately repeat a saving throw to end one of the following conditions affecting it: blinded, charmed, deafened, frightened, or poisoned, adding my Int mod (min. 1) to their roll."
				+"\n\u25C6 Dress Wounds\nI touch a creature and expend a use of Unyielding Mind, granting them temporary hit points equal to my Unyieldng Mind roll + my Int mod."
				+"\n\u25C6 Healing Surge\nA creature I touch can expend 1 of their Hit Dice to regain hit points equal to their Hit Die roll + their Con mod + my Int mod."
				+"\n\u25C6 Rending Strike\nMake a weapon attack. On hit, target takes normal damage of my attack and its movement is reduced by a number of feet equal to 5 times my Int mod until the start of my next turn."
				+"\n\u25C6 Stabilize\nI touch a living creature that has 0 hit points, automatically stabilizing them. The target can then choose to expend 1 of their Hit Dice to regain hit points equal to the maximum value of the Hit Die + their Con mod."
				
				RemoveString('Extra.Notes', combtMedicActionsStr, true);
				},
			},

			"subclassfeature6" : {
				name : "Field Doctor",
				source : ["GMB:LL-S", 6],
				minlevel : 6,
				description : desc([
					"When I use my action to stabilize a creature, restore hit points,", 
					"or grant temporary hit points,", 
					"I gain the effects of the Dodge action until the start of my next turn.",
					"When I use my Combat Medic feature,",
					"I can make one weapon attack as a bonus action on that turn.",
				]),
				action : ["bonus action", "Weapon Attack (after Combat Medic Action)"]
			},

			"subclassfeature13" : {
				name : "Advanced Combat Medic",
				source : ["GMB:LL-S", 7],
				minlevel : 13,
				description : desc([
					"As an action, I touch a creature and use one of the following abilities:",
					"Regeneration; Restoration; Resuscitation.",
					"Details on the above actions can be found on the notes page.",
				]),
				eval : function() {
					advanceMedActionsStr = 
						"\nCombat Medic Actions (Advanced Combat Medic) [Int Mod x per long rest]"
            			+"\n\u25C6 Regeneration\nCreature regains hit points equal to four rolls of my Unyielding Mind die. If the creature has a severed body part, I can reattach it as apart of this action."
						+"\n\u25C6 Restoration\nI end one of the following conditions currently affecting it: blinded, charmed, deafened, frightened, poisoned, a reduction to an ability score or its hit point maximum, or I reduce its level of exhaustion by 1."
						+"\n\u25C6 Resuscitation\nIf the  creature that has died within the last minute, I return it to life with 1 hit point. I cannot bring back a creature that died of old age, nor can I restore any body parts the creature was missing."
					AddString('Extra.Notes', advanceMedActionsStr, true);
					show3rdPageNotes();
				},
				removeeval : function() {
					advanceMedActionsStr = 
						"\nCombat Medic Actions (Advanced Combat Medic) [Int Mod x per long rest]"
						+"\n\u25C6 Regeneration\nCreature regains hit points equal to four rolls of my Unyielding Mind die. If the creature has a severed body part, I can reattach it as apart of this action."
						+"\n\u25C6 Restoration\nI end one of the following conditions currently affecting it: blinded, charmed, deafened, frightened, poisoned, a reduction to an ability score or its hit point maximum, or I reduce its level of exhaustion by 1."
						+"\n\u25C6 Resuscitation\nIf the  creature that has died within the last minute, I return it to life with 1 hit point. I cannot bring back a creature that died of old age, nor can I restore any body parts the creature was missing."
					RemoveString('Extra.Notes', advanceMedActionsStr, true);
				},
				usages : "Intelligence modifier per",
				usagescalc : "event.value = Math.max(1, What('Int Mod'));",
				recover : "long rest"
			},

			"subclassfeature17" : {
				name : "Master Physician",
				source : ["GMB:LL", 7],
				minlevel : 15,
				description : desc([
					"Whenever I restore hit points or grant temporary hit points to a creature,",
					"it gains the maximum amount, in place of rolling.",
					"Any creature within 30 feet of me that expends Hit Dice,",
					"treats their Hit Dice as its maximum possible roll."
				])
			},
		}
	}
);

/* The following is just here to use as a backup reference to make sure that what I copied from the original file by hohouy is correct and that I'm on the right path.

AddSubClass("warlord", "daring gambler", {
	regExpSearch : /^(?=.*daring)(?=.*gambler).*$/i,
	subname : "Stratagem of the Daring Gambler",
	source : ["SE:W", 5],
	fullname : "Daring Gambler",
	features : {
		"subclassfeature3" : {
			name : "Daring Assault",
			source : ["SE:W", 5],
			minlevel : 3,
			description : "\n   " + "Allies within range can choose to take -5 on their attack rolls to do extra damage",
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + (n < 15 ? 2 : 3) + "d6; " + (n < 10 ? "10 ft" : n < 20 ? "30 ft" : "60 ft");
			})
		},
		"subclassfeature7" : {
			name : "Desperate Avoidance",
			source : ["SE:W", 5],
			minlevel : 7,
			description : "\n" + "I can make a save with adv., but I get disadv. on attack rolls until my next turn ends",
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature11" : {
			name : "Hold The Line",
			source : ["SE:W", 5],
			minlevel : 11,
			description : desc([
				"Allies within range can choose to make a saving throw at disadvantage",
				"If the effect would normally do half damage on a successful save, it now does no damage"
			]),
			additional : levels.map(function (n) {
				return n < 11 ? "" : n < 20 ? "30 ft" : "60 ft";
			})
		},
		"subclassfeature15" : {
			name : "Risky Gambit",
			source : ["SE:W", 5],
			minlevel : 15,
			description : desc([
				"As a bonus action, I make a target in range provoke opportunity attacks from 1 creature",
				"If it does the attack, the attacker grants adv. on all attacks vs. it until it next turn starts"
			]),
			action : ["bonus action", ""],
			additional : levels.map(function (n) {
				return n < 15 ? "" : n < 20 ? "30 ft" : "60 ft";
			})
		},
		"subclassfeature18" : {
			name : "Lay the Trap",
			source : ["SE:W", 5],
			minlevel : 18,
			description : desc([
				"When a creature misses me with an attack while I'm conscious, I can attack it with ease",
				"One chosen creature and I gain adv. on our next attack vs. it before it next turn ends"
			])
		}
	}
});

AddSubClass("warlord", "golden general", {
	regExpSearch : /^(?=.*golden)(?=.*general).*$/i,
	subname : "Stratagem of the Golden General",
	source : ["SE:W", 5],
	fullname : "Golden General",
	features : {
		"subclassfeature3" : {
			name : "Inspiring Strike",
			source : ["SE:W", 5],
			minlevel : 3,
			description : desc([
				"Targets that I hit with a weapon attack are easier to hit until the start of my next turn",
				"The next attack roll against the target is made with advantage"
			])
		},
		"subclassfeature7" : {
			name : "Inspiring Presence",
			source : ["SE:W", 5],
			minlevel : 7,
			description : "\n   I gain proficiency in the Persuasion skill, or expertise if I already have proficiency",
			skills : [["Persuasion", "increment"]]
		},
		"subclassfeature11" : {
			name : "Glorious Sacrifice",
			source : ["SE:W", 5],
			minlevel : 11,
			description : desc([
				"If both me and creatures within range must make the same save, I can grant them adv.",
				"By doing so, I make my saving throw with disadvantage"
			]),
			additional : levels.map(function (n) {
				return n < 11 ? "" : n < 20 ? "30 ft" : "60 ft";
			})
		},
		"subclassfeature15" : {
			name : "Portentous Escape",
			source : ["SE:W", 5],
			minlevel : 15,
			description : desc([
				"When I succeed on a save, I can choose an ally within 60 ft that can see and hear me",
				"That ally gains temporary HP equal to 5 + my Charisma modifier"
			])
		},
		"subclassfeature18" : {
			name : "Rally the Troops",
			source : ["SE:W", 6],
			minlevel : 18,
			description : desc([
				"As an action, I can heal one creature that currently has an unused battle command die",
				"The target regains HP equal to two rolls of the battle command die + my Charisma mod"
			]),
			action : [["action", ""]]
		}
	}
});

AddSubClass("warlord", "hordemaster", {
	regExpSearch : /^(?=.*hordemaster).*$/i,
	subname : "Stratagem of the Hordemaster",
	source : ["SE:W", 6],
	fullname : "Hordemaster",
	features : {
		"subclassfeature3" : {
			name : "Make Haste",
			source : ["SE:W", 6],
			minlevel : 3,
			description : "\n   Allies starting there turn within range gain +5 ft speed until the end of their turn",
			additional : levels.map(function (n) {
				return n < 3 ? "" : n < 10 ? "10 ft" : n < 20 ? "30 ft" : "60 ft";
			})
		},
		"subclassfeature3.1" : {
			name : "Skirmisher",
			source : ["SE:W", 6],
			minlevel : 3,
			description : desc([
				"I gain bonus speed while I'm wearing light armor, no armor, and not wearing a shield",
				"Opportunity attacks I provoke by moving have disadvantage"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : n < 15 ? "+10 ft" : "+20 ft";
			}),
			changeeval : function (v) {
				var addSpd = v[1] < 3 ? 0 : v[1] < 15 ? "+10" : "+20";
				SetProf('speed', addSpd !== 0, {allModes : addSpd}, "Hordemaster: Skirmisher");
			}
		},
		"subclassfeature7" : {
			name : "Nimble Troops",
			source : ["SE:W", 6],
			minlevel : 7,
			description : "\n   Creatures within range add my Charisma modifier to Athletics and Acrobatics checks",
			additional : levels.map(function (n) {
				return n < 7 ? "" : n < 10 ? "10 ft" : n < 20 ? "30 ft" : "60 ft";
			})
		},
		"subclassfeature11" : {
			name : "Hit-and-Run",
			source : ["SE:W", 6],
			minlevel : 11,
			description : "\n   Using a battle command die granted by me also gains +10 ft speed until its turn ends"
		},
		"subclassfeature15" : {
			name : "Seize Advantage",
			source : ["SE:W", 6],
			minlevel : 15,
			description : desc([
				"When a creature misses an opportunity attacks against me or an ally within range,",
				"the next attack against the creature before the end of its next turn has advantage"
			]),
			additional : levels.map(function (n) {
				return n < 15 ? "" : n < 20 ? "30 ft" : "60 ft";
			})
		},
		"subclassfeature18" : {
			name : "Unbound Horde",
			source : ["SE:W", 6],
			minlevel : 18,
			description : desc([
				"Opportunity attacks against my allies within range are made with disadvantage",
				"When I move on my turn, allies within range can use their reaction to move up to 10 ft",
				"They can't move if their speed is currently less than 10 ft"
			]),
			additional : levels.map(function (n) {
				return n < 18 ? "" : n < 20 ? "30 ft" : "60 ft";
			})
		}
	}
});

AddSubClass("warlord", "resourceful leader", {
	regExpSearch : /^(?=.*resourceful)(?=.*leader).*$/i,
	subname : "Stratagem of the Resourceful Leader",
	source : ["SE:W", 6],
	fullname : "Resourceful Leader",
	features : {
		"subclassfeature3" : {
			name : "Find A Way",
			source : ["SE:W", 6],
			minlevel : 3,
			description : desc([
				"When an ally in 60 ft with a battle command die granted by me misses an attack,",
				"I can use my reaction to expend the battle command die on its behalf",
				"By doing so, the miss automatically becomes a hit, but the attack only deals half damage"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature3.1" : {
			name : "Shifting Resources",
			source : ["SE:W", 6],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can move a battle command die from a target to another",
				"Both targets must be within range, and the recipient must be able to hear me"
			]),
			additional : levels.map(function (n) {
				return n < 10 ? "10 ft" : n < 20 ? "30 ft" : "60 ft";
			}),
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Trick up your Sleeve",
			source : ["SE:W", 7],
			minlevel : 7,
			description : "\n   I can add my proficiency bonus (an extra time) to one ability check, attack roll, or save",
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature11" : {
			name : "Close Call",
			source : ["SE:W", 7],
			minlevel : 11,
			description : "\n   When I would fail a check or save, I can add a die to the total, but only once per minute",
			usages : 1,
			recovery : "1 min",
			additional : levels.map(function (n) {
				return n < 11 ? "" : n < 13 ? "d8" : n < 17 ? "d10" : "d12";
			})
		},
		"subclassfeature15" : {
			name : "Timely Warning",
			source : ["SE:W", 7],
			minlevel : 15,
			description : desc([
				"My battle command die can also be used to increase AC when the target of an attack",
				"When this increase would cause the attack to miss, the die is not expended"
			])
		},
		"subclassfeature18" : {
			name : "Hidden Resources",
			source : ["SE:W", 7],
			minlevel : 18,
			description : desc([
				"As a bonus action, I can allow a creature regain a use of a class or racial feature",
				"This feature can only be regained if it would normally be regained by a short rest"
			]),
			usages : 2,
			recovery : "long rest",
			action : [["bonus action",""]]
		}
	}
});
// >>
AddSubClass("warlord", "shrewd commander", {
	regExpSearch : /^(?=.*shrewd)(?=.*commander).*$/i,
	subname : "Stratagem of the Shrewd Commander",
	source : ["SE:W", 7],
	fullname : "Shrewd Commander",
	features : {
		"subclassfeature3" : {
			name : "The Weakest Link",
			source : ["SE:W", 7],
			minlevel : 3,
			description : desc([
				"As a bonus action when I hit an attack, I can mark the target until my next turn starts",
				"My allies in range add half my Cha mod (min 1) to attack rolls vs. the marked target"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Attention to Detail",
			source : ["SE:W", 7],
			minlevel : 7,
			description : "\n   Three times per long rest I can make an ability check with advantage",
			usages : 3,
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "Commander's Cunning",
			source : ["SE:W", 7],
			minlevel : 11,
			description : desc([
				"As a reaction when a creature with an unused battle command die from me is attacked,",
				"I can expend that die to impose disadvantage on the triggering attack roll"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature15" : {
			name : "Exploit the Advantage",
			source : ["SE:W", 8],
			minlevel : 15,
			description : "\n   When an ally attacks a target marked by me, those attacks do an extra +1d6 damage"
		},
		"subclassfeature18" : {
			name : "No Room for Failure",
			source : ["SE:W", 7],
			minlevel : 18,
			description : desc([
				"If an ally within range that has an unused battle command die from me drops to 0 HP,",
				"it can expend the die to regain HP equal to two rolls of the die + my Charisma modifier"
			]),
			additional : levels.map(function (n) {
				return n < 18 ? "" : n < 20 ? "30 ft" : "60 ft";
			})
		}
	}
});

AddSubClass("warlord", "supreme tactician", {
	regExpSearch : /^(?=.*supreme)(?=.*tactician).*$/i,
	subname : "Stratagem of the Supreme Tactician",
	source : ["SE:W", 8],
	fullname : "Supreme Tactician",
	features : {
		"subclassfeature3" : {
			name : "Tactical Edge",
			source : ["SE:W", 8],
			minlevel : 3,
			description : desc([
				"When my turn starts, I gain a tactics die (d4) and increase the dice I have by one step",
				"A die increases from a d4 to a d6, to a d8, to a d10, and finally to a d12",
				"Any ally within 60 ft that can hear me can expend a die and add it to one attack roll"
			]),
			additional : levels.map( function(n) {
				return n < 3 ? "" : n < 15 ? "max 1 die" : "max 2 dice";
			})
		},
		"subclassfeature7" : {
			name : "Student of History",
			source : ["SE:W", 8],
			minlevel : 7,
			description : "\n   I gain proficiency and expertise in the History skill",
			skills : [["History", "full"]]
		},
		"subclassfeature11" : {
			name : "Indomitable Offense",
			source : ["SE:W", 8],
			minlevel : 11,
			description : desc([
				"When someone uses one a combat dice I gave them, they gain a bonus to their AC",
				"This bonus equals half the result of the die roll and lasts until the end of my next turn"
			])
		},
		"subclassfeature15" : {
			name : "Superior Tactics",
			source : ["SE:W", 8],
			minlevel : 15,
			description : "\n   I can have two tactics dice at the same time"
		},
		"subclassfeature18" : {
			name : "Master Tactician",
			source : ["SE:W", 8],
			minlevel : 18,
			description : "\n   Creatures using a combat die granted by me can reroll any 1 or 2 until it is a 3 or more"
		}
	}
}); */