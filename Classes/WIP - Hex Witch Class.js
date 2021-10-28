/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Hex Witch Class
	Effect:     Add the Hex Witch Class
	Content:	The class of the Hex Witch (v1.1.5) by Dump Stat Adventures found here: https://www.gmbinder.com/share/-Lz-_rNijZNaMv3BpwVQ
	Code by:	rayvenwilk
	Date:		2021-10-26 (sheet 13.0.6)
*/

var iFileName = "Hex Witch By Dump Stat Adventures(transcribed_by_rayvenwilk).js";

SourceList["DSA"] = {
	name : "Dump Stat Adventures",
	abbreviation : "DSA",
	group : "Homebrew",
	url : "https://www.gmbinder.com/share/-Lz-_rNijZNaMv3BpwVQ",
};

[	// cantrips
	"chill touch", "control flames", "create bonfire", "dancing lights", "guidance", "infestation", "light", "prestidigitation", "poison spray", "thorn whip", "toll the dead",

	// 1st Level
	"bane", "cause fear", "charm person", "detect evil and good", "detect magic", "detect poison and disease", "disguise self", "faerie fire", "feather fall", "hex", "identify", "inflict wounds", "ray of sickness", "sleep", "softwood", "unseen servant", "witch bolt",

	// 2nd Level
	"alter self", "animal messenger", "augury", "blindness/deafness", "darkness", "enhance ability", "heat metal", "hold person", "insect spies", "invisibility", "levitate", "locate animals or plants", "moonbeam", "protection from poison", "ray of enfeeblement", "see invisibility", "silence", "spider climb", "web",

	// 3rd Level
    "bestow curse", "blink", "clairvoyance", "counterspell", "dispell magic", "enemies abound", "fear", "feign death", "fly", "gaseous form", "glyph of warding", "leomund's tiny hut", "lightning bolt", "magic circle", "remove curse", "sending", "speak with dead", "summon lesser deamons", "turn to frogs", "vampiric touch",

    // 4th Level
    "banishment", "blight", "bone dance", "compulsion", "confusion", "conjure minor elementals", "conjure woodland beings", "divination", "giant insect", "greater invisibility", "locate creature", "polymorph", "sickening radiance", "summon greater demon",

    // 5th Level
    "animate objects", "awaken", "cloudkill", "conjure elemental", "contact other plane", "contagion", "dream", "geas", "infernal calling", "insect plague", "legend lore", "modify memory", "planar binding", "scrying", "skill empowerment", "teleportation circle",

    // 6th Level
    "chain lightning", "circle of death", "conjure fey", "eyebite", "find the path", "guards and wards", "scatter", "soul cage", "true seeing",

    // 7th Level
    "etherealness", "finger of death", "mordenkainen's magnificent mansion", "plane shift", "power word pain", "symbol", "teleport",

    // 8th Level
    "abi-dalzim's horrid wilting", "antipathy/sympathy", "demiplane", "feeblemind", "power word stun", "sunburst",

    // 9th Level
    "astral projection", "foresight", "gate", "mass polymorph", "power word kill", "time stop"
].forEach( function (s) {
	if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("hex witch") === -1) SpellsList[s].classes.push("hex witch");
});

