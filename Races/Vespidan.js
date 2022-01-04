/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Vespidan" and its 3 subraces
				This subrace has been made by u/nielspeterdejong over on /r/UnearthedArcana on Reddit (https://www.reddit.com/r/UnearthedArcana/comments/dwacom/vespidan_the_waspfey_player_race_spelling/)

	Code by:	Seneschal
	Date:		2019-11-15
*/

var iFileName = "Vespidan [Created by Nielspeterdejon, transcribed by Seneschal].js";
RequiredSheetVersion(13);

//SourceList
SourceList["NPD:V"] = {
    name : "/u/nielspeterdejong: Vespidan",
    abbreviation : "NPD:V",
    group : "Reddit/r/UnearthedArcana",
    url : "https://www.reddit.com/r/UnearthedArcana/comments/dwacom/vespidan_the_waspfey_player_race_spelling/",
    date : "2019/11/15",
    defaultExcluded : true
};

RaceList["vespidan drone"] = {
    regExpSearch : /^(?=.*vespidan)(?=.*drone).*$/i,
    name : "Vespidan Drone",
    sortname : "Vespidan, Drone",
    source : ["NPD:V", 4],
    size : 4,
    speed : {
        walk : { spd : 25, enc : 15 },
        climb : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", "Elvish"],
    armorOptions : {
        regExpSearch : /carapace/i,
        name : "Carapace",
        source : ["NPD:V", 4],
        ac : 11,
        addMod : true
    },
    armorAdd : "Carapace",
    scoretxt : "+1 Dexterity, +1 Intelligence, +1 Charisma",
    scores : [0, 1, 0, 1, 0, 1],
    skills : ["Persuasion"],
    age : "Vespidan Drones reach maturity at 12 and live up to 350 years",
    height : "Vespidan Drones reach a max height of 4 ft",
    trait : "Vespidan Drone (+1 Dexterity, +1 Intelligence, +1 Charisma)"+
    "\nMutltiarmed: I have two additional arms to interact with an additional object or feature for free on my turn. I can't carry or use an extra shield for defense or wield weapons with those extra arms."+
    "\nGliding Wings: When falling, I can use my reaction to be under the effects of feather fall. As long as I am 10 feet above the ground, I can fly 60 feet in any direction except up. If I am within 60 feet of the ground, I will land in the spot I finished my movement in. I can't glide while encumbered or wearing heavy armor."+
    "\nCarapace: I have a base AC of 11 + Dex Mod + Shield when not wearing armor. While wearing medium armor, my max Dex modifier is increased by 1."+
    "\nMagic Savant: After finishing a short or long rest, I can cast one of the following spells without expending a spell slot: Animal Friendship, Misty Step, Shield. Charisma is my spellcasting ability for these spells and I can cast it once per short or long rest."+
    "\nHarmonic Casting: When I cast a non-cantrip spell, a creature within 60 ft of me gains temp hp equal to the spell's level plus your proficiency bonus once per short or long rest."+
    "\nGregariouis: I am proficient in Persuasion. Giant Wasps I charm will actively protect and fight for you",
    spellcastingAbility : 6,
    features : {
        "magic savant" : {
            name : "Magic Savant",
            minlevel : 1,
            usages : 1,
            recovery : "short rest",
            spellcastingBonus : {
                name : "Magic Savant",
                spells : ["animal friendship", "shield", "misty step"],
                selection : ["animal friendship", "shield", "misty step"],
                oncesr : true
            },
        },
        "gliding wings" : {
            name : "Gliding Wing",
            minlevel : 1,
            action : ["reaction", ""]
        }
    }
};
RaceList["vespidan queen"] = {
    regExpSearch : /^(?=.*vespidan)(?=.*queen).*$/i,
    name : "Vespidan Queen",
    sortname : "Vespidan, Queen",
    source : ["NPD:V", 4],
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        climb : { spd : 20, enc : 10}
    },
    languageProfs : ["Common", "Elvish"],
    weaponsAdd : ["sting"],
    armorOptions : {
        regExpSearch : /carapace/i,
        name : "Carapace",
        source : ["NPD:V", 4],
        ac : 11,
        addMod : true
    },
    armorAdd : "Carapace",
    savetxt : {
        adv_vs : ["charmed"]
    },
    scoretxt : "+1 Strength, +1 Dexterity, +1 Wisdom or Charisma",
    scores : [1, 1, 0, 0, 0, 0],
    skills : ["Insight"],
    age : "Vespidan Queens reach maturity at age 12 and live as long as 750 years",
    height : "Vespidan Queens reach a max height of 6 ft",
    trait : "Vespidan Queen (+1 Strength, +1 Dexterity, +1 Wisdom or Charisma)"+
    "\nMutltiarmed: I have two additional arms to interact with an additional object or feature for free on my turn. I can't carry or use an extra shield for defense or wield weapons with those extra arms."+
    "\nGliding Wings: When falling, I can use my reaction to be under the effects of feather fall. As long as I am 10 feet above the ground, I can fly 60 feet in any direction except up. If I am within 60 feet of the ground, I will land in the spot I finished my movement in. I can't glide while encumbered or wearing heavy armor."+
    "\nCarapace: I have a base AC of 11 + Dex Mod + Shield when not wearing armor. While wearing medium armor, my max Dex modifier is increased by 1."+
    "\nInspiring Queen: I can use the Help action as a bonus action a number equal to my proficiency bonus per short or long rest. At level 3, this range increases to 30ft from 5ft. If they already have advantange, they add half my proficiency bonus (rounded up) to the attack roll and damage roll instead."+
    "\nSting: I use a natural weapon to deal 1d4 + Strength mod piercing damage and poison damage on a save"+
    "\nInsightful Queen: I am proficient in Insight and have advantage on saves to avoid being charmed",
    features : {
        "gliding wings" : {
            name : "Gliding Wing",
            minlevel : 1,
            action : ["reaction", ""]
        },
        "inspiring queen" : {
            name : "Inspiring Queen",
            minlevel : 1,
            action : ["bonus action", " (Help)"],
            usagescalc : "event.value = Math.max(1, What('Prof'));",
            recovery : "short rest"
        }
    }
};
RaceList["vespidan worker"] = {
    regExpSearch : /^(?=.*vespidan)(?=.*worker).*$/i,
    name : "Vespidan Worker",
    sortname: "Vespidan, Worker",
    source : ["NPD:V", 4],
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20},
        climb : { spd : 20, enc : 10}
    },
    languageProfs : ["Common", "Elvish"],
    toolProfs : [["Tool Proficiency", 1]],
    weaponsAdd : ["sting"],
    armorOptions : {
        regExpSearch : /carapace/i,
        name : "Carapace",
        source : ["NPD:V", 4],
        ac : 11,
        addMod : true
    },
    armorAdd : "Carapace",
    scoretxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
    scores : [0, 1, 1, 0, 1, 0],
    trait : "Vespidan Worker (+1 Dexterity, +1 Constitution, +1 Wisdom)"+
    "\nMutltiarmed: I have two additional arms to interact with an additional object or feature for free on my turn. I can't carry or use an extra shield for defense or wield weapons with those extra arms."+
    "\nGliding Wings: When falling, I can use my reaction to be under the effects of feather fall. As long as I am 10 feet above the ground, I can fly 60 feet in any direction except up. If I am within 60 feet of the ground, I will land in the spot I finished my movement in. I can't glide while encumbered or wearing heavy armor."+
    "\nCarapace: I have a base AC of 11 + Dex Mod + Shield when not wearing armor. While wearing medium armor, my max Dex modifier is increased by 1."+
    "\nSwarm Tatics: I have advantage on an attack roll against a creature if at least one ally is within 5 feet of the creature and isn't incapacitated. I can only benefit once per turn."+
    "\nSting: I use a natural weapon to deal 1d4 + Strength mod piercing damage and poison damage on a save"+
    "\nTalented Builder: I am proficient in one tool and learn new Tool Proficiencies in 100 days instead of the standard 250",
    features : {
        "gliding wings" : {
            name : "Gliding Wing",
            minlevel : 1,
            action : ["reaction", ""]
        },
    }
};
WeaponsList["sting"] = {
    regExpSearch : /sting/i,
    name : "Sting",
    source : ["NPD:V", 4],
    ability : 1,
    type : "Natural",
    damage : [1, 4, "piercing"],
    abilitytodamage: true,
    range : "Melee",
    list : "melee",
    description : "Can inject Venom on hit once per long rest; Target takes 2d6 poison damage and rolls Con save (10 + Prof + Str); Is poisoned on failure until start of my next turn; 3d6 at 5th, 4d6 at 10th, 5d6 at 15th, 6d6 at 20th"
};

