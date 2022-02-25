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
	Date:		2022-02-24 (sheet 13.1.0)
*/


var iFileName = "Shaman[transcribed by rayvenwilk].js";

SourceList["PC:SC"] = {
	name: "Pattycakeee:Shaman",
	abbreviation: "PC:SC",
	abbreviationSpellsheet: "P",
	url: "https://www.dmsguild.com/product/170851/",
	date: "2017/01/20"
};

//first make the sheet know which spells are shaman spells
[//level 0 (cantrips)
	"dancing lights", "guidance", "light", "mage hand", "mending", "message", "prestidigitation", "shillelagh", "shocking grasp", "thorn whip",

	//level 1
	"bane", "bless", "cure wounds", "detect magic", "dissonant whispers", "entangle", "goodberry", "guiding bolt", "healing word", "inflict wounds", "speak with animals", "tasha's hideous laughter", "thunderwave",

	//level 2
	"augury", "beast sense", "enhance ability", "gust of wind", "hold person", "lesser restoration", "magic weapon", "see invisibility", "silence", "spike growth", "spiritual weapon",

	//level 3
	"bestow curse", "call lightning", "clairvoyance", "conjure animals", "dispel magic", "revivify", "speak with dead", "speak with plants", "spirit guardians",

	//level 4
	"banishment", "conjure woodland beings", "conjure minor elementals", "divination", "giant insect", "grasping vine", "greater invisibility",

	//level 5
	"awaken", "commune with nature", "conjure elemental", "greater restoration", "insect plague", "legend lore", "mass cure wounds", "planar binding", "raise dead", "scrying",

	//level 6
	"conjure fey", "forbiddance", "planar ally", "true seeing", "wall of thorns",

	//level 7
	"etherealness", "plane shift", "regenerate", "symbol",

	//level 8
	"control weather", "earthquake", "sunburst", "tsunami",

	//level 9
	"astral projection", "foresight", "storm of vengeance", "true resurrection",
].forEach(function (s) {
	if (SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("shaman") === -1) SpellsList[s].classes.push("shaman");
});