ClassList["hex witch"] = {
	name : "Hex Witch",
	regExpSearch : /^(?=.*hex)(?=.*witch).*$/i,
	source : [["DSA", 1]],
	primaryAbility : "\n \u2022 Hex Witch: Constitution and Intelligence",
	prereqs : "Intelligence 13",
    improvements :  levels.map( function(n) {
		return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
	}),
	die : 6,
    saves : ["Con", "Int"],
    skills : ["\n\n" + toUni("Hex Witch") + ":Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion."],
    armor : [
        [false, false, false, false]
    ],
    weapons : [
        [false, false, ["blowgun", "dagger", "dart", "light crossbow", "quarterstaff", "sling"]]
    ],
    equipment : "Hex Witch starting equipment:\n \u2022 A quarterstaff, -or- a dagger; \n \u2022 A component pouch, -or- an witch's focus;\n \u2022 A light crossbow and 20 bolts and an explorer's pack.",
    subclasses : ["Dark Coven", []],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellcastingFactor : "hex witch",
	spellcastingKnown : {
		spells : "list",
	},
    abilitySave : 4,
    features : {
        "hexes" : {
            name : "Hexes",
            source : [["DSA", 4]],
            minlevel : 1,
            description : "\n   " + 'Use the "Choose Feature" button above to add a Hex to the third page' + "\n   " + "Whenever I gain a hex witch level, I can replace a hex I know with another.",
            additional : levels.map(function (n) {
				return n < 1 ? "" : (n < 2 ? 1 : n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : n < 20 ? 6 : 7) + " known";
            }),
            extraname : "Hexes",
            extrachoices : ["Cackle", "Commune with Spirits (prereq: Coven of Spirits, Coven of the Forest)", "Evil Eye", "Familiar Rituals", "Fiendish Appendage (prereq: Coven of Devils)", "Good Fortune", "Lodestone", "Misfortune", "Rabbit's Foot", "Rotting Wound", "Poisoned Heart", "Twist of Fate", "Warded", "Witch's Familiar"],
            extraTimes : levels.map(function (n) {
                return n < 1 ? 1 : n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : n < 20 ? 6 : 7;
            }),
            "cackle" : {
                name : "Cackle",
                source : [["DSA", 9]],
                description : "\n   As a bonus action, you can expend a 1st-level spell slot and cackle maddeningly and all creatures within 30 feet who can hear you take a 1d4 penalty on their saving throws against your hexes until the start of your next turn. If a creature can't hear you or is immune to being charmed, this hex has no effect on them. If you expend a spell slot of 2nd level or higher, the range increases by 10 feet for each slot level above 1st.",
            },
            "commune with spirits (prereq: coven of spirits, coven of the forest)" : {
                name : "Commune with Spirits",
                source : [["DSA", 10]],
                description : "\n   You invoke the spirits and gain proficiency with any skill that requires Charisma, Intelligence or Wisdom. You can invoke a different spirit over the course of a long rest to change the skill to another.",
            },
            "evil eye" : {
                name : "Evil Eye",
                source : [["DSA", 10]],
                description : "\n   As an action, you can glare at a creature within 30 feet of you, and if they can see you, you place a powerful hex on them. Choose one of the following features: Ability Checks, Armor Class, Attack Rolls, Damage Rolls, or Saving Throws. The targeted creature must succeed on a Wisdom saving throw or they take a penalty to the feature you chose equal to half your Proficiency bonus (rounded down). This penalty lasts for 1 minute, or if they succeeded on their saving throw, until the end of their next turn. They can repeat the saving throw at the end of each of their turns, ending the effect on a success. \n   This ability has no effect if a creature can't be charmed. You can only target a creature once per day with this ability and you can use this feature a number of times equal to your Intelligence modifier, regaining all spent uses on a long rest.",
                action : ["action", ""],
                usages : "Intelligence modifier per",
                usagescalc : "event.value = Math.max(1, What('Int Mod'));",
                recovery : "long rest",
            },
            "familiar rituals" : {
                name : "Familiar Rituals (prerequisite: Witches Familiar hex",
                source : [["DSA", 10]],
                description : "\n   Your familiar becomes a way for you to store certain spells into them. Over the course of a short rest, you can feed a spell scroll containing a witch's spell, and is a ritual, to your familiar. They then consume the scroll, destroying it, and they learn the spell. You can then cast that spell as a ritual so long as you have this hex active and your familiar stays within 5 feet of you over the course of casting the spell. You must be able to cast the same level spells as that spell in order to feed it to your familiar. \n   If you lose this hex, you lose any ritual spells stored in your familiar. If you later gain this hex again, you must re-feed your familiar any lost ritual spell scrolls before you can use them again.",
                prereqeval : function (v) { return GetFeatureChoice('class', 'hex witch', 'hexes') == 'Witches Familiar'; },
            },
            "fiendish appendage (prereq: coven of devils)" : {
                name : "Fiendish Appendage",
                source : [["DSA", 10]],
                description : "\n   As a bonus action, you can transform your arm into a horrifying limb, it appears as if it is blackened by fire and ends in twisting claws. On the same turn you summoned it, and on subsequent turns as a bonus action, you can hurl magical flames at a creature of your choice that is within 30 feet of you. Make a ranged spell attack, on a hit you deal fire damage equal to a number d6s equal to half your proficiency bonus (rounded down). \n   You can make this attack a number of times equal to your Intelligence modifier, regaining all spent uses on a long rest. Your arm only returns to normal after you use have used all available uses or after you finish a long rest.",
                action : ["bonus action", ""],
                usages : "Intelligence modifier per",
                usagescalc : "event.value = Math.max(1, What('Int Mod'));",
                recovery : "long rest",
            },
            "good fortune" : {
                name : "Good Fortune",
                source : [["DSA", 10]],
                description : "\n   As a bonus action, you can expend a 1st level spell slot or higher and bestow good fortune on the tasks of others. You touch a creature and they have advantage on all ability checks, attack rolls and saving throws until the end of their next turn. A creature can only benefit from this once per day. If a creature is immune to being charmed, they are not affected by this ability.",
                action : ["bonus action", ""],
            },
            "lodestone" : {
                name : "Lodestone",
                source : [["DSA", 10]],
                description : "\n   As an action, you choose a target within 30 feet of you and you begin weighing their muscles down with supernatural forces. They must succeed on a Strength saving throw or become encumbered and their speed decreases by 10 feet. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is heavily encumbered and their speed is reduced by 20 feet and they have disadvantage on ability checks, attack rolls, and saving throws that use Strength, Dexterity, or Constitution. This effect lasts for a minute and the creature can repeat the saving throw at the end of their turn, ending it on a success. Once you used this ability, you must finish a short or long rest to use it again.",
                action : ["bonus action", ""],
                usages : 1,
                recover : "short rest",
            },
            "misfortune" : {
                name : "Misfortune",
                source : [["DSA", 10]],
                description : "\n   As an action, you can expend a 1st level spell slot or higher and make an unholy sign and target a creature within 30 feet of you. That creature must succeed on a Charisma saving throw or they have disadvantage on all ability checks, attack rolls and saving throws until the end of their next turn. A creature can only be targeted by this effect once a day. On a successful save, they suffer disadvantage on their next ability check, attack roll or saving throw only. If a creature is immune to being charmed, they are not affected by this ability.",
            },
            "rabbit's foot" : {
                name : "Rabbit's Foot",
                source : [["DSA", 10]],
                description : "\n   As an action, you can touch a creature and expend a 1st level spell slot and bestow on them the blessing of the rabbit. Their speed is doubled and their movement does not provoke Attacks of Opportunity, this effect lasts until the end of their next turn. If you expend a spell slot of 2nd level or higher, the effect lasts for a number of additional rounds for each slot level above 1st.",
            },
            "rotting wound" : {
                name : "Rotting Wound",
                source : [["DSA", 11]],
                description : "\n   As a reaction when a creature is struck by an attack you can see, and you are able to touch them, you can reach out and expend a 1st level spell slot and send necrotic energies into their wound causing it to rot. The creature must make a Constitution saving throw, on a failed save their wound begins festering. At the start of their turn, they take 1d8 necrotic damage. This effect lasts until the end of their next turn. If you expend a spell slot of 2nd level or higher, the effect lasts for a number of additional rounds for each slot level above 1st. This effect can be ended early by casting lesser restoration or by a similar spell or effect that removes disease.",
            },
            "poisoned heart" : {
                name : "Poisoned Heart",
                source : [["DSA", 11]],
                description : "\n   As an action, you can expend a 1st level spell slot and wrap poison around the heart of your foe, targeting a creature within 30 feet of you. They must succeed on a Constitution saving throw or they have disadvantage on their first attack roll each round as the poison begins seeping into their heart. On a success, the effect ends immediately. If a creature is immune to being poisoned, they automatically succeed on the saving throw and nothing happens. This poison lasts for 1 minutes and the targeted creature can repeat their save at the end of each of their turns, ending the effect on a success. If you expend a spell slot of 2nd level or higher, the target suffers poison damage when this hex is first cast equal to a number of d6s for each slot level above 1st. On a successful save, they take half damage.",
            },
            "twist of fate" : {
                name : "Twist of Fate",
                source : [["DSA", 11]],
                description : "\n   When you see an ally within 30 feet of you is struck by an Attack of Opportunity you can see, you can use your reaction to force the enemy to reroll the attack roll, they must then use that second roll. If the creature still hits, your ally gains resistance to that damage. Once you use this feature, you must wait until you finish a long rest to use it again.",
                action : ["reaction", ""],
                usages : 1,
                recovery : "long rest",
            },
            "warded" : {
                name : "Warded",
                source : [["DSA", 11]],
                description : "\n   As an action, you can expend a 1st level spell slot and touch one creature, warding them from harm for the next hour. While they are warded, you are aware of where they are and their emotional state so long as they stay within 1 mile of you. The next time the creature takes damage in the next hour, the ward explodes around them and they gain a number of temporary hit points equal to your proficiency bonus, which takes as much of the triggering damage as possible. Once the ward is activated, you can no longer locate them or sense their emotions. If you expend a spell slot of 2nd level or higher, the target gains additional temporary hit points equal to your proficiency bonus times the level of the spell slot. You can only have one ward active at a time, if you attempt to ward a second creature, the first ward dissipates and the warded creature gains no benefits from it.",
            },

/* need help with adding the familiar stats -
AC adds character Int mod - how do I do that?
HP based on character info and no hd listed - how do I do that?
Character gets bonuses based on familiar picked - how/where do I add that?
Attack mod is based on character spell attack mod - how do I do that?
*/
            "witch's familiar" : {
                name : "Witch's Familiar",
                source : [["DSA", 11]],
                description : "\n   You gain the aid of a familiar that helps you unlock the secrets of your power. The familiar is bound to you and will obey all your commands. In combat, the familiar shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you use a bonus action on your turn to command it to take an action in its stat block or the Dash, Disengage, Help, Hide or Search action. If your familiar dies, you can perform a special ritual over the course of a long rest, regrowing their bodies and inviting their spirit back.",
                action : ["bonus action", " (attack)"]
/* Way too many questions on this
                extraname : "Witch's Familiar",
                extrachoices : ["Celestial Fox", "Celestial Imp", "Celestial Sprite", "Celestial Toad"],
                "celestial fox" : {
                    creaturesAdd : [["Celestial Fox"]],
                    creatureOptions : [{
                        name : "Celestial Fox",
                        companion : "Familiar",
                        source : ["DSA", 11],
                        size : 3,
                        type : "Celestial",
                        alignment : "Neutral",
                        ac : 10, // plus character Int Mod
                        hp : 1, // + character Int mod + character level in this class
                        hd : [],
                        hdLinked : [], // what do I put here?
                        speed : "30 ft",
                        scores : [10, 12, 12, 2, 12, 5],
                        saves : // not sure what to put here
                        damage_resistances : "radiant",
                        condition_immunities : "charmed, frightened"
                        passivePerception : 11,
                        languages : "understands the languages of its creator",
                        challengeRating : // not listed
                        proficiencyBonus : 2,
                        attacksAction : 1,
                        attacks : [{
                            name : "Slam",
                            ability : "not sure"
                            damage : [1, 6, Bludgeoning] 
                            modifiers : ["Character Spell attack mod", "max(oInt|0"] // how do I script the spell atk mod? Is the damage part correct?
                            range: "Melee (5 ft)",
                            description : "", 
                            abilitytodamage: // not sure what to put here
                        }],
                    }]
                }
*/
            },
        },
        "subclassfeature3" : {
            name : "Dark Coven",
            source : [["DSA", 4]],
            minlevel : 3,
            description : "Choose a Hex Witch Coven and put it in the \"Class\" field" + "Choose either Devils, Dreams, Forest, Graves, or Spirits",
        },
        "major hex" : {
            name : "Major Hex",
            source : [["DSA", 4]],
            minlevel : 9,
            description : "\n   " + 'Use the "Choose Feature" button above to add a Major Hex to the third page' + "\n   " + "Whenever I gain a hex witch level, I can replace a hex I know with another.",
            additional : levels.map(function (n) { return n < 9 ? "" : (n < 13 ? 1 : 2)
            }),
            extraname : "Major Hexes",
            extrachoices : ["Agony", "Blessing of Mother Night (prereq: level 13)", "Chaos Link", "Devil's Sight", "Fade away", "Hag's Eye", "Hex Bag", "Improved Evil Eye (prereq: Evil Eye hex)", "Improved Familiar", "Improved Ward (prereq: Ward hex)", "Summon Locusts"],
            extraTimes : levels.map(function (n)  {
                return n < 9 ? 0 : n < 13 ? 1 : 2;
            }),
            "agony" : {
                name : "Agony",
                source : [["DSA", 12]],
                description : "\n   As an action, you can expend a 5th level spell slot or higher and target a creature within 30 feet of you and twist their innards. They must succeed on a Constitution saving throw or become wracked with pain and they suffer one level of exhaustion. On subsequent turns, you can continue to use your action to twist their guts and they must continue to make Strength saving throws, suffering additional levels of exhaustion on a failed save. On a successful save, the creature loses all levels of exhaustion and is no longer affected by this hex. A creature immune to being charmed automatically succeeds on this saving throw. If you do not use your action on this ability on subsequent turns, the target can repeat their saving throw at the end of their turn.",
            },
            "blessing of mother night (prereq: level 13)" : {
                name : "Blessing of Mother Night",
                source : [["DSA", 12]],
                description : "\n   You become shielded from divination magic as if you are under the protection of a nondetection spell.",
                prereqeval : function(v) { return classes.known['hex witch'].level >= 13; },
            },
            "chaos link" : {
                name : "Chaos Link",
                source : [["DSA", 12]],
                description : "\n   As an action, you choose a creature within 30 feet of you and attempt to tie their fate to yours. They must succeed on a Charisma saving throw. On a failed save when you take damage, you can use your reaction to expend a 1st level spell slot or higher and take half damage and they take the remaining half damage. This effect lasts for 1 minute and they can repeat the save every time they take damage in this manner. On subsequent turns, you must continue to use your reaction when you take damage and expend a spell slot in order to make them take half the damage. You can use this feature once per short or long rest.",
                action : ["action", ""],
                usages : 1,
                recovery : "short rest",
            },
            "devil's sight" : {
                name : "Devil's Sight",
                source : [["DSA", 12]],
                description : "\n   You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.",
                vision : [["Darkvision", 120]],
            },
            "fade away" : {
                name : "Fade Away",
                source : [["DSA", 12]],
                description : "\n   As a bonus action, you can fade into the Ethereal Plane for 1 minute. You can return to the Material Plane as a bonus action on a subsequent turn or return back to the Ethereal Plane. If you are still on the Ethereal Plane after 1 minute, you return to the Material Plane. If you are inside of an object, like a wall or statue, you are deposited at the nearest empty location you can occupy, taking force damage equal to twice the number of feet you are moved. After you use this ability, you must wait until you finish a long rest to use it again.",
                action : ["bonus action", ""],
                usages : 1,
                recovery : "short rest",
            },
            "hag's eye" : {
                name : "Hag's Eye",
                source : [["DSA", 12]],
                description : "\n   As an action, you can remove one of your eyes. You can be up to 1 mile away from your eye and still be able to see through it as if you were there. You can look through this eye for 1 hour, at that point it dissolves into a white goo and you grow a new eye in your eye socket. Your eye has a 5 foot walk speed, though it can only roll along the ground and has no ability to climb stairs or roll up moderate to steep inclines, per DM's discretion. If the eye is targeted by an attack or must make a saving throw or ability check, it uses your statistics. Any effect on the eye, effects you as well as any damage it takes, you take. You can use this feature once per day.",
                action : ["action", ""],
                usages : 1,
                recovery : "daily",
            },
            "hex bag" : {
                name : "Hex Bag",
                source : [["DSA", 12]],
                description : "\n   Over the course of a short rest, you can create a hex bag and place it somewhere. Later, as an action and so long as you are within 1 mile of the hex bag, you can choose one of the following effects (see notes page), you can not change the effect once you activate it and the effects end early if the hex bag is destroyed. If a creature is within range of the hex bag for one hour the creature must make a saving throw.",
                toNotesPage : [{
                    name : "Hex Bag",
                    note : "\n   As an action and so long as you are within 1 mile of the hex bag, you can choose one of the following effects: \n  \u2022The creature must succeed on a Constitution saving throw or become poisoned. \n  \u2022The creature must succeed on a Charisma saving throw or they are unable to gain the effects of a long rest and they suffer a level of exhaustion. \n  \u2022The creature must succeed on a Wisdom saving throw or become frightened of a number of creatures of your choice equal to your Intelligence modifier and is known to you and the target. If multiple creatures are affected by your hex bag, they are frightened of the same creatures. \n  \u2022You can only have one created hex bag at a time and you need 5 gp worth of special flowers, bones and inks. A creature that is immune to being charmed automatically succeeds on their saving throw. A creature can repeat the saving throw after 24 hours of being under the effects of the hex bag, once a creature succeed they are immune to that hex bag. A hex bag and its effects last for a number of days equal to your proficiency bonus.",
                    page3notes : true,
                    popupName : "Hex Bag",
                    source : [["DSA", 12]],
                }]
            },
// is there a calc to change the long rest to short rest?            
            "improved evil eye (prereq: evil eye hex)" : {
                name : "Improved Evil Eye",
                source : [["DSA", 13]],
                description : "\n   You regain all uses of your Evil Eye hex on a short or long rest and you can target creatures within 60 feet of you with this hex.",
                prereqeval : function (v) { return GetFeatureChoice('class', 'hex witch', 'hexes') == 'Evil Eye'; },
            },
// will definitely need help with this one - calc            
            "improved familiar" : {
                name : "Improved Familiar",
                source : [["DSA", 13]],
                description : "\n   Your Witch Familiar supernaturally grows more powerful and now gains an additional number of Hit Points equal to your witch level times two. Additionally, it no longer needs your bonus action to take the Attack action and its damage increases from 1d6 to 1d8. Also, if your familiar dies, you can choose to expend a spell slot of 3rd level or higher to resurrect them with all their hit points after 1 minute instead of over the course of a long rest.",
            },
            "improved ward (prereq: ward hex)" : {
                name : "Improved Ward",
                source : [["DSA", 13]],
                description : "\n   Your wards have grown in power and while a creature is warded by you, you are aware of their location while they are within 10 miles of you and can talk to them telepathically while they remain within that range. When your ward is activated, all creatures of the warded creature's choice within 10 feet of them must succeed on a Constitution saving throw or take force damage equal to the number of Temporary Hit Points the warded creature gains. They take half damage on a successful save.",
            },
            "summon locusts" : {
                name : "Summon Locusts",
                source : [["DSA", 13]],
                description : "\n   As an action, you can summon a swarm of insects to coalesce at a point of your choice within 30 feet. The swarm acts as your ally and remains until you dismiss it as an action, they fall to 0 hit points, you take a short or long rest, you fall unconscious or you summon another swarm using this feature. You can use this ability a number of times equal to your Intelligence modifier, regaining all spent uses on a long rest.",
                action : ["action", ""],
                usages : "Intelligence modifier per",
                usagescalc : "event.value = Math.max(1, What('Int Mod'));",
                recovery : "long rest",
            },
        },
        "grand hex" : {
            name : "Grand Hex",
            source : [["DSA", 4]],
            minlevel : 17,
            description : "\n   " + 'Use the "Choose Feature" button above to add a Grand Hex to the third page' + "\n   " + "Whenever I gain a hex witch level, I can replace a hex I know with another.",
            extraTimes : [1],
            extraname : "Major Hexes",
            extrachoices : ["Black Night", "Curse of the Therianthrope", "Flight", "Greater Familiar (prereq: Improved Familiar Hex)", "Waxen Form", "Witch's Hut", "Witch Sight"],
            "black night" : {
                name : "Black Night",
                source : [["DSA", 13]],
                description : "\n   You can target a creature within 60 feet of you and they must succeed on a Wisdom saving throw or become permanently blind or deaf, your choice. A greater restoration or wish spell is required to remove this condition. You can use this feature once per long rest.",
                action : ["action", ""],
                usages : 1,
                recovery : "long rest",
            },
            "curse of the therianthrope" : {
                name : "Curse of the Therianthrope",
                source : [["DSA", 13]],
                description : "\n   You have undergone the curses of therianthropy and as an action, you can morph into a were-creature (see notes page).",
                action : ["action", ""],
                usages : 1,
                recovery : "long rest",
                toNotesPage : [{
                    name : "Curse of the Therianthrope",
                    note : "\n   Choose one of the following shapes when you change. This form lasts for 1 hour or until you are knocked unconscious. Once you use this ability, you must wait until you take a long rest before you can use it again. \n   Bear: Your Constitution increases to 19 and if an attack knocks you to 0 hit points, you are instead reduced to 1 hit point, you can use this feature once per long rest. If your Constitution score is higher, this change has no effect. \n   Rat: Your Dexterity increases to 19 and you gain expertise in the Stealth skill, even if you are not proficient in it normally. If your Dexterity score is higher, this change has no effect. \n   Wolf: Your Strength increases to 19 and you gain a claw attack that you are proficient with and that you can use twice when you take the Attack action and deals 2d8 slashing damage on a hit. You have advantage on all melee attacks if your target is within 5 feet of an ally. If your Strength score is higher, this change has no effect. \n   While in this form, you gain immunity to all non-magical bludgeoning, piercing and slashing weapon attacks unless it is silvered. If the remove curse spell is cast on you while you are in this form, you must succeed on a Wisdom saving throw against the caster's spell save DC or this form ends early. You can still cast spells and hexes like normal while in this new hybrid form.",
                    page3notes : true,
                    popupName : "Curse of the Therianthrope",
                }],
            },
// Is there a way to calc this?            
            "flight" : {
                name : "Flight",
                source : [["DSA", 13]],
                description : "\n   You gain a fly speed equal to twice your walking speed",
            },
// HP calc help            
            "greater familiar (prereq: improved familiar hex)" : {
                name : "Greater Familiar (prereq: improved familiar hex)",
                source : [["DSA", 13]],
                description : "\n   Your Witch Familiar has grown far more powerful and now gains an additional number of Hit Points equal to your witch level times three. Additionally, you can cast your hexes through your familiar as if you were standing in its location and you can take a reaction that when you, or the familiar, takes damage you can split the damage in half between you and the familiar.",
                prereqeval : function (v) { return GetFeatureChoice('class', 'hex witch', 'hexes') == 'Improved Familiar'; },

            },         
            "waxen form" : {
                name : "Waxen Form",
                source : [["DSA", 14]],
                description : "\n   As an action, you create a crude and disturbing waxen doll of a creature you can see within 60 feet of you. They must succeed on a Charisma saving throw, or you gain a modicum of control over them. On subsequent turns, you can use an action to cause one of the following effects (see notes page). This waxen doll is destroyed after a hour, or you use the doll a number of times equal to your Intelligence modifier. A target can repeat the saving throw after every time the doll is used.",
                action : ["action", ""],
                usages : 1,
                recovery : "long rest",
                toNotesPage : [{
                    name : "Waxen Form",
                    note : "\n   As an action, you create a crude and disturbing waxen doll of a creature you can see within 60 feet of you. They must succeed on a Charisma saving throw, or you gain a modicum of control over them. On subsequent turns, you can use an action to cause one of the following effects (see notes page). This waxen doll is destroyed after a hour, or you use the doll a number of times equal to your Intelligence modifier. A target can repeat the saving throw after every time the doll is used. \n   Attack Self: You cause the target to strike itself with a weapon it is wielding. This attack automatically hits. \n   Attack Other: You cause the target to strike another creature within their range. Make a melee spell attack against the creature's AC, on a success the target hits the creature. \n   Drop Equipment: You cause the target to drop everything it is holding. \n   Forced Movement. You cause the target to walk up to its speed in a direction of your choice, if it can fly you can cause it to take off and fly or stop its wings from moving, plummeting it to the ground. \n   Pain. You can rip at the waxen figure, causing great tides of pain to course through the creature. You deal 6d10 necrotic damage to the figure, they can make a Constitution saving throw to take half. \n   You can use this feature once per long rest and you need 5gp worth of special wax per use of this feature. A creature that is immune to being charmed automatically succeeds on their saving throw.",
                    page3notes : true,
                    popupName : "Waxen Form",
                    source : [["DSA", 14]],
                }]
            },
            "witch's hut" : {
                name : "Witch's Hut",
                source : [["DSA", 14]],
                description : "(see notes page)",
                toNotesPage : [{
                    name : "Witch's Hut",
                    note : "\n   Over the course of 10 minutes, you can animate a hut, tent, wagon, or similar object that is no greater than 15 feet on any side. This is as if you had cast the animate objects spell on the object, no concentration required. The hut gains an additional number of hit points equal to your witch's level and it gains the ability to attack twice if it takes the Attack action. This animated hut remains animated so long as you have this hex and only ends early if the animated hut is reduced to 0 hit points or if you animate another hut using this ability. If the animated hut is reduced to 0 hit points, the hut is completely destroyed and can not be targeted by this ability again. \n   When you animate a hut, it does not gain a fly speed, but rather grows a set of appropriate legs of your choice to allow it to walk around. This could be massive tree roots, chicken legs or undead skeletons that carry the hut. Any entrances to enter the hut are under the effects of an arcane lock spell while the hut is animated, you set the password when you use this ability.",
                    page3notes : true,
                    popupName : "Witch's Hut",
                    source : [["DSA", 14]],
                }]
            },
            "witch sight" : {
                name : "Witch Sight",
                source : [["DSA", 14]],
                description : "You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.",
            }
        },
        "cruel fate" : {
            name : "Cruel Fate",
            source : [["DSA", 4]],
            minlevel : 20,
            description : "If a creature succeeds on a saving throw against one of my hexes, I can use my reaction to immediately force them to reroll the saving throw, they must use the second result. I can use this feature a number of times equal to my Intelligence modifier, regaining all spent uses on a long rest.",
            usages : "Intelligence modifier per",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            action : ["reaction", ""],
        },
    },
},

