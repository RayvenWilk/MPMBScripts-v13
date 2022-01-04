/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass & Feat
	Effect:		This script adds a subclass for the Bard, called "College of Spirits" from Van Richten's Guide to Ravenloft.
	Code by:	Rish209
	Date:		2021-05-29 (sheet v13.0.4)
*/

var iFileName = "Bard - College of Spirits.js";
// RequiredSheetVersion(13.0.4);

SourceList["VRGtR"] = {
	name : "Van Richten's Guide to Ravenloft",
	abbreviation : "VRGtR",
	group : "Wizards of the Coast",
	url : "https://dnd.wizards.com/products/van-richtens-guide-ravenloft",
	date : "2021/05/18"
};

AddSubClass("bard", "college of spirits", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*spirits).*$/i,
	subname : "College of Spirits",
	source : ["VRGtR", -1],
	features : {
		"subclassfeature3" : {
			name : "Guiding Whispers",
			source : ["VRGtR", -1],
			minlevel : 3,
			description : "\n   " + "At 3rd level, you can reach out to spirits to guide you and others. You learn the Guidance cantrip, which doesn’t count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it.",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Guiding Whispers",
				spells : ["guidance"],
				selection : ["guidance"],
				firstCol : 'atwill'
			},
			spellChanges : {
				"guidance" : {
					time : "1 a",
					range : "60 ft",
					changes : "I can cast guidance, and it has a range of 60 ft instead of touch."
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Spiritual Focus",
			source : ["VRGtR", -1],
			minlevel : 3,
			description : desc(["At 3rd level, you employ tools that aid you in channeling spirits, be they historical figures or fictional archetypes. You can use the following objects as a spellcasting focus for your bard spells: a candle, crystal ball, skull, spirit board, or tarokka deck.",
				"Starting at 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a d6, and you gain a bonus to one damage or healing roll of the spell equal to the number rolled."
				]),
		},
		"subclassfeature3.2" : {
			name : "Tales from Beyond",
			source : ["VRGtR", -1],
			minlevel : 3,
			description : desc(["At 3rd level, you reach out to spirits who tell their tales through you. While you are holding your Spiritual Focus, you can use a bonus action to expend one use of your Bardic Inspiration and roll on the Spirit Tales table using your Bardic Inspiration die to determine the tale the spirits direct you to tell. You retain the tale in mind until you bestow the tale’s effect or you finish a short or long rest.",
				"You can use an action to choose one creature you can see within 30 feet of you (this can be you) to be the target of the tale’s effect. Once you do so, you can’t bestow the tale’s effect again until you roll it again.",
				"You can retain only one of these tales in mind at a time, and rolling on the Spirit Tales table immediately ends the effect of the previous tale.",
				"If the tale requires a saving throw, the DC equals your spell save DC.",
				"See the \"Notes\" page for the table"
				]),
			toNotesPage : {
				name : "Spirit Tales Table",
				source : ["VRGtR", -1],
				popupName : "Spirit Tales Table",
				note : [
					"Die  Tale Told Through You",
					"1    Tale of the Clever Animal. For the next 10 minutes, whenever the target makes an Intelligence, a Wisdom, or a Charisma check, the target can roll an extra die immediately after rolling the d20 and add the extra die's number to the check. The extra die is the same type as your Bardic Inspiration die.",
					"2    Tale of the Renowned Duelist. You make a melee spell attack against the target. On a hit, the target takes force damage equal to two rolls of your Bardic Inspiration die + your Charisma modifier.",
					"3    Tale of the Beloved Friends. The target and another creature of its choice it can see within 5 feet of it gains temporary hit points equal to a roll of your Bardic Inspiration die + your Charisma modifier",
					"4    Tale of the Runaway. The target can immediately use its reaction to teleport up to 30 feet to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 feet of it up to your Charisma modifier (minimum of 0) to immediately use the same reaction.",
					"5    Tale of the Avenger. For 1 minute, any creature that hits the target with a melee attack takes force damage equal to a roll of your Bardic Inspiration die.",
					"6    Tale of the Traveler. The target gains temporary hit points equal to a roll of your Bardic Inspiration die + your bard level. While it has these temporary hit points, the target’s walking speed increases by 10 feet and it gains a +1 bonus to its AC.",
					"7    Tale of the Beguiler. The target must succeed on a Wisdom saving throw or take psychic damage equal to two rolls of your Bardic Inspiration die, and the target is incapacitated until the end of its next turn.",
					"8    Tale of the Phantom. The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If it hits a creature with an attack during this invisibility, the creature it hits takes necrotic damage equal to a roll of your Bardic Inspiration die and is frightened of the target until the end of the frightened creature's next turn.",
					"9    Tale of the Brute. Each creature of the target’s choice it can see within 30 feet of it must make a Strength saving throw. On a failed save, a creature takes thunder damage equal to three rolls of your Bardic Inspiration die and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.",
					"10   Tale of the Dragon. The target spews fire from the mouth in a 30-foot cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to four rolls of your Bardic Inspiration die on a failed save, or half as much damage on a successful one.",
					"11   Tale of the Angel. The target regains hit points equal to two rolls of your Bardic Inspiration die + your Charisma modifier, and you end one condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.",
					"12   Tale of the Mind-Bender You envoke an incomprehensible fable from an otherworldly being. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of your Bardic Inspiration die and be stunned until the end of its next turn."
				]
			},
			action : [["action", " (Bestow Tale)"], ["bonus action", " (Recall Tale)"]]
		},
		"subclassfeature6" : {
			name : "Spirit Session",
			source : ["VRGtR", -1],
			minlevel : 6,
			description : desc(["At 6th level, spirits provide you with supernatural insights. You can conduct an hour-long ritual channeling spirits (which can be done during a short or long rest) using your Spiritual Focus. You can conduct the ritual with a number of willing creatures equal to your proficiency bonus (including yourself). At the end of the ritual, you temporarily learn one spell of your choice from any class.",
				"The spell you choose must be of a level equal to the number of creatures that conducted the ritual or less, the spell must of a level you can cast, and it must be in the school of Divination or Necromancy. The chosen spell counts as a bard spell for you but doesn’t count against the number of bard spells you know.",
				"Once you perform the ritual, you can’t do so again until you start a long rest, and you know the chosen spell until you start a long rest."
				]),
			recovery: "long rest"
		},
		"subclassfeature14" : {
			name : "Mystical Connection",
			source : ["VRGtR", -1],
			minlevel : 14,
			description : "\n   " + "At 14th level, you now have the ability to nudge the spirits of Tales from Beyond toward certain tales. Whenever you roll on the Spirit Tales table, you can roll the die twice and choose which of the two effects to bestow. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.",
		}
	}
});