ClassList.shaman = {
	regExpSearch: /^(?=.*shaman)(?!.*druid).*$/i,
	name: "Shaman",
	source: [["PC:SC", 0]],
	primaryAbility: "Wisdom",
	abilitySave: 5,
	prereqs: "",
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die: 8,
	saves: ["Wis", "Cha"],
	skillstxt: {
		primary: "Choose two from Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival"
	},
	toolProf: {
		primary: ["Herbalism Kit"],
		secondary: ["Herbalism Kit"]
	},
	armorProfs: {
		primary: [true, true, false, true],
		secondary: [true, true, false, true]
	},
	weaponProfs: {
		primary: [true, false, ["spear"]],
		secondary: [true, false, ["spear"]]
	},
	equipment: "Shaman starting equipment;" +
		"\n   \u2022 A wooden shield -or- any simple weapon;" +
		"\n   \u2022 Herbalism kit -or- any simple weapon;" +
		"\n   \u2022 Leather Armor" +
		"\n   \u2022 An exporer's pack and a shamanic focus.",
	subclasses: ["Shamanic Archetype", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor: 2,
	spellcastingFactorRoundupMulti: true,
	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl 9
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl10
		[4, 3, 3, 3, 2, 1, 0, 0, 0], //lvl11
		[4, 3, 3, 3, 2, 1, 0, 0, 0], //lvl12
		[4, 3, 3, 3, 2, 1, 1, 0, 0], //lvl13
		[4, 3, 3, 3, 2, 1, 1, 0, 0], //lvl14
		[4, 3, 3, 3, 2, 1, 1, 1, 0], //lvl15
		[4, 3, 3, 3, 2, 1, 1, 1, 0], //lvl16
		[4, 3, 3, 3, 2, 1, 1, 1, 1], //lvl17
		[4, 3, 3, 3, 3, 1, 1, 1, 1], //lvl18
		[4, 3, 3, 3, 3, 2, 2, 1, 1], //lvl19
		[4, 3, 3, 3, 3, 2, 2, 1, 1], //lvl20
	],
	spellcastingKnown: {
		cantrips: [2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells: "list",
		prepared : true
	},
	features: {
		"spirit sense": {
			name: "Spirit Sense",
			source: [["PC:SC", 2]],
			minlevel: 1,
			description: desc([
				"As an action, until the end of my next turn I am aware of the crea type and location of any undead and elementals within 60 ft of me that is not behind total cover.",
				"I can also determine if a crea has died in thie area within the last 24 hours. I can use this 1 + my Wis mod times and regain all uses after a long rest."
			]),
			action: [["action", ""]],
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1,What('Wis Mod'))+1;",
			recovery: "long rest"
		},
		"spirit guide": {
			name: "Spirit Guide",
			source: [["PC:SC", 3]],
			minlevel: 2,
			description: desc([
				"As an action I can cast the Find Familiar ritual to summon my Spirit Guide",
				"Choose Bear, Coyote, Eagle, Owl, Snake, or Wolf using the \"Choose Feature\" button above"
			]),
			spellcastingBonus: {
				name: "Spirit Guide",
				spells: ["find familiar"],
				selection: ["find familiar"],
				firstCol: 'markedbox'
			},
			action: ["action", " (cast Find Familiar)"],
			extraname: "Spirit Guide Animal",
			extrachoices: ["Bear Spirit Guide", "Coyote Spirit Guide", "Eagle Spirit Guide", "Owl Spirit Guide", "Snake Spirit Guide", "Wolf Spirit Guide"],
			extraTimes: [1],
			"bear spirit guide": {
				name: "Bear Spirit Guide",
				source: [["PC:SC", 3]],
				description: "",
				additional: "cast Find Familiar",
				action: ["bonus action", " (command)"],
				spellcastingBonus: {
					name: "Spirit Guide",
					spells: ["guidance"],
					selection: ["guidance"],
					firstCol: 'atwill'
				},
				creaturesAdd: [["Bear Spirit Guide", true]],
				creatureOptions: [{
					name: "Bear Spirit Guide",
					source: [["PC:SC", 3]],
					header: "Spirit Guide",
					size: 3,
					type: "Fey",
					alignment: "Unaligned",
					ac: 14,
					hp: 5,
					hd: [1, 4],
					speed: "30 ft",
					scores: [10, 10, 12, 6, 14, 10],
					skills: {
						"athletics": 2
					},
					damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
					damage_immunities: "necrotic, poison",
					condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
					languages: "can understand the languages it's master knows but cannot speak",
					proficiencyBonus: 0,
					proficiencyBonusLinked: true,
					challengeRating: "1",
					scores: [10, 10, 12, 6, 14, 10],
					senses: "Darkvision 60 ft",
					attacksAction: 1,
					attacks: [{
						name: "",
						ability: "",
						damage: ["", "", ""],
						range: "",
						description: ""
					}],
					features: [{
						name: "Innate Spellcasting",
						description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
					}],
					actions: [{
						name: "Psychic Link",
						description: "The spirit animal can communicate telepthically with it's master."
					}, {
						name: "Spirit Bond",
						description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
					}, {
						name: "Blink",
						minlevel: 1,
						description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
					}],
					calcChanges: {
						hp: function (totalHD, HDobj, prefix) {
							if (!classes.known.shaman) return;
							var mcLvl = classes.known.shaman.level;
							HDobj.alt.push(5 + mcLvl);
							HDobj.altStr.push(" = 5 as a base\n + 1 per creator's level")
						},
						setAltHp: true,
						hpForceRecalc: true
					},
				}],
			},
			"wolf spirit guide": {
				name: "Wolf Spirit Guide",
				source: [["PC:SC", 3]],
				description: "",
				additional: "cast Find Familiar",
				action: ["bonus action", " (command)"],
				spellcastingBonus: {
					name: "Spirit Guide",
					spells: ["guidance"],
					selection: ["guidance"],
					firstCol: 'atwill'
				},
				creaturesAdd: [["Wolf Spirit Guide", true]],
				creatureOptions: [{
					name: "Wolf Spirit Guide",
					source: [["PC:SC", 3]],
					header: "Spirit Guide",
					size: 3,
					type: "Fey",
					alignment: "Unaligned",
					ac: 15,
					hp: 5,
					hd: [1, 4],
					speed: "30 ft",
					scores: [10, 10, 12, 6, 14, 10],
					skills: {
						"perception": 2,
						"survival": 2
					},
					damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
					damage_immunities: "necrotic, poison",
					condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
					languages: "can understand the languages it's master knows but cannot speak",
					proficiencyBonus: 0,
					proficiencyBonusLinked: true,
					challengeRating: "1",
					scores: [10, 10, 12, 6, 14, 10],
					senses: "Darkvision 60 ft",
					attacksAction: 1,
					attacks: [{
						name: "",
						ability: "",
						damage: ["", "", ""],
						range: "",
						description: ""
					}],
					features: [{
						name: "Innate Spellcasting",
						description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
					}],
					actions: [{
						name: "Psychic Link",
						description: "The spirit animal can communicate telepathically with it's master."
					}, {
						name: "Spirit Bond",
						description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
					}, {
						name: "Blink",
						minlevel: 1,
						description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
					}]
				}]
			},
			"coyote spirit guide": {
				name: "Coyote Spirit Guide",
				source: [["PC:SC", 3]],
				description: "",
				additional: "cast Find Familiar",
				action: ["bonus action", " (command)"],
				spellcastingBonus: {
					name: "Spirit Guide",
					spells: ["guidance"],
					selection: ["guidance"],
					firstCol: 'atwill'
				},
				creaturesAdd: [["Coyote Spirit Guide", true]],
				creatureOptions: [{
					name: "Coyote Spirit Guide",
					source: [["PC:SC", 3]],
					header: "Spirit Guide",
					size: 3,
					type: "Fey",
					alignment: "Unaligned",
					ac: 15,
					hp: 5,
					hd: [1, 4],
					speed: "30 ft",
					scores: [10, 10, 12, 6, 14, 10],
					skills: {
						"perception": 2,
						"survival": 2
					},
					damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
					damage_immunities: "necrotic, poison",
					condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
					languages: "can understand the languages it's master knows but cannot speak",
					proficiencyBonus: 0,
					proficiencyBonusLinked: true,
					challengeRating: "1",
					scores: [10, 10, 12, 6, 14, 10],
					senses: "Darkvision 60 ft",
					attacksAction: 1,
					attacks: [{
						name: "",
						ability: "",
						damage: ["", "", ""],
						range: "",
						description: ""
					}],
					features: [{
						name: "Innate Spellcasting",
						description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
					}],
					actions: [{
						name: "Psychic Link",
						description: "The spirit animal can communicate telepthically with it's master."
					}, {
						name: "Spirit Bond",
						description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
					}, {
						name: "Blink",
						minlevel: 1,
						description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
					}]
				}]
			},
			"eagle spirit guide": {
				name: "Eagle Spirit Guide",
				source: [["PC:SC", 3]],
				description: "",
				additional: "cast Find Familiar",
				action: ["bonus action", " (command)"],
				spellcastingBonus: {
					name: "Spirit Guide",
					spells: ["guidance"],
					selection: ["guidance"],
					firstCol: 'atwill'
				},
				creaturesAdd: [["Eagle Spirit Guide", true]],
				creatureOptions: [{
					name: "Eagle Spirit Guide",
					source: [["PC:SC", 3]],
					header: "Spirit Guide",
					size: 4,
					type: "Celestial",
					alignment: "Unaligned",
					ac: 14,
					hp: 5,
					hd: [1, 4],
					speed: "30 ft, fly 60 ft",
					scores: [10, 10, 12, 6, 14, 10],
					damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
					damage_immunities: "necrotic, poison",
					condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
					languages: "can understand the languages it's master knows but cannot speak",
					proficiencyBonus: 0,
					proficiencyBonusLinked: true,
					challengeRating: "1",
					scores: [10, 10, 12, 6, 14, 10],
					senses: "Darkvision 60 ft",
					attacksAction: 1,
					attacks: [{
						name: "",
						ability: "",
						damage: ["", "", ""],
						range: "",
						description: ""
					}],
					features: [{
						name: "Innate Spellcasting",
						description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
					}],
					actions: [{
						name: "Psychic Link",
						description: "The spirit animal can communicate telepthically with it's master."
					}, {
						name: "Spirit Bond",
						description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
					}, {
						name: "Blink",
						minlevel: 1,
						description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
					}],
					eval: function (prefix, lvl) {
						AddString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
					},
				}]
			},
			"owl spirit guide": {
				name: "Owl Spirit Guide",
				source: [["PC:SC", 3]],
				description: "",
				additional: "cast Find Familiar",
				action: ["bonus action", " (command)"],
				spellcastingBonus: {
					name: "Spirit Guide",
					spells: ["guidance"],
					selection: ["guidance"],
					firstCol: 'atwill'
				},
				creaturesAdd: [["Owl Spirit Guide", true]],
				creatureOptions: [{
					name: "Owl Spirit Guide",
					source: [["PC:SC", 3]],
					header: "Spirit Guide",
					size: 4,
					type: "Celestial",
					alignment: "Unaligned",
					ac: 14,
					hp: 5,
					hd: [1, 4],
					speed: "30 ft, fly 60 ft",
					scores: [10, 10, 12, 6, 14, 10],
					damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
					damage_immunities: "necrotic, poison",
					condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
					languages: "can understand the languages it's master knows but cannot speak",
					proficiencyBonus: 0,
					proficiencyBonusLinked: true,
					challengeRating: "1",
					scores: [10, 10, 12, 6, 14, 10],
					senses: "Darkvision 60 ft",
					attacksAction: 1,
					attacks: [{
						name: "",
						ability: "",
						damage: ["", "", ""],
						range: "",
						description: ""
					}],
					features: [{
						name: "Innate Spellcasting",
						description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
					}],
					actions: [{
						name: "Psychic Link",
						description: "The spirit animal can communicate telepthically with it's master."
					}, {
						name: "Spirit Bond",
						description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
					}, {
						name: "Blink",
						minlevel: 1,
						description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
					}],
					eval: function (prefix, lvl) {
						AddString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
					},
				}]
			},
			"snake spirit guide": {
				name: "Snake Spirit Guide",
				source: [["PC:SC", 3]],
				description: "",
				additional: "cast Find Familiar",
				action: ["bonus action", " (command)"],
				spellcastingBonus: {
					name: "Spirit Guide",
					spells: ["guidance"],
					selection: ["guidance"],
					firstCol: 'atwill'
				},
				creaturesAdd: [["Snake Spirit Guide", true]],
				creatureOptions: [{
					name: "Snake Spirit Guide",
					source: [["PC:SC", 3]],
					header: "Spirit Guide",
					size: 2,
					type: "Fey",
					alignment: "Unaligned",
					ac: 13,
					hp: 5,
					hd: [1, 4],
					speed: "30 ft",
					scores: [10, 10, 12, 6, 14, 10],
					skills: {
						"stealth": 2
					},
					damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
					damage_immunities: "necrotic, poison",
					condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
					languages: "can understand the languages it's master knows but cannot speak",
					proficiencyBonus: 0,
					proficiencyBonusLinked: true,
					challengeRating: "1",
					scores: [10, 10, 12, 6, 14, 10],
					senses: "Darkvision 60 ft",
					attacksAction: 1,
					attacks: [{
						name: "",
						ability: "",
						damage: ["", "", ""],
						range: "",
						description: ""
					}],
					features: [{
						name: "Innate Spellcasting",
						description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
					}],
					actions: [{
						name: "Psychic Link",
						description: "The spirit animal can communicate telepthically with it's master."
					}, {
						name: "Spirit Bond",
						description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
					}, {
						name: "Blink",
						minlevel: 1,
						description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
					}],
					addMod: [
						{ type: "skill", field: "Init", mod: 5, text: "The snake has a +5 to initiative rolls." }
					],
					eval: function (prefix, lvl) {
						AddString(prefix + 'Cnote.Left', 'The sspirit animal has advantage on Stealth (Dex) checks.', true);
					},
					removeeval: function (prefix, lvl) {
						RemoveString(prefix + 'Cnote.Left', 'The sspirit animal has advantage on Stealth (Dex) checks.', true);
					},
				}]
			}
		},
		"spirit boon": {
			name: "Spirit Boon",
			source: [["PC:SC", 3]],
			minlevel: 2,
			description: "I can choose boons for my spirit guide when I summon them. I can choose up to 2 st level 2, 3 at level 7, and 4 at level 15." + "\n   " + "Choose Boons using the \"Choose Feature\" button above", 
			additional: levels.map(function (n) {
				return n < 2 ? "" : (n < 7 ? 2 : n < 15 ? 3 : 4) + " boons";
			}),
			extraname: "Spirit Guide Boons",
			extrachoices: ["Awakened Spirit", "Curious Spirit", "Durable Spirit", "Guardian Spirit", "Helpful Spirit", "Illusive Spirit", "Insightful Spirit", "Narrative Spirit", "Protective Spirit", "Stalking Spirit", "Watchful Spirit"],
			extraTimes: levels.map(function (n) {
				return n < 2 ? 0 : n < 7 ? 2 : n < 15 ? 3 : 4;
			}),
			"awakened spirit": {
				name: "Awakened Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"My spirit guide can convey simple ideas, emotions, and images telepathlically to a creature within 100 ft of it that can usterstand a language."
				])
			},
			"curious spirit": {
				name: "Curious Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"As long as we are on the same plane, I can choose to see through my spirit guide's eyes as well as sense what it senses (no range)."
				])
			},
			"durable spirit": {
				name: "Durable Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"My spirit guide has advantage on saving throws against magical effects."
				])
			},
			"guardian spirit": {
				name: "Guardian Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"My spirit guide can use it's reaction to impose disadvantage on an attack roll made by a creature within 5 ft of itself."
				])
			},
			"helpful spirit": {
				name: "Helpful Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"My spirit animal gains the ability to cast the following cantrips at will:",
					"Mending, Light, and Dancing Lights"
				]),
				spellcastingBonus: {
					name: "Spirit Guide Spells",
					spells: ["mending", "light", "dancing lights"],
					selection: ["mending", "light", "dancing lights"],
					firstCol: 'atwill',
					times : 3
				}
			},
			"illusive spirit": {
				name: "Illusive Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"Opportunity attacks made against my spirit guide as it is leaving a creatures reach are taken with disadvantage."
				])
			},
			"insightful spirit": {
				name: "Insightful Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"When I make a Cha, Int, or Wis skill check in which I am proficient, I can double my proficiency bonus for the roll. This only doubles my proficiency if it isn't already doubled.",
					"My spirit guide can use this ability using my Wis mod per day."
				]),
				usages: "Wis mod per ",
				usagescalc: "event.value = Math.max(1, What('Wis mod'));",
				recovery: "dawn"
			},
			"narrative spirit": {
				name: "Narrative Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"Once per short rest my spirit guide can cast Speak with Animals or Animal Friendship"
				]),
				usages: 1,
				recovery: "short rest"
			},
			"protective spirit": {
				name: "Protective Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"As an action my spirit guide can grant temp HP equal to my Wis mod to a willing creature within 5 ft that lasts for 5 min."
				]),
			},
			"stalking spirit": {
				name: "Stalking Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"My spirit guide has adv. on Survival(Wis) checks made for tracking and locating shelter or food."
				])
			},
			"watchful spirit": {
				name: "Watchful Spirit",
				source: [["PC:SC", 3]],
				description: desc([
					"My spirit guide gains 120 ft darkvision and can see through magical darkness."
				])
			},
			"subclassfeature3": {
				name: "Shamanic Archetype",
				source: [["PC:SC", 3]],
				minlevel: 3,
				description: desc([
					'Choose an archetype and put it in the "Class" field on the first page',
					"Choose either seer of forgiveness or seer of revenge"
				])
			},
			"spiritual defense": {
				name: "Spiritual Defense",
				source: [["PC:SC", 4]],
				description: desc([
					"The spirits around me offer aid by trying to protect me. I now have advantage on against being charmed or frightened."
				]),
				savetxt: {
					adv_vs: ["charmed", "frightened"]
				}
			},
			"one with the spirits": {
				name: "One With the Spirits",
				source: [["PC:SC", 4]],
				description: desc([
					"Instead of summoning my spirit guide I now become the animal and gain the benefits provided by the chosen animal. If the animal form provides a prof that I already have, it is now doubled."
				])
			},
			"spirit sight": {
				name: "Spirit Sight",
				source: [["PC:SC", 4]],
				description: desc([
					"My connection to the spirits is so powerful that I begin to see things beyond spirits. I am always under the effects of the True Seeing spell."
				])
			}
		}
	}
};

