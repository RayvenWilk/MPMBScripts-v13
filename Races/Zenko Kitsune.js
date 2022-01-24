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
	Date:		2022-01-15 (sheet 13.1.0)
*/

var iFileName = "Zenko Kitsune[transcribed by rayvenwilk].js";

SourceList["DDW"] = {
	name : "D&D Wiki",
	abbreviation : "DDW",
	abbreviationSpellsheet : "W",
	group : "",
	url : "https://www.dandwiki.com/wiki/Kitsune_%22Fox_Spirit%22_(5e_Class)",
	date : ""
};

var ZenkoKitsuneTraitTails = [
	"Trickery:",
	"   You can cast the disguise self spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a short or long rest. Charisma is your spellcasting ability for this spell. When you use this version of disguise self, your true form is revealed in any reflective surface and if a creature sees your true form this way they succeed on any check to see through your disguise.",
	"\n  Signs of Power:",
	"   Starting at 2nd level you begin growing more tails. Tail's are a pride point for most Kitsune since the more you have the more powerful and wise you are believed to become and the more ability's you're likely to obtain.",
	"You gain a tail at 2nd, 4th, 6th, 8th, 10th, 12th, 14th, and 16th levels.",
	"\u2022 Second Tail: Tail of Luck & Misleading",
	"   At 2nd level you grow a second tail and are now able to predict your opponents attacks to a certain extent. If you choose, on your turn you can take a bonus action to give the next creature who attacks you disadvantage. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a Long Rest.",
	"\u2022 Third Tail: Tail of Protection",
	"   At 4th level you start to harness your tails power and use it for defense. While unarmored you gain Ac of 10+ Charisma & dexterity modifier.",
	"\u2022 Fourth Tail: Tail of Expertise",
	"   At 6th level, choose two of your skill Proficiencies, or one of your skill Proficiencies and your proficiency with Thieves' Tools. Your Proficiency Bonus is doubled for any ability check you make that uses either of the chosen Proficiencies.\nAt 12th level, you can choose two more of your Proficiencies (in Skills or with thieves' tools) to gain this benefit",
	"\u2022 Fifth Tail: Tail of Animorph",
	"   At 8th level you gain the ability to channel your innate magic to become any creature you've seen before that has a Cr Lvel equal to 1/3rd Kitsune level. In this form you keep all your mental ability's and gain a temp hp equal to that of the creature you are transforming into, as will as your physical ones match that of the creature, with exception of your AC (due to third tail ability). You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a Long Rest.\nIn this form you can only cast your Fox Fire and any Racial spells you know. Your equipment and anything you're carrying is also absorbed into your form. If you are knocked unconscious in this form you revert to your human form and your Kitsune features are visible to the naked eye. Lastly you gain certain damage resistances (whilst in fox form) based on your archetype: radiant + necrotic for Zenko and fire + psychic for Yako You",
	"\u2022 Sixth Tail: Tail of Shielding",
	"   At 10th level you learn how to properly defend yourself. You can use your reaction to cast shield without expending any spell slots. You can use this feature amount of times equal to the amount of tails you have. You regain the usages spent after a long rest. The number increases as you gain more tails.",
	"\u2022 Seventh Tail: Fox Fire",
	"   At 12th level while in your True Kitsune form your Fox Fire's damage is now a D10. However the currently summoned Fox Fire's Damage is not effected.",
	"\u2022 Eighth Tail: Not All There",
	"   At 14th level you have the uncanny ability to just appear. Kitsune can use an action to become invisible as if they had cast greater invisibility and can dismiss it as an action, however they can cause certain parts of themselves to reappear, for example their eyes and mouth are the only things visible.. They can do this at will indefinitely however being charmed, frightened, stunned, poisoned, set alight by fire, being knocked unconscious or killed will cause you to become visible again.",
	"\u2022 Ninth Tail: Cero",
	"   At 16th Level, With your ever growing mastery of your tails, harnessing the power of fire becomes second nature . Kitsune has begun to figure out How to concentrate fire at a dangerous level producing a large beam like weapon known as a Cero. The beam takes an action to charge and fire the blast towards the enemy, 120 feet long and 5 feet wide. Each creature in the line of the Cero must make a Dexterity saving throw. The damage of the blast is 10d6 fire damage + 4d4 force damage + your charisma modifier on a failed save, and half as much on a successful Dexterity save. This ability can only be used once per long rest.\nAt 18th level, the Cero blast can be used 2 times, regaining the use of the ability at the end of a long rest. At 20th level, the Cero blast can used 3 times, regaining the use of the ability at the end of a long rest. At this level your foxfire mastery becomes just that. One of a master. All fox fire based techniques (not spells) are so powerful that those who are fire resistant now take full damage, and creatures who are immune to fire damage now take half."
];