FeatsList["gifted queen"] = {
    name : "Gifted Queen",
    source : ["NPD:V", 5],
    description : "My sting is a finesse weapon and paralyzes instead of poisons. I gain 1 + Cha mod (min 1) Inspire Points. I can use them to make a creature attack after I attack, make a creature move up to its speed after I dash, or make a creature dodge after I dodge.",
    descriptionFull : "Your Sting now also counts as a Finesse weapon weapon, and those who fail its Poison DC now suffer the Paralyzed condition instead of the Poisoned condition for its duration. You gain \"Inspire Points\" equal to 1 + your Charisma modifier (minimum of 1). You regain any expended uses when you finish a long rest. You may spend an Inspire Point to benefit from one of the following 3 effects: After you make " +
    "an attack, you can immediately enable one creature within 60 feet of you to use its reaction to make one weapon attack. After you take the Dash action, you can immediately enable one creature within 60 feet of you to use its reaction to move up to its speed. After you take the Dodge action, you can immediately enable one creature within 60 feet of you to use its reaction to gain the benefits of the Dodge action until the start of your next turn. You gain an additional Inspire point at levels 6, 11, and 16.",
    prerequisite : "Vespidan Queen",
    prereqeval : function() {
        return CurrentRace.known.indexOf('vespidan queen') !== -1;
    },
    improvements : "Gifted Queen (feat): +1 Charimsa",
    scores : [0, 0, 0, 0, 0, 1],
    limfeaname : "Inspire Points",
    action : ["action", " (after Attack/Dash/Dodge)"],
    usagescalc : levels.map(function(n){
        return What('Cha Mod') + (n < 6 ? 1 : n < 11 ? 2 : n < 16 ? 3 : 4);
    }),
    recovery : "long rest",
    calcChanges : {
        atkCalc : [
            function (fields, v) {
                if (/sting/i.test(v.WeaponTextName)) {
                    fields.Description = "Finesse; Can inject Venom on hit once per long rest; Target takes 2d6 poison damage and rolls Con save (10 + Prof + Str); Is paralyzed on failure until start of my next turn; 3d6 at 5th, 4d6 at 10th, 5d6 at 15th, 6d6 at 20th";
                };
            }
        ]
    }
};
FeatsList["gifted drone"] = {
    name : "Gifted Drone",
    source : ["NPD:V", 5],
    description : "I add double my proficiency bonus to Persuasion and can cast message to any intelligent creature or beast (regardless of language). My antenna is the material component. When I use harmonic casting, I gain half temp points (rounded up) to ally and it doesn't count as casting on myself.",
    descriptionFull : "You may add double your proficiency bonus to your Persuasion checks. In addition you know the message cantrip, can communicate with it to any intelligent creature (regardless of language) or beast, and you may use your antenna as the material component of the spell. When you use your Harmonic Casting ability to grant an ally temporary hit points, you gain half as many temporary hit points (rounded up). When you gain temporary hit points in this manner, it does not count as using the Harmonic Casting trait on yourself.",
    prerequisite : "Vesipdan Drone",
    improvements : "Gifted Drone (feat) +1 Intelligence or Charisma",
    prereqeval : function() {
        return CurrentRace.known.indexOf('vespidan drone') !== -1;
    },
    skills : [["Persuasion", "only"]],
    spellcastingBonus : [{
        spells : ["message"],
        name : "Gifted Drone",
        selection : ["message"],
        spellcastingAbility : 6,
        times : 1,
        atwill : true
    }]
};
FeatsList["gifted worker"] = {
    name : "Gifted Worker",
    source : ["NPD:V", 5],
    descriptionFull : "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. Your Sting now also counts as a Finesse weapon, and those who fail its poison DC now suffer the Paralyzed condition instead of the Poisoned condition for its duration. Whenever you gain the benefits of the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1).",
    description : "I count as one size larger for determining carrying capacity and push/drag/life. My sting is a finesse weapon and paralyzes instead of poisons. When I dodge in combat, I can spend a hit die to regain roll of hit die + con mod (min 1).",
    prerequisite : "Vespidan Worker",
    prereqeval : function() {
        return CurrentRace.known.indexOf('vespidan worker') !== -1;
    },
    improvements : "Gifted Worker (feat) +1 Strength or Constitution",
    carryingCapacity : 2,
    calcChanges : {
        atkCalc : [
            function (fields, v) {
                if (/sting/i.test(v.WeaponTextName)) {
                    fields.Description = "Finesse; Can inject Venom on hit once per long rest; Target takes 2d6 poison damage and rolls Con save (10 + Prof + Str); Is paralyzed on failure until start of my next turn; 3d6 at 5th, 4d6 at 10th, 5d6 at 15th, 6d6 at 20th";
                };
            }
        ]
    }
};

FeatsList["winds of calistra"] = {
    name : "Winds of Calistra",
    source : ["NPD:V", 5],
    descriptionFull : "You gain a flying speed of 30 feet. To use this speed, you can’t be wearing heavy armor. Allies within 30 feet of you who have the Gliding Wings trait, or a similar feature, gain a flying speed of 30 feet until the end of their next turn.",
    description : "I gain a flying speed of 30 feet if I am not wearing 30 feet. Allies within 30 feet who have the Gliding Wings trait or a similar feature get a flying speed of 30 feet until the end of their next turn.",
    prerequisite : "Vespidan",
    prereqeval : function() {
        return CurrentRace.known.indexOf('vespidan') !== -1;
    },
    speed : { fly :  { spd : 30 , enc : 0 }}
}