// Add sublcasses - SEer of Forgiveness & Seer of Revenge

AddSubClass("shaman", "seer of forgiveness", {
	regExpSearch: /^(?=.*seer)(?=.*forgiveness)(?=.*shaman)(?!.*druid).*$/i,
	subname: "Seer of Forgiveness",
	fullname: "Shaman: Seer of Forgiveness",
	source: [["PC:SC", 4]],
	features: {
		"subclassfeature3": {
			name: "Soothing Voices",
			source: [["PC:SC", 4]],
			minlevel: 3,
			description: desc([
				"As as action I can target on crea within 60 ft, if they fail a Wis save they are charmed by me or fear me for 1 hour.",
				"If the creature succeeds they are immune to this ability for 24 hours."
			]),
			action: [["action", " (charm or fear)"]],
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "long rest"
		},
		"subclassfeature3.1": {
			name: "Bonus Cantrip",
			source: [["PC:SC", 4]],
			minlevel: 3,
			description: desc([
				"I can choose an additional cantrip"
			]),
			spellcastingBonus: {
				name: "",
				"class": "shaman",
				level: [0, 0],
				times: 1,
				firstCol: 'atwill'
			}
		},
		"subclassfeature6": {
			name: "Sacrificial Spirit",
			source: [["PC:SC", 4]],
			minlevel: 6,
			description: desc([
				"Whenever I cast a spell I can choose a crea within 60 ft to be healed for an amount equal to the casted spell's level."
			])
		},
		"subclassfeature14": {
			name: "Echoed Words",
			source: [["PC:SC", 4]],
			minlevel: 14,
			description: desc([
				"Once per long rest I can dismiss my spirit guide and use their HP max to restore HP to willing crea within 60 ft of me. I can distributed these HP however I want."
			]),
			usages: 1,
			recovery: "long rest"
		}
	}
});
AddSubClass("shaman", "seer of revenge", {
	regExpSearch: /^(?=.*seer)(?=.*revenge)(?=.*shaman)(?!.*druid).*$/i,
	subname: "Seer of Revenge",
	fullname: "Shaman: Seer of Revenge",
	source: [["PC:SC", 4]],
	attacks: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features: {
		"subclassfeature3": {
			name: "Spiritual Rage",
			source: [["PC:SC", 4]],
			minlevel: 3,
			description: desc([
				"When I hit an enemy with a melee weapon attack I can choose to expend a spell slot to deal extra psychic damage to the target. The extra damage is 1d8 per spell slot level, max of 5d8."
			])
		},
		"subclassfeature3.1": {
			name : "Bonus Proficiencies",
			source : [["PC:SC", 4]],
			minlevel : 3,
			description : desc([
				"I become proficient wiht martial weapons"
			]),
			weaponProfs: [true, true]
		},
		"subclassfeature14": {
			name: "Spirit Shield",
			source: [["PC:SC", 4]],
			minlevel: 14,
			description: desc([
				"As a bonus action I can dismiss my spirit guide to gain temp HP. Once per turn when I hit a target I can gain temp HP equal to my Wis mod +Con mod that lasts for 10 min."
			]),
			action: ["bonus action", ""]
		}
	}
});