RaceList["zenko kitsune"] = {
	regExpSearch : /^(?=.*zenko)(?=.*kitsune|fox).*$/i,
    name : "Zenko",
    sortname : "Kitsune, Zenko",
    source : ["DDW"],
    plural : "Zenkos",
    size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common", "Sylvan", "Vulpine (wild fox)"],
	vision : ["Darkvision", 60],
	weaponProfs: [true, false],
	armor : [true, false, false, true],
	skillstxt : "Choose three from the following: Survival, Nature, Insight, Persuasion, Deception, Stealth, Perception",
	age : "can live to be 100 to 1000 years",
	height : "range from barely 5 to over 6 (5' 0\" +2d8\")",
	weight : "weigh around 130lb (80 + 2d8 \xD7 1d6 lb)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Zenko (+2 Dexterity, +1 Charisma)\nFox Fire: Like the produce flame cantrip.\nFox Spirit: Polymorph into fox once per long rest.\nSpeak with Beasts: You have advantage on all Charisma checks you make to influence them.\nTrickery: Cast Disguise Self (see notes)",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Kitsune Spells - Cantrips",
		spells : ["control flames", "druidcraft", "friends", "fire bolt", "green-flame blade", "gust", "magic stone", "mending", "message", "minor illusion", "mold earth", "prestidigitation", "primal savagery", "shape water", "shillelagh", "thorn"],
		selection : ["control flames", "druidcraft", "friends", "fire bolt", "green-flame blade", "gust", "magic stone", "mending", "message", "minor illusion", "mold earth", "prestidigitation", "primal savagery", "shape water", "shillelagh", "thorn"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	},{
		name : "Kitsune Spells - Level 1",
		spells : ["animal friendship", "burning hands", "catapult", "charm person", "color spray", "create or destroy water", "disguise self", "expeditious retreat", "faerie fire", "feather fall", "goodberry", "healing word", "identify", "jump", "longstrider", "mage armor", "silent image", "purify food and drink", "sanctuary", "sleep"],
		selection : ["animal friendship", "burning hands", "catapult", "charm person", "color spray", "create or destroy water", "disguise self", "expeditious retreat", "faerie fire", "feather fall", "goodberry", "healing word", "identify", "jump", "longstrider", "mage armor", "silent image", "purify food and drink", "sanctuary", "sleep"],
		times : [2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 2",
		spells : ["aganazzar's scorcher", "alter self", "animal messanger", "barkskin", "blur", "crown of madness", "darkvision", "dragon's breath", "earthbind", "enhance ability", "enlarge/reduce", "flame blade", "healing spirit", "heat metal", "hold person", "invisibility", "knock", "levitate", "maximilian's earthen grasp", "mirror image", "phantasmal force", "pyrotechnics", "shadow blade", "skywrite", "spider climb", "spike growth", "scorching ray", "suggestion"],
		selection : ["aganazzar's scorcher", "alter self", "animal messanger", "barkskin", "blur", "crown of madness", "darkvision", "dragon's breath", "earthbind", "enhance ability", "enlarge/reduce", "flame blade", "healing spirit", "heat metal", "hold person", "invisibility", "knock", "levitate", "maximilian's earthen grasp", "mirror image", "phantasmal force", "pyrotechnics", "shadow blade", "skywrite", "spider climb", "spike growth", "scorching ray", "suggestion"],
		times : [0, 0, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 3",
		spells : ["blink", "catnap", "dispel magic", "enemies abound", "erupting earth", "fear", "fireball", "flame arrows", "fly", "hypnotic pattern", "gaseous form", "haste", "lightning bolt", "major image", "meld into stone", "melf's minute meteors", "plant growth", "sending", "slow", "speak with plants", "tiny hut", "water breathing", "water walk"],
		selection : ["blink", "catnap", "dispel magic", "enemies abound", "erupting earth", "fear", "fireball", "flame arrows", "fly", "hypnotic pattern", "gaseous form", "haste", "lightning bolt", "major image", "meld into stone", "melf's minute meteors", "plant growth", "sending", "slow", "speak with plants", "tiny hut", "water breathing", "water walk"],
		times : [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 4",
		spells : ["arcane eye", "blight", "charm monster", "confusion", "control water", "dimensional door", "dominate beast", "elemental bane", "giant insect", "greater invisiblity", "guardian of nature", "hallucinatory terrain", "polymorph", "stone shape", "wall of fire"],
		selection : ["arcane eye", "blight", "charm monster", "confusion", "control water", "dimensional door", "dominate beast", "elemental bane", "giant insect", "greater invisiblity", "guardian of nature", "hallucinatory terrain", "polymorph", "stone shape", "wall of fire"],
		times : [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 5",
		spells : ["animate objects", "awaken", "creation", "control winds", "dominate person", "hold monster", "geas", "immolation", "reincarnate", "seeming", "skill empowerment", "scrying", "synaptic static", "telekinesis", "transmute rock"],
		selection : ["animate objects", "awaken", "creation", "control winds", "dominate person", "hold monster", "geas", "immolation", "reincarnate", "seeming", "skill empowerment", "scrying", "synaptic static", "telekinesis", "transmute rock"],
		times : [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 6",
		spells : ["bones of the earth", "chain lightning", "disintegrate", "investiture of flame", "investiture of ice", "investiture of stone", "investiture of wind", "mass suggestion", "mental prison", "move earth", "wind walk"],
		selection : ["bones of the earth", "chain lightning", "disintegrate", "investiture of flame", "investiture of ice", "investiture of stone", "investiture of wind", "mass suggestion", "mental prison", "move earth", "wind walk"],
		times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 7",
		spells : ["blasting bolt", "delayed blast fireball", "etheralness", "fire storm", "mirage arcane", "power word pain", "regenerate", "reverse gravity", "teleport"],
		selection : ["blasting bolt", "delayed blast fireball", "etheralness", "fire storm", "mirage arcane", "power word pain", "regenerate", "reverse gravity", "teleport"],
		times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 8",
		spells : ["animal shapes", "antipathy/sympathy", "control weather", "Eradication Flame", "dominate monster", "feeblemind", "power word stun"],
		selection : ["animal shapes", "antipathy/sympathy", "control weather", "Eradication Flame", "dominate monster", "feeblemind", "power word stun"],
		times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		firstCol : "oncesr"
	},{
		name : "Kitsune Spells - Level 9",
		spells : ["mass polymorph", "meteor swarm", "power word kill", "psychic scream", "shapechange", "time stop", "wish"],
		selection : ["mass polymorph", "meteor swarm", "power word kill", "psychic scream", "shapechange", "time stop", "wish"],
		times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
		firstCol : "oncesr"
	}],
	toNotesPage : [{
		name : "Kitsune Trickery and Tails",
		popupName : "Kitsune Trickery and Tails",
		note : ZenkoKitsuneTraitTails
	}],
	features : {
		"fox spirit" : {
			name : "Fox Spirit",
			limfeaname : "Fox Spirit",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Fox Spirit",
				spells : ["polymorph"],
				selection : ["polymorph"],
				firstCol : "oncelr"
			},
		},
		"trickery" : {
			name : "Trickery",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Trickery",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : "oncesr",
			}
		},
		"second tail" : {			
			name : "Tail of Luck & Misleading",
			limfename : "Second Tail",
			minlevel : 2,
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"healing flame" : {
			name : "Healing Flame",
			source : ["DDW"],
			minlevel : 3,
			usages : levels.map(function (n) { return n < 3 ? "" : n * "5 per "; }),
			recovery : "long rest",
			action : ["action", ""]
		},
		"third tail" : {			
			name : "Tail of Protection",
			minlevel : 4,
			extraAC : [{
				mod : "Cha",
				stopeval : function (v) {
					return v.wearingArmor;
				}
			}],
		},
		"elemental infusion" : {
			name : "Elemental Infusion",
			minlevel : 6,
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", " +2d8 Fi/Co/Li dmg for 1 hr"]
		},
		"sixth tail" : {			
			name : "Tail of Shielding",
			limfename : "Tail of Shielding",
			minlevel : 10,
			usages : "# of tails per ",
			recovery : "long rest"
		},
		"eighth tail" : {			
			name : "Not All There",
			limfename : "Not All There",
			minlevel : 14,
			spellcastingBonus : {
				name : "Fox Spirit",
				spells : ["greater invisibility"],
				selection : ["greater invisibility"],
				firstCol : "markedbox"
			}
		},
		"tricksters healing" : {
			name : "Tricksters Healing",
			minlevel : 14,
			usages : 1,
			recovery : "long rest",
			action : ["action", " 3d6+Cha"]
		},
		"nineth tail" : {			
			name : "Cero",
			minlevel : 16,
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3],
			recovery : "long rest",
			weaponOptions : {
				regExpSearch : /cero/i,
				name : "Cero",
				source : ["DDW"],
				ability : 6,
				type : "Natural",
				damage : [10, 6, "fire"],
				range : "120-ft line",
				description : "+4d4 Force dmg; Dex save, half dmg;",
				abilitytodamage : true,
				dc : true,
			}
		},
		"ancient form" : {
			name : "Ancient Form",
			minlevel: 20,
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["reaction", " (see notes)"]
		}
	},
	weaponsAdd : ["Fox Fire"],
	weaponOptions : {
		baseWeapon : "produce flame",
		regExpSearch : /^(?=.*fox)(?=.*fire).*$/i,
		name : "Fox Fire",
		source : ["DDW"],
		description : "10-ft radius bright light and 10-ft radius dim light until thrown",
	}
}