// Add the subclasses
AddSubClass("hex witch", "coven of devils", {
    regExpSearch : /^(?=.*hex)(?=.*witch)(?=.*devils).*$/i,
    subname : "Coven of Devils",
    fullname : "Hex Witch (Coven of Devils)",
    source : [["DSA", 5]],
    features : {
        "subclassfeature3" : {
            name : "The Devil's Tongue",
            source : [["DSA", 5]],
            minlevel : 3,
            description : "\n   I learn the language of Devils, I can speak, read and write Infernal.",
            spellcastingExtra : ["aganazzar's scorcher", "scorching ray", "fireball", "protection from energy", "ice storm", "wall of fire", "cloudkill", "cone of cold"],
            languageProfs : "Infernal",
        },
        "subclassfeature3.1" : {
            name : "Devilish Curse",
            source : [["DSA", 5]],
            minlevel : 3,
            description : "\n   Whenever I place a hex on a creature, and the hex requires a saving throw, I can choose to deal an additional 1d6 fire or cold damage (my choice). If they save against the hex, they only take half damage. If I place a Major Hex on a creature, the damage increases to 2d6, and increases to 3d6 for a Grand Hex. \n   This damage only happens once per hex casted and I can deal this additional damage a number of times equal to my Int mod.",
        },
        "subclassfeature6" : {
            name : "Deliverance of Souls",
            source : [["DSA", 5]],
            minlevel : 6,
            description : "\n   If I knock a creature to 0 Hit Points I can use my reaction to cause demonic flames to swirl around their body, turning it, and any flammable items on them, to ash. I gain a number of Temporary Hit Points equal to the creature's number of Hit Dice. I can use this feature once per short or long rest. \n   This has no effect on Undead or Constructs, though I gain twice as many Temporary Hit Points if they are celestial. This ability can not be used on any summoned or conjured creatures.",
            action : ["reaction", ""],
            usages : 1,
            usagescalc : "short rest",
        },
        "subclassfeature14" : {
            name : "Devilish Power",
            source : [["DSA", 5]],
            minlevel : 14,
            description : "\n   When you cast a witch spell that is between 1st- and 5th-level and deals fire or cold damage, you can choose to reroll the damage. You can use either roll. Once you use this ability, you must wait until you finish a short or long rest to use it again.",
            usages : 1,
            usagescalc : "short rest",
        }
    }
}),
AddSubClass("hex witch", "coven of dreams", {
    regExpSearch : /^(?=.*hex)(?=.*witch)(?=.*dreams).*$/i,
    subname : "Coven of Dreams",
    fullname : "Hex Witch (Coven of Dreams)",
    source : [["DSA", 5]],
    features : {
        "subclassfeature3" : {
            name : "Constant Dreamer",
            source : [["DSA", 5]],
            minlevel : 3,
            description : "\n   I know the sleep spell and it doesn't count against the number of spells known.",
            spellcastingExtra : ["sleep", "suggestion", "zone of truth", "feign death", "hypnotic pattern", "confusion", "hallucinatory terrain", "dream", "seeming"],
        },
        "subclassfeature3.1" : {
            name : "Fitful Dreams",
            source : [["DSA", 5]],
            minlevel : 3,
            description : "\n   I can enter a trance like state and invade the Plane of Dreams, allowing I to enter the dreams of a creature I are familiar with. I gain some minor insight on their motives and desires and have advantage on any Charisma checks to interact with them during the next 24 hours. I can only visit the dreams of one creature each night, and I do not gain any new information about them, but rather a general sense of their desires and motivations. \n   I can not enter the dreams of a creature who doesn't sleep or dream, like an elf, kalashtar or warforged, or if they are under the effects of a mindblank spell or similar. I can only enter the creature's dreams if they are currently asleep and I have some familiarity with them, like I have met them or observed them. This trance like state lasts for 10 minutes and the creature must be asleep for the full 10 minutes for I to gain this insight.",
        },
        "subclassfeature6" : {
            name : "Restful Dreams",
            source : [["DSA", 5]],
            minlevel : 6,
            description : "\n   I can no longer be forced to fall asleep against my will and I have advantage on Investigation checks when perceiving or seeing through illusions. Furthermore, when I finish a long rest, I regain all my spent Hit Dice instead of only half my level.",
        },
        "subclassfeature14" : {
            name : "Waking Dreams",
            source : [["DSA", 6]],
            minlevel : 14,
            description : " (see notes page)",
            toNotesPage : [{
                name : "Waking Dreams",
                note : "\n   I can draw on the Plane of Dreams and cause the worst nightmares of a creature to spring forth in front of them. I target a creature within 60 feet of I and they must succeed on a Wisdom saving throw or find their worst nightmare standing before them, causing them to be frightened of it. I can decide where this nightmare appears and mentally move it up to 30 feet in a direction of my choice as a bonus action, it must remain within 120 feet of I. While this nightmare is active, I can use my action to perform one of two actions: \n   It grows more horrible and frightening and the target suffers 6d10 psychic damage as the nightmare cripples their mind. \n   I can ask the nightmare to reveal a dark and true secret of the creature it is haunting, per the DM's discretion. \n   After I use my action to command it to take one of those actions, the nightmare dissipates into nothing. If I use neither option, the nightmare remains for 1 minute or dissipates immediately if the target creature dies. Once I use this feature, I must finish a long rest before I can use it again. \n   The nightmare created by this feature reflects what truly horrifies and scares the target creature, though if a creature is under the effects of a mindblank spell or is immune to the frightened condition, the targeted creature automatically succeeds on the saving throw.",
                page3notes : true,
                popupName : "Waking Dreams",
                source : [["DSA", 6]],
            }],
        }
    }
}),
AddSubClass("hex witch", "coven of the forest", {
    regExpSearch : /^(?=.*hex)(?=.*witch)(?=.*forest).*$/i,
    subname : "Coven of the Forest",
    fullname : "Hex Witch (Coven of the Forest)",
    source : [["DSA", 6]],
    features : {
        "subclassfeature3" : {
            name : "Natural Armor",
            source : [["DSA", 6]],
            minlevel : 3,
            description : "\n   My body begins taking on traits of the forest. I might grow hard bark, grow great tufts of fur, gain a coating of slippery moss or any other traits of the forest of my choice. Whatever form the protection takes, my AC equal 13 + my Dexterity modifier while not wearing armor.",
            spellcastingExtra : ["animal messenger", "pass without trace", "conjure animals", "speak with plants", "conjure woodland beings", "freedom of movement", "awaken", "commune with nature"],
            extraAC : [{
                mod : 3,
                stopeval : function (v) { return v.wearingArmor; }
            }],
        },
        "subclassfeature3.1" : {
            name : "Natural Instincts",
            source : [["DSA", 7]],
            minlevel : 3,
            description : "\n   I gain proficiency in my choice of two of the following skills: Animal Handling, Insight, Medicine, Perception, or Survival. My proficiency bonus is doubled for any ability I make that uses either of those skills.",
            skillstxt : "Choose two from Animal Handling, Insight, Medicine, Perception, or Survival",
        },
        "subclassfeature6" : {
            name : "Beastly Nature",
            source : [["DSA", 7]],
            minlevel : 6,
            description : "\n   As a bonus action, I can force my body to morph and shape to become more like that of a beast. This transformation lasts for 1 minute, and once I use it, I must wait until I finish a short or long rest to use it again.",
            action : ["bonus action", ""],
            usages : 1,
            recovery : "short rest",
            extraTimes : [1],
            extraname : "Beastly Nature",
            extrachoices : ["Wolf", "Porcupine", "Bat", "Frog", "Spider"],
            "wolf" : {
                name : "Wolf",
                source : [["DSA", 7]],
                description : "\n   My fingers twist into vicious claws and I become proficient with unarmed strikes and they have the finesse property. When I take the Attack action, I can attack twice instead of once with my claws. On a hit, My unarmed strikes deal 1d10 slashing damage.",
                weaponsAdd : ["Claws"],
                weaponOptions : {
                    baseWeapon : "unarmed strike",
                    regExpSearch : /claws/i,
                    name : "Claws",
                    damage : [1, 10, "slashing"],
                },
            },
            "porcupine" : {
                name : "Porcupine",
                source : [["DSA", 7]],
                description : "\n   I grow hollow needles across my skin like that of a porcupine and when a creature touches me or hits me with a melee attack while within 5 feet of me, it takes 1d6 piercing damage.",
            },
            "bat" : {
                name : "Bat",
                source : [["DSA", 7]],
                description : "\n   My ears grow double their size and I gain blindsight to a range of 60 feet. If I am deafened, I lose my blindsight.",
                vision : [["Blindsight", 60]],
            },                
            "frog" : {
                name : "Frog",
                source : [["DSA", 7]],
                description : "\n   I grow webbed hands and feet and I gain a swim speed equal to my walk speed.",
                speed : { swim : { spd : "walk", enc : "walk"} },
            },
            "spider" : {
                name : "Spider",
                source : [["DSA", 7]],
                description : "\n   I sprout small hairs across the palm of my hands and I gain a climb speed equal to my walk speed. I must always keep one hand on the climbing surface in order to not fall.",
                speed : { climb : { spd : "walk", enc : "walk"} },
            },
        },      
        "subclassfeature14" : {
            name : "Forest Nature",
            source : [["DSA", 7]],
            minlevel : 14,
            description : " (see notes page)",
            action : ["bonus action", " (command)"],
            usages : 1,
            recovery : "long rest",
            toNotesPage : {
                name : "Forest Nature",
                note : "\n   Over the course of 10 minutes in a location with twigs, trees, shrugs or similar terrain, you can summon forth up to 4 Twig Blights, 2 Needle Blights or 1 Vine Blight. \n   On each of your turns, you can use a bonus action to mentally command your blights so long as they are within 60 feet of you, giving the same command to each of them. You decide what action the blights will take and where they will move during their next turn, or you can issue a general command, such as to guard a particular location. If you issue no commands, the blights only defend themselves against hostile creatures. Once given an order, the blights continue to follow it until their task is complete. \n   The blights are under your control until you finish a long rest, after which they crumple into twigs, vines and other natural debris. Once you use this feature, you can't use it again until you finish a long rest.",
                page3notes : true,
                popupName : "Forest Nature"
            },
            extraTimes : [1],
            extraname : "Forest Nature",
            extrachoices : ["Twig Blight", "Needle Blight", "Vine Blight"],
            "twig blight" : {
                name : "Twig Blights",
                source : [["DSA", 7]],
                description : "I summon 4 Twig Blights",
                creaturesAdd : ["Twig Blight"],
                creatureOptions : {
                    name : "Twig Blight",
	                source : ["M", 32],
	                size : 4, //Small
	                type : "Plant",
	                alignment : "Neutral Evil",
	                ac : 13,
	                hp : 4,
	                hd : [1, 6], //[#, die]
	                speed : "20 ft",
	                scores : [6, 13, 12, 4, 8, 3], //[Str, Dex, Con, Int, Wis, Cha]
	                damage_vulnerabilities : "fire",
	                condition_immunities : "blinded, deafened",
	                senses : "Blindsight 60 ft (blind beyond this radius).",
	                passivePerception : 9,
	                languages : "understands Common but can't speak",
	                challengeRating : "1/8",
	                proficiencyBonus : 2,
	                attacksAction : 1,
	                attacks : [{
			                name : "Claws",
			                ability : 2,
			                damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			                range : "Melee (5 ft)",
			                description : ""
		            }],
	                traits : [{
			            name : "False Appearance",
			            description : "While the blight remains motionless, it is indistinguishable from a dead shrub."
		            }
	                ],
                },
            },
            "needle blight" : {
                name : "Needle Blights",
                source : [["DSA", 7]],
                description : "I summon 2 Needle Blights",
                creaturesAdd : ["Needle Blight"],
                creatureOptions : {
                    name : "Needle Blight",
	                source : ["M", 32],
	                size : 3, //Medium
                	type : "Plant",
                	alignment : "Neutral Evil",
                	ac : 12,
                	hp : 11,
                	hd : [2, 8], //[#, die]
                	speed : "30 ft",
                	scores : [12, 12, 13, 4, 8, 3], //[Str, Dex, Con, Int, Wis, Cha]
                	condition_immunities : "blinded, deafened",
                	senses : "Blindsight 60 ft (blind beyond this radius).",
                	passivePerception : 9,
                	languages : "understands Common but can't speak",
                	challengeRating : "1/4",
                	proficiencyBonus : 2,
                	attacksAction : 1,
                	attacks : [{
			            name : "Claws",
			            ability : 2,
			            damage : [2, 4, "piercing"], //[#, die, type] "" for die is allowed
			            range : "Melee (5 ft)",
			            description : ""
		            }, {
			            name : "Needles",
			            ability : 2,
			            damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			            range : "30/60 ft",
			            description : ""
		            }],
                },
            },
            "vine blight" : {
                name : "Vine Blight",
                source : [["DSA", 7]],
                description : "I summon 1 Vine Blight",
                creaturesAdd : ["Vine Blight"],
                creatureOptions : {
                    name : "Vine Blight",
                	source : ["M", 32],
                	size : 3, //Medium
                	type : "Plant",
                	alignment : "Neutral Evil",
                	ac : 12,
                	hp : 26,
                	hd : [4, 8], //[#, die]
                	speed : "10 ft",
                	scores : [15, 8, 14, 5, 10, 3], //[Str, Dex, Con, Int, Wis, Cha]
                	skills : {
                		"stealth" : 1
                	},
                	condition_immunities : "blinded, deafened",
                	senses : "Blindsight 60 ft (blind beyond this radius).",
                	passivePerception : 9,
                	languages : "Common",
                	challengeRating : "1/2",
                	proficiencyBonus : 2,
                	attacksAction : 1,
                	attacks : [{
            			name : "Constrict",
            			ability : 1,
            			damage : [2, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
            			range : "Melee (10 ft)",
            			description : "Large or smaller target is grappled and restrained (escape DC 12); Can't use constrict again until grapple ends"
            		}],
                	traits : [{
            			name : "False Appearance",
            			description : "While the blight remains motionless, it is indistinguishable from a tangle of vines."
            		}],
                	actions : [{
        			    name : "Entangling Plants (Recharge 5-6)",
        			    description : "As an action, grasping roots and vines sprout in a 15-ft radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing it self or another entangled creature within reach on a success."
	            	}],
	                wildshapeString : "Blindsight 60 ft (blind beyond)| Immune to blinded, deafened| Entangling Plants (Recharge 5-6): As an action, 15-ft radius is difficult terrain for nonplant creatures, for 1 minute. Chosen creatures in it must make a DC 12 Str save or become restrained. A creature can use its action to make a DC 12 Str check to free itself or another within reach| False Appearance: While motionless, it's indistinguishable from a tangle of vines."
                },
            },
        },    
    },
}),
AddSubClass("hex witch", "coven of graves", {
    regExpSearch : /^(?=.*hex)(?=.*witch)(?=.*graves).*$/i,
    subname : "Coven of Graves",
    fullname : "Hex Witch (Coven of Graves)",
    source : [["DSA", 7]],
    features : {
        "subclassfeature3" : {
            name : "Necrotic Awareness",
            source : [["DSA", 7]],
            minlevel : 3,
            description : "\n   As an action, I can attune to the Shadowfell and detect such entities. Until the end of my next turn, I know if there are any undead or any dead bodies within 120 feet. If I do detect undead, I do not know the specific creature type (like zombie or death knight) but, I can detect if an undead has a higher Challenge Rating than my Witch level. \n   I can't use this feature again until I finish a short or long rest.",
            action : ["action", ""],
            usages : 1,
            recovery : "short rest",
            spellcastingExtra : ["gentle repose", "ray of enfeeblement", "animate dead", "speak with dead", "blight", "death ward", "danse macabre", "negative energy flood"],
        },
        "subclassfeature3.1" : {
            name : "Death Becomes Us",
            source : [["DSA", 8]],
            minlevel : 3,
            description : "\n   I learn the spare the dying cantrip, which doesn’t count against the number of witch cantrips I know. \n   When I cast it, I can give a number of my hit points to the unconscious creature up to my Witch level. I can not reduce my own hit points below 0, and a creature can not gain more hit points than the number of hit points I am able to give.",
            spellcastingExtra : ["spare the dying"],
        },
        "subclassfeature6" : {
            name : "Shadow Step",
            source : [["DSA", 8]],
            minlevel : 6,
            description : "\n   I can move through the shadows as if I were on the Shadowfell. As an bonus action on my turn, I push my physical body into the Shadowfell while keeping my spirit in the Material Plane. I can move up to twice my speed without provoking attacks of opportunity, once I finish my movement my physical body returns to the Material Plane. \n   Once I use this feature, I must wait until I finish a short or long rest to use it again.",
            action : ["bonus action", ""],
        },
        "subclassfeature14" : {
            name : "Deathly Hands",
            source : [["DSA", 8]],
            minlevel : 14,
            description : " (see notes page)",
            toNotesPage : {
                name : "Deathly Hands",
                note : "\n   I can pluck at the strands of death and create servants to assist me. As an action, I can target a humanoid corpse within 10 feet of me and cause the corpse's hands to transform into Crawling Claws. If the corpse has more than two hands, it only turns two of them into claws, if the corpse has less than two hands, it turns any available hands into claws but can not make the claws out of nothing. \n   Whenever I create a Crawling Claw, I can have up to two at a time, and they are under my control until I use this feature again or they are reduced to 0 hit points. In combat, they share my initiative count, but they take their turn immediately after me. They can move and use their reaction on their own, but the only action they take on their turn is the Dodge action, unless I take a bonus action on my turn to command them to take one of the actions in its stat block or the Dash, Disengage, Help, Hide, or Search action. \n   If I have multiple claws under my control, they follow the same orders or I can specify that an individual claw should follow my order while the other does nothing. \n   In addition, a created claw gains these additional benefits: \n   The claw gains a number of temporary hit points equal to half my witch level. \n   The claw adds my proficiency bonus to its claw attack and damage rolls. \n   The claw can cast spare the dying, this destroys the claw. \n   I can't use this feature again until I finish a long rest.",
                page3notes : true,
                popupName : "Deathly Hands",
                source : [["DSA", 8]],
            },
        },
    },
}),
AddSubClass("hex witch", "coven of spirits", {
    regExpSearch : /^(?=.*hex)(?=.*witch)(?=.*spirits|ghosts).*$/i,
    subname : "Coven of Spirits",
    fullname : "Hex Witch (Coven of Spirits)",
    source : [["DSA", 9]],
    features : {
        "subclassfeature3" : {
            name : "Healing Touch",
            source : [["DSA", 9]],
            minlevel : 3,
            description : "\n   I know the cure wounds spell, this does not count against the number of spells known and is a witch spell for me.",
            spellcastingExtra : ["cure wounds", "healing spirit", "spiritual weapon", "animate dead", "mass healing word", "death ward", "guardian of faith", "commune", "mass cure wounds"],
        },
        "subclassfeature3.1" : {
            name : "Protective Spirits",
            source : [["DSA", 9]],
            minlevel : 3,
            description : "\n   When a creature I can see takes damage, I can use my reaction and roll a d6. The targeted creature gains a number of Temporary Hit Points equal to the roll, which takes as much of the triggering damage as possible. \n   I can use this feature a number of times equal to my Intelligence modifier, regaining spent uses on a long rest.",
            usages : "Intelligence modifier per",
            usagescalc : "event.value = Math.max(1, What('Int Mod'));",
            recovery : "long rest",
            action : ["reaction", ""],
        },
        "subclassfeature6" : {
            name : "Brave Spirit",
            source : [["DSA", 9]],
            minlevel : 6,
            description : "\n   I have advantage on saving throws against being charmed or frightened. \n   Furthermore, if an ally is charmed or frightened, and I can touch them, I can use a bonus action to infuse them with the spirits of valor. The next time they make their saving throw against the effect, they make it with advantage. \n   Once I use this ability, I must wait until I finish a short or long rest to use it again.",
            savetxt : {
                adv_vs : ["charmed", "frightened"],
            },
            action : ["bonus action", ""],
            usages : 1,
            recovery : "short rest",
        },
        "subclassfeature14" : {
            name : "Warrior Spirit",
            source : [["DSA", 9]],
            minlevel : 14,
            description : " (see notes page)",
            toNotesPage : {
                name : "Warrior Spirit",
                note : "I can summon the spirits around me and channel them into a creature of my choice that I can touch. When I do so, the creature is fortified by the spirits and gains the following benefits: \n   They are immune to being charmed or frightened. \n   At the start of each of their turns, they gain a number of temporary hit points equal to half my Witch level. \n   When they make an ability check or attack roll on their turn, they can roll a 1d6 and add it to the total. They must do this before they know whether they succeed or fail, and they can only use this feature once per turn. \n   If they fall unconscious, they gain advantage on death saving throws. \n   These spirits reside in the target for 1 minute, offering their advice and strength. Once I use this ability, I must wait until I finish a long rest to use it again.",
                page3notes : true,
                popupName : "Warrior Spirit",
                source : [["DSA", 9]],
            }
        }
    },
}),

// New spells
SpellsList["softwood"] = {
    name : "Softwood",
    classes : ["hex witch", "witch"],
    source : [["DSA", 15]],
    ritual : false,
    level : 1,
    school : "Trans",
    time : "1 a",
    range : "60ft",
    components : "V,S,M",
    compMaterial : "a wood chip and a drop of water",
    duration : "Conc, 1 min",
    description : "Wooden object no more than 6lbs, becomes soft & limp. If wielded, the object provides no benefit & deals no dmg.",
    descriptionFull : "Choose a wooden object that is no more than 6 lbs, such as a quarterstaff or a bow or a wooden shield, that you can see within range. You cause the object to become soft and limp. Until the spells ends, this object is extremely weak and has no integrity. \n   If a creature is wielding the object, it provides no benefit and deals no damage if used as a weapon. If the object is an important piece of a structure or vehicle, like a cart wheel, it might break or cause structural damage (at the DM's discretion). The wooden object then stiffens back to its original form, if it is able to, at the end of the spell."
},
SpellsList["insect spies"] = {
    name : "Insect Spies",
    classes : ["hex witch", "witch"],
    source : [["DSA", 15]],
    ritual : false,
    level : 2,
    school : "Div",
    time : "1 a",
    range : "30ft",
    components : "V,S,M",
    compMaterial : "a wing of a fly",
    duration : "Conc, 1 hr",
    description : "You summon insect spirits. Command telepathically w/ bonus a. It can not respond.",
    descriptionFull : "You summon insect spirits and they manifest as a tiny bug, like a beetle, that has limited intelligence. While you can see the insect and they are within 30 feet of you, you can command them telepathically, issuing orders as a bonus action. It can not respond to you. \n   This insect can travel up to 20 feet a round and makes an unassuming spy, though it is limited by its intelligence. While it is in physical contact with you, it can answer simple questions through the telepathic connection, it is limited by its intelligence and can offer limited information it was able to perceive. As an action, you can sense their specific distance and direction they are from you. \n   An insect spy can answer that a room has two creatures, though it has no ability to identify them. It can also describe a room with food and that it was very loud, which you could take to mean it is a feast hall. It has no ability to repeat speech and can not read. \n   The insect uses the Swarm of Insects (Wasps) statblock with these changes: it is a single tiny beast, 1 hit point, lacks the Swarm feature, and has no bite attack." + AtHigherLevels + "When you cast this spell using certain higher-level spell slots, you can summon additional beetles: two with a 4th-level slot, three with a 6th-level slot, and four with a 8th-level slot. You can, on separate rounds, give each beetle it's own command that it must follow."
},
SpellsList["turn to frogs"] = {
    name : "Turn to Frogs",
    classes : ["hex witch", "witch"],
    source : [["DSA", 15]],
    ritual : false,
    level : 3,
    school : "Trans",
    time : "1 a",
    range : "60ft",
    components : "V,S,M",
    compMaterial : "a frog leg",
    duration : "Conc, 1 hr",
    save : "Wis",
    description : "Unwilling crea, Wis save to avoid turning into a frog",
    descriptionFull : "This spell transforms a creature that you can see within range into a frog, the DM has the creatures' statistics. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points. \n   The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The target's game statistics, including mental ability scores, are replaced by the statistics of the frog. It retains its alignment and personality. \n   The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. \n   The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech. \n   The target's gear melds into the new form. The frog can't activate, use, wield, or otherwise benefit from any of its equipment."
},
SpellsList["bone dance"] = {
    name : "Bone Dance",
    classes : ["hex witch", "witch"],
    source : [["DSA", 15]],
    ritual : false,
    level : 4,
    school : "Necro",
    time : "1 a",
    range : "30ft",
    components : "V,S,M",
    compMaterial : "a humerus bone",
    duration : "Conc, 1 min",
    save : "Con",
    description : "Crea w/in range, Con save, fail 3d10 bludg dmg & is restrained, half if save.",
    descriptionFull : "You reach out and target a creature within range, grabbing their bones and causing them crippling pain. The target must make a Constitution saving throw. On a failed save, it takes 3d10 bludgeoning damage and the target is restrained. On a successful save, the creature takes only half damage. A creature can repeat the saving throw at the end of their turn, ending the spell on a success. \n   While the creature is restrained by this spell, you can use your bonus action on subsequent turns to continue to crush their bones and deal 3d10 bludgeoning damage to the target. \n   If you target a creature that is undead, instead of dealing damage, you can instead force them to move up to their movement to a location of your choice. If the target is ever outside of the spell's range, the spell ends. \n   Constructs and oozes automatically succeed on the saving throw." + AtHigherLevels + " When you cast this spell using a spell slot of 4th level or higher, the number of creatures you can target with this spell increases by 1 for each slot level above 3rd."
}