// Add Spirit Guide Animals
CreatureList["bear spirit guide"] = {
	name: "Bear Spirit Guide",
	source: [["PC:SC", 3]],
	header: "Spirit Guide",
	size: 3,
	type: "Fey",
	alignment: "Unaligned",
	ac: 14,
	hp: 5,
	hd: [1, 4],
	speed: "30 ft",
	scores: [10, 10, 12, 6, 14, 10],
	skills: {
		"athletics": 2
	},
	damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities: "necrotic, poison",
	condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
	languages: "can understand the languages it's master knows but cannot speak",
	proficiencyBonus: 0,
	challengeRating: "1",
	scores: [10, 10, 12, 6, 14, 10],
	senses: "Darkvision 60 ft",
	attacksAction: 1,
	attacks: [{
		name: "",
		ability: "",
		damage: ["", "", ""],
		range: "",
		description: ""
	}],
	features: [{
		name: "Innate Spellcasting",
		description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
	}],
	actions: [{
		name: "Psychic Link",
		description: "The spirit animal can communicate telepthically with it's master."
	}, {
		name: "Spirit Bond",
		description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
	}, {
		name: "Blink",
		minlevel: 1,
		description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
	}]
};
CreatureList["wolf spirit guide"] = {
	name: "Wolf Spirit Guide",
	source: [["PC:SC", 3]],
	header: "Spirit Guide",
	size: 3,
	type: "Fey",
	alignment: "Unaligned",
	ac: 15,
	hp: 5,
	hd: [1, 4],
	speed: "30 ft",
	scores: [10, 10, 12, 6, 14, 10],
	skills: {
		"perception": 2,
		"survival": 2
	},
	damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities: "necrotic, poison",
	condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
	languages: "can understand the languages it's master knows but cannot speak",
	proficiencyBonus: 0,
	challengeRating: "1",
	scores: [10, 10, 12, 6, 14, 10],
	senses: "Darkvision 60 ft",
	attacksAction: 1,
	attacks: [{
		name: "",
		ability: "",
		damage: ["", "", ""],
		range: "",
		description: ""
	}],
	features: [{
		name: "Innate Spellcasting",
		description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
	}],
	actions: [{
		name: "Psychic Link",
		description: "The spirit animal can communicate telepthically with it's master."
	}, {
		name: "Spirit Bond",
		description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
	}, {
		name: "Blink",
		minlevel: 1,
		description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
	}]
};
CreatureList["coyote spirit guide"] = {
	name: "Coyote Spirit Guide",
	source: [["PC:SC", 3]],
	header: "Spirit Guide",
	size: 3,
	type: "Fey",
	alignment: "Unaligned",
	ac: 15,
	hp: 5,
	hd: [1, 4],
	speed: "30 ft",
	scores: [10, 10, 12, 6, 14, 10],
	skills: {
		"perception": 2,
		"survival": 2
	},
	damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities: "necrotic, poison",
	condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
	languages: "can understand the languages it's master knows but cannot speak",
	proficiencyBonus: 0,
	challengeRating: "1",
	scores: [10, 10, 12, 6, 14, 10],
	senses: "Darkvision 60 ft",
	attacksAction: 1,
	attacks: [{
		name: "",
		ability: "",
		damage: ["", "", ""],
		range: "",
		description: ""
	}],
	features: [{
		name: "Innate Spellcasting",
		description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
	}],
	actions: [{
		name: "Psychic Link",
		description: "The spirit animal can communicate telepthically with it's master."
	}, {
		name: "Spirit Bond",
		description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
	}, {
		name: "Blink",
		minlevel: 1,
		description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
	}]
};
CreatureList["eagle spirit guide"] = {
	name: "Eagle Spirit Guide",
	source: [["PC:SC", 3]],
	header: "Spirit Guide",
	size: 4,
	type: "Celestial",
	alignment: "Unaligned",
	ac: 14,
	hp: 5,
	hd: [1, 4],
	speed: "30 ft, fly 60 ft",
	scores: [10, 10, 12, 6, 14, 10],
	damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities: "necrotic, poison",
	condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
	languages: "can understand the languages it's master knows but cannot speak",
	proficiencyBonus: 0,
	challengeRating: "1",
	scores: [10, 10, 12, 6, 14, 10],
	senses: "Darkvision 60 ft",
	attacksAction: 1,
	attacks: [{
		name: "",
		ability: "",
		damage: ["", "", ""],
		range: "",
		description: ""
	}],
	features: [{
		name: "Innate Spellcasting",
		description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
	}],
	actions: [{
		name: "Psychic Link",
		description: "The spirit animal can communicate telepthically with it's master."
	}, {
		name: "Spirit Bond",
		description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
	}, {
		name: "Blink",
		minlevel: 1,
		description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
	}],
	eval: function (prefix, lvl) {
		AddString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
	},
	removeeval: function (prefix, lvl) {
		RemoveString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
	},
};
CreatureList["owl spirit guide"] = {
	name: "Owl Spirit Guide",
	source: [["PC:SC", 3]],
	header: "Spirit Guide",
	size: 4,
	type: "Celestial",
	alignment: "Unaligned",
	ac: 14,
	hp: 5,
	hd: [1, 4],
	speed: "30 ft, fly 60 ft",
	scores: [10, 10, 12, 6, 14, 10],
	damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities: "necrotic, poison",
	condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
	languages: "can understand the languages it's master knows but cannot speak",
	proficiencyBonus: 0,
	challengeRating: "1",
	scores: [10, 10, 12, 6, 14, 10],
	senses: "Darkvision 60 ft",
	attacksAction: 1,
	attacks: [{
		name: "",
		ability: "",
		damage: ["", "", ""],
		range: "",
		description: ""
	}],
	features: [{
		name: "Innate Spellcasting",
		description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
	}],
	actions: [{
		name: "Psychic Link",
		description: "The spirit animal can communicate telepthically with it's master."
	}, {
		name: "Spirit Bond",
		description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
	}, {
		name: "Blink",
		minlevel: 1,
		description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
	}],
	eval: function (prefix, lvl) {
		AddString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
	},
	removeeval: function (prefix, lvl) {
		RemoveString(prefix + 'Cnote.Left', 'The spirit animal has advantage on Perception(Wis) checks relying on sight.', true);
	},
};
CreatureList["snake spirit guide"] = {
	name: "Snake Spirit Guide",
	source: [["PC:SC", 3]],
	header: "Spirit Guide",
	size: 2,
	type: "Fey",
	alignment: "Unaligned",
	ac: 13,
	hp: 5,
	hd: [1, 4],
	speed: "30 ft",
	scores: [10, 10, 12, 6, 14, 10],
	skills: {
		"stealth": 2
	},
	damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities: "necrotic, poison",
	condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
	languages: "can understand the languages it's master knows but cannot speak",
	proficiencyBonus: 0,
	challengeRating: "1",
	scores: [10, 10, 12, 6, 14, 10],
	senses: "Darkvision 60 ft",
	attacksAction: 1,
	attacks: [{
		name: "",
		ability: "",
		damage: ["", "", ""],
		range: "",
		description: ""
	}],
	features: [{
		name: "Innate Spellcasting",
		description: "The spirit animal's innate spellcasting ability is Wisdom (DC 12, +4 to hit with spell atk). It can cast Guidance at will, requiring no spell components."
	}],
	actions: [{
		name: "Psychic Link",
		description: "The spirit animal can communicate telepthically with it's master."
	}, {
		name: "Spirit Bond",
		description: "The spirit animal can add your prof bonus to any Dex or Wis saving throw it takes."
	}, {
		name: "Blink",
		minlevel: 1,
		description: "The spirit animal appears to evaporate, teleporting instantly to a location it can see within 10 ft of it before rematerializing."
	}],
	addMod: [
		{ type: "skill", field: "Init", mod: 5, text: "The snake has a +5 to initiative rolls." }
	],
	eval: function (prefix, lvl) {
		AddString(prefix + 'Cnote.Left', 'The sspirit animal has advantage on Stealth (Dex) checks.', true);
	},
	removeeval: function (prefix, lvl) {
		RemoveString(prefix + 'Cnote.Left', 'The sspirit animal has advantage on Stealth (Dex) checks.', true);
	},
